<template>
  <div>
    <el-input v-model="filter" placeholder="名前・特性・技で検索" style="margin-bottom:10px;width: calc( 100vw - 10px);">
      <el-popover placement="bottom" slot="append">
        <el-tree :data="orbFilter" accordion @node-click="handleNodeClick" />
        <el-button icon="el-icon-search" slot="reference"></el-button>
      </el-popover>
    </el-input>
    <el-table :data="orb" stripe height="calc(100vh - 128px)" class="orblist">
      <el-table-column sortable prop="name" label="名前 / 装備制限 / レア / 種族" width="240" header-align="center" fixed>
        <template slot-scope="scope">
          <div>
            <img :src="'./image/' + scope.row.requirement + '.png'" style="width:20px;border-radius:50%;vertical-align:middle;display:inline-block;margin-right:5px;" />
            <div style="display:inline-block">{{scope.row.name}}</div>
          </div>
          <div style="font-size:0.8em;color:gray;display:inline-block">{{scope.row.rarelity+'（' + scope.row.type + '）'}}</div>
        </template>
      </el-table-column>
      <el-table-column sortable prop="passive" label="特性 / 技" align="left" min-width="360">
        <template slot-scope="scope">
          <div>{{'特性：' + scope.row.passive}}</div>
          <div>
            <strong>{{scope.row.active}}</strong>
            {{scope.row.active_detail}}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="passive" label="入手" align="left" max-width="360">
        <template slot-scope="scope">
          <div>{{drop[scope.row.name]}}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import orb from '@/data/orb';
import drop from '@/data/drop';
import orbFilter from '@/data/orbFilter';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private drop = drop;
  private orbFilter = orbFilter;
  private filter = '';
  private all = orb();
  private orb: any[] = [];
  private classFilter = [
    { text: 'ラッシュ', value: 'ラッシュ' },
    { text: 'カウンター', value: 'カウンター' },
    { text: 'バースト', value: 'バースト' }
  ];
  private rareFilter = [
    { text: 'N', value: 'N' },
    { text: 'R', value: 'R' },
    { text: 'SR', value: 'SR' },
    { text: 'SSR', value: 'SSR' },
    { text: 'EX', value: 'EX' }
  ];

  private mounted() {
    this.orb = this.all;
  }

  @Watch('filter')
  private filterChanged() {
    if (this.filter && this.filter.trim() !== '') {
      const filters = this.filter.split(/[ 　]+/);

      if (filters.length > 0) {
        this.orb = this.all.filter(
          a =>
            filters.filter(
              f =>
                a.name.indexOf(f) > -1 ||
                a.passive.indexOf(f) > -1 ||
                a.active.indexOf(f) > -1
            ).length > 0
        );
        return;
      }
    }

    this.orb = this.all;
  }

  private handleNodeClick(clickeditem: any) {
    if (!clickeditem.children) {
      this.filter = clickeditem.label;
    }
  }
}
</script>

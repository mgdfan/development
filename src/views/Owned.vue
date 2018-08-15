<template>
  <el-container>
    <el-header style="position:sticky;top:0;background:white;z-index:100;box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.5);padding:10px 25px;">
      <span style="float:left;font-weight:bold;font-size:1.2em;">
        所有数
        <span style="font-size:2em;">{{megidos.length + '/' + all.length}}</span>
      </span>
      <el-button style="float:right;margin-left:24px;" class="el-icon-close" @click="() => {megidos = []}" />
      <el-dropdown style="float:right;" @command="selectHaifu">
        <el-button v-html="'配布'" type="primary" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="type in ['ストーリー配布', '不死者', 'イベント配布']" :key="type" :command="type">{{type + 'を選択'}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-main style="background:rgba(240,240,240,0.5);padding: 0 0 150px 0;">
      <div v-for="title in ['ファイター', 'トルーパー', 'スナイパー']" :key="title">
        <h3>{{title}}</h3>
        <el-checkbox-group v-model="megidos">
          <el-popover :disabled="true" placement="top" width="240" trigger="hover" v-for="megido in source(title)" :key="megido.no" offset="10">
            <el-table :data="Object.keys(megido)" :show-header="false" class="megidoinfotable">
              <el-table-column width="80">
                <template slot-scope="scope">
                  <span>{{scope.row}}</span>
                </template>
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <span>{{megido[scope.row]}}</span>
                </template>
              </el-table-column>
            </el-table>
            <el-checkbox-button slot="reference" :class="'megido-check ' + megido.style" :label="megido.name">
              <img :src="'./image/'+megido.name+'.png'" class="image">
              <div style="padding-top:5px" v-html="megido.name" />
            </el-checkbox-button>
          </el-popover>
        </el-checkbox-group>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import megido from '../data/megido';

@Component({})
export default class extends Vue {
  private megidos: any[] = [];
  private all = megido;

  private source(title: string) {
    return megido
      .filter(m => m.class === title)
      .sort((a, b) => (a.style + b.name > b.style + b.name ? 1 : -1));
  }

  private selectHaifu(type: string) {
    megido
      .filter(m => m.type === type && this.megidos.indexOf(m.name) < 0)
      .forEach(m => this.megidos.push(m.name));
  }
}
</script>

<style>
.megido-check .el-checkbox-button__inner {
  padding: 5px 0;
  width: 100px;
  margin: 2px;
  font-weight: bold;
  border-radius: 5px !important;
  font-size: 11px;
}
.megido-check .el-checkbox-button__inner img {
  width: 60px;
  border-radius: 50%;
}
.カウンター {
  color: #ca7946;
}
.バースト {
  color: rgb(8, 163, 184);
}
.ラッシュ {
  color: rgb(65, 65, 65);
}
.megidoinfotable td {
  padding: 0 !important;
}
</style>



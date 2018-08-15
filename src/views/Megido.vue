<template>
  <div class="root">
    <el-table :data="megido" stripe height="calc(100vh - 78px)" class="megidolist">
      <el-table-column prop="name" align="center" width="96" fixed="left">
        <template slot-scope="scope">
          <img :src="'./image/' + scope.row.name + '.png'" style="width:64px;border-radius:50%;vertical-align:middle;" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="プロフィール" align="center" width="180px">
        <template slot-scope="scope">
          <small class="mr1">{{scope.row.no}}</small>
          <el-tooltip content="メギド72攻略Wikiのページに飛びます">
            <a target="x" :href="'https://megido72wiki.com/index.php?'+scope.row.name">
              <strong>{{scope.row.name}}</strong>
            </a>
          </el-tooltip>
          <div>
            <small class="mr1">{{scope.row.gender}}</small>
            <small>{{'Vo:'+scope.row.voice}}</small>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="class" label="種類" width="120" align="center" :filters="typeFilter" :filter-method="matchType">
        <template slot-scope="scope">
          <div :class="scope.row.style">{{scope.row.style}}</div>
          <div>{{scope.row.class}}</div>
        </template>
      </el-table-column>
      <el-table-column label="ステータス" align="left" header-align="center" width="150">
        <template slot-scope="scope">
          <div>{{'ＨＰ　' + scope.row.hp}}</div>
          <div>{{'攻撃　' + scope.row.atk}}</div>
          <div>{{'防御　' + scope.row.def}}</div>
          <div>{{'速さ　' + scope.row.spd}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="passive" label="特性" align="left" header-align="center" min-width="320">
        <template slot-scope="scope">
          <strong>{{scope.row.passive}}</strong>
          <br>{{scope.row.passive_details}}
        </template>
      </el-table-column>
      <el-table-column prop="skill_plus" label="スキル" align="left" header-align="center" min-width="320">
        <template slot-scope="scope">
          <strong>{{scope.row.skill_plus}}</strong>
          <br>{{scope.row.skill_plus_details}}
        </template>
      </el-table-column>
      <el-table-column prop="askill_plus" label="覚醒スキル" align="left" header-align="center" min-width="320">
        <template slot-scope="scope">
          <strong>{{scope.row.askill_plus}}</strong>
          <br>{{scope.row.askill_plus_details}}
        </template>
      </el-table-column>
      <el-table-column prop="special_plus" label="奥義" align="left" header-align="center" min-width="320">
        <template slot-scope="scope">
          <strong>{{scope.row.special_plus}}</strong>
          <br>{{scope.row.special_plus_details}}
        </template>
      </el-table-column>
      <el-table-column prop="masseffect" label="マスエフェクト" align="left" header-align="center" min-width="320">
        <template slot-scope="scope">
          <strong>{{scope.row.masseffect}}</strong>
          <br>{{scope.row.masseffect_details}}
        </template>
      </el-table-column>
      <el-table-column prop="element" label="備考" align="left" header-align="center" min-width="180" :filters="noteFilter" :filter-method="(v, r) => v === r.element || v === r.peerage ">
        <template slot-scope="scope">
          <div>{{'属性　' + scope.row.element}}</div>
          <div>{{'爵位　' + scope.row.peerage}}</div>
          <div>{{'旧クラス　' + scope.row.old_class}}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
small {
  color: gray;
}
.mr1 {
  margin-right: 10px;
}
.カウンター {
  font-weight: bold;
  color: #ca7946;
}
.バースト {
  font-weight: bold;
  color: rgb(8, 163, 184);
}
.ラッシュ {
  font-weight: bold;
  color: rgb(65, 65, 65);
}
a {
  color: black;
}
a :visited {
  color: black;
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import megido from '../data/megido';
import NumericColoredLabel from '../components/NumericColoredLabel.vue';

@Component({
  components: {
    colored: NumericColoredLabel
  }
})
export default class extends Vue {
  private megido = megido;

  private typeFilter = [
    { text: 'ファイター', value: 'ファイター' },
    { text: 'トルーパー', value: 'トルーパー' },
    { text: 'スナイパー', value: 'スナイパー' },
    { text: 'ラッシュ', value: 'ラッシュ' },
    { text: 'カウンター', value: 'カウンター' },
    { text: 'バースト', value: 'バースト' },
    { text: 'ラッシュ/ファイター', value: 'ラッシュ/ファイター' },
    { text: 'ラッシュ/トルーパー', value: 'ラッシュ/トルーパー' },
    { text: 'ラッシュ/スナイパー', value: 'ラッシュ/スナイパー' },
    { text: 'カウンター/ファイター', value: 'カウンター/ファイター' },
    { text: 'カウンター/トルーパー', value: 'カウンター/トルーパー' },
    { text: 'カウンター/スナイパー', value: 'カウンター/スナイパー' },
    { text: 'バースト/ファイター', value: 'バースト/ファイター' },
    { text: 'バースト/トルーパー', value: 'バースト/トルーパー' },
    { text: 'バースト/スナイパー', value: 'バースト/スナイパー' }
  ];

  private noteFilter = [
    { text: '火（風と相性最高）', value: '火' },
    { text: '風（火と相性最高）', value: '風' },
    { text: '水（雷と相性最高）', value: '水' },
    { text: '雷（風と相性最高）', value: '雷' },
    { text: '氷（相性最高なし）', value: '氷' },
    { text: '地（地と相性最高）', value: '地' },
    { text: '王', value: '王' },
    { text: '公爵', value: '公爵' },
    { text: '君主', value: '君主' },
    { text: '侯爵', value: '侯爵' },
    { text: '伯爵', value: '伯爵' },
    { text: '総裁', value: '総裁' }
  ];

  private matchType(v: string, r: any) {
    return v.indexOf('/') < 0
      ? v === r.class || v === r.style
      : v === r.style + '/' + r.class;
  }
}
</script>


<style>
.megidolist {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  border: #eee 1px solid;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
</style>

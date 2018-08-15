<template>
  <span :class="color" v-html="v"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() v: number;
  @Prop() max: number;
  @Prop() min: number;

  get color() {
    return (
      'r' +
      Math.min(
        3,
        Math.max(
          -3,
          Math.round(
            (this.v - this.min - (this.max - this.min) / 2) /
              (this.max - this.min) *
              7
          )
        )
      )
    );
  }
}
</script>

<style>
.r3 {
  color: blue;
}
.r2 {
  color: rgb(0, 120, 230);
}
.r1 {
  color: rgb(0, 120, 18);
}
.r0 {
  color: black;
}
.r-1 {
  color: rgb(180, 120, 0);
}
.r-2 {
  color: rgb(230, 120, 0);
}
.r-3 {
  color: red;
}
</style>

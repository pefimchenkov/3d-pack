<template>
  <v-parallax src="../assets/3dpack.jpg" height="900" class="mb-10">
    <v-layout align-center column justify-center black--text>
      <v-card
        color="rgba(247,76,60,0.9)"
        class="pa-5 text-center"
        max-width="700"
      >
      <h2 class="text-uppercase white-color text-center titleAnim">КОМПАНИЯ «3D-PACK»</h2>
      <h1 class="display-2 text-uppercase my-7 titleAnim white-color">ИСКУССТВО СОВЕРШЕННОЙ УПАКОВКИ!</h1>
      <h3 class="text-uppercase my-5 titleAnim white-color">Эксклюзивные разработки в области дизайна и высококачественные изделия по привлекательным ценам</h3>
      <v-btn large dark color="rgba(247,76,60,0.9)" @click="gotoMainSite()">Узнать больше</v-btn>
      </v-card>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  methods: {
    gotoMainSite() {
      window.open('http://3d-pack.ru', '_blank').focus()
    }
  }
}
</script>
<style lang="scss" scoped>
  .white-color {
    color:rgba(255, 255, 255, 0.9) !important;
    font-weight: 300;
  }
  
</style>


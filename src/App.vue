<template>
  <v-app v-scroll="onScroll">
    <v-navigation-drawer temporary v-model="drawer" enable-resize-watcher fixed app>
      <v-list>
        <v-list-item @click="$vuetify.goTo('#about')">
          <v-list-item-content>
            <v-list-item-title class="black--text">О НАС</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#process')">
          <v-list-item-content>
            <v-list-item-title class="black--text">ПРОИЗВОДСТВО</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#what')">
          <v-list-item-content>
            <v-list-item-title class="black--text">БЛИСТЕРЫ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#foodpack')">
          <v-list-item-content>
            <v-list-item-title class="black--text">ПИЩЕВАЯ УПАКОВКА</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#factorypack')">
          <v-list-item-content>
            <v-list-item-title class="black--text">ПРОМЫШЛЕННАЯ УПАКОВКА</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#metallpack')">
          <v-list-item-content>
            <v-list-item-title class="black--text">МЕТАЛЛООБРАБОТКА</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$vuetify.goTo('#contact')">
          <v-list-item-content>
            <v-list-item-title class="black--text">Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item value="true" v-for="(link, i) in menuLinks" :key="i" :href="link.target">
          <v-list-item-action>
            <v-icon v-html="link.icon" class="black--text"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="link.title" class="black--text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed :flat="!isScrolling" :class="{ transparent: !isScrolling }">
      <v-icon @click.stop="drawer = !drawer" class="hidden-md-and-up mr-5">menu</v-icon>
      <v-flex sm2>
        <a href="#"><v-img class="logo" src="./assets/logo.png"></v-img></a>
      </v-flex>
      <!-- <v-toolbar-title v-text="title" class="text-uppercase font-weight-black" to="#"></v-toolbar-title> -->
      <v-spacer></v-spacer>
      <!-- {{ offsetTop }} -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="$vuetify.goTo('#about')" color="red" class="btn-bg">О НАС</v-btn>
        <v-btn text @click="$vuetify.goTo('#process')" color="red" class="btn-bg">ПРОИЗВОДСТВО</v-btn>
        <v-btn text @click="$vuetify.goTo('#what')" color="red" class="btn-bg">БЛИСТЕРЫ</v-btn>
        <v-btn text @click="$vuetify.goTo('#foodpack')" color="red" class="btn-bg">ПИЩЕВАЯ УПАКОВКА</v-btn>
        <v-btn text @click="$vuetify.goTo('#factorypack')" color="red" class="btn-bg">ПРОМЫШЛЕННАЯ УПАКОВКА</v-btn>
        <v-btn text @click="$vuetify.goTo('#metallpack')" color="red" class="btn-bg">МЕТАЛЛООБРАБОТКА</v-btn>
        <v-btn text @click="$vuetify.goTo('#contact')" color="red" class="btn-bg">КОНТАКТЫ</v-btn>
        <!-- <v-btn text v-for="(link, i) in menuLinks" :key="i" :href="link.target">
          <v-icon left dark v-html="link.icon"></v-icon>
          {{ link.title}}
        </v-btn> -->
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>

    <back-top color="#409EFF" :size="2.1" :slow="10" right="3%" bottom="10%"></back-top>

    <v-footer height="auto" color="red lighten-1">
      <v-layout justify-center row wrap>
        <v-btn v-for="(link, i) in menuLinks" :key="i" color="white" text rounded :href="link.target">
          {{ link.title }}
        </v-btn>
        <v-flex red lighten-2 py-3 text-center white--text xs12>
          &copy;2022 — <strong>ЗД ПАК</strong>
        </v-flex>
      </v-layout>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      offsetTop: 0,
      title: 'Company',
      type: 'selector',
      selector: '#about',
      menuLinks: [
      {
        icon: 'build',
        title: 'О НАС',
        target: '#about'
      },
      {
        icon: 'view_list',
        title: 'ПРОИЗВОДСТВО',
        target: '#process'
      },
      {
        icon: 'bubble_chart',
        title: 'БЛИСТЕРЫ',
        target: '#what'
      },
      {
        icon: 'bubble_chart',
        title: 'ПИЩЕВАЯ УПАКОВКА',
        target: '#foodpack'
      },
      {
        icon: 'bubble_chart',
        title: 'ПРОМЫШЛЕННАЯ УПАКОВКА',
        target: '#factorypack'
      },
      {
        icon: 'bubble_chart',
        title: 'МЕТАЛЛООБРАБОТКА',
        target: '#metallpack'
      },
      {
        icon: 'chat_bubble',
        title: 'КОНТАКТЫ',
        target: '#contact'
      }
      ]
    }
  },
  methods: {
    onScroll () {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  },
  computed: {
    isScrolling () {
      return this.offsetTop > 100
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Play:100,200,300,400,500,600,700,800');

$body-font-family: 'Play', sans-serif;
$title-font: 'Play', sans-serif;

  .v-application {
   font-family: $body-font-family, sans-serif !important;
    .title { // To pin point specific classes of some components
       font-family: $title-font, sans-serif !important;
    }
    line-height: 1.5;
    div {
      font-size: 15px;
    }
 }
 .btn-bg {
   background-color: rgba(255, 255, 255, 0.8)
 }
 .logo {
   width: 170px;
   position: relative;
   top: 25px;
 }
 .theme--light.v-divider {
    border-color: rgb(255, 103, 103) !important;
   /*  border-width: thin 0 0 !important; */
    margin: 25px 5px !important;
}
</style>


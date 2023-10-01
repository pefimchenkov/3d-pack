<template>
  <section>
    <div style="height: 65px" id="metallpack" />
    <div class="grey lighten-3">
      <v-container>
        <v-layout row wrap py-5>
          <v-flex xs12 pt-4 class="text-center">
            <h2 class="headline text-uppercase my-1">МЕТАЛЛООБРАБОТКА</h2>
            <div class="subheading text-uppercase grey--text text--lighten-1">Мы специализируемся на индивидуальных заказах</div>
          </v-flex>
        </v-layout>
        <v-layout row wrap pb-5>
          <v-flex v-for="(project, index) in projects" 
            :key="index.project"
            xs12 sm6 md6 lg3
            :class="{'py-2': $vuetify.breakpoint.xs, 'pa-2': $vuetify.breakpoint.sm, 'pa-3': $vuetify.breakpoint.mdAndUp}"
          > 
            <v-card data-aos="fade-up">
              <v-img class="white--text" :src="project.image" :title="project.title" :alt="project.alt"></v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      prevRatio: 0,
      projects: [
        {
          image: require('../assets/metallpack/1.jpg'),
          title: 'форма для литья церковных свечей - закажите у нас по низкой цене',
          alt: 'форма для литья церковных свечей',
          link: ''
        },
        {
          image: require('../assets/metallpack/2.jpg'),
          title: 'пресс-форма - закажите у нас по низкой цене',
          alt: 'пресс-форма',
          link: ''
        },
        {
          image: require('../assets/metallpack/3.jpg'),
          title: 'фрезерная обработка металла - закажите у нас по низкой цене',
          alt: 'фрезерная обработка металла',
          link: ''
        },
        {
          image: require('../assets/metallpack/4.jpg'),
          title: 'металлообработка - закажите у нас по низкой цене',
          alt: 'металлообработка',
          link: ''
        },
        {
          image: require('../assets/metallpack/5.jpg'),
          title: 'изготовление корпусных изделий из алюминия - закажите у нас по низкой цене',
          alt: 'изготовление корпусных изделий из алюминия',
          link: ''
        },
        {
          image: require('../assets/metallpack/6.jpg'),
          title: 'технологическая оснастка - закажите у нас по низкой цене',
          alt: 'технологическая оснастка',
          link: ''
        },
        {
          image: require('../assets/metallpack/7.jpg'),
          title: 'пресс-форма для художественного литья - закажите у нас по низкой цене',
          alt: 'пресс-форма для художественного литья',
          link: ''
        },
        {
          image: require('../assets/metallpack/8.jpg'),
          title: 'форма для литья рыболовных грузов - закажите у нас по низкой цене',
          alt: 'форма для литья рыболовных грузов',
          link: ''
        }
      ]
    }
  },
  methods: {
    
  }
};
</script>


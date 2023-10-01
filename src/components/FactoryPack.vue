<template>
  <section>
    <div style="height: 65px" id="factorypack" />
      <div class="grey lighten-3">
        <v-container>
          <v-layout row wrap py-5>
            <v-flex xs12 pt-4 class="text-center">
              <h2 class="headline text-uppercase my-1">ПРОМЫШЛЕННАЯ УПАКОВКА</h2>
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
          image: require('../assets/factorypack/1.jpg'),
          title: 'контейнер для промышленных товаров - закажите у нас по низкой цене',
          alt: 'контейнер для промышленных товаров',
          link: ''
        },
        {
          image: require('../assets/factorypack/2.jpg'),
          title: 'рекламный блистер - закажите у нас по низкой цене',
          alt: 'рекламный блистер',
          link: ''
        },
        {
          image: require('../assets/factorypack/3.jpg'),
          title: 'блистер для фломастеров - закажите у нас по низкой цене',
          alt: 'блистер для фломастеров',
          link: ''
        },
        {
          image: require('../assets/factorypack/4.jpg'),
          title: 'блистер для сувенирной продукции - закажите у нас по низкой цене',
          alt: 'блистер для сувенирной продукции',
          link: ''
        },
        {
          image: require('../assets/factorypack/5.jpg'),
          title: 'ложемент для пластилина- закажите у нас по низкой цене',
          alt: 'ложемент для пластилина',
          link: ''
        },
        {
          image: require('../assets/factorypack/6.jpg'),
          title: 'ложемент-подставка - закажите у нас по низкой цене',
          alt: 'ложемент-подставка',
          link: ''
        },
        {
          image: require('../assets/factorypack/7.jpg'),
          title: 'блистер для рыболовных товаров - закажите у нас по низкой цене',
          alt: 'лоток',
          link: ''
        },
        {
          image: require('../assets/factorypack/8.jpg'),
          title: 'блистер с трехсторонним загибом - закажите у нас по низкой цене',
          alt: 'блистер с трехсторонним загибом',
          link: ''
        }
      ]
    }
  },
  methods: {
    
  }
};
</script>


<template>
<section>
  <div style="height: 65px" id="foodpack" />
    <div class="grey lighten-3">
      <v-container>
        <v-layout row wrap py-5>
          <v-flex xs12 pt-4 class="text-center">
            <h2 class="headline text-uppercase my-1">ПИЩЕВАЯ УПАКОВКА</h2>
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
              <!-- <v-card-title primary-title>
                <div>
                  <div class="headline">{{ project.title }}</div>
                  <div class="pt-2">{{ project.subtitle }}</div>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="blue">Learn More</v-btn>
              </v-card-actions> -->
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
          image: require('../assets/foodpack/1.jpg'),
          title: 'тортница - закажите у нас по низкой цене',
          alt: 'тортница',
          subtitle: '',
          link: ''
        },
        {
          image: require('../assets/foodpack/2.jpg'),
          title: 'ложемент - закажите у нас по низкой цене',
          alt: 'ложемент',
          subtitle: '',
          link: ''
        },
        {
          image: require('../assets/foodpack/3.jpg'),
          title: 'коррекс - закажите у нас по низкой цене',
          alt: 'коррекс',
          subtitle: '',
          link: ''
        },
        {
          image: require('../assets/foodpack/4.jpg'),
          title: 'контейнер для кондитерских изделий - закажите у нас по низкой цене',
          alt: 'контейнер для кондитерских изделий',
          subtitle: '',
          link: ''
        },
        {
          image: require('../assets/foodpack/5.jpg'),
          title: 'ланч-бокс - закажите у нас по низкой цене',
          alt: 'ланч-бокс',
          subtitle: '',
          link: ''
        },
        {
          image: require('../assets/foodpack/6.jpg'),
          title: 'лоток под запайку - закажите у нас по низкой цене',
          alt: 'лоток под запайку',
          subtitle: '',
          link: ''
        },
        {
          image: require('../assets/foodpack/7.jpg'),
          title: 'лоток - закажите у нас по низкой цене',
          alt: 'лоток',
          subtitle: '',
          link: ''
        },
        {
          image: require('../assets/foodpack/8.jpg'),
          title: 'соусница - закажите у нас по низкой цене',
          alt: 'соусница',
          subtitle: '',
          link: ''
        }
      ]
    }
  },
  methods: {
    
  }
};
</script>


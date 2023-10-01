<template>
  <section>
    <div style="height: 65px" id="process" />
    <div>
        <v-container>
            <v-layout py-5 class="grey lighten-3 mb-10">
                <v-flex xs12 pt-4 text-center>
                <h2 class="headline text-uppercase my-1">ПРОИЗВОДСТВО</h2>
                <div class="subheading text-uppercase grey--text text--lighten-1">мы специализируемся на индивидуальных заказах</div>
                </v-flex>
            </v-layout>
            <v-layout row wrap pb-5>
                <v-flex v-for="(process, index) in processes" :key="index.process" xs12 sm12 lg4 text-center style="max-width: 600px; margin: 0 auto">
                <img :src="process.foto" class="foto" :title="process.title" :alt="process.alt" />
                <h2 class="text-h6 pa-3">{{ process.alt }}</h2>
                <v-list dense style="margin: 0 auto">
                  <v-list-item
                    v-for="(item, i) in process.subtitle.split(', ')"
                    :key="i"
                    dense
                    style="text-align: start !important; max-width: 500px; margin: 0 auto"
                  >
                  <v-icon small color="red" class="mr-5">done</v-icon>
                  {{ item }}
                  </v-list-item>
                </v-list>
                <v-divider inset class="hidden-lg-and-up" />
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
      isVisible: false,
      prevRatio: 0,
      processes: [
        {
          foto: require('@/assets/foodpack.jpg'),
          title: 'МЫ ПРОИЗВОДИМ КАЧЕСТВЕННЫЕ И НАДЕЖНЫЕ УПАКОВКИ ДЛЯ ПИЩЕВЫХ ПРОДУКТОВ',
          alt: 'УПАКОВКИ ДЛЯ ПИЩЕВЫХ ПРОДУКТОВ',
          subtitle: 'ланчбоксы, контейнеры, лотки для мяса и полуфабрикатов, коррексы и ложементы для кондитерской промышленности, пресервы под запайку для рыбы и морепродуктов.'
        },
        {
          foto: require('@/assets/factorypack.jpg'),
          title: 'МЫ ПРОИЗВОДИМ КАЧЕСТВЕННЫЕ И НАДЕЖНЫЕ УПАКОВКИ ДЛЯ ПРОМЫШЛЕННЫХ ТОВАРОВ',
          alt: 'УПАКОВКИ ДЛЯ ПРОМЫШЛЕННЫХ ТОВАРОВ',
          subtitle: 'блистеры с трехсторонним загибом, двухсторонние блистеры (на петле), блистеры под приварку, ложементы, контейнеры, чемоданы, складные блистеры.'
        },
        {
          foto: require('@/assets/metall.jpg'),
          title: 'МЫ РАСПОЛОГАЕМ СОБСТВЕННЫМ ПРОИЗВОДСТВОМ ПРЕСС-ФОРМ (МЕТАЛЛООБРАБОТКА)',
          alt: 'ПРОИЗВОДСТВО ПРЕСС-ФОРМ (МЕТАЛЛООБРАБОТКА)',
          subtitle: 'Токарные работы(ЧПУ, универсальные), Фрезерные работы(ЧПУ, универсальные), Координатно-расточные, Шлифование(плоское,круглое,внутреннее), Сверление, Лазерный раскрой, Термообработка металла'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
  .foto {
    max-width: 350px !important;
  }
</style>

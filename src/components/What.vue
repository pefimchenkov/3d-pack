<template>
  <section>
    <div style="height: 65px" id="what" />
    <div class="grey lighten-3">
      <v-container>
        <v-layout row wrap py-5>
          <v-flex xs12 pa-4 text-center>
            <h2 class="headline text-uppercase my-1">СЕРИЙНЫЕ БЛИСТЕРЫ</h2>
            <div class="subheading text-uppercase red--text text--lighten-1">В НАЛИЧИИ НА СКЛАДЕ ОТ 1 ШТ.</div>
          </v-flex>
          <v-flex v-for="(service, index) in services" :key="index.service" xs6 sm6 md3 :class="{'py-2': $vuetify.breakpoint.smAndDown, 'pa-3': $vuetify.breakpoint.mdAndUp}">
            <v-card data-aos="fade-up" heigth="100">
                <v-row>
                  <v-col cols="12">
                    <v-img
                      :src="service.image"
                      style="margin: 0 auto;"
                      :alt="service.alt"
                      :title="service.desc"
                    >
                      <div class="subheading text-uppercase mx-5 red--text"><b>{{ service.title }}</b></div>
                    </v-img>
                  </v-col>
                  <v-col cols="12" class="text-center">
                      <div>
                        <div class="red--text">{{ service.subtitle }}</div>
                      </div>
                  </v-col>
                </v-row>
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
      services: [
        {
          image: require('../assets/blisters/10-01_1x.jpg'),
          title: 'АРТ. 10-01',
          subtitle: 'd-45, h-20, 13мл.',
          alt: 'контейнер под декор для маникюра',
          desc: '10-01 контейнер под декор для маникюра'
        },
        {
          image: require('../assets/blisters/10-02_1x.jpg'),
          title: 'арт. 10-02',
          subtitle: 'd-64, h-21, 30мл.',
          alt: 'контейнер',
          desc: '10-02 контейнер'
        },
        {
          image: require('../assets/blisters/11-04_1x.jpg'),
          title: 'АРТ. 11-04',
          subtitle: '<> 110х51х16мм. >< 65х25х15мм.',
          alt: 'блистер для балансиров ',
          desc: '11-04  блистер для балансиров '
        },
        {
          image: require('../assets/blisters/11-05_1x.jpg'),
          title: 'АРТ. 11-05',
          subtitle: '<> 110х51х16мм. >< 80х30х15мм.',
          alt: 'блистер для блесен ',
          desc: '11-05 блистер для блесен '
        },
        {
          image: require('../assets/blisters/11-06_1x.jpg'),
          title: 'АРТ. 11-06',
          subtitle: '<> 110х51х21мм. >< 80х30х20мм.',
          alt: 'блистер для автозапчастей ',
          desc: '11-06 блистер для автозапчастей '
        },
        {
          image: require('../assets/blisters/11-17_1x.jpg'),
          title: 'АРТ. 11-17',
          subtitle: '<> 142х51х26мм. >< 96х30х25мм.',
          alt: 'блистер для автокосметики  ',
          desc: '11-17 блистер для автокосметики  '
        },
        {
          image: require('../assets/blisters/11-18_1x.jpg'),
          title: 'АРТ. 11-18',
          subtitle: '<> 142х51х21мм. >< 96х30х20мм.',
          alt: 'блистер для косметики ',
          desc: '11-18 блистер для косметики '
        },
        {
          image: require('../assets/blisters/11-19_1x.jpg'),
          title: 'АРТ. 11-19',
          subtitle: '<> 142х51х16мм. >< 110х30х15мм.',
          alt: ' блистер для рыболовной оснастки',
          desc: '11-19 блистер для рыболовной оснастки'
        },
        {
          image: require('../assets/blisters/11-20_1x.jpg'),
          title: 'АРТ. 11-20',
          subtitle: '<> 142х51х21мм. >< 110х30х20мм.',
          alt: 'блистер для мобильных аксессуаров',
          desc: '11-20 блистер для мобильных аксессуаров'
        },
        {
          image: require('../assets/blisters/11-25_1x.jpg'),
          title: 'АРТ. 11-25',
          subtitle: '<> 176х51х21мм. >< 145х30х20мм.',
          alt: 'блистер для шприцов ',
          desc: '11-25 блистер для шприцов '
        },
        {
          image: require('../assets/blisters/11-30_1x.jpg'),
          title: 'АРТ. 11-30',
          subtitle: '<> 214х67х21мм. >< 170х38х20мм.',
          alt: 'блистер для воблеров ',
          desc: '11-30 блистер для воблеров '
        },
        {
          image: require('../assets/blisters/11-50_1x.jpg'),
          title: 'АРТ. 11-50',
          subtitle: '<> 136х92х16мм. >< 95х70х15мм.',
          alt: 'блистер для радиодеталей ',
          desc: '11-50 блистер для радиодеталей '
        },
        {
          image: require('../assets/blisters/11-101_1x.jpg'),
          title: 'АРТ. 11-101',
          subtitle: '<> 75х45х11мм. >< 34х21х6мм.',
          alt: 'блистеры для мормышек ',
          desc: '11-101 блистеры для мормышек '
        },
        {
          image: require('../assets/blisters/11-102_1x.jpg'),
          title: 'АРТ. 11-102',
          subtitle: '<> 75х45х15мм. >< 34х34х10мм.',
          alt: 'блистер для крючков',
          desc: '11-102 блистер для крючков'
        },
        {
          image: require('../assets/blisters/11-103_1x.jpg'),
          title: 'АРТ. 11-103',
          subtitle: '<> 75х45х13мм. >< 48х34х8мм.',
          alt: 'блистер для сувениров ',
          desc: '11-103 блистер для сувениров '
        },
        {
          image: require('../assets/blisters/11-104_1x.jpg'),
          title: 'АРТ. 11-104',
          subtitle: '<> 75х45х15мм. >< 34х21х10мм.',
          alt: 'блистер для таблеток',
          desc: '11-104 блистер для таблеток'
        },
        {
          image: require('../assets/blisters/11-105_1x.jpg'),
          title: 'АРТ. 11-105',
          subtitle: '<> 75х45х19мм. >< 34х34х14мм.',
          alt: 'блистер для ампул',
          desc: '11-105 блистер для ампул'
        },
        {
          image: require('../assets/blisters/11-106_1x.jpg'),
          title: 'АРТ. 11-106',
          subtitle: '<> 75х45х17мм. >< 48х34х12мм.',
          alt: 'блистер для борфрез',
          desc: '11-106 блистер для борфрез'
        },
        {
          image: require('../assets/blisters/11-107_1x.jpg'),
          title: 'АРТ. 11-107',
          subtitle: '<> 75х45х21мм. >< 48х34х15мм.',
          alt: 'блистер для батареек',
          desc: '11-107 блистер для батареек'
        },
        {
          image: require('../assets/blisters/11-108_1x.jpg'),
          title: 'АРТ. 11-108',
          subtitle: '<> 75х45х30мм. >< 48х34х30 (15+15)',
          alt: 'блистер для тройников',
          desc: '11-108 блистер для тройников'
        },
        {
          image: require('../assets/blisters/11-109_1x.jpg'),
          title: 'АРТ. 11-109',
          subtitle: '<> 75х45х20мм. >< 37х25х15мм.',
          alt: 'блистер для стоматологических инструментов',
          desc: '11-109 блистер для стоматологических инструментов'
        },
        {
          image: require('../assets/blisters/11-110_1x.jpg'),
          title: 'АРТ. 11-110',
          subtitle: '<> 116х101х26мм. >< 80х50х26 (8+18)',
          alt: 'блистер для джиг-головок',
          desc: '11-110 блистер для джиг-головок'
        },
        {
          image: require('../assets/blisters/11-111_1x.jpg'),
          title: 'АРТ. 11-111',
          subtitle: '<> 116х101х30мм. >< 89х40х30 (15+15)',
          alt: 'блистер для канцелярских товаров',
          desc: '11-111 блистер для канцелярских товаров'
        },
        {
          image: require('../assets/blisters/11-112_1x.jpg'),
          title: 'АРТ. 11-112',
          subtitle: '<> 116х101х22мм. >< 89х60х17мм.',
          alt: 'блистер для детских игрушек',
          desc: '11-112 блистер для детских игрушек'
        },
        {
          image: require('../assets/blisters/11-113_1x.jpg'),
          title: 'АРТ. 11-113',
          subtitle: '<> 116х101х34мм. >< 89х83х29мм.',
          alt: 'блистер для сантехнических товаров',
          desc: '11-113 блистер для сантехнических товаров'
        },
        {
          image: require('../assets/blisters/11-114_1x.jpg'),
          title: 'АРТ. 11-114',
          subtitle: '<> 116х101х21мм. >< 55х43х15 - 2шт.',
          alt: 'блистер под аксессуары для настольных игр ',
          desc: '11-114 блистер под аксессуары для настольных игр '
        },
        {
          image: require('../assets/blisters/11-115_1x.jpg'),
          title: 'АРТ. 11-115',
          subtitle: '<> 116х101х15мм. >< 80х50х8мм.',
          alt: 'блистер для стортивных товаров',
          desc: '11-115 блистер для стортивных товаров'
        },
        {
          image: require('../assets/blisters/11-116_1x.jpg'),
          title: 'АРТ. 11-116',
          subtitle: '<> 116х101х21мм. >< 89х40х15мм.',
          alt: 'блистеры под заказ',
          desc: '11-116 блистеры под заказ'
        },
        {
          image: require('../assets/blisters/11-117_1x.jpg'),
          title: 'АРТ. 11-117',
          subtitle: '<> 130х80х23мм. >< 120х45х23мм.',
          alt: 'блистер для метизов',
          desc: '11-117 блистер для метизов'
        },
        {
          image: require('../assets/blisters/11-118_1x.jpg'),
          title: 'АРТ. 11-118',
          subtitle: '<> 152х115х21мм. >< 140х40х15мм.',
          alt: 'блистер для метизов',
          desc: '11-118 блистер для метизов'
        },
        {
          image: require('../assets/blisters/11-120_1x.jpg'),
          title: 'АРТ. 11-120',
          subtitle: '<> 93х85х12мм. >< 70х45х12',
          alt: 'блистер для ножей ледобура ',
          desc: '11-120 блистер для ножей ледобура '
        },
        {
          image: require('../assets/blisters/11-130_1x.jpg'),
          title: 'АРТ. 11-130',
          subtitle: '<> 130х72х17мм. >< 78х60х16мм.',
          alt: 'блистер для автокрепежа',
          desc: '11-130 блистер для автокрепежа'
        },
        {
          image: require('../assets/blisters/11-131_1x.jpg'),
          title: 'АРТ. 11-131',
          subtitle: '<> 114х67х15 мм. >< 58х48х10 мм.',
          alt: 'блистер для электротоваров',
          desc: '11-131 блистер для электротоваров'
        },
        {
          image: require('../assets/blisters/11-132_1x.jpg'),
          title: 'АРТ. 11-132',
          subtitle: '<> 114х67х21мм. >< 58х48х16мм.',
          alt: 'блистер для разборных чебурашек',
          desc: '11-132 блистер для разборных чебурашек'
        },
        {
          image: require('../assets/blisters/11-133_1x.jpg'),
          title: 'АРТ. 11-133',
          subtitle: '<> 114х67х30мм. >< 58х58х25мм.',
          alt: 'блистер для товаров личной гигиены',
          desc: '11-133 блистер для товаров личной гигиены'
        },
        {
          image: require('../assets/blisters/11-134_1x.jpg'),
          title: 'АРТ. 11-134',
          subtitle: '<> 114х67х21мм. >< 83х58х16мм.',
          alt: 'блистер для свинцовых грузил',
          desc: '11-134 блистер для свинцовых грузил'
        },
        {
          image: require('../assets/blisters/11-135_1x.jpg'),
          title: 'АРТ. 11-135',
          subtitle: '<> 114х67х30мм. >< 83х58х25мм.',
          alt: 'блистер для саморезов',
          desc: '11-135 блистер для саморезов'
        },
        {
          image: require('../assets/blisters/11-136_1x.jpg'),
          title: 'АРТ. 11-136',
          subtitle: '<> 114х67х21мм. >< 20х58х16мм.',
          alt: 'блистер для саморезов',
          desc: '11-136 блистер для ...'
        },
        {
          image: require('../assets/blisters/11-137_1x.jpg'),
          title: 'АРТ. 11-137',
          subtitle: '<> 114х67х21мм. >< 30х58х16мм.',
          alt: 'блистер для саморезов',
          desc: '11-137 блистер для ...'
        },
        {
          image: require('../assets/blisters/12-1_1x.jpg'),
          title: 'АРТ. 12-1',
          subtitle: '<> 106х56х15мм. >< 100х50х15мм.',
          alt: 'лоток для фурнитуры',
          desc: '12-1 лоток для фурнитуры'
        },
        {
          image: require('../assets/blisters/12-2_1x.jpg'),
          title: 'АРТ. 12-2',
          subtitle: '<> 106х66х15мм. >< 100х60х15мм.',
          alt: 'лоток для силиконовых приманок ',
          desc: '12-2 лоток для силиконовых приманок '
        },
        {
          image: require('../assets/blisters/12-3_1x.jpg'),
          title: 'АРТ. 12-3',
          subtitle: '<> 116х66х15мм. >< 110х60х15мм.',
          alt: 'лоток для аксессуаров сотовых телефонов',
          desc: '12-3 лоток для аксессуаров сотовых телефонов'
        },
        {
          image: require('../assets/blisters/12-4_1x.jpg'),
          title: 'АРТ. 12-4',
          subtitle: '<> 116х86х15мм. >< 110х80х15мм',
          alt: 'лоток для косметики',
          desc: '12-4 лоток для косметики'
        },
        {
          image: require('../assets/blisters/12-5_1x.jpg'),
          title: 'АРТ. 12-5',
          subtitle: '<> 126х81х15мм. >< 120х75х15мм.',
          alt: 'лоток для сувенирной продукции ',
          desc: '12-5 лоток для сувенирной продукции'
        },
        {
          image: require('../assets/blisters/12-6_1x.jpg'),
          title: 'АРТ. 12-6',
          subtitle: '<> 136х86х15мм. >< 130х80х15мм.',
          alt: 'лоток для настольных игр',
          desc: '12-6 лоток для настольных игр'
        },
        {
          image: require('../assets/blisters/12-7_1x.jpg'),
          title: 'АРТ. 12-7',
          subtitle: '<> 146х86х15мм. >< 140х80х15мм.',
          alt: 'лоток для канцелярских товаров',
          desc: '12-7 лоток для канцелярских товаров'
        },
        {
          image: require('../assets/blisters/12-8_1x.jpg'),
          title: 'АРТ. 12-8',
          subtitle: '<> 156х66х15мм. >< 150х60х15мм',
          alt: 'лоток для пластилин',
          desc: '12-8 лоток для пластилина'
        },
        {
          image: require('../assets/blisters/12-9_1x.jpg'),
          title: 'АРТ. 12-9',
          subtitle: '<> 156х86х15мм. >< 150х80х15мм.',
          alt: 'лоток для красок',
          desc: '12-9 лоток для красок'
        },
        {
          image: require('../assets/blisters/12-10_1x.jpg'),
          title: 'АРТ. 12-10',
          subtitle: '<> 186х86х15мм. >< 180х80х15мм.',
          alt: 'лоток для бужутерии',
          desc: '12-10 лоток для бижутерии'
        },
        {
          image: require('../assets/blisters/12-11_1x.jpg'),
          title: 'АРТ. 12-11',
          subtitle: '<> 82х46х8мм. >< 78х42х8мм.',
          alt: 'лоток для бужутерии',
          desc: '12-11 лоток'
        }
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
  .inside {
    vertical-align: bottom;
    height: 140px;
    display: table-cell;
  }
</style>

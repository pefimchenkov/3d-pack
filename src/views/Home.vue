<template>
  <div>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="color"
      top
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>

    <Hero />
    <About />
    <Process />
    <What />
    <FoodPack />
    <FactoryPack />
    <MetallPack />

      <v-layout row wrap py-5 mx-10>
        <v-flex xs12 sm12 md12 lg6 xl6 pa-4>
          <v-img src="../assets/order.jpg" data-aos="fade-right" height="355px"></v-img>
        </v-flex>
        <v-flex xs12 sm12 md12 lg6 xl6 pa-4>
          <h2 class="display-2 font-weight-thin">Заказ продукции</h2>
          <h4 class="headline my-1">Заявку направляйте на электронную почту: <span class="red--text">3d-pack@mail.ru</span></h4>
          <p>Чтобы сделать заказ нашей продукции необходимо сформировать заявку, в которой нужно указать артикульный номер упаковки, тираж, Ваши вопросы и пожелания, Ваши контактные данные.</p>
          <p>Запрос расчета стоимости (стоимость рассчитывается индивидуально для каждого проекта)
            Чтобы узнать стоимость индивидуальной пластиковой упаковки, необходимо сформировать запрос. В запросе нужно указать исходные данные:
            <ul>
            <li>тип упаковки (или Ваш товар, который хотите упаковать),</li>
            <li>габаритные размеры упаковки или Вашего товара (длина, ширина, высота),</li>
            <li>планируемый тираж (шт.),</li>
            <li>Ваши пожелания по материалу, внешнему виду (необходимость нанесения логотипа), Ваши вопросы, Ваши контактные данные.</li></ul></p>
            <p>Запрос направляйте на электронную почту: <span class="red--text">3d-pack@mail.ru</span></p>
        </v-flex>
      </v-layout>

    <template>
      <yandex-map
        :coords="coords"
        :zoom="10"
        ymap-class="custom"
      >
        <ymap-marker 
          :coords="coords" 
          hint-content="пр-т Машиностроителей, д. 83"
          marker-id="123"
          :icon="markerIcon"
        />
      </yandex-map>
    </template>

    <section id="contact" class="grey lighten-3">

        <v-row class="ma-10">
          <v-col xs="12" sm="12" md="12" lg="6" xl="6">
            <v-layout row wrap py-5>
              <v-flex xs12 pt-4 text-center>
                <h2 class="headline text-uppercase my-1">ЕСТЬ ВОПРОСЫ?</h2>
                <div class="subheading text-uppercase grey--text text--lighten-1">мы свяжемся с вами в кратчайшие сроки!</div>
              </v-flex>
          </v-layout>

            <v-layout row wrap pb-5>
              <v-flex xs12>

                <v-form @submit.prevent="sendEmail" id="feedback">
                    <div class="form-group">
                      <label>Имя*</label>
                      <input v-model="name" type="text" class="form-control" name="from_name" @blur="$v.name.$touch()">
                      <span v-if="$v.name.$error">
                        <template v-if="!$v.name.maxLength">
                          <span class="red--text">Длина имени не должна превышать {{ $v.name.$params.maxLength.max }} символов</span>
                        </template>
                        <template v-else-if="!$v.name.alpha">
                          <span class="red--text">Имя должно содержать только буквы русского алфавита</span>
                        </template>
                        <template v-else>
                          <span class="red--text">Имя обязательно для заполнения</span>
                        </template>
                      </span>
                    </div>
                    <div class="form-group">
                      <label>Email*</label>
                      <input v-model="email" type="email" class="form-control" aria-describedby="emailHelp" name="from_email" @blur="$v.email.$touch()">
                      <span v-if="$v.email.$error">
                        <template v-if="!$v.email.maxLength">
                          <span class="red--text">Длина email не должна превышать {{ $v.email.$params.maxLength.max }} символов</span>
                        </template>
                        <template v-else-if="!$v.name.email">
                          <span class="red--text">Не верный формат почтового адреса</span>
                        </template>
                        <template v-else>
                          <span class="red--text">email обязателен для заполнения</span>
                        </template>
                      </span>
                    </div>
                    <div class="form-group">
                      <label>Сообщение*</label>
                      <textarea v-model="message" name="message" class="form-control" rows="5" @blur="$v.message.$touch()"></textarea>
                      <span v-if="$v.message.$error">
                        <template v-if="!$v.message.maxLength">
                          <span class="red--text">Длина сообщения не должна превышать {{ $v.message.$params.maxLength.max }} символов</span>
                        </template>
                        <template v-else>
                          <span class="red--text">Поле обязательно для заполнения</span>
                        </template>
                      </span>
                    </div>
                    <div class="form-group">
                      <div class="g-recaptcha mb-5" data-sitekey="6LdoLLcZAAAAAAbLUQjUqPo_Nd6JrQ5ioBgpIK09"></div>
                      <div class="text-center">
                        <button type="submit" class="btn btn-success" :disabled="$v.$invalid">Отправить</button>
                      </div>
                    </div>
                </v-form>

              </v-flex>
            </v-layout>
          </v-col>
          <v-col xs="12" sm="12" md="12" lg="6" xl="6">
            <v-card
              width="100%"
              elevation="3"
              height="100%"
              class="mx-auto"
              color='rgba(247, 76, 60, 0.8)'
              dark
            >
            <div class="text-h6 text-center pa-5"><span style="background-color: rgb(76 83 101); padding: 10px;">Наши контакты:</span></div>
            <div class="text-h3 text-center pa-10">СВЯЖИТЕСЬ<span style="color: black !important;">&nbsp;С НАМИ!</span></div>
            <v-card-text class="text-center text-h6" style="color:rgb(76, 83, 101)">Мы специализируемся на индивидуальных заказах!</v-card-text>
            <v-card-text class="text-center text-subtitle-1">EMAIL: 3D-PACK@MAIL.RU</v-card-text>
            <v-card-text class="text-center text-subtitle-1">ТЕЛЕФОН: +7 (4852) 74-13-10</v-card-text>
            <v-card-text class="text-center text-subtitle-1">АДРЕС: 150008, Г. ЯРОСЛАВЛЬ, ПР-Т МАШИНОСТРОИТЕЛЕЙ, Д. 83</v-card-text>
            <div class="text-center my-5">
              <img src="https://img.icons8.com/material/36/000000/twitter--v1.png" class="mx-5" style="opacity: 0.5"/>
              <img src="https://img.icons8.com/material/36/000000/facebook--v1.png" class="mx-5" style="opacity: 0.5" />
              <img src="https://img.icons8.com/material/36/000000/vk-com--v1.png" class="mx-5" style="opacity: 0.5" />
              <img src="https://img.icons8.com/material/36/000000/instagram-new--v1.png" class="mx-5" style="opacity: 0.5" />
            </div>
            </v-card>
          </v-col>
        </v-row>

    </section>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import What from '../components/What.vue'
import Process from '../components/Process.vue'
import FoodPack from '../components/FoodPack.vue'
import FactoryPack from '../components/FactoryPack.vue'
import MetallPack from '../components/MetallPack.vue'
import emailjs from 'emailjs-com'

import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  components: {
    Hero,
    About,
    What,
    Process,
    FoodPack,
    FactoryPack,
    MetallPack
  },
  data () {
    return {
      name: null,
      email: null,
      message: null,
      offsetTop: 0,
      show: false,
      snackbar: false,
      text: '',
      color: '',
      timeout: 4000,
      coords: [57.615026, 39.972933],
      markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
      imageSize: [23, 23],
      imageOffset: [0, 0],
      contentOffset: [0, 15],
      contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    }
    }
  },
  validations: {
    // Название поля должно совпадать с полем в data
    name: {
      required,
      maxLength: maxLength(20),
      alpha: val => /^[А-ЯЁа-яё ]*$/i.test(val),
    },
    email: {
      required,
      maxLength: maxLength(25),
      email
    },
    message: {
      required,
      maxLength: maxLength(400)
    }
  },
  methods: {
    sendEmail(e) {
      console.log(e)
      // this.name = this.email = this.message = null
     emailjs.sendForm('gmail', 'template_ALavciro', e.target, 'user_A8qo1P54WnOfIPUVCCYNG')
        .then((result) => {
            this.snackbar = true
            this.text = result.text
            this.color = 'success'
            window.location.reload(true)
        }, (error) => {
            this.snackbar = true
            this.text = error.text === 'The g-recaptcha-response parameter not found' ? 'Не верная CAPCHA' : error.text
            this.color = 'red'
        })
    }
  }
}
</script>

<style lang="scss">
  $nice-ease: cubic-bezier(.45,.16,0,.77);
  .custom {
    height: 300px !important;
  }
  .titleAnim {
    animation: 1s blurIn ease;
  }
  @-webkit-keyframes blurIn {
    0% { 
      filter: blur(20px);
      }
    100% { 
      filter: blur(0);
      }
  }
   @-webkit-keyframes fadeIn {
    0% { 
      opacity: 0;
      }
    100% { 
      opacity: 1;
      }
  }
</style>

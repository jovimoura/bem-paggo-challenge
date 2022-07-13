<script>
import Header from './Header.vue'
export default {
  components: {
    Header
  },
  methods: {
    addSticker() {
      this.qtdStickers += 1
    },
    removeSticker() {
      if (this.qtdStickers > 0) {
        this.qtdStickers -= 1
      }
    },
    submitForm() {
      const res = {
        stickers: this.checkedStickers,
        qtdStickers: this.qtdStickers,
        obs: this.obs,
        paymentForm: this.paymentForm
      }

      this.form.push(res)
      console.log('form', this.form)
    }
  },
  data() {
    return {
      stickers: [
        { name: 'React', value: 'react', id: 'react' },
        { name: 'Vue.js', value: 'vue', id: 'vue' },
        { name: 'Angular', value: 'angular', id: 'angular' },
        { name: 'Node.js', value: 'node', id: 'node' },
        { name: 'Flutter', value: 'flutter', id: 'flutter' }
      ],
      checkedStickers: [],
      qtdStickers: 0,
      obs: '',
      paymentOptions: [
        { name: 'Boleto Bancário', value: 'boleto' },
        { name: 'Cartão de Crédito', value: 'credito' },
        { name: 'Cartão de Débito', value: 'debito' },
        { name: 'Dinheiro', value: 'dinheiro' },
        { name: 'Paypal', value: 'paypal' },
        { name: 'Pix', value: 'pix' }
      ],
      paymentForm: '',
      form: []
    }
  }
}
</script>

<template>
  <main>
    <div class="box_header">
      <Header />
    </div>

    <div class="form_content">
      <div class="form_stickers">
        <div class="box_title">
          <h2 class="title">Quais adesivos:</h2>
        </div>
        <ul class="form_list__stickers">
          <li
            class="form_list__sticker"
            v-for="sticker in stickers"
            :key="sticker.name">
            <input
              type="checkbox"
              :name="sticker.name"
              v-model="checkedStickers"
              :value="sticker.value"
              :id="sticker.id" />
            <label :for="sticker.id">{{ sticker.name }}</label>
          </li>
        </ul>
      </div>
      <div>
        <div class="box_title">
          <h2 class="title">Quantos adesivos de cada?</h2>
        </div>
        <div class="box_qtdStickers">
          <div @click="removeSticker" class="box_qtdIco">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="blue"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 12H6"
                style="color: white" />
            </svg>
          </div>
          <input
            class="input_qtdStickers"
            type="number"
            disabled
            v-model="qtdStickers" />
          <div @click="addSticker" class="box_qtdIco">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4v16m8-8H4"
                style="color: white" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div class="box_title">
          <h2 class="title">Observações</h2>
        </div>
        <div class="box_textarea__obs">
          <textarea
            v-model="obs"
            class="textarea_obs"
            placeholder="Alguma observação?"
            cols="30"
            rows="10"></textarea>
        </div>
      </div>
      <div>
        <div class="box_title">
          <h2 class="title">Forma de pagamento</h2>
        </div>
        <div class="payment_box__select">
          <select v-model="paymentForm" class="payment_select" name="" id="">
            <option class="payment_option" disabled value="">
              Escolha a forma de pagamento
            </option>
            <option
              class="payment_option"
              :value="paymentOption.value"
              v-for="paymentOption in paymentOptions"
              :key="paymentOption.name">
              {{ paymentOption.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="box_btn">
      <button @click="submitForm">Enviar</button>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 40%;
  padding: 10px 0;
}

.box_title {
  text-align: left;
}

.title {
  font-size: 20px;
}

.box_header {
  background-color: #f2f2f2;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
}

.form_content {
  padding: 30px;
  background-color: #f2f2f2;
}

.form_stickers {
  justify-content: left;
  height: 100%;
}

.form_list__stickers {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-height: 80px;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
}

.form_list__sticker {
  margin: 10px 0;
  align-items: flex-start;
  text-align-last: justify;
}

.box_qtdStickers {
  display: flex;
}

.box_qtdIco {
  width: 25px;
  height: 25px;
  background-color: #2f3676;
  border-radius: 100%;
  padding: 3px;
}

.input_qtdStickers {
  width: 55px;
  border: 1px solid #2f3676;
  border-radius: 8px;
}

.box_textarea__obs {
  display: flex;
  justify-content: left;
}

.textarea_obs {
  border: 1px solid #2f3676;
  border-radius: 8px;
}

.payment_box__select {
  display: flex;
  justify-content: left;
}

.payment_select {
  border: 1px solid #2f3676;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #fff;
}

.box_btn {
  background-color: #dde3e8;
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  padding: 25px;
  display: flex;
  justify-content: flex-end;
}

button {
  padding: 10px 20px;
  background-color: #2f3676;
  border: 1px solid transparent;
  border-radius: 5px;
  color: #fff;
}

button:hover {
  cursor: pointer;
  border: 1px solid #fff;
}

button:active {
  background-color: #fff;
  color: #2f3676;
}

@media screen and (max-width: 767px) {
  main {
    width: 90%;
  }
}
</style>

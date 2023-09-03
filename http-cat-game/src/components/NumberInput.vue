<template>
  <div class="number-input">
    <div class="numbers">
      <v-btn class="number-button" v-for="n in 9" :key="n" @click="appendNumber(n)">{{ n }}</v-btn>
      <v-btn class="show-highscore-button" @click="openDocs">
        <span class="material-symbols-outlined"></span> Docs
      </v-btn>
      <v-btn class="number-button" @click="appendNumber(0)">0</v-btn>
      <v-btn class="backspace-button" @click="backspace">Backspace</v-btn>
    </div>
  </div>
</template>




<script>
export default {
  methods: {
    appendNumber(number) {
      this.$emit('append', number === 10 ? 0 : number);
    },
    backspace() {
      this.$emit('backspace');
    },
    openDocs() {
      window.open('https://http.cat/', '_blank');
    },
  },
};
</script>

<style scoped>
.number-input {
  text-align: center;
}

.numbers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

.number-button>.v-btn__content,
.backspace-button>.v-btn__content,
.show-highscore-button>.v-btn__content {
  align-items: center;
  justify-content: center;
  height: 100%;
}

.number-button,
.backspace-button,
.show-highscore-button {
  background: #1e1515;
  color: white;
  font-size: 24px;
  min-height: 70px;
  /* adjusted height */
  line-height: 1;
  border: 1px solid #2e2525;
  cursor: pointer;
  padding: 0 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.number-button:hover,
.backspace-button:hover,
.number-button.v-btn--active,
.backspace-button.v-btn--active {
  background: #2e2525;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
}</style>

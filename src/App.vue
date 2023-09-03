<template>
  <div id="app" ref="appDiv" @keydown="handleKeyDown" tabindex="0">
    <h1 class="center-text margins">What HTTP status code is this cat associated with?</h1>
    <div class="description-box center-text">
      <p>{{ currentDescription }}</p>
    </div>
    <Cat :key="currentCatImage" :imageURL="currentCatImage" />
    <StatusBar :hp="hp" />
    <div :class="['guess-box', lastGuessCorrect + '-flash']" class="center-text">
      <div class="guess">{{ guess || '' }}</div>
    </div>
    <NumberInput class="center-text side-margins" @append="appendGuess" @backspace="backspaceGuess" />
    <transition name="fade" mode="out-in">
      <GameOver :key="gameOverCount" v-if="isGameOver" :score="score" :highScore="highScore" @play-again="gameOver" />
    </transition>
  </div>
</template>

<script>
import Cat from './components/CatImage.vue';
import StatusBar from './components/StatusBar.vue';
import NumberInput from './components/NumberInput.vue';
import GameOver from './components/GameOver.vue';
import HttpCodeDescriptions from './httpCodeDescriptions.js';

export default {
  components: {
    Cat,
    StatusBar,
    NumberInput,
    GameOver,
  },
  computed: {
    currentDescription() {
      const codeObj = this.httpCodeDescriptions.find(obj => obj.code === this.randomCode);
      return codeObj ? codeObj.description : '';
    }
  },
  data() {
    return {
      hp: 5,
      guess: '',
      currentCatImage: `https://http.cat/404`,
      httpCodes: ['100', '101', '102', '103', '200', '201', '202', '203', '204', '206', '207', '300', '301', '302', '303', '304', '305', '307', '308', '400', '401', '402', '403', '404', '405', '406', '407', '408', '409', '410', '411', '412', '413', '414', '415', '416', '417', '418', '420', '421', '422', '423', '424', '425', '426', '428', '429', '431', '444', '450', '451', '497', '498', '499', '500', '501', '502', '503', '504', '506', '507', '508', '509', '510', '511', '521', '522', '523', '525', '530', '599'],
      score: 0,
      highScore: 0,
      isGameOver: false,
      lastGuessCorrect: null,
      httpCodeDescriptions: HttpCodeDescriptions,
      randomCode: 0,
      gameOverCount: 0,
    };
  },
  mounted() {
    this.$refs.appDiv.focus();
    this.newCat();
  },
  methods: {
    appendGuess(number) {
      if (this.guess.length < 3) {
        this.guess += number;
        if (this.guess.length === 3) {
          this.checkGuess();
        }
      }
    },
    backspaceGuess() {
      this.guess = this.guess.slice(0, -1);
    },
    newCat() {
      this.randomCode = this.httpCodes[Math.floor(Math.random() * this.httpCodes.length)];
      this.currentCatImage = `https://http.cat/${this.randomCode}`;
    },
    checkGuess() {
      const currentCode = this.currentCatImage.split('/').pop();
      if (this.guess === currentCode) {
        this.score++;
        this.lastGuessCorrect = 'correct';
        this.newCat();
      } else {
        this.lastGuessCorrect = 'incorrect';
        this.hp--;
        if (this.hp <= 0) {
          if (this.highScore < this.score) {
            this.highScore = this.score;
          }
          this.isGameOver = true;
        }
      }

      setTimeout(() => {
        this.lastGuessCorrect = null;
      }, 1000);

      this.guess = '';
    },
    gameOver() {
      this.hp = 5;
      this.guess = '';
      this.score = 0;
      this.isGameOver = false;
      this.gameOverCount++;

      this.$nextTick(() => {
        this.newCat();
        this.isGameOver = true;
        this.$refs.appDiv.focus();
      });
    },
    handleKeyDown(event) {
      const key = event.key;
      if (key >= '0' && key <= '9') {
        this.appendGuess(key);
      } else if (key === 'Backspace') {
        this.backspaceGuess();
      }
    },
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;400&display=swap');

body,
h1,
div {
  font-family: 'Outfit', sans-serif;
}

.center-text {
  text-align: center;
}

.guess-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  margin: 20px auto;
  background-color: #f4f4f4;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.guess-box {
  transition: background-color 1s ease;
}

.correct-flash {
  background-color: rgba(77, 201, 77, 0.855);
  transition: background-color 1s ease;
}

.incorrect-flash {
  background-color: rgba(238, 39, 39, 0.689);
  transition: background-color 1s ease;
}

.margins {
  margin-top: 10px;
  margin-bottom: 15px;
}

.text-color {
  background: #1e1515bb;
}

.description-box {
  background: #f9f9f9;
  margin-top: 10px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 26px;
}

.side-margins {
  margin-left: 5px;
  margin-right: 5px;
}
</style>


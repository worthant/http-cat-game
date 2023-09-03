<template>
    <v-dialog v-model="dialog" persistent max-width="300">
      <v-card>
        <v-card-title class="headline">Game Over</v-card-title>
        <v-card-text>
          <p>Your Score: {{ score }}</p>
          <p>High Score: {{ highScore }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="playAgain">Play Again</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  
<script>
export default {
    props: {
        score: Number,
        highScore: Number,
    },
    data() {
        return {
            dialog: true,
        };
    },
    methods: {
        playAgain() {
            this.dialog = false;
            this.$emit('play-again');
        },
        created() {
            this.dialog = true;
        },
    },
};
</script>
  
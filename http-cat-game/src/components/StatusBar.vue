<template>
  <div class="status-bar">
    <div v-for="i in maxHp" :key="i" :class="{ 'hp-cell': true, active: i <= hp }"></div>
  </div>
</template>
  
<script>
export default {
  props: {
    hp: Number,
    maxHp: {
      type: Number,
      default: 5,
    },
  },
};
</script>
  
<style scoped>
.status-bar {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

.hp-cell {
  width: 20px;
  height: 20px;
  background-color: grey;
  margin: 2px;
}

.hp-cell.active {
  background-color: red;
}
</style>
  
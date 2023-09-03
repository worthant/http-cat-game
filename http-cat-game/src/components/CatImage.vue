<template>
  <div class="cat-box">
    <div class="cat-image" :style="`background-image: url('${imageURL}');`"></div>
  </div>
</template>
  
<script>
export default {
  props: {
    imageURL: String,
  },
};
</script>
  
<style scoped>
.cat-box {
  border-radius: 25px;
  /* border: 2px solid #73AD21; - for night theme*/
  border: 2px solid #1e1515bb;
  width: 278px;
  height: 200px; 
  margin: auto;
  overflow: hidden;
  backface-visibility: antialiased;
  box-shadow: 0px 0px 20px rgba(58, 58, 58, 0.9);
}

.cat-image {
  background-size: 150% 205%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>


  
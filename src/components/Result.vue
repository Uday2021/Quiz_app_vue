<template>
<div>
  <h1 v-if="this.$route.query.numCorrect<4">Work Hard!! Your score is {{this.$route.query.numCorrect}} out of {{this.$route.query.numTotal}}</h1>
  <h1 v-if="this.$route.query.numCorrect>4">Good Keep it Up!! Your score is {{this.$route.query.numCorrect}} out of {{this.$route.query.numTotal}}</h1>
  <div class="result_screen">
    <h2>Final Result!!!</h2>
    <p >
     <b> Correct Answer:{{this.$route.query.numCorrect}}</b>
    </p>
    <p>
     <b> Total Question:{{this.$route.query.numTotal}}</b>
    </p>
    <b-button @click="back" variant="success">
        Back
      </b-button>
  </div>
</div>
</template>

<script>
export default {
  name: "Result",

  methods:{
    back(){
       this.$router.push({ name: "Home" });
    }
  },
  mounted(){
    console.log(this.$route.query)
    console.log()
  }
};
</script>

<style scoped>
.result_screen
{position: fixed;
  top: 30%;
  width: 40%;
  margin: auto;
  background: #fff;
  box-shadow: 0px 0px 9px -2px #000;
  z-index: 999;
  left: 0px;
  right: 0px;
  padding: 10px;
}

h1{
  color: red;
}


</style>

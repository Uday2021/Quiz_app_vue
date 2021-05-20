<template>
  <div>
    <h5> <b>You can't go back to previous question once you clicked on next</b></h5>
    <b-nav tabs>
      <b-nav-item disabled><b> Quiz App</b></b-nav-item>
      <b-nav-item disabled>Counter: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
      <b-nav-item disabled v-if="numTotal==10"><b> Final_Result : {{numCorrect}}/{{numTotal}}</b></b-nav-item>
      <b-nav-item disabled v-if="numTotal==10 && numCorrect>=5 && numCorrect<=7"><b> Good!! Keep it Up</b></b-nav-item>
      <b-nav-item disabled v-if="numTotal==10 && numCorrect>7"><b> Good!! Keep it Up</b></b-nav-item>
      <b-button @click="Logout"  variant="warning">
        Logout
      </b-button>
    </b-nav>
    
  </div>
  
</template>

<script>
export default {
  props: [
    'numCorrect',
    'numTotal'
  ],
  
  methods:{
     Logout: function(){
        // console.warn("logging out")
         let logout = localStorage.getItem('user-info');
      if(logout)
      {
         localStorage.setItem('user-info','')
      }
       this.$router.push({name:'SignUp'})
      }
  }
}
</script>

<style scoped >
 button{
    margin-left: 1000px;
 }
</style>

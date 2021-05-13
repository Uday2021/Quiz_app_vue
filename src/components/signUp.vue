<template>
<div>
<img class="logo" src="../assets/quiz.jpg"/>
<h1> SignUp </h1>
<div class = "register">
    <input type="text" v-model="name" placeholder="Enter Name"/>
    <input type="email" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <router-link to="/app">
       <button @click="signUp">SignUp</button>
    </router-link>

    

</div>
</div>
</template>

<script>
export default {
  name: 'signUp',
  data(){
      return{
          name:'',
          email:'',
          password:''
      }
  },
  methods:{
      signUp(){
          if(this.name && this.email && this.password){
          localStorage.setItem("user-info",JSON.stringify({
              name:this.name,
              email:this.email,
              password: this.password}))
            // this.$router.push({name:'Home'})
          }
      }
  },
  mounted()
  {
      let user = localStorage.getItem('user-info');
      if(user)
      {
         this.$router.push({name:'Home'}) 
      }
  }
}
</script>

<style>
.logo{
    width: 150px;
}

.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid orange;
}

.register button{
    width: 320px;
    height: 40px;
    border: 1px solid orange;
    color: #fff;
    background-color: orange;
    cursor: pointer;
    border-radius: 4px;
}
</style>
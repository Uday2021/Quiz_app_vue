<template>
<div>
<img class="logo" src="../assets/quiz.jpg"/>
<h1> SignUp </h1>
<p v-if="errors.length">
    <b>Please correct the following error</b>
   <ul>
      <li v-for="error in errors" :key="error.id">
          {{error}}
      </li>
   </ul>
</p>
<form @submit.prevent="signUp" class = "register">
    <input type="text" v-model="name" placeholder="Enter Name" required/>
    <input type="email" v-model="email" placeholder="Enter Email" required/>
    <input type="password" v-model="password" placeholder="Enter Password" required/>
    <button type="submit">SignUp</button>
</form>
    

</div>
</template>

<script>
export default {
  name: "signUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    signUp() {
      if (this.name && this.email && this.password) {
        localStorage.setItem(
          "user-info",
          JSON.stringify({
            name: this.name,
            email: this.email,
            password: this.password,
          })
        );
        this.$router.push({ name: "Home" });
      }
        this.errors= []

      if (!this.name) {
        this.errors.push("name is required");
      }
      if (!this.password) {
        this.errors.push("password is required");
      }
      if (!this.email) {
        this.errors.push("email is required");
      }
      console.warn("errors", this.errors);
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
.logo {
  width: 150px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid orange;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid orange;
  color: #fff;
  background-color: orange;
  cursor: pointer;
  border-radius: 4px;
}
</style>
<template>
<div>
<img class="logo" src="../assets/quiz.jpg"/>
<h1> SignUp </h1>
<div class = "register">
    <input type="text" placeholder="Enter Name"/>
    <input type="email" placeholder="Enter Email"/>
    <input type="password" placeholder="Enter Password"/>
    <button>SignUp</button>

</div>
</div>
</template>

<script>
export default {
  name: 'signUp'
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
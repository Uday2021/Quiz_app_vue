<template>
  <div>
    <Snippet v-show="loader" />
    <Header :numCorrect="numCorrect" :numTotal="numTotal" />

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>

      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import Header from "./Header.vue";
import QuestionBox from "./QuestionBox.vue";
import Snippet from "./Snippet";

export default {
  name: "Home",
  created() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
  components: {
    Header,
    QuestionBox,
    Snippet,
    
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      loader: true,
    };
  },
  methods: {
    next() {
      this.index++;
      if (this.index <= 10) {
        this.numTotal++;
      
      }
    },
  
  
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      // this.numTotal++
    },
  },
  mounted() {
    this.loader = true;
    fetch("https://opentdb.com/api.php?amount=10&category=27&type=multiple", {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.loader = false;
        this.questions = jsonData.results;
      });
  },

  
};
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
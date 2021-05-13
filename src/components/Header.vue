<template>
  
  <div>
    <h5> <b>You can't go back to previous question once you clicked on next</b></h5>
    <b-nav tabs>
      <b-nav-item disabled><b> Quiz App</b></b-nav-item>
      <b-nav-item disabled>Counter: {{ numCorrect }}/{{ numTotal }}</b-nav-item>
      <b-nav-item disabled v-if="numTotal==10"><b> Final_Result : {{numCorrect}}/{{numTotal}}</b></b-nav-item>
    </b-nav>
    
  </div>
  
</template>

<script>
export default {
  props: [
    'numCorrect',
    'numTotal'
  ]
}
</script>

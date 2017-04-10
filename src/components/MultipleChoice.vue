<template>
  <div class="form-group" v-if="visibility == answers.id">
    <h2>{{answers.question}}</h2>
    <div class="form-item" v-for="answer in answers.answers">
      <input type="checkbox" :value="answer.id" v-model="userChoices" :disabled="valid" ><span>{{answer.title}}</span>
    </div>
    <a href="#" class="continue" @click.prevent="validation" v-if="!valid"><span>></span>Valider</a>
    <template v-else>
      <a href="#" class="continue" @click.prevent="goodAnswer" v-if="toggle"><span>></span>Voir les bonnes réponses</a>
      <a href="#" class="continue" @click.prevent="userAnswer" v-else><span>></span>Voir ce que vous avez répondu</a>
      <a href="#" class="continue" @click.prevent="next" v-if="!getResult"><span>></span>Continue</a>
    </template>
  </div>
</template>

<script type="text/babel">
  export default{
    props: ['answers'],
    data(){
      return{
        userChoices: [],
        valid: false,
        memo: [],
        toggle: true
      }
    },
    computed:{
      setScore(){
        let score = 0
        this.userChoices.forEach(answer =>{
            this.answers.answers.forEach(solution =>{
              if(solution.id == answer){
                (solution.value) ? score = score +10 : score
              }
            })
        })
        return score
      },
      visibility(){
        return this.$store.getters.getVisibility
      },
      getResult(){
        return this.$store.getters.getResults
      }
    },
    methods:{
      validation(){
        if(this.userChoices.length > 0){
          let answers = this.answers.answers
          let arrayAnswers = []
          this.userChoices.forEach((choice, index) =>{
            arrayAnswers[index] = answers.filter(answer=>{
              return answer.id == choice
            })
          })

          let userAnswers = {
            'question': this.answers.id,
            'answers': arrayAnswers
          }

          this.$store.dispatch('setAnswers', userAnswers)
          this.$store.dispatch('setScore', this.setScore)
          this.$store.dispatch('showResults')
          this.valid = true
        }
      },
      goodAnswer(){
        this.toggle = false
        let goodAnswers = []
        this.answers.answers.forEach(answer =>{
          if(answer.value){
            goodAnswers.push(answer.id)
          }
        })
          this.memo = this.userChoices
          this.userChoices = goodAnswers
      },
      userAnswer(){
        this.toggle = true
        this.userChoices = this.memo
      },
      next(){
        this.$store.dispatch('setVisibility')
      }
    }
  }
</script>

<style lang="scss">
  @import "../../static/scss/variable.scss";

  .form-group{
    padding:2em 1em;
  }

</style>

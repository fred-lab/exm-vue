<template>
  <div class="form-group" v-if="visibility == answers.id">
    <h2>{{answers.question}}</h2>
    <div class="form-item" v-for="answer in answers.answers">
      <input type="radio" :value="answer.id" v-model="userChoice" :disabled="valid" ><span>{{answer.title}}</span>
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
        userChoice: 0,
        valid: false,
        memo: [],
        toggle: true
      }
    },
    computed:{
      setScore(){
        let score = 0
          this.answers.answers.forEach(solution =>{
            if(solution.id == this.userChoice){
              (solution.value) ? score = score +20 : score
            }
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
        if(this.userChoice > 0){
          let userAnswers = {
            'question': this.answers.id,
            'answers': this.answers.answers.filter(answer =>{
              return answer.id == this.userChoice
            })
          }

          this.$store.dispatch('setAnswers', userAnswers)
          this.$store.dispatch('setScore', this.setScore)
          this.$store.dispatch('showResults')
          this.valid = true
        }
      },
      goodAnswer(){
        this.toggle = false
        this.memo = this.userChoice
        this.answers.answers.forEach(answer =>{
          if(answer.value){
            this.userChoice = answer.id
          }
        })
      },
      userAnswer(){
        this.toggle = true
        this.userChoice = this.memo
      },
      next(){
        this.$store.dispatch('setVisibility')
      }
    }
  }
</script>

<style lang="scss">

</style>

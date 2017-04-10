<template>
  <section class="container">
    <header>
      <div class="wrapper">
        <div class="intro">
          <h1>Quiz de validation</h1>
          <p>Ce contenu et celui qui suit n’est visible qu’une fois le bouton CONTINUER précédent activé.
            De même, le contenu suivant chaque bouton ci-dessous n’est affiché qu’une fois le bouton activé.
            L’image en fond de ce titre ainsi que celle du titre en haut de page s’affiche sur toute la largeur de l’écran.</p>
        </div>
      </div>
    </header>
    <main class="quiz">
      <form>
        <template v-for="question in getQuiz">
          <template v-if="question.type == 'multiple'">
            <multiple-choice :answers="question"></multiple-choice>
          </template>
          <template v-else>
            <single-choice :answers="question"></single-choice>
          </template>
        </template>
      </form>
      <div class="score">
        <span>Score : {{displayScore}} / {{getMAxScore}}</span>
      </div>
      <div class="results" v-if="getResult">
        <span v-if="displayScore >= 80">Bravo, vous avez validé votre formation</span>
        <span v-else>Vous n'avez pas obtenu assez de bonne réponse pour valider votre formation, nous vous invitons à revoir ce module et à recommencer le quiz de validation</span>
      </div>
    </main>
  </section>
</template>

<script type="text/babel">
  export default{
    data(){
      return{

      }
    },
    computed: {
      getQuiz(){
        return this.$store.getters.getQuiz
      },
      displayScore(){
        return this.$store.getters.getScore
      },
      getResult(){
        return this.$store.getters.getResults
      },
      getMAxScore(){
        return this.$store.getters.getQuizLength * 20
      }
    }
  }
</script>

<style lang="scss">
  @import "../../static/scss/variable.scss";

  .quiz form{
    height: 18vw;
    margin-top: 2em;
    background-color: $primary-color;
  }

  .score{
    display: inline-block;
    align-self: center;
    width: 10%;
    margin-top: 1em;
    padding: 0.5em;
    text-align: center;
    border-radius: 0.3em;
    background-color: $time-color;
  }

  .results{
    margin-top: 1em;
    padding: 2em;
    color: $primary-color;
    background-color: $quiz-color;
  }

</style>

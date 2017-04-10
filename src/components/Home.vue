<template>
  <section class="container">
    <header>
      <div class="wrapper">
        <div class="intro">
          <div class="logo">
            <span class="bold">exm</span><span>company</span>
          </div>
          <h1>Evalution technique</h1>
          <p>Ce test vise à évaluer l’adéquation de vos compétences techniques à nos besoins. Ce n’est pas le seul critère dont nous
            nous servirons, ni un concours. L’idée n’est pas d’évaluer la parfaite adéquation entre la demande et le résultat, mais
            plutôt la pertinence de vos choix et la qualité du code et de l’architecture. Vous êtes libres d’interpréter, de proposer,
            d’argumenter vos propositions. Nous savons que l’expérience de certaines technologies peut faire défaut, ce n’est pas
            rédhibitoire si la démarche est bonne.</p>
        </div>
      </div>
    </header>
    <main>
      <div class="mission">
        <h2>Votre mission</h2>
        <p>À partir de cette maquette, <b>créer la page HTML</b> correspondante, y compris cette introduction, en respectant les
          contraintes suivantes :</p>
      </div>
      <div class="instruction">
        <div class="design-instruction card">
          <img src="../../static/img/icon-responsive.svg.png" alt="icône responsive">
          <h3>Un design responsive</h3>
          <p>La mise en page et les tailles des caractères s'adapteront intelligement selon que la page est vue sur PC ou smartphones.</p>
        </div>
        <div class="quiz-instruction card">
          <img src="../../static/img/icon-quiz.svg.png" alt="icône quiz">
          <h3>Un quizz dynamique</h3>
          <p>dont les données sont stockées dans un fichier JSON.</p>
        </div>
        <div class="time-instruction card">
          <img src="../../static/img/icon-clock.png" alt="icône clock">
          <h3>Un temps limité</h3>
          <p>Si tout ne vous semble pas faisable dans le temps imparti, faites des choix qui vous paraissent correspondre à vos compétences et à nos besoins</p>
        </div>
      </div>
      <router-link :to="{name: 'quiz'}" class="continue"><span>></span> Continuer</router-link>
    </main>
  </section>
</template>

<script type="text/babel">
  export default{
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss">
  @import "../../static/scss/variable.scss";

  *{
    box-sizing: border-box;
    font-size: 18px;
    line-height: 1.5em;
  }

  a{
    text-decoration: none;
  }

  h1{
    font-family: $font-bold;
    margin: 1.5em 0 1em;
  }

  p{
    font-family: $font-light;
  }

  body{
    margin: 0;
  }

  .container{
    display: flex;
    flex-flow: column;
    align-items: center;

    background-color: $secondary-color;
  }
  header{
    background-position: center;
    background-size: cover;
    background-image: url("../../static/img/bg.jpg");
  }
  .wrapper{
    display: flex;
    justify-content: center;
    height: 22em;

    color: $primary-color;
    background-color: rgba(16,26,46,0.6);

    .intro{
      width: 80%;

      .logo{
        width: 10em;
        height: 4.5em;
        padding-top: 2.5em;

        font-family: $font-light;
        text-align: center;
        background-color: $danger-color;

        span{
          font-size: 1.2em;
        }

        .bold{
          font-family: $font-bold;
         }
      }
    }
  }

  main{
    width: 82%;
    padding-bottom: 10em;

    .mission{
      margin: 1.2em 0 1em;
      padding: 0.8em;
      background-color: $primary-color;
    }
  }
  h2{
    margin: 0;
    color: $danger-color;
  }
  main,
  .instruction,
  .card{
    display: flex;
    flex-flow: column;
  }
  .design-instruction{
    background-color: $design-color;
  }
  .quiz-instruction{
    color: $primary-color;
    background-color: $quiz-color;
  }
  .time-instruction{
    background-color: $time-color;
  }
  .design-instruction,
  .quiz-instruction,
  .time-instruction{
    margin: 1em;

    h3{
      align-self: center;
      padding: 0 1em;
      font-size: 2em;
    }

    p{
      align-self: center;
      padding: 0 1em;
    }

    img{
      align-self: center;
      max-width: 6.6em;
      padding: 2.8em 0;
    }
  }
  .continue{
    display: inline-flex;
    align-self: center;
    height: 2.2em;
    line-height: 2.4em;
    margin: 1em 0;
    padding: 0 1em;
    border-radius: 0.3em;
    font-family: $font-bold;
    background-color: $danger-color;
    color: $primary-color;

    span{
      line-height: 2.2em;
      padding: 0 0.4em;
    }
  }

  @media only screen and (min-width: 800px){
    .instruction{
      flex-flow: row;
    }
    .design-instruction,
    .quiz-instruction,
    .time-instruction {
      width: 30%;

      p{
        align-self: flex-start;
      }
    }
  }
</style>

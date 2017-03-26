<template>
  <div id="app" class="container">
    <router-view></router-view>
    <hr />
    <h4> Vue Authors.</h4>
    <p>This small demonstration application is my take on how to do CRUD actions combining:</p>
    <ul>
      <li>vue</li>
      <li>vue-router</li>
      <li>vue-router-sync</li>
      <li>vuex</li>
      <li>vuelidate</li>
    </ul>
    <p>It was created using the <a href="https://github.com/ssouron/vuestart">Vue Start</a> template </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass">

  // Bootstrap
  $icon-font-path: '../node_modules/bootstrap-sass/assets/fonts/bootstrap/'
  //$link-color: #42b983;
  $brand-success: #42b983
  @import '../node_modules/bootstrap-sass/assets/stylesheets/bootstrap'

  // font awesome
  $fa-font-path: '../node_modules/font-awesome/fonts/'
  @import '../node_modules/font-awesome/scss/font-awesome.scss'

  //some styling adaptations
  body
    margin: 20px
  h1
    color: #42b983
  p
    text-align: left
</style>

<template>
  <div id="app" class="container">
    <br />
    <navbar></navbar>
    <br />
    <router-view></router-view>
    <hr />
    <h4> This is an amazing application ! </h4>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: { Navbar }
}
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
  h1
    color: #42b983
  p
    text-align: left
</style>

<template>
  <nav class="navbar navbar-default">
    <a class="navbar-brand" href="/"> {{$store.state.appTitle}} {{$store.state.appVersion}}</a>
    <ul class="nav navbar-nav">
      <li>
        <router-link to="/" class="nav-item nav-link"> Home </router-link>
      </li>
      <li><router-link to="/people" class="nav-item nav-link"> People </router-link></li>
    </ul>
  </nav>
</template>

<script>
  export default {
  }
</script>

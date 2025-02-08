<template>
  <nav class="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/panel">Panel</router-link>
  </nav>

  <router-view /> <!-- Aquí se mostrarán Home o Login según la ruta -->
</template>

<script setup>
</script>

<style>
  .nav {
    display: flex;
    gap: 1rem;
  }
</style>
<script setup>

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  location.reload()
}
</script>

<template>
  <nav class="nav">
    <router-link to="/" class="btn">Inicio</router-link>
    <router-link to="/login" class="btn">Login</router-link>
    <router-link to="/panel" class="btn">Panel</router-link>
    <router-link @click="logout" to="/" class="logout-btn">Cerrar sesión</router-link>
  </nav>

  <router-view /> <!-- Aquí se mostrarán Home o Login según la ruta -->
</template>

<style scoped>
  .nav {
    display: flex;
    gap: 1rem;
  }
  .logout-btn {
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  color: #fff;
  background-color: #dc3545;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

  .logout-btn:hover {
    background-color: #c82333;
  }

  .btn{
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    color: #fff;
    background-color: #3498db;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
  .btn:hover {
  background-color: #2980b9; /* Azul más oscuro para hover */
}
</style>
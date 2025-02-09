<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'


const router = useRouter()
const user = ref('');
const password = ref('');
const errorMessage = ref('')

const url = 'http://localhost:3000/login';

const login = async (event) => {
  event.preventDefault()
  try {
    const response = await axios.post(url, {
      user: user.value,
      password: password.value
    })
    const token = response.data
    localStorage.setItem('token', token)
    localStorage.setItem('user', user.value)

    router.push('/panel')
  } catch (error) {
    errorMessage.value = 'Credenciales incorrectas'
  }
}
</script>

<template>
  <div>
    <h1 class="titulo">login</h1>
    <form id="login" @submit="login">
        <input type="text" v-model="user" placeholder="Usuario"/>
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click="saveText">Ingresar</button>
        <p>{{ errorMessage }}</p>
    </form>
  </div>
</template>

<style>
.titulo {
    text-align: center;
}

#login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

</style>
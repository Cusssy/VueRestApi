<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'


const router = useRouter()
const name = ref('');
const user = ref('');
const password = ref('');
const errorMessage = ref('')

const url = 'http://localhost:3000/createAccount';

const register = async (event) => {
  event.preventDefault()
  try {
    const response = await axios.post(url, {
        name: name.value,
        user: user.value,
        password: password.value
    })
    const token = response.data
    localStorage.setItem('token', token)
    localStorage.setItem('user', name.value)

    router.push('/panel')
  } catch (error) {
    errorMessage.value = 'Credenciales incorrectas'
  }
}


</script>

<template>
<div>
    <h1 class="titulo">Registro</h1>
    <form id="register" @submit="register">
        <input type="text" v-model="name" placeholder="Nombre"/>
        <input type="text" v-model="user" placeholder="Usuario"/>
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click="saveText">Registrar</button>
    </form>
</div>
</template>


<style>
#register {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
</style>
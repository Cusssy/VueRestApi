<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { onMounted } from 'vue'
import  user from './login.vue'

const balance = ref('')

// Hacer una petición para un usuario con ID especifico

function getUser() {
    return localStorage.getItem('user')
}

async function getBalance() {
try {
    const user = localStorage.getItem('user')
    const response = await axios.get('http://localhost:3000/balance/'+ user)
    balance.value = response.data
    console.log(balance.value)
} catch (error) {
    console.log(error)
}
}
onMounted(() => {
    getBalance()
})


</script>

<template>
    <div class="panel">
        <h1>Bienvenido {{ getUser() }}!</h1>

        <p>Este es tu balance bro: {{ balance }}</p> 
    </div>
</template>


<style scoped>
.panel {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
}
</style>
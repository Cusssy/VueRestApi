<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { onMounted } from 'vue'

const balance = ref('')
const user = ref('')
// Hacer una petición para un usuario con ID especifico



async function getUser() {
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    try {
        const response = await axios.get('http://localhost:3000/token', config)
        user.value = response.data.user // Guardar el valor en la ref
        return response.data.user
    }
    catch (error) {
        console.log(error)
    }    
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
        getUser()
    });

</script>

<template>
    <div class="panel">
        <h1>Bienvenido {{ user }}!</h1>

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
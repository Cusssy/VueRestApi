<script setup>
import { ref, onMounted } from 'vue'
import { getBalance } from '../composables/getBalance'
import TransferForm from '../components/TransferForm.vue'
import { getName } from '../composables/getName'


const balance = ref('Loading...')
const name = ref(localStorage.getItem("name"))

function getUser() {
    const user = localStorage.getItem('user') 
    return user
}

async function updateBalance() {
    balance.value = await getBalance()
}

onMounted(async () => {
    updateBalance()
    name.value = await getName()
});
</script>

<template>
    <div class="panel">
        <h1>Bienvenido {{ name }}!</h1>
        <p>Este es tu balance bro: {{ balance }}</p> 
    </div>
    <div>
        <TransferForm @transfer-complete="updateBalance" />
    </div>
</template>


<style scoped>
.panel {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
}
</style>
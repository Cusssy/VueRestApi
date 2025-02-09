<script setup>
import { ref, onMounted } from 'vue'
import { getBalance } from '../composables/getBalance'
import TransferForm from '../components/TransferForm.vue'

const balance = ref('')

function getUser() {
    const user = localStorage.getItem('user') 
    return user
}

onMounted(async () => {
    balance.value = await getBalance()
});

console.log(getUser())
</script>

<template>
    <div class="panel">
        <h1>Bienvenido {{ getUser() }}!</h1>
        <p>Este es tu balance bro: {{ balance }}</p> 
    </div>
    <div>
        <TransferForm />
    </div>
</template>


<style scoped>
.panel {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
}
</style>
<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { getBalance } from '../composables/getBalance'


const emit = defineEmits(['transferComplete'])
const user = ref('')
const amount = ref(0)
const status = ref('')


async function transfer() {
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(config)

    try {
        const response = await axios.post(
            `http://localhost:3000/transfer/${user.value}/${amount.value}`,
            {}, // cuerpo vacío o los datos que necesites enviar
            config
        );
        console.log("response: "+response.data)
        status.value = response.data
        emit('transferComplete')
        return response.data
    }
    catch (error) {
        console.log(error)
        status.value = 'Error en la transferencia'
    }    
}


</script>

<template>
  <div>
    <h1 class="titulo">Transferencia</h1>
    <form id="transfer">
        <p>Transferir a:</p>
        <input type="text" v-model="user" placeholder="Usuario"/>
        <p>Monto:</p>
        <input type="number" v-model="amount" placeholder="Monto"/>
        <button type="button" @click="transfer">Transferir</button>
        <p>{{ status }}</p>
    </form>
  </div>
</template>


<style>
#transfer {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;
    gap: 10px;
}
</style>
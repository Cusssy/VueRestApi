import { ref } from 'vue';
import axios from 'axios'

const balance = ref('')

export async function getBalance() {
    try {
        const user = localStorage.getItem('user')
        const response = await axios.get('http://localhost:3000/balance/'+ user)
        balance.value = response.data
        return balance.value // Devolvemos directamente el valor
    } catch (error) {
        console.log(error)
        return null // Es buena práctica devolver algo en caso de error
    }
}
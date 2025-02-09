import { ref } from 'vue';
import axios from 'axios'

const name = ref('')

export async function getName() {
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    try {
        if (localStorage.getItem("name")) {
            name.value = localStorage.getItem("name")
            return name.value
        }else{
                    //const response = await axios.get('http://localhost:3000/balance/'+ user)
        const response = await axios.post(
            `https://9vfnpg8x-3000.uks1.devtunnels.ms/getName`,
            {}, // cuerpo vacío o los datos que necesites enviar
            config
        );
        name.value = response.data
        localStorage.setItem("name", name.value)
        console.log('Nombre solicitado')
        return name.value // Devolvemos directamente el valor
        }
    } catch (error) {
        console.log(error)
        return null // Es buena práctica devolver algo en caso de error
    }

}
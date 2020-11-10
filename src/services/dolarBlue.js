import axios from 'axios'

const url = 'https://api-contenidos.lanacion.com.ar/json/V3/economia/cotizacionblue/DBLUE'

const getBlue = async () => {
    const response = await axios.get(url)
    console.log(response.data)
    return response.data
}

export default getBlue
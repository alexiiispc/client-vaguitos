import React from 'react'
import murcielago from './murcielago'
import axios from 'axios'

const handleQuery = async (query,callback) => {
    const token = murcielago("LKNlknslnLNlNlnLnLKNlkNyfTXjgcf")
    let data = {
        q: murcielago(query)
    }
    try {
        const res = await axios.post(`/api/t/${token}`, data);
        callback(res.data)
    } catch (error) {
        console.log(error);
    }
}
export default handleQuery

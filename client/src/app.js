const axios = require('axios');

const getUsers = async () => {
    try {
        const res = await axios.get("http://localhost:5000/users"); 
        for(const data in res.data){
            const index = parseInt(data);
            console.log(`${index}:\n ID: ${res.data[data].id}. Name: ${res.data[data].name}. Age: ${res.data[data].age}.`);
        }
    } catch (err) {
        console.log(err);
    }
}

getUsers()
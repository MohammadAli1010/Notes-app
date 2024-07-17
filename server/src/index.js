const express = require('express');
const app = express();
require('dotenv');
require('./db');

app.get('/',(req, res)=>{
    res.send('`Hello CipherSchools!')
});

const PORT = process.env.PORT || 8080;

app.listen(PORT,() =>{
    console.log('Server is running at 3001 port')
})
const express = require('express');
const app = express();
const cors = require('cors');
const { default: axios } = require('axios');




app.use(cors( {
    origin:'*',
    // methods:["GET","POST"]
}))

const PORT = 4000


app.get('/api/v1/pages', async (req,res)=>{
    const resp = await axios.get('https://api.londonstockexchange.com/api/v1/pages?path=home&parameters=')
   
    res.status(200).send(resp.data);
})
app.get('/api/gw/feedhandler/token/saml', async (req,res)=>{
    const resp = await axios.get('https://api.londonstockexchange.com/api/v1/pages?path=home&parameters=')
   
    res.status(200).send(resp.data);
})
app.get('/api/v1/components/refresh', async (req,res)=>{
    const resp = await axios.get(' https://api.londonstockexchange.com/api/v1/components/refresh')
   
    res.status(200).send(resp.data);
})

app.listen(PORT)
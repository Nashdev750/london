const express = require('express');
const app = express();
const cors = require('cors');
const { default: axios } = require('axios');




app.use(cors( {
    origin:'*',
    // methods:["GET","POST"]
}))

const PORT = 4000
app.use(express.json())

app.get('/api/v1/pages', async (req,res)=>{
    console.log(req.query.path)
    const resp = await axios.get('https://api.londonstockexchange.com/api/v1/pages?path='+req.query.path+'&parameters=')
   
    res.status(200).send(resp.data);
})
app.get('/api/gw/feedhandler/token/saml', async (req,res)=>{
    const resp = await axios.get('https://api.londonstockexchange.com/api/gw/feedhandler/token/saml')
   
    res.status(200).send(resp.data);
})
app.post('/api/v1/components/refresh', async (req,res)=>{
    const resp = await axios.post(' https://api.londonstockexchange.com/api/v1/components/refresh',req.body)
    
    res.status(200).send(resp.data);
})

app.listen(PORT)
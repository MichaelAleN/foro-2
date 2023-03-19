const express =  require('express')
const app = express()
const port = 300

app.get('/', (rep, res)=> {
    res.send('Hola personitas bellas')
})

app.listen(port, ()=> {
    console.log('Ejemplo app lista de port ${port}')
})
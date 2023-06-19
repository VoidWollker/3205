const serverData = require('./serverData.json')
const {Router} = require('express')

const appRouter = Router()

appRouter.get('/', (req, res) =>{
    const {email, number} = req.query
    setTimeout(() => {
    try{
        const result = serverData.filter(data =>{
            return email !== '' && number !== '' 
                ? email === data.email && number === data.number
                : email === data.email || number === data.number
        })
        res.status(200).json(result)
    }
    catch(err){
        res.status(400).json(err)
    }}, 5000)
})

module.exports = appRouter
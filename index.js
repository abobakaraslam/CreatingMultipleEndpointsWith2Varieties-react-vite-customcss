//File: index.js in root directory
 
import express from "express"
import courseRouter from './myFiles/course.js';
import exerciseRouter from './myFiles/exercise.js';
import resultRouter from './myFiles/result.js';
const app = express()
const port = 5000
 
app.get('/', (req, res) => {
    res.send('Main page')
})
app.use('/web', courseRouter)
app.use('/web/exercise', exerciseRouter)
app.use('/web/exercise/result', resultRouter)
 
app.listen(port)
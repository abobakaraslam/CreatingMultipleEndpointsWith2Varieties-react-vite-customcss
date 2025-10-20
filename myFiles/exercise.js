//File: exercise.js in root/myFiles/ directory

import express from "express"
const myRouter = express.Router()

myRouter.get('/e1', (req, res) => {
    res.send('Exercises 1, 2, 4')
})
//exporting so that it can access from other files
export default myRouter;
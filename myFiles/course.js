//File: course.js in root/myFiles/ directory

import express from "express"
const myRouter = express.Router()

myRouter.get('/', (req, res) => {
    res.send('Web Development')
})
//exporting so that it can access from other files
export default myRouter;
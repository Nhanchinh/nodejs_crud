import express, { Router } from "express";
let route = express.Router()
import apiController from '../controller/apiController'
const initApiRoute = (app) => {

    route.get('/user', apiController.getAllUsers)
    route.post('/createAPi-user', apiController.createNewApiUser)
    route.put('/update-user', apiController.updateApiUser)
    route.delete('/delete-user/:id', apiController.deleteApiUser)
    return app.use('/api/v1/', route)


}
export default initApiRoute



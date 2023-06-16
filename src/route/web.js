import express, { Router } from "express";
import homeController from '../controller/homeController'
let route = express.Router()
const initWebRoute = (app) => {
    route.get('/', homeController.getHomePage)
    route.get('/detail/user/:id', homeController.getDetailPage)
    route.post('/create-new-user', homeController.createNewUser)
    route.post('/update-user', homeController.updateUser)
    route.post('/delete-user', homeController.deleteUser)
    route.get('/edit-user/:id', homeController.editUser)
    route.get('/upload', homeController.uploadFile)
    route.get('/about', (req, res) => {
        res.send('my name is than chinh')
    })
    return app.use('/', route)


}
export default initWebRoute



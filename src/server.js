import express from 'express';
import configViewengine from './configs/ViewEngine';
import initWebRoute from './route/web';
import connection from './configs/connectDB';
import initApiRoute from './route/api';
// import connection from './configs/connectDB';
const app = express();
require('dotenv').config();
var morgan = require('morgan')


const port = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//setup viewEngine
configViewengine(app);

initWebRoute(app);

initApiRoute(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

import pool from "../configs/connectDB";
import Multer from "multer";
import path from "path"

var appRoot = require("app-root-path")


//import pool from "../configs/connectDB";
let getHomePage = async (req, res) => {


    const [rows, fields] = await pool.execute(`SELECT * FROM users`);
    //console.log('>> check pool ', rows)
    return res.render('./index.ejs', { dataUser: rows })

}

let getDetailPage = async (req, res) => {
    let id = req.params.id
    let [user, fields] = await pool.execute('select * from users where id= ?', [id])


    return res.send(JSON.stringify(user));
}

let createNewUser = async (req, res) => {
    //console.log('check req', req.body)
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let address = req.body.address;
    //let { firstName, lastName, email, address } = req.body

    //INSERT INTO table_name (column1, column2, column3, ...)
    await pool.execute('INSERT INTO users(firstName,lastName, email, address) VALUES (?,?,?,?)', [firstName, lastName, email, address]
    );
    return res.redirect('/')

}
let deleteUser = async (req, res) => {

    let userid = req.body.userId
    await pool.execute('DELETE FROM users WHERE id=?', [userid])
    return res.redirect('/')
}

let editUser = async (req, res) => {
    let id = req.params.id
    let [user, fields] = await pool.execute('select * from users where id =? ', [id])

    return res.render("./update.ejs", { dataUser: user[0] })
}
let updateUser = async (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let address = req.body.address;
    let idUser = req.body.id

    await pool.execute('UPDATE users set firstName=?,lastName=?,email=?,address=? where id=?', [firstName, lastName, email, address, idUser])
    return res.redirect('/')
}
let uploadFile = (req, res) => {
    res.render('uploadFile.ejs')
}

module.exports = {
    getHomePage,
    getDetailPage,
    createNewUser,
    deleteUser,
    editUser,
    updateUser,
    uploadFile

}
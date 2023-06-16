import pool from "../configs/connectDB";


let getAllUsers = async (req, res) => {

    const [rows, fields] = await pool.execute(`SELECT * FROM users`);

    return res.status(200).json({
        message: 'ok',
        data: rows
    }
    )
}

let createNewApiUser = async (req, res) => {

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let address = req.body.address;
    //let { firstName, lastName, email, address } = req.body

    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing body',

        }
        )
    }


    //INSERT INTO table_name (column1, column2, column3, ...)
    await pool.execute('INSERT INTO users(firstName,lastName, email, address) VALUES (?,?,?,?)', [firstName, lastName, email, address]
    );
    return res.status(200).json({
        message: 'ok',

    }
    )

}
let updateApiUser = async (req, res) => {


    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let address = req.body.address;
    let idUser = req.body.id

    if (!firstName || !lastName || !email || !address || !idUser) {
        return res.status(200).json({
            message: 'missing body',

        }
        )
    }




    await pool.execute('UPDATE users set firstName=?,lastName=?,email=?,address=? where id=?', [firstName, lastName, email, address, idUser])

    return res.status(200).json({
        message: 'ok',
    }
    )
}
let deleteApiUser = async (req, res) => {


    let idUser = req.params.id

    if (!idUser) {
        return res.status(200).json({
            message: 'missing body',

        }
        )
    }


    await pool.execute('DELETE FROM users WHERE id=?', [idUser])

    return res.status(200).json({
        message: 'ok',
    }
    )


}



module.exports = {
    getAllUsers, createNewApiUser, updateApiUser, deleteApiUser
}
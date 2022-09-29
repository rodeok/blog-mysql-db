import {db } from "../db.js"
import bcrypt from 'bcryptjs';
export const register = (req, res) => {
    const q = "SELECT * FROM user WHERE email = ? OR username = ?"
    db.query(q,[req.body.email, req.body.username], (err,data)=>{
        if (err) throw err
        if (data.length) return res.status(409).json("User already exists")

        // hash password
        const salt = bcrypt.genSaltSync(10)
        const hash  = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO user(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]
        db.query(q,[values], (err,res) =>{
            if (err) return res.json(err);
            return res.status(200).json("User Have Been Created")
        })
    })
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
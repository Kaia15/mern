const user = require('../models/user.model')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const getUser = (query) => {
    return (query)
}

const createUser = async (body) => {
    const { password, ...rest}  = body
    let hashPassword;
    hashPassword = bcrypt.hashSync(password, 8);
    const newUser = await user.create({
        password: hashPassword,
        ...rest
    })
    // console.log(newUser)
    return newUser
}

const findUser = async(body) => {
    const { email, password } = body
    console.log(email, password)
    let existingUser
    try {
        existingUser = await user.findOne({emai: email})
        console.log(existingUser)
    } catch(err) {
        return next(err)
    }
    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password)
        console.log(isValidPassword)
    } catch(err) {
        return next(err)
    }
    return isValidPassword
}

module.exports = {
    getUser,
    createUser,
    findUser
}
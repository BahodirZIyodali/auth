import { dataFetcher } from "./utils/db.js";


//  login qilish
const login = `SELECT * FROM users WHERE email = $1;`; 
//  registratisiya qilish
const register = `INSERT INTO users( user_name, email,user_password) VALUES ($1, $2, $3);`;





//  functionlar dataFetcherni ichiga yuboriladi ,query va params
const userLogin = (...params) => dataFetcher(login,params);
const userRegister = (...params) => dataFetcher(register,params);




export {
    userLogin,
    userRegister,
}
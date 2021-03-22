import axios from 'axios'
import { authHeader } from './auth.service';


const postUser = async (username, password)=>{
    return await axios.post(`https://coetus.herokuapp.com/api/users`,{username,password})
}
const putUser= async (user)=>{
    return await axios.put(`https://coetus.herokuapp.com/api/users`,user, {headers: authHeader()})
}
const getUserId = async (user_id) => {
    return await axios.get(`https://coetus.herokuapp.com/api/users/:${user_id}`)
}
export { postUser, putUser, getUserId }
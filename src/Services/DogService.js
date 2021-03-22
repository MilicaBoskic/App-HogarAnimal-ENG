import axios from 'axios';

const getAllBreeds = async () => {
    let response = await axios.get ('https://dog.ceo/api/breeds/list');
    console.log(response.data.message)
    return response.data.message;
}
// https://api.thecatapi.com/v1/images/search


 const getImages = async () => { 

    let response = await axios.get ('https://dog.ceo/api/breeds/image/random/48');
    console.log(response.data.message)
    return response.data.message;
}

const getCatImages = async () => { 

    let response = await axios.get ('https://api.thecatapi.com/v1/images/search');
    console.log(response.data)
    return response.data;
}

const getUsers = async () => {
    return await axios.get ('https://coetus.herokuapp.com/api/users')
}

const getUser = async (user_id) => {
    return await axios.get (`https://coetus.herokuapp.com/api/users/${user_id}`)
}

const registration = async (user) => {
    return await axios.put (`https://coetus.herokuapp.com/api/users`, user)
}

const logIn = async (username,password) => {
    return await axios.post (`https://coetus.herokuapp.com/api/users`, {username, password})
}

export { getAllBreeds, getImages, getUsers, getUser, registration, logIn, getCatImages }
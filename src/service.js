import axios from 'axios';
//http://localhost:3004
//or
//https://address-dev-json-server.herokuapp.com/
const server = 'https://address-dev-json-server.herokuapp.com/';

const getDevelopers = async () => await axios.get(`${server}/devs`);

export { getDevelopers };

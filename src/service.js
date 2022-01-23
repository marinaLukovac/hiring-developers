import axios from 'axios';

// const server = 'https://address-dev-json-server.herokuapp.com';

const server = 'http://localhost:3004';

const getDevelopers = async () => await axios.get(`${server}/devs`);
const postDeveloper = developer => axios.post(`${server}/devs`, developer);

const putDeveloper = developer => axios.post(`${server}/devs`, developer);

export { getDevelopers, postDeveloper, putDeveloper };

import axios from 'axios';

const server = 'https://address-dev-json-server.herokuapp.com';

// const server = 'http://localhost:3004';

const getDevelopers = async () => await axios.get(`${server}/devFin`);
const postDeveloper = ({ ...developer }) => axios.post(`${server}/devFin`, developer);

const putDeveloper = (developer, id) => axios.put(`${server}/devFin/${id}`, developer);
const deleteDeveloper = id => axios.delete(`${server}/devFin/${id}`);

export { getDevelopers, postDeveloper, putDeveloper, deleteDeveloper };

import client from "./client";

const endPoint = "/user";
const getDetails = () => client.get(endPoint);

export default { getDetails };

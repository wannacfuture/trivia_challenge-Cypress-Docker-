import baseAPI from "./baseAPI";

const getData = () => baseAPI.get("?amount=10&type=multiple");

// eslint-disable-next-line import/no-anonymous-default-export
export default { getData };

import baseAPI from "./baseAPI";

const getData = () => baseAPI.get("QAs");

// eslint-disable-next-line import/no-anonymous-default-export
export default { getData };

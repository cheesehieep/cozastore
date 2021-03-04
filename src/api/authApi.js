import http from "./axiosHttp";

const login = (data) => {
    return http.post("/login", data);
};

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('token'));
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
};

const authApi = {
    login
};

export default authApi;
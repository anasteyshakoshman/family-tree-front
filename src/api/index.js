import axios from 'axios';

export const sendLoginData = (login, password) => {
    return axios.post('http://185.241.194.69/api/v1/user/signin', {
        login,
        password
    });
};

export const getFamilyTree = (rootHumanId) => {
    return axios.post('http://185.241.194.69/api/v1/getTree', {
        rootHumanId
    });
};

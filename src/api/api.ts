import axios from 'axios';
import Cookie from 'js-cookie';

export const instance = axios.create({
    baseURL: 'https://rocky-citadel-41338.herokuapp.com/api/',
})

instance.interceptors.request.use(request => {
    if (Cookie.get('access')) {
        request.headers['Authorization'] = `JWT ${Cookie.get('access')}`
    }
    request.headers['Content-Type'] = 'application/json';
    return request;
})

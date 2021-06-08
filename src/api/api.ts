import axios from 'axios';
import Cookie from 'js-cookie';


export const instance = axios.create({
  baseURL: 'https://rocky-citadel-41338.herokuapp.com/api/',
});

export enum ResultCodeEnum {
  Success = 200,
  Unauthorized = 401,
  BadRequest = 400,
  SuccessLogout = 204,
}

instance.interceptors.request.use(request => {
  if (Cookie.get('access')) {
    request.headers['Authorization'] = `Bearer ${Cookie.get('access')}`
  }
  request.headers['Content-Type'] = 'application/json';
  return request;
});

instance.interceptors.response.use((response) => {
  return response
}, async function(error) {
  
  let origin_request = error.config;
  
  if (error.response.status === ResultCodeEnum.Unauthorized && !origin_request._retry && Cookie.get('refresh')) {
    origin_request._retry = true

    let body = JSON.stringify({ refresh: Cookie.get('refresh') });

    return await instance.post('auth/token/refresh/', body).then(res => {

      if (res.status === ResultCodeEnum.Success) {
        Cookie.set('access', res.data.access_token);
        instance.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
        return instance(origin_request);
      }
    });
  }

})





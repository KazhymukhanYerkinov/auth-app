import { instance } from "./api";



type LoginResponseDataType = {
  email: string
  username: string
  tokens: {
    access_token: string
    refresh_token: string
  }
}

type MeResponseDataType = {
  email: string
  username: string
  last_login: string | null
}



export const authAPI = {
  me() {
    return instance.get<MeResponseDataType>('auth/me/').then(response => response);
  },
  login(email: string, password: string) {
    return instance.post<LoginResponseDataType>(`auth/login/`, { email, password }).then(response => response)
  },
  logout(refresh_token: string) {
    return instance.post('auth/logout/', { refresh_token }).then(response => response);
  }

  
}
import { instance } from "./api";

export const authAPI = {

  login(email: string, password: string) {
    return instance.post(`auth/login/`, { email, password }).then(response => console.log(response))
  }

}
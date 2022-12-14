import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0`,
  headers: {"API-KEY": "93a8948b-9e2b-4763-af0c-36e8a944067a"}
});
export const usersAPI = {
  getUsers(currentPage=1, pageSize=10){
  return instance.get(
    `users?page=${currentPage}&count=${pageSize}`).then(response=>{
    return response.data})
},
 follow(userId) {
  return instance.post( 
  `/follow/${userId}`)},
 unfollow(userId) {
  return instance.delete(
  `/follow/${userId}`)}
,
 getProfile(userId) {
  return instance.get(
        `/profile/`+userId)}};
export const  authAPI = {
  me(){
      return  instance.get(`/auth/me`)}}
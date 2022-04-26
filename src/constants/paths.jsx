export default Object.freeze({
  index: "/",
  login: "/Login",
  register: "/Register",
  profile: "/Profile",
  search: "/Search"
});

const api = "api";

const authEndPoint = `/${api}/auth`;
const authRegister = "/register";
// const authLogin = "/login";
const authGetUser = "/getUser";

const userEndPoint = `/${api}/users`;
const userChangeInfo = "changeInfo/:id";
const userFavorites = "favorites/:id";
const userDelete = "deleteUser/:id";
const userFind = "findUser/:id";
const userGetAll = "getUsers";

export const loginURL = "http://localhost:4000/auth/login";

// export const loginURL = `${authEndPoint}/${authLogin}`;
export const registerURL = `${authEndPoint}/${authRegister}`;
export const getUserURL = `${authEndPoint}/${authGetUser}`;

export const changeUserInfoURL = `${userEndPoint}/${userChangeInfo}`;
export const addToFavoritesUserURL = `${userEndPoint}/${userFavorites}`;
export const deleteUserURL = `${userEndPoint}/${userDelete}`;
export const findUserURL = `${userEndPoint}/${userFind}`;
export const getAllUsersURL = `${userEndPoint}/${userGetAll}`;

export default Object.freeze({
  index: "/",
  login: "/Login",
  register: "/Register",
  forgot:"/Forgot",
  profile: "/Profile",
  mprofile: "/MProfile",
  search: "/Search",
  cart: "/Cart",
  cusomerorders: "/Orders",
  prodmanage: "/ProdManage"
});

// const authEndPoint = `/${api}/auth`;
// const authRegister = "/register";
// const authLogin = "/login";
// const authGetUser = "/getUser";

const userEndPoint = `/users`;
const userChangeInfo = "changeInfo/:id";
const userFavorites = "favorites/:id";
const userDelete = "deleteUser/:id";
const userFind = "findUser/:id";
const userGetAll = "getUsers";

export const loginURL = "http://localhost:4000/auth/login";
export const getUserURL = "http://localhost:4000/auth/getUser";
export const getCodeURL = "http://localhost:4000/code";
export const registerURL = "http://localhost:4000/auth/register";
export const addItemURL = "http://localhost:4000/item";
export const getItemURL = "http://localhost:4000/item/";
export const updateItemURL = "http://localhost:4000/item/updateItem/";

// export const loginURL = `${authEndPoint}/${authLogin}`;
// export const registerURL = `${authEndPoint}/${authRegister}`;
// export const getUserURL = `${authEndPoint}/${authGetUser}`;

export const changeUserInfoURL = `${userEndPoint}/${userChangeInfo}`;
export const addToFavoritesUserURL = `${userEndPoint}/${userFavorites}`;
export const deleteUserURL = `${userEndPoint}/${userDelete}`;
export const findUserURL = `${userEndPoint}/${userFind}`;
export const getAllUsersURL = `${userEndPoint}/${userGetAll}`;

export const SIGNIN = "Sign In";
export const SIGNUP = "Sign Up";
export const MANAGERSIGNIN = "Manager ? Sign In here";
export const MANAGERSIGNUP = "Manager ? Sign Up here";
export const COSTUMERSIGNUP = "Costumer ? Sign Up here";
export const HOMEPAGE = "Home Page";
export const FORGOT = "Forgot password?";
export const SIGNUP_OPT = "Don't have an account? Sign Up";
export const SIGNIN_OPT = " Already have an Account ?";
export const OFFERS = "I'm interested in receiving marketing offers by email";
export const MANAGERREGISTER = "Manager Registration";
export const ENTERCODE = "Enter the manager code here:";
export const REGISTEROK = "Registration Succeeded :)";
export const REGISTERFAIL = "Registration Failed :(";
export const LOGINOK = "Log in Succeeded :)";
export const LOGINFAIL = "Log in Failed :(";
export const RESETOK = "Password changed successfully :)";
export const RESETFAIL = "Password change failed :(";
export const EXISTUSER = "User exist ";
export const NOTEXISTUSER = "User dosen't exist ";
export const ADDNEWPROD = "Add new Product ";
export const ERRORLOGIN = "Wrong Email or Password ";
export const RESETPASSWORDTITLE = "Reset Password ";
export const CANCEL = "Cancel ";

// validate email Minimum 8 characters, at least one letter and one number
export const validatePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i;
// validate email
export const validateEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// validate name
export const validateNames = /[^A-Za-z]+/;

export const JWT_KEY = "JWT-KEY";

export const loginAlerts = {
  OK: { severity: "success", message: LOGINOK },
  FAIL: { severity: "error", message: LOGINFAIL }
};
export const resetPasswordAlerts = {
  OK: { severity: "success", message: RESETOK },
  FAIL: { severity: "error", message: RESETFAIL },
  EXIST: { severity: "error", message: NOTEXISTUSER }
};

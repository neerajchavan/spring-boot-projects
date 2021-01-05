class AutheticationService{
    registerSuccesfullLogin(userName){
        sessionStorage.setItem("autheticatedUser", userName)
    }

    logout(){
        sessionStorage.removeItem("autheticatedUser");
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem("autheticatedUser")
        if(user === null) return false
        return true
    }
}

export default new AutheticationService()
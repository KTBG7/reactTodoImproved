const registerSuccessfulLogin = (username, password) => {
        console.log('registerSuccesfulLogin')
        sessionStorage.setItem('authenticatedUser', username)
    }
const logout = () => {
    sessionStorage.removeItem('authenticatedUser')
    isUserLoggedIn();
}

function isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    if(user === null){ 
        return false
    }else{
    return true
    }
}

const getLoggedInUserName= () => {
    let user = sessionStorage.getItem('authenticatedUser')
    if(user === null) return ''
    return user
}

export {registerSuccessfulLogin, logout, isUserLoggedIn, getLoggedInUserName}

//this is where we put the login functions

//saving loggin info
function login_save(username){
    state={"username":username}
    window.localStorage.setItem("gameState", JSON.stringify(state)); 
}

//logging out - removing login info
function login_remove(username){
    state={"username":""}
    window.localStorage.setItem("gameState", JSON.stringify(state)); 
}

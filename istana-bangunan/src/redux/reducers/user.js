const init_state = {
    username: "",
    errMsg: ""
}

export default (state=init_state, action) =>{
    switch(action.type){
        case "LOGIN_USER":
            return { ...state, username: action.payload}
        case "LOGOUT_USER":
            return{ ...init_state }
        case "USER_ERROR":
            return { ...state, errMsg: action.payload}
        default:
            return state
    }
}
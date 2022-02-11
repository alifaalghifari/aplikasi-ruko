const init_state = {
    data: []
}

export default (state = init_state, action) => {
    switch(action.type){
        case "ALAT_BANGUNAN":
            return { ...state, data: action.payload}
        default:
            return state
    }
}
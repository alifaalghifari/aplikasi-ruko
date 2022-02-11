import Axios from 'axios'
import { API} from "../../constants/API_URL"

export const loginUser = ({username, password}) => {
   
    return (dispatch) => {
        Axios.get(`${API}/users/get`, {
            params:{
                username
            }
        })
        .then((res) => {
            if(res.data.length){
                if(password === res.data[0].password){
                    delete res.data[0].password
                    localStorage.setItem("user", JSON.stringify(res.data[0]))
                    dispatch({
                        type: "LOGIN_USER",
                        payload: res.data[0]
                    })
                }else{
                    dispatch({
                        type: "USER_ERROR",
                        payload: "Nama Atau Password Salah !"
                    })
                }
            }else{
                dispatch({
                    type: "USER_ERROR",
                    payload: "Data Tidak Ditemukan !"
                })
            }
        })
        .catch(() => {
            console.log("Error")
        })
    }
}

export const userKeepLogin = (data) => {
    console.log(data.username)
    return(dispatch) => {
        Axios.get(`${API}/users/get`, {
            params:{
                username: data.username
            }
        })
        .then((res) => {
            console.log(res)
            delete res.data[0].password
            localStorage.setItem("user", JSON.stringify(res.data[0]))
            dispatch({
                type: "LOGIN_USER",
                payload: res.data[0]
            })
        })
        .catch(() => {
            console.log("Error")
        })
    }
}

export const logoutUser = () => {
    localStorage.removeItem("user")
    return{
        type: "LOGOUT_USER"
    }
}

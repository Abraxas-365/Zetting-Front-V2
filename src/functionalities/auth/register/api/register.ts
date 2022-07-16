import { apiUser } from "../../../../api/apiCalls"
import { UserRegister } from "../models"



export const register = async (user: UserRegister) => {
    try {
        const { data } = await apiUser.post('/register', user);
        console.log(data);
        return true
    } catch (err) {
        console.log("err ", err);
        return false
    }
}

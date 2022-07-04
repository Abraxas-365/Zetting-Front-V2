import { useEffect, useState } from "react"
import { apiUser } from "../../../api/apiCalls"
import { User } from "../model"

export const useGetUser = (userId: string | undefined | null) => {
    const [user, setUser] = useState({} as User)
    const [isLoadingUser, setIsLoading] = useState(true)
    const getUser = async () => {

        const { data } = await apiUser.get<User>(`/id=${userId}`)
        console.log(data.profession)
        setUser(data)
        setIsLoading(false)

    }
    useEffect(() => {
        getUser();
    }, [])
    return { user, setIsLoading, isLoadingUser, getUser }
}

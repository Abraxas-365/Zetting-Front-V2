import { useEffect, useState } from "react"
import { apiActors } from "../../../../api/apiCalls"
import { Actor } from "../models"

export const useGetActor = (userId: string) => {
    const [actor, setActor] = useState({} as Actor)
    const [isLoadingActors, setIsLoading] = useState(true)
    const getActor = async () => {

        const { data } = await apiActors.get<Actor>(`/id=${userId}`)
        console.log(data)
        setActor(data)
        setIsLoading(false)

    }
    useEffect(() => {
        getActor();
    }, [])

    return { actor, setIsLoading, isLoadingActors, getActor }
}

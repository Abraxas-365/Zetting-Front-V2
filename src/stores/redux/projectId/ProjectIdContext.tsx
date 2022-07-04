import { Dispatch } from "redux"
import { Action } from "./ProjectIdReducer"


export const setProjectId = (projectId: string | undefined) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'setProjectId',
            payload: projectId
        })

    }
}

export const cleanProjectId = () => {

    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: 'clean',
        })

    }
}

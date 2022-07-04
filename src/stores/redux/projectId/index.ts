import { combineReducers } from "redux";
import ProjectId from "./ProjectIdReducer";



const reducers = combineReducers({
    projectId: ProjectId
})

export default reducers

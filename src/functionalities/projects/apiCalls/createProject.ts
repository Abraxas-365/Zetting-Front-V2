import { apiProjects } from "../../../api/apiCalls"
import { Project } from "../models"


export const createProject = async (project: Project, token: string | null) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const { data } = await apiProjects.post<Project>('/new', project, config)
    return data.id


}

import { apiWorkRequest } from "../../../api/apiCalls";
import { Workrequest } from "../models"



export const addWorker = async (projectId: string, workerId: string, token: string | null) => {
    var workrequest: Workrequest = {
        project: projectId,
        worker: workerId
    }
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    await apiWorkRequest.post('/new', workrequest, config)
    return

}

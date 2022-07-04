

const initialState = ''

export type Action = {
    type: 'setProjectId' | 'clean'
    payload?: string | undefined
}


const ProjectIdReducer = (state: string | undefined = initialState, action: Action) => {
    switch (action.type) {
        case "setProjectId":
            return state = action.payload
        case "clean":
            return state = ""
        default:
            return ""

    }
};

export default ProjectIdReducer;

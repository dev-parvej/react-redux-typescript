import {Action} from "../actions";
import {ActionType} from "../action-types";

const INITIAL_STATE = {
    loading: false,
    error: null,
    data: [] as string[]
}

interface RepositoryState {
    loading: boolean,
    error: string | null,
    data: string[]
}


const reducer = (state: RepositoryState = INITIAL_STATE, action: Action): RepositoryState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORY_ACTION:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORY_SUCCESS_ACTION:
            return { loading: false, error: null, data: action.data }
        case ActionType.SEARCH_REPOSITORY_ERROR_ACTION:
            return { loading: false, error: action.data, data: [] }
        default:
            return INITIAL_STATE
    }
}

export default reducer;
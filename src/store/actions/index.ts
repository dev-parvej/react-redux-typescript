import {ActionType} from "../action-types";

interface SearchRepositoryAction {
    type: ActionType.SEARCH_REPOSITORY_ACTION,
}

interface SearchRepositorySuccessAction {
    type: ActionType.SEARCH_REPOSITORY_SUCCESS_ACTION,
    data: string[],
}

interface SearchRepositoryErrorAction {
    type: ActionType.SEARCH_REPOSITORY_ERROR_ACTION,
    data: string,
}

export type Action = SearchRepositoryAction | SearchRepositorySuccessAction | SearchRepositoryErrorAction

import {ActionType} from "../action-types";
import axios from "axios";
import {Dispatch} from "redux";
import {Action} from "../actions";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORY_ACTION
        });

        try {
            const {data: repositories} = await axios
                .get(`https://registry.npmjs.org/-/v1/search?text=${term}`);

            dispatch({
                type: ActionType.SEARCH_REPOSITORY_SUCCESS_ACTION,
                data: repositories?.objects.map((repository: any) => repository.package.name)
            });

        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORY_ERROR_ACTION,
                data: error.message
            })
        }
    }
}
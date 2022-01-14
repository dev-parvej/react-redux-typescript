import React from "react";
import {Search} from "./Search";
import useAction from "../hooks/useAction";
import useTypedSelector from "../hooks/useTypedSelector";

export const Repositories: React.FC<{}> = () => {
    const {searchRepositories} = useAction();
    const handleSearch = (term: string) => searchRepositories(term)
    const {loading, error, data} = useTypedSelector((state) => state.repositories)
    return (
        <React.Fragment>
            <Search submitted={handleSearch}/>
            {loading && <div className={"text-warning"}>Loading...</div>}
            {error && <div className={"text-danger"}>{error}</div>}
            {!error && !loading && data}
        </React.Fragment>
    )
}
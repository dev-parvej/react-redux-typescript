import React, {useState} from "react";

interface SearchProps {
    submitted: (term: string) => void
}

export const Search:React.FC<SearchProps> = ({ submitted }) => {
    const [term, setTerm] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submitted(term);
    }
    return <form className="row row-cols-lg-auto g-3 align-items-center" onSubmit={handleSubmit}>
        <div className="col-12">
            <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
            <div className="input-group">
                <div className="input-group-text">@</div>
                <input type="text"
                       className="form-control"
                       id="inlineFormInputGroupUsername"
                       placeholder="Username"
                       value={term}
                       onChange={(e) => setTerm(e.target.value)}
                />
            </div>
        </div>

        <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>
}
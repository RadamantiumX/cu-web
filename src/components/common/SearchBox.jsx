import './searchBox.css'
export function SearchBox() {
    return(
        <div className="search">
        <form className="search-form">
            <input type="text" placeholder="Albañiles, plomeros, gasistas..."/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
    )
}

import searchIcon from "../assets/search.svg"
import "./SearchBar.css"

export default function Search() {
    return (
        <div className="search-bar-top">
            <div className="search-bar">
                <div className="search-container">
                    <img className="search-icon" 
                        src={searchIcon} 
                        alt="search icon" 
                        aria-label="search icon" />
                    <input type="text" placeholder="Search questions"/>
                </div>
            </div>
        </div>
    )
}
import Header from "../components/home_page/header/header";
import Footer from "../components/footer/footer"
import OneCard from "../components/doctors-cards/one-card";
import React from "react"
import { useLocation } from "react-router-dom";


function Search() {
    // const [searchResults, setSearchResults] = useState([]);      
    // function Search({ searchResults, setSearchResults }) {
        const location = useLocation();
        const searchResults = location.state?.searchResults || [];
    return(
        <>
         <Header/>
         <div className="root">
                        <section className="section">
                            <div className="container">
                                <div className="row align-items-center">
                                    {searchResults.length > 0 && (
                                        <div className="search-results mt-4">

                                            <h2>Search Results</h2>
                                            <ul>
                                            {searchResults.map(result => (
                                                <OneCard key={result.id} doctor={result} className="search-results" />
                                            ))}

                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
         <Footer/>
        </>
    )
// }
}
export default Search;
import React from 'react';

const SearchParams = () => {
    const location = "Seattle, WA";

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        type="location" 
                        value={location}
                        placeholder="Location"
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;
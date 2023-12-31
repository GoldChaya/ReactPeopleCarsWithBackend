import React from "react";

const SearchBar= ({ searchText, onTextChange, onClearClick, placeholder }) =>{
        return (
        <>
        <br/>
        <br/>
        <br/>
        <div className="row">
            <div className="col-md-10">
                <input
                    value={searchText}
                    type="text"
                    className="form-control form-control-lg"
                    onChange={onTextChange}
                    placeholder={placeholder} />
            </div>
            <div className="col-md-2">
                <button className="btn btn-dark btn-lg w-100" onClick={onClearClick}>Clear</button>
            </div>
        </div>
        </>
   );
 }

export default SearchBar;
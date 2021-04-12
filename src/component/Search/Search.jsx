import React from 'react';

const Search = (props) => {
    return (<div className="search-header">
      <form onSubmit={props.handleOnSubmit}>
        <input className="search" type="search" placeholder="Search..." value={props.searchTerm} onChange={props.handleOnChange} />
      </form>
    </div>);
  }

  export default Search;
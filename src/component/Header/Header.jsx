import React from 'react';

const Header = (props) => {
    return (<header>
      <form onSubmit={props.handleOnSubmit}>
        <input className="search" type="search" placeholder="Search..." value={props.searchTerm} onChange={props.handleOnChange} />
      </form>
    </header>);
  }

  export default Header;
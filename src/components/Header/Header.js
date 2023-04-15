import React from 'react';

const Header = ({ listCount }) => {
  return (
    <header>
      You have {listCount} Todos
    </header>
  )
}

export default Header;
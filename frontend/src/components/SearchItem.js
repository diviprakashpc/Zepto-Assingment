import React from 'react'

const SearchItem = (props) => {
  const { item = [], onClickItem } = props;
  const { name, email, id } = item;
  return (
    <div>
      <div id='search-item' onMouseDown={(e) => {
        e.preventDefault()
        onClickItem(id)
      }}>
        <div id='item-logo'>
          <img src='logo192.png' style={{ height: '2rem', width: '2rem', borderRadius: '50%' }}></img>
        </div>
        <div id='item-name'>
          {name}
        </div>
        <div id='item-mail'>
          {email}
        </div>
      </div>
    </div>
  )
}

export default SearchItem
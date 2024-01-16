import React from 'react'
import SearchItem from './SearchItem'

const SearchBox = (props) => {
  const items = props.items || [];
  const onClickItem = props.onClickItem

  
  return (
    <div id='search-box'>
       {items&& items.map((item)=><SearchItem key={item.id}  onClickItem={onClickItem} item={item}/>)}
    </div>
  )
}

export default SearchBox
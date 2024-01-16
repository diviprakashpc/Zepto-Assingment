import React from 'react'
import SearchItem from './SearchItem'

const SearchBox = (props) => {
  const items = props.items || [];
  const onClickItem = props.onClickItem

  
  return (
    <div id='search-box'>
       {items&& items.map((item)=><SearchItem key={item.id}  onClickItem={onClickItem} item={item}/>)}
       {items.length<=0&&(
        <>
          <div id='no-user-div'>
            No Users Left...
          </div>
        </>
       )}
    </div>
  )
}

export default SearchBox
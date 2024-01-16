import React from 'react'
import Chip from './Chip'
import SearchBox from './SearchBox'


const SearchBar = (props) => {
  const {onClickItem, onClickCross, onChangeInput, addedUsers:AddedUsers,filteredUsers:FilteredUsers, users:Users} = props;
  
  const dropdownRef = React.useRef();

  React.useEffect(()=>{
    const dropdown = dropdownRef.current;
    dropdown.style.display = "none"
  },[])
  return (
    <div>
      <div id='bar'>
        <div id='sub-bar'>
          {AddedUsers && AddedUsers.map((User) => <Chip onClickCross={onClickCross} user={User} />)}
      
          <div id='invisibile-input-box'>
            <input 
            onBlur={(e) => {
              e.preventDefault()
              const dropdown = dropdownRef.current;
              dropdown.style.display = "none"
            }} 
            onFocus={() => {
              const dropdown = dropdownRef.current;
              dropdown.style.display = "block"
            }} 
            id='invisible-input' 
            placeholder={(Users.length>0)?'Add new user...':''} 
            type='text' 
            onChange={onChangeInput} 
            />
          <div id='search-box-holder' ref={dropdownRef}>
            <SearchBox 
            items={FilteredUsers} 
            onClickItem = {onClickItem}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
import React from 'react'
import Chip from './Chip'
import SearchBox from './SearchBox'


const SearchBar = (props) => {
  const onClickItem = props.onClickItem;
  const onClickCross = props.onClickCross;
  const onChangeInput = props.onChangeInput;
  const dropdownRef = React.useRef();
  const AddedUsers = props.addedUsers;
  const FilteredUsers = props.filteredUsers;
  const [visibility, setVisibility] = React.useState(false);
  React.useEffect(()=>{
    const element = dropdownRef.current;
    element.style.display = "none"
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
              const element = dropdownRef.current;
              element.style.display = "none"
            }} 
            onFocus={() => {
              const element = dropdownRef.current;
              element.style.display = "block"
            }} 
            id='invisible-input' 
            placeholder='Add new user...' 
            type='text' 
            onChange={onChangeInput} 
            />
          </div>
          <div id='search-box-holder' ref={dropdownRef}>
            <SearchBox 
            items={FilteredUsers} 
            onClickItem = {onClickItem}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
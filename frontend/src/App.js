import React from 'react'
import './App.css';
import SearchBar from './components/SearchBar';
import APIResponse from './sampleData'
import { getFilteredArray } from './helper';
function App() {
  const [addedUsers, setAddedUsers] = React.useState([]);;
  const [Users, setUsers] = React.useState([]);
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  function fetchUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(APIResponse);
      }, 1000)
    })
  }
  const onClickCross = (id) => {
    const user = addedUsers.find((user)=>user.id===id);
    const newAddedUsers = addedUsers.filter((user)=>user.id!==id)
    const newUsers = Users;
    newUsers.push(user);
    if(newAddedUsers){
      setAddedUsers(newAddedUsers)
      setUsers(newUsers)
      setFilteredUsers(newUsers)
    }
  }
  const onClickItem = (id) => {

    const user = Users.find((user)=>user.id===id);
    const newUsers = Users.filter((user)=>user.id!==id) 
    const newAddedUsers = addedUsers;
    newAddedUsers.push(user);
    if(newUsers){
      setAddedUsers(newAddedUsers)
      setUsers(newUsers)
      setFilteredUsers(newUsers)
    }
  }
  const onChangeInput = (e) => {
    e.preventDefault();
    const {value} = e.target;
    let enteredValue = value.trim();
    if(enteredValue!=="") {
      const filteredArray = getFilteredArray(Users,value);
      setFilteredUsers(filteredArray)
    }else{
      setFilteredUsers(Users)
    }
  }
  React.useEffect(() => {
    fetchUsers().then((res) => {
      setUsers(res);
      setFilteredUsers(res);
    })
  }, [])
  console.log(Users,addedUsers,filteredUsers);
  return (
    <div className="App">
      <h1 id='top-heading'>Pick User</h1>
      <SearchBar
      onClickItem={onClickItem}
      onClickCross = {onClickCross}
      onChangeInput={onChangeInput} 
      addedUsers={addedUsers} 
      filteredUsers={filteredUsers}
      users = {Users} />
    </div>
  );
}

export default App;

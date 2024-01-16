import React from 'react'
import './App.css';
import SearchBar from './components/SearchBar.tsx';
import APIResponse from './sampleData'
import { getFilteredArray } from './helper.ts';
import { IUser } from './interfaces';
function App() {
  const [addedUsers, setAddedUsers] = React.useState<IUser[]>([]);;
  const [Users, setUsers] = React.useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = React.useState<IUser[]>([]);
  function fetchUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(APIResponse);
      }, 1000)
    })
  }
  const onClickCross = (id:number) => {
    const user : any = (addedUsers && addedUsers?.find((user:IUser)=>user.id===id));
    const newAddedUsers : IUser[] = addedUsers.filter((user:IUser)=>user.id!==id)
    const newUsers : IUser[] = Users;
    newUsers.push(user);
    if(newAddedUsers){
      setAddedUsers(newAddedUsers)
      setUsers(newUsers)
      setFilteredUsers(newUsers)
    }
  }
  const onClickItem = (id:number) => {

    const user : any | undefined = Users.find((user:IUser)=>user.id===id);
    const newUsers : IUser[] = Users.filter((user:IUser)=>user.id!==id) 
    const newAddedUsers:IUser[] = addedUsers;
    newAddedUsers.push(user);
    if(newUsers){
      setAddedUsers(newAddedUsers)
      setUsers(newUsers)
      setFilteredUsers(newUsers)
    }
  }
  const onChangeInput = (e:any) => {
    e.preventDefault();
    const {value} = e.currentTarget;
    let enteredValue = value.trim();
    if(enteredValue!=="") {
      const filteredArray = getFilteredArray(Users,value);
      setFilteredUsers(filteredArray)
    }else{
      setFilteredUsers(Users)
    }
  }
  React.useEffect(() => {
    fetchUsers().then((res:any) => {
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

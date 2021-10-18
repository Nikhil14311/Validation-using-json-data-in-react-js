import React, {useState} from 'react'
import userData from './data.json'
const App = () => {
  const [Data, setData] = useState({
    username : '',
    password : ''
  })
  const { username, password } = Data;
  const changeHandler = e => {
    setData({...Data,[e.target.name]:e.target.value})
  }
  var verifyData = userData;
  const submitHandler = () => {
    console.log("Entered")
    console.log(verifyData.users.username)
    console.log(username)
    if(verifyData.users.username === username && verifyData.users.password === password){
      console.log('success');
      alert('success')
    }
  }
  return (
    <center>
      <input type="text" placeholder="Username" value={username} name="username" onChange={changeHandler}/><br/>
      <input type="text" placeholder="Password" value={password} name="password" onChange={changeHandler}/><br/>
      <button onClick={submitHandler}>Verify</button>
    </center>
  )
}

export default App

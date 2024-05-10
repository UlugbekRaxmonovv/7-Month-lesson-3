import React,{useState} from 'react'
import "./CreateUser.css"
import { useDispatch } from 'react-redux'
import { addUser } from '../../context/userSlick'

function CreateUser() {
  const [name, setName] = useState('')
  const [profession, setProfession] = useState('')
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('')
  const [surname,setSurname] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
  let newUser ={
    id: new Date().getTime(),
    name: name,
    surname: surname,
    profession: profession,
    age: +age,
    gender: gender,
    
  }
  dispatch(addUser(newUser))
  setAge("")
  setName("")
  setGender("")
  setProfession("")
  setSurname("")
  }

  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form className='create__user-form' action="" onSubmit={handleSubmit}>
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text" placeholder='name' />
         <input
        required
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        type="text" placeholder='surname' />
        <input
        required
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
         type="text" placeholder='profession' />
        <input
        required
        value={age}
        onChange={(e) => setAge(e.target.value)}
         type="number" placeholder='age' />
        <select value={gender} 
        required
        onChange={(e) => setGender(e.target.value)}
         name="" id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser
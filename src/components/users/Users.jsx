import React,{useState} from 'react'
import Model from  'react-modal'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import  { useDispatch } from 'react-redux'
import {removFromUser } from '../../context/userSlick'
import { NavLink } from 'react-router-dom'
import Confetti from 'react-confetti'

function Users({data}) {
  const [modul,setModul] =useState(false)
  const dispatch = useDispatch()
  const [confitte,setConfitee] = useState(false)
  return (
  <>
 
    <div className='users__wrapper'>
      {
data?.map(user => (
  <div className="users__card" key={user.id}>
            <img src={ user.gender ==="male" ? male : female} alt="" />
            <h2>{user.surname}</h2>
            <h2>{user.name}</h2>
            <p>{user.position}</p>
            <p>{user.age} years old</p>
           <div className="hammasi">
           <button onClick={() =>dispatch(removFromUser(user))}>Remove</button>
            <button onClick={() =>setModul(true) || setConfitee(!confitte)}>Modul Box</button>
            {
              confitte ?
              <Confetti/>
              :
              <></>
            }
           </div>
        </div>
))
}
    </div>

    <Model 
    isOpen={modul}
     onRequestClose={() =>setModul(false)}
     style={{
      overlay:{
        background:'greenyellow',
      },
      content:{
     width: '320px',
     height:"480px",
     padding: '20px',
     boxShadow: '0 0 8px #0002, 15px 15px 15px #0001',
     lineHeight:" 1.6",
     borderRadius: "10px",
     marginLeft: "30%",
      }
      
     }}>
    {
data?.map(user => (
  <div className="column">
    <div className="users__card" key={user.id} >
            <img src={ user.gender ==="male" ? male : female} alt="" />
            <h2>{user.surname}</h2>
            <h2>{user.name}</h2>
            <p>{user.position}</p>
            <p>{user.age} years old</p>
           <div className="hammasi">
          <NavLink to={'/'}> <button>Remove</button></NavLink>
            <button onClick={() =>setModul(false) || setConfitee(!confitte)}>Delet</button>
          
           </div>
        </div>
  </div>
))
}
    </Model>
  </>

    
  )
}

export default Users
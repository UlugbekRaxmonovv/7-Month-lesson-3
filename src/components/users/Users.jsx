import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import  { useDispatch } from 'react-redux'
import {removFromUser } from '../../context/userSlick'

function Users({data}) {
  const dispatch = useDispatch()
  return (
    <div className='users__wrapper'>
      {
data?.map(user => (
  <div className="users__card" key={user.id}>
            <img src={ user.gender ==="male" ? male : female} alt="" />
            <h2>{user.surname}</h2>
            <h2>{user.name}</h2>
            <p>{user.position}</p>
            <p>{user.age} years old</p>
            <button onClick={() =>dispatch(removFromUser(user))}>Remove</button>
        </div>
))
}
    </div>
  )
}

export default Users
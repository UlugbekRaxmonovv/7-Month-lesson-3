import  { createSlice } from '@reduxjs/toolkit'

export const userSlick = createSlice({
    name:"users",
    initialState:{
        value: JSON.parse(localStorage.getItem('users')) || []
    },
    reducers:{
        addUser(state,action){
            state.value =[...state.value,action.payload]
            localStorage.setItem("users",JSON.stringify(state.value))
        },
        removFromUser(state,action){
            state.value = state.value.filter(user => user.id !== action.payload.id)
            localStorage.setItem("users",JSON.stringify(state.value))
    
    }
}
})
export  const {addUser,removFromUser} =userSlick.actions
export default userSlick.reducer

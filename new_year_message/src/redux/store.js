import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 
        {
            is_done : false,
            nickname: '김철수',
            title: 'happy new year!',
            category:'응원',
            text:'모두 행복했으면 좋겠어요.',
            email: '123@gamail.com'
        }
    ,
    //변경, 추가하는 함수 
    reducers :{
        addUser(state, action){
            state.nickname = action.payload
            state.is_done= true;
            //console.log();
            // state.push(action.payload)
        }
    }
})

export let {addUser} = user.actions

//reducer 등록
export default configureStore({
    reducer: {
        user : user.reducer
    }
})
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
            email: '123@gamail.com',
            something: ' '
        }
    ,
    //변경, 추가하는 함수 
    reducers :{
        ChangeState(state, action){
            state.is_done= false;
        },
        addNickname(state, action){
            state.nickname = action.payload
            state.is_done= true;
        },
        addTitle(state, action){
            state.title = action.payload
            state.is_done= true;
        },
        addCategory(state, action){
            state.category = action.payload
            state.is_done= true;
        },
        addText(state, action){
            state.text = action.payload
            state.is_done= true;
        },
        addEmail(state, action){
            state.email = action.payload
            state.is_done= true;
        },
        addNULL(state, action){
            state.something = action.payload
            state.is_done= true;

        }
    }
})

export let {ChangeState,addNickname, addTitle, addCategory, addText, addEmail, addNULL} = user.actions

let done
let MData = createSlice({
    name : 'MData',
    initialState : [
            {
                nickname: 'MData',
                title: 'MData',
                category:'응원',
                text:'MData',
                email: 'MData'
            }
        ],

        //state 추가, 변경
        reducers:{
            //추가하는 함수
            addData(state, action){
                state.push(action.payload)
            }
        }
    })
export let {addData} = MData.actions

//reducer 등록
export default configureStore({
    reducer: {
        user : user.reducer,
        MData : MData.reducer,
    }
})
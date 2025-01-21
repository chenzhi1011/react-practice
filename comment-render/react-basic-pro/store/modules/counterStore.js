import {createSlice} from "@reduxjs/toolkit"

const counter = createSlice({
    name: 'counter',

    initialState: {
        count: 0
    },

    reducers: {
        increment(state){
            state.count++
        },
        descrement(state){
            state.count--
        }
    }

})

//解构actionCreater函数
const {increment, descrement} = CounterStore.actions
//获取reducer
const reducer = conterStore.reducer

//按需导出的方式导出actionCreator、
export {increment,descrement}
//默认方式导出reducer
export default reducer

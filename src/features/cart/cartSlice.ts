import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState:{cart:{id:string,text:any,counter:number}[]} = {
    cart:[],
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state, action)=>{
            action.payload
            const item = {
                id:nanoid(),
                text:action.payload,
                counter:0,
            }
            item.counter++
            state.cart.push(item)
        },
        removeItem:(state,action)=>{
            state.cart.filter((item)=>item.id != action.payload.id)
        },
        moreItem:(state,action)=>{
            for(let i = 0; i<state.cart.length;i++){
                if(action.payload.id === state.cart[i].id){
                    state.cart[i].counter += 1
                } 
            }
        },
        lessItem:(state,action)=>{
            for(let i = 0; i<state.cart.length;i++){
                if(action.payload.id === state.cart[i].id){
                    state.cart[i].counter -= 1
                } 
            }
        }
    }
})

export const {addItem, removeItem, moreItem,lessItem} = cartSlice.actions
export default cartSlice.reducer
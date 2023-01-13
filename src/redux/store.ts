import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import todoSlice from "./todoSlice";


export type RootsState= ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch=()=> useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootsState>=useSelector
// const todos= useSelector((state:RootState)=>{   })

const store =  configureStore({
    reducer:{
    todos: todoSlice,
    

    }
})

export default  store

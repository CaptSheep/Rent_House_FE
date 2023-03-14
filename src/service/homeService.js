import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const showListHome = createAsyncThunk(
    'home/showListHome',
    async (data) => {
        const res = await axios.get('http://localhost:8080/posts',{headers : { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        return res.data
    }
)



export const showYourHomes = createAsyncThunk(
    'home/showYourHomes',
    async (id) => {
        const res = await axios.get('http://localhost:8080/posts/info/' + id,{headers : { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        return res.data
    }
)

export const showHomesByCategory = createAsyncThunk(
    'home/showHomesByCategory',
    async (id) => {
        const res = await axios.get('http://localhost:8080/posts/findByCategory/' + id ,{headers : { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        return res.data
    }
)


export const createHome = createAsyncThunk(
    'homes/createHome',
    async (data) => {
        const res = await axios.post("http://localhost:8080/posts/create", data,{headers : { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        return res.data
    }
)

export const removeHome = createAsyncThunk(
    'homes/removeHome',
    async (id) => {
        const res = await axios.delete('http://localhost:8080/posts/delete' + id,{headers : { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        return {...res.data.payload, id}
    }
)



export const editHome = createAsyncThunk(
    'home/editHome',
    async (data) => {
        const res = await axios.put('http://localhost:8080/posts/update/' + data.id, data,{headers : { Authorization: 'Bearer ' + localStorage.getItem('token')}})
        return res.data
    }
)



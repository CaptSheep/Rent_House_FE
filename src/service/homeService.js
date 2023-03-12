import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const showListHome = createAsyncThunk(
    'home/showListHome',
    async (data) => {
        const res = await axios.get('http://localhost:8080/posts/')
        return res.data
    }
)

export const showHome = createAsyncThunk(
    'home/showHome',
    async (id) => {
        const res = await axios.get('http://localhost:8080/posts/' + id)
        return res.data
    }
)

export const showYourHomes = createAsyncThunk(
    'home/showYourHomes',
    async (id) => {
        const res = await axios.get('http://localhost:8080/posts/info/' + id)
        return res.data
    }
)

export const showHomesByCategory = createAsyncThunk(
    'home/showHomesByCategory',
    async (id) => {
        const res = await axios.get('http://localhost:8080/posts/findByCategory/' + id)
        return res.data
    }
)


export const createHome = createAsyncThunk(
    'homes/createHome',
    async (data) => {
        const res = await axios.post("http://localhost:8080/posts/create", data)
        return res.data
    }
)

export const removeHome = createAsyncThunk(
    'homes/removeHome',
    async (id) => {
        const res = await axios.delete('http://localhost:8080/posts/delete' + id)
        return {...res.data.payload, id}
    }
)



export const editHome = createAsyncThunk(
    'home/editHome',
    async (data) => {
        const res = await axios.put('http://localhost:8080/posts/update/' + data.id, data)
        return res.data
    }
)



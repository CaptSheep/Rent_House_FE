import React from 'react';
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const showContracts = createAsyncThunk(
    'contract/showContracts',
    async () => {
        let res = await axios.get('http://localhost:8080/contracts')
        return res.data
    }
)

export const showContractsById = createAsyncThunk(
    'contract/showContracts',
    async (id) => {
        let res = await axios.get('http://localhost:8080/contracts/findById' + id)
        return res.data
    }
)

export const createContract = createAsyncThunk(
    'contracts/createContract',
    async (data) => {
        const res = await axios.post('http://localhost:8080/contracts/create', data)
        return res.data
    }
)

export const showContractsByUserCreate = createAsyncThunk(
    'contract/showContractsByUserCreate',
    async (id) => {
        let res = await axios.get('http://localhost:8080/contracts/findByUserId/' + id)
        return res.data
    }
)


export const removeContract = createAsyncThunk(
    'contract/removeContract',
    async (id) => {
        let res = await axios.delete('http://localhost:8080/contracts/delete' + id)
        return id
    }
)
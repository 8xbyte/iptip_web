import axios from 'axios'

import { IAddResultData } from '@/interfaces/result'
import { getStringFromAxiosError } from '@/utils/axios'
import { compareBackendUrl } from '@/utils/url'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const addResult = createAsyncThunk(
    'results/add',
    async (data: IAddResultData, thunkApi) => {
        try {
            const response = await axios.post(
                compareBackendUrl('/api/results'),
                data
            )
            return thunkApi.fulfillWithValue(response.data)
        } catch (error) {
            return thunkApi.rejectWithValue(getStringFromAxiosError(error))
        }
    }
)

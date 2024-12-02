import {
    FirstTestFilterType,
    HomeFilterType,
    SecondTestFilterItemType,
    ThirdTestFilterItemType
} from '@/interfaces/filters'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
    homeFilter: HomeFilterType
    firstTestFilter: FirstTestFilterType | null
    secondTestFilter: Array<SecondTestFilterItemType>
    thirdTestFilters: Array<ThirdTestFilterItemType>
}

const initialState: IInitialState = {
    homeFilter: 'Бакалавриат и специалитет',
    firstTestFilter: null,
    secondTestFilter: [],
    thirdTestFilters: []
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setHomeNavigation: (state, action: PayloadAction<HomeFilterType>) => {
            state.homeFilter = action.payload
        },
        setFirstTestFilter: (
            state,
            action: PayloadAction<FirstTestFilterType | null>
        ) => {
            state.firstTestFilter = action.payload
        },
        addSecondTestFilter: (
            state,
            action: PayloadAction<SecondTestFilterItemType>
        ) => {
            state.secondTestFilter = [...state.secondTestFilter, action.payload]
        },
        clearSecondTestFilters: (state) => {
            state.secondTestFilter = []
        },
        removeSecondTestFilter: (
            state,
            action: PayloadAction<SecondTestFilterItemType>
        ) => {
            state.secondTestFilter = state.secondTestFilter.filter(
                (filter) => filter !== action.payload
            )
        },
        addThirdTestFilter: (
            state,
            action: PayloadAction<ThirdTestFilterItemType>
        ) => {
            state.thirdTestFilters = [...state.thirdTestFilters, action.payload]
        },
        clearThirdTestFilters: (state) => {
            state.thirdTestFilters = []
        },
        removeThirdTestFilter: (
            state,
            action: PayloadAction<ThirdTestFilterItemType>
        ) => {
            state.thirdTestFilters = state.thirdTestFilters.filter(
                (filter) => filter !== action.payload
            )
        }
    }
})

export const {
    setHomeNavigation,
    setFirstTestFilter,
    addSecondTestFilter,
    clearSecondTestFilters,
    removeSecondTestFilter,
    addThirdTestFilter,
    clearThirdTestFilters,
    removeThirdTestFilter
} = dataSlice.actions
export default dataSlice

import {
    FirstTestFilterType,
    HomeFilterType,
    SecondTestFilterType,
    ThirdTestFilterItemType
} from '@/interfaces/filters'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
    homeFilter: HomeFilterType
    firstTestFilter: FirstTestFilterType | null
    secondTestFilter: SecondTestFilterType | null
    thirdTestFilters: Array<ThirdTestFilterItemType>
}

const initialState: IInitialState = {
    homeFilter: 'Бакалавриат и специалитет',
    firstTestFilter: null,
    secondTestFilter: null,
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
        setSecondTestFilter: (
            state,
            action: PayloadAction<SecondTestFilterType | null>
        ) => {
            state.secondTestFilter = action.payload
        },
        addThirdTestFilter: (
            state,
            action: PayloadAction<ThirdTestFilterItemType>
        ) => {
            state.thirdTestFilters = [...state.thirdTestFilters, action.payload]
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
    setSecondTestFilter,
    addThirdTestFilter,
    removeThirdTestFilter
} = dataSlice.actions
export default dataSlice

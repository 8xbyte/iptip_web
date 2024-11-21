import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type HomeFilterType = 'Бакалавриат и специалитет' | 'Магистратура'

type FirstTestFilterType = 'Бакалавриат и специалитет' | 'Магистратура'
type SecondTestFilterType =
    | 'IT-направление'
    | 'Инженерное направление'
    | 'Творческое направление'
type ThirdTestFilterItemType =
    | 'Информатика'
    | 'Профильная математика'
    | 'Русский язык'
    | 'Химия'
    | 'Английский язык'
    | 'Творческий экзамен'
    | 'Обществознание'
    | 'Физика'
    | 'История'

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
        setThirdTestFilter: (
            state,
            action: PayloadAction<Array<ThirdTestFilterItemType>>
        ) => {
            state.thirdTestFilters = action.payload
        }
    }
})

export const {
    setHomeNavigation,
    setFirstTestFilter,
    setSecondTestFilter,
    setThirdTestFilter
} = dataSlice.actions
export default dataSlice

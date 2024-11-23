export type FacultyType = 'Бакалавриат' | 'Специалитет' | 'Магистратура'
export type DirectionType =
    | 'IT-направление'
    | 'Творческое направление'
    | 'Инженерное направление'

export interface IExam {
    name: string
    shortName?: string
    minScore: number
}

export interface IFaculty {
    id: number
    wide?: boolean
    qrUrl?: string
    passingScore?: number
    type: FacultyType
    date: string
    direction: DirectionType
    institute: string
    name: string
    description: string
    price?: number
    budgetPlaces?: number
    exams: Array<Array<IExam>>
    practicePlaces: Array<Array<string>>
    professions: Array<Array<string>>
}

export type FacultyType = 'Бакалавриат' | 'Специалитет' | 'Магистратура'
export type DirectionType =
    | 'IT-направление'
    | 'Творческое направление'
    | 'Инженерное направление'

export interface IExam {
    name: string
    minScore: number
}

export interface IFaculty {
    id: number
    bigName?: boolean
    passingScore: number | null
    type: FacultyType
    date: string
    direction: DirectionType
    institute: string
    name: string
    descriptions: Array<string>
    price: number
    places: {
        budget: number
        specialQuota: number
        separateQuota: number
    }
    exams: Array<IExam>
    willStudy: Array<string>
    practicePlaces: Array<string>
    professions: Array<string>
}

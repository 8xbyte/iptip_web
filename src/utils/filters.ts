import store from '@/store'
import faculties from '@/store/faculties'

import { ThirdTestFilterItemType } from '@/interfaces/filters'

export const getFilters = () => {
    const data = store.getState().data

    const filtersBuffer = []
    if (data.firstTestFilter) {
        filtersBuffer.push(data.firstTestFilter)
    }
    if (data.secondTestFilter) {
        filtersBuffer.push(data.secondTestFilter)
    }
    filtersBuffer.push(...data.thirdTestFilters)
    return filtersBuffer
}

export const getFacultiesFilters = () => {
    const data = store.getState().data

    let facultiesBuffer = [...faculties]

    if (data.firstTestFilter) {
        facultiesBuffer = facultiesBuffer.filter(
            (faculty) =>
                ((faculty.type === 'Бакалавриат' ||
                    faculty.type === 'Специалитет') &&
                    data.firstTestFilter === 'Бакалавриат и специалитет') ||
                (faculty.type === 'Магистратура' &&
                    data.firstTestFilter === 'Магистратура')
        )
    }

    if (data.secondTestFilter.length > 0) {
        facultiesBuffer = facultiesBuffer.filter((faculty) =>
            data.secondTestFilter.includes(faculty.direction)
        )
    }

    let filters: Array<ThirdTestFilterItemType> = []
    for (let faculty of facultiesBuffer) {
        for (let exams of faculty.exams) {
            for (let exam of exams) {
                if (!filters.includes(exam.name as ThirdTestFilterItemType)) {
                    filters.push(exam.name as ThirdTestFilterItemType)
                }
            }
        }
    }
    return filters
}

export const getFacultiesWithFilters = () => {
    const data = store.getState().data

    let facultiesBuffer = [...faculties]

    if (data.firstTestFilter) {
        facultiesBuffer = facultiesBuffer.filter(
            (faculty) =>
                ((faculty.type === 'Бакалавриат' ||
                    faculty.type === 'Специалитет') &&
                    data.firstTestFilter === 'Бакалавриат и специалитет') ||
                (faculty.type === 'Магистратура' &&
                    data.firstTestFilter === 'Магистратура')
        )
    }

    if (data.secondTestFilter.length > 0) {
        facultiesBuffer = facultiesBuffer.filter((faculty) =>
            data.secondTestFilter.includes(faculty.direction)
        )
    }

    if (
        data.thirdTestFilters.length > 0 &&
        data.firstTestFilter === 'Бакалавриат и специалитет'
    ) {
        facultiesBuffer = facultiesBuffer.filter((faculty) => {
            for (let exams of faculty.exams) {
                let stop = true
                for (let exam of exams.map((exam) => exam.name)) {
                    if (data.thirdTestFilters.includes(exam)) {
                        stop = false
                    }
                }
                if (stop) return false
            }

            return true
        })
    }

    return facultiesBuffer
}

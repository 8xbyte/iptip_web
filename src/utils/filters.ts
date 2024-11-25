import { ThirdTestFilterItemType } from '@/interfaces/filters'
import store from '@/store'
import faculties from '@/store/faculties'

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

    if (data.secondTestFilter) {
        facultiesBuffer = facultiesBuffer.filter(
            (faculty) => faculty.direction === data.secondTestFilter
        )
    }

    if (
        data.thirdTestFilters.length > 0 &&
        data.firstTestFilter === 'Бакалавриат и специалитет'
    ) {
        facultiesBuffer = facultiesBuffer.filter((faculty) => {
            console.log(faculty.name)
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

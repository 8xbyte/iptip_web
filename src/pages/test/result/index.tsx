import React from 'react'
import Faculty from '@/components/faculty'
import Header from '@/components/header'
import Block from '@/components/ui/block'
import Text from '@/components/ui/text'
import faculties from '@/store/faculties'

import { useAppDispatch, useAppSelector } from '@/store'
import { ThirdTestFilterItemType } from '@/interfaces/filters'

import * as styles from './result-test.module.scss'
import BackButton from '@/components/ui/back-button'
import Filter from '@/components/ui/filter'
import { useNavigate } from 'react-router-dom'
import { addResult } from '@/api/result'

const TestResult: React.FC = () => {
    const data = useAppSelector((state) => state.data)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (data.firstTestFilter && data.secondTestFilter) {
            dispatch(
                addResult({
                    question1: data.firstTestFilter,
                    question2: data.secondTestFilter,
                    question3:
                        data.firstTestFilter === 'Бакалавриат и специалитет'
                            ? data.thirdTestFilters.length === 0
                                ? 'Без ответа'
                                : data.thirdTestFilters.join(', ')
                            : null
                })
            )
        }
    }, [])

    const getFilters = () => {
        return [
            data.firstTestFilter,
            data.secondTestFilter,
            ...data.thirdTestFilters
        ]
    }

    const getFacultiesWithFilters = () => {
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
                for (let exams of faculty.exams) {
                    for (let exam of exams) {
                        if (
                            data.thirdTestFilters.includes(
                                exam.name as ThirdTestFilterItemType
                            )
                        ) {
                            return true
                        }
                    }
                }

                return false
            })
        }

        return facultiesBuffer
    }

    return (
        <Block className={styles.testResult}>
            <BackButton onClick={() => navigate('/test/steps/1')} />
            <Text className={styles.title}>Результаты</Text>
            <Block className={styles.filters}>
                {getFilters().map((filter) => (
                    <Filter selected className={styles.filter}>
                        {filter}
                    </Filter>
                ))}
            </Block>
            <Block className={styles.list}>
                {getFacultiesWithFilters().map((faculty) => (
                    <Faculty key={faculty.id} faculty={faculty} />
                ))}
            </Block>
        </Block>
    )
}

export default TestResult

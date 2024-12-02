import Faculty from '@/components/faculty'
import ArrowButton from '@/components/ui/arrow-button'
import Block from '@/components/ui/block'
import Filter from '@/components/ui/filter'
import Text from '@/components/ui/text'
import React from 'react'

import { addResult } from '@/api/result'
import { IFaculty } from '@/interfaces/faculty'
import { useAppDispatch, useAppSelector } from '@/store'
import { getFacultiesWithFilters, getFilters } from '@/utils/filters'
import { useNavigate } from 'react-router-dom'
import {
    clearSecondTestFilters,
    clearThirdTestFilters,
    setFirstTestFilter
} from '@/store/slices/data'

import * as styles from './result-test.module.scss'

const TestResult: React.FC = () => {
    const data = useAppSelector((state) => state.data)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [facultiesWithFilters, setFacultiesWithFilters] =
        React.useState<Array<IFaculty> | null>(null)

    React.useEffect(() => {
        if (data.firstTestFilter && data.secondTestFilter) {
            dispatch(
                addResult({
                    question1: data.firstTestFilter,
                    question2: data.secondTestFilter.join(', '),
                    question3:
                        data.firstTestFilter === 'Бакалавриат и специалитет'
                            ? data.thirdTestFilters.length === 0
                                ? 'Без ответа'
                                : data.thirdTestFilters.join(', ')
                            : null
                })
            )
        }

        setFacultiesWithFilters(getFacultiesWithFilters())
    }, [])

    return (
        <Block className={styles.testResult}>
            <ArrowButton
                leftArrow
                text='Вернуться к тесту'
                onClick={() => {
                    dispatch(setFirstTestFilter(null))
                    dispatch(clearSecondTestFilters())
                    dispatch(clearThirdTestFilters())
                    navigate('/test/steps/1')
                }}
            />
            <Text className={styles.title}>Результаты</Text>
            <Block className={styles.filters}>
                {getFilters().map((filter, index) => (
                    <Filter key={index} selected className={styles.filter}>
                        {filter}
                    </Filter>
                ))}
            </Block>
            {facultiesWithFilters ? (
                facultiesWithFilters.length ? (
                    <Block className={styles.list}>
                        {facultiesWithFilters.map((faculty) => (
                            <Faculty key={faculty.id} faculty={faculty} />
                        ))}
                    </Block>
                ) : (
                    <Text className={styles.emptyText}>
                        К сожалению, нет ни одной программы обучения,
                        соответствующей выбранным вступительным экзаменам
                    </Text>
                )
            ) : null}
        </Block>
    )
}

export default TestResult

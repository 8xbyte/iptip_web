import React from 'react'
import Block from '@/components/ui/block'
import Text from '@/components/ui/text'
import Filter from '@/components/ui/filter'

import { useAppDispatch, useAppSelector } from '@/store'
import {
    addThirdTestFilter,
    clearThirdTestFilters,
    removeThirdTestFilter
} from '@/store/slices/data'
import { ThirdTestFilterItemType } from '@/interfaces/filters'
import { getFacultiesFilters } from '@/utils/filters'

import * as styles from './third-test-step.module.scss'

const ThirdTestStep: React.FC = () => {
    const data = useAppSelector((state) => state.data)

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(clearThirdTestFilters())
    }, [])

    const selectedFilter = (filter: ThirdTestFilterItemType) => {
        return data.thirdTestFilters.includes(filter)
    }

    const clickFilterHandler = (filter: ThirdTestFilterItemType) => {
        if (data.thirdTestFilters.includes(filter)) {
            dispatch(removeThirdTestFilter(filter))
        } else {
            dispatch(addThirdTestFilter(filter))
        }
    }

    return (
        <Block className={styles.thirdTestStep}>
            <Text className={styles.title}>
                Выберите ЕГЭ, которые планируете сдавать
            </Text>
            <Block className={styles.filters}>
                {getFacultiesFilters().map((filter, index) => (
                    <Filter
                        key={index}
                        onClick={() => clickFilterHandler(filter)}
                        selected={selectedFilter(filter)}
                        className={styles.filter}
                    >
                        Информатика
                    </Filter>
                ))}
                <Filter
                    onClick={() => dispatch(clearThirdTestFilters())}
                    selected={data.thirdTestFilters.length === 0}
                    className={styles.filter}
                >
                    Без ответа
                </Filter>
            </Block>
        </Block>
    )
}

export default ThirdTestStep

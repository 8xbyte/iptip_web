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

import * as styles from './third-test-step.module.scss'
import { ThirdTestFilterItemType } from '@/interfaces/filters'

const ThirdTestStep: React.FC = () => {
    const data = useAppSelector((state) => state.data)

    const dispatch = useAppDispatch()

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
            <Text className={styles.title}>Форма обучения</Text>
            <Block className={styles.filters}>
                <Filter
                    onClick={() => clickFilterHandler('Информатика')}
                    selected={selectedFilter('Информатика')}
                    className={styles.filter}
                >
                    Информатика
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('Профильная математика')}
                    selected={selectedFilter('Профильная математика')}
                    className={styles.filter}
                >
                    Профильная математика
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('Русский язык')}
                    selected={selectedFilter('Русский язык')}
                    className={styles.filter}
                >
                    Русский язык
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('Химия')}
                    selected={selectedFilter('Химия')}
                    className={styles.filter}
                >
                    Химия
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('Английский язык')}
                    selected={selectedFilter('Английский язык')}
                    className={styles.filter}
                >
                    Английский язык
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('Творческий экзамен')}
                    selected={selectedFilter('Творческий экзамен')}
                    className={styles.filter}
                >
                    Творческий экзамен
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('Обществознание')}
                    selected={selectedFilter('Обществознание')}
                    className={styles.filter}
                >
                    Обществознание
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('Физика')}
                    selected={selectedFilter('Физика')}
                    className={styles.filter}
                >
                    Физика
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('История')}
                    selected={selectedFilter('История')}
                    className={styles.filter}
                >
                    История
                </Filter>
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

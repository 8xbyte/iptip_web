import Block from '@/components/ui/block'
import Filter from '@/components/ui/filter'
import Text from '@/components/ui/text'
import React from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import {
    addSecondTestFilter,
    removeSecondTestFilter
} from '@/store/slices/data'
import { SecondTestFilterItemType } from '@/interfaces/filters'

import * as styles from './second-test-step.module.scss'

const SecondTestStep: React.FC = () => {
    const data = useAppSelector((state) => state.data)

    const dispatch = useAppDispatch()

    const selectedFilter = (filter: SecondTestFilterItemType) => {
        return data.secondTestFilter.includes(filter)
    }

    const clickFilterHandler = (filter: SecondTestFilterItemType) => {
        if (data.secondTestFilter.includes(filter)) {
            dispatch(removeSecondTestFilter(filter))
        } else {
            dispatch(addSecondTestFilter(filter))
        }
    }

    return (
        <Block className={styles.secondTestStep}>
            <Block className={styles.titleBlock}>
                <Text className={styles.title}>
                    Выберите ЕГЭ, которые планируете сдавать
                </Text>
                <Text className={styles.subTitle}>
                    (выберите одно или несколько направлений)
                </Text>
            </Block>
            <Block className={styles.filters}>
                <Filter
                    onClick={() => clickFilterHandler('IT-направление')}
                    selected={selectedFilter('IT-направление')}
                    className={styles.filter}
                >
                    IT-направление
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('Инженерное направление')}
                    selected={selectedFilter('Инженерное направление')}
                    className={styles.filter}
                >
                    Инженерное направление
                </Filter>
                <Filter
                    onClick={() => clickFilterHandler('Творческое направление')}
                    selected={selectedFilter('Творческое направление')}
                    className={styles.filter}
                >
                    Творческое направление
                </Filter>
            </Block>
        </Block>
    )
}

export default SecondTestStep

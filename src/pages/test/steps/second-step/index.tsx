import Block from '@/components/ui/block'
import Filter from '@/components/ui/filter'
import Text from '@/components/ui/text'
import React from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import { setFirstTestFilter, setSecondTestFilter } from '@/store/slices/data'

import * as styles from './second-test-step.module.scss'

const SecondTestStep: React.FC = () => {
    const data = useAppSelector((state) => state.data)

    const dispatch = useAppDispatch()

    return (
        <Block className={styles.secondTestStep}>
            <Text className={styles.title}>Выберите интересующее Вас направление</Text>
            <Block className={styles.filters}>
                <Filter
                    onClick={() =>
                        dispatch(setSecondTestFilter('IT-направление'))
                    }
                    selected={data.secondTestFilter === 'IT-направление'}
                    className={styles.filter}
                >
                    IT-направление
                </Filter>
                <Filter
                    onClick={() =>
                        dispatch(setSecondTestFilter('Инженерное направление'))
                    }
                    selected={
                        data.secondTestFilter === 'Инженерное направление'
                    }
                    className={styles.filter}
                >
                    Инженерное направление
                </Filter>
                <Filter
                    onClick={() =>
                        dispatch(setSecondTestFilter('Творческое направление'))
                    }
                    selected={
                        data.secondTestFilter === 'Творческое направление'
                    }
                    className={styles.filter}
                >
                    Творческое направление
                </Filter>
            </Block>
        </Block>
    )
}

export default SecondTestStep

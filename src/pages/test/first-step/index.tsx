import Block from '@/components/ui/block'
import Text from '@/components/ui/text'
import React from 'react'
import Filter from '@/components/ui/filter'

import { setFirstTestFilter } from '@/store/slices/data'
import { useAppDispatch, useAppSelector } from '@/store'

import * as styles from './first-test-step.module.scss'

const FirstTestStep: React.FC = () => {
    const data = useAppSelector((state) => state.data)

    const dispatch = useAppDispatch()

    return (
        <Block className={styles.firstTestStep}>
            <Text className={styles.title}>Форма обучения</Text>
            <Block className={styles.filters}>
                <Filter
                    onClick={() =>
                        dispatch(
                            setFirstTestFilter('Бакалавриат и специалитет')
                        )
                    }
                    selected={
                        data.firstTestFilter === 'Бакалавриат и специалитет'
                    }
                    className={styles.filter}
                >
                    Бакалавриат и специалитет
                </Filter>
                <Filter
                    onClick={() => dispatch(setFirstTestFilter('Магистратура'))}
                    selected={data.firstTestFilter === 'Магистратура'}
                    className={styles.filter}
                >
                    Магистратура
                </Filter>
            </Block>
        </Block>
    )
}

export default FirstTestStep

import Block from '@/components/ui/block'
import Filter from '@/components/ui/filter'
import Text from '@/components/ui/text'
import React from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import { setFirstTestFilter } from '@/store/slices/data'
import { useNavigate } from 'react-router-dom'

import * as styles from './first-test-step.module.scss'

const FirstTestStep: React.FC = () => {
    const data = useAppSelector((state) => state.data)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <Block className={styles.firstTestStep}>
            <Text className={styles.title}>Выберите форму обучения</Text>
            <Block className={styles.filters}>
                <Filter
                    onClick={() => {
                        dispatch(
                            setFirstTestFilter('Бакалавриат и специалитет')
                        )
                        navigate('/test/steps/2')
                    }}
                    selected={
                        data.firstTestFilter === 'Бакалавриат и специалитет'
                    }
                    className={styles.filter}
                >
                    Бакалавриат и специалитет
                </Filter>
                <Filter
                    onClick={() => {
                        dispatch(setFirstTestFilter('Магистратура'))
                        navigate('/test/steps/2')
                    }}
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

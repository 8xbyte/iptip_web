import Block from '@/components/ui/block'
import Text from '@/components/ui/text'
import React from 'react'

import * as styles from './test-first-step.module.scss'
import Filter from '@/components/ui/filter'

const TestFirstStep: React.FC = () => {
    return (
        <Block className={styles.testFirstPage}>
            <Text className={styles.title}>Форма обучения</Text>
            <Block className={styles.filters}>
                <Filter className={styles.filter}>
                    Бакалавриат и специалитет
                </Filter>
                <Filter className={styles.filter}>Магистратура</Filter>
            </Block>
        </Block>
    )
}

export default TestFirstStep

import Arrow from '@/assets/arrow.c.svg'
import Header from '@/components/header'
import BackButton from '@/components/ui/back-button'
import Block from '@/components/ui/block'
import Filter from '@/components/ui/filter'
import TestFirstStep from '@/pages/test/first-step'
import TestSecondStep from '@/pages/test/second-step'
import TestThirdStep from '@/pages/test/third-step'
import Button from '@/components/ui/button'
import React from 'react'

import {
    Navigate,
    Route,
    Routes,
    useMatch,
    useNavigate
} from 'react-router-dom'

import * as styles from './test-page.module.scss'
import Text from '@/components/ui/text'

const TestPage: React.FC = () => {
    const match = useMatch('/test/:pageId')
    const pageId = match?.params.pageId

    const navigate = useNavigate()

    const previousPageHandler = () => {
        if (pageId) {
            navigate(`/test/${parseInt(pageId) - 1}`)
        }
    }

    const nextPageHandler = () => {
        if (pageId) {
            navigate(`/test/${parseInt(pageId) + 1}`)
        }
    }

    return pageId ? (
        <Block className={styles.testPage}>
            <Header />
            <Block className={styles.header}>
                <BackButton onClick={() => navigate('/home')} />
                <Filter className={styles.filter} selected>
                    Тест на профориентацию
                </Filter>
            </Block>
            <Routes>
                <Route path='1' element={<TestFirstStep />} />
                <Route path='2' element={<TestSecondStep />} />
                <Route path='3' element={<TestThirdStep />} />
                <Route path='*' element={<Navigate to='/test/1' />} />
            </Routes>
            <Block className={styles.pagination}>
                <Button
                    onClick={previousPageHandler}
                    className={[
                        styles.pageButton,
                        parseInt(pageId) === 1 ? styles.hidden : null
                    ].join(' ')}
                >
                    <Arrow />
                </Button>
                <Block className={styles.pageBlock}>
                    <Button className={styles.page}>
                        {match?.params.pageId}
                    </Button>
                    <Text className={styles.separator}>/</Text>
                    <Button className={styles.page}>3</Button>
                </Block>
                <Button
                    onClick={nextPageHandler}
                    className={[
                        styles.pageButton,
                        styles.nextButton,
                        parseInt(pageId) === 3 ? styles.hidden : null
                    ].join(' ')}
                >
                    <Arrow className={styles.arrow} />
                </Button>
            </Block>
        </Block>
    ) : (
        <Navigate to='/home' />
    )
}

export default TestPage

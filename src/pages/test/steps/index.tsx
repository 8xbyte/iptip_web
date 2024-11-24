import Arrow from '@/assets/arrow.c.svg'
import BackButton from '@/components/ui/back-button'
import Block from '@/components/ui/block'
import Filter from '@/components/ui/filter'

import React from 'react'
import {
    Navigate,
    Route,
    Routes,
    useMatch,
    useNavigate
} from 'react-router-dom'

import Button from '@/components/ui/button'
import Text from '@/components/ui/text'
import { useAppSelector } from '@/store'
import FirstTestStep from './first-step'
import SecondTestStep from './second-step'
import * as styles from './test-steps.module.scss'
import ThirdTestStep from './third-step'
import { getFacultiesWithFilters } from '@/utils/filters'
import TestStepsModal from './modal'

const TestSteps: React.FC = () => {
    const match = useMatch('/test/steps/:pageId')
    const pageId = match?.params.pageId

    const data = useAppSelector((state) => state.data)

    const navigate = useNavigate()

    const [modalShowed, setModalShowed] = React.useState<boolean>(false)

    const previousPageHandler = () => {
        if (pageId) {
            navigate(`/test/steps/${parseInt(pageId) - 1}`)
        }
    }

    const nextPageHandler = () => {
        if (pageId) {
            const pageIdNumber = parseInt(pageId)

            if (pageIdNumber === 1 && data.firstTestFilter) {
                navigate('/test/steps/2')
            } else if (pageIdNumber === 2 && data.secondTestFilter) {
                navigate(
                    data.firstTestFilter === 'Магистратура'
                        ? '/test/result'
                        : '/test/steps/3'
                )
            } else {
                if (getFacultiesWithFilters().length) {
                    navigate('/test/result')
                } else {
                    setModalShowed(true)
                }
            }
        }
    }

    const nextButtonShow = () => {
        if (pageId) {
            const pageIdNumber = parseInt(pageId)
            return (pageIdNumber === 1 && data.firstTestFilter) ||
                (pageIdNumber === 2 && data.secondTestFilter) ||
                pageIdNumber === 3
                ? true
                : false
        }
    }

    return pageId ? (
        <Block className={styles.testSteps}>
            <TestStepsModal
                onClose={() => setModalShowed(false)}
                show={modalShowed}
            />
            <Block className={styles.header}>
                <BackButton onClick={() => navigate('/home')} />
                <Filter className={styles.filter} selected>
                    Тест на профориентацию
                </Filter>
            </Block>
            <Routes>
                <Route path='1' element={<FirstTestStep />} />
                <Route path='2' element={<SecondTestStep />} />
                <Route path='3' element={<ThirdTestStep />} />
                <Route path='*' element={<Navigate to='/test/steps/1' />} />
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
                    <Button className={styles.page}>
                        {data.firstTestFilter === 'Магистратура' ? 2 : 3}
                    </Button>
                </Block>
                <Button
                    onClick={nextPageHandler}
                    className={[
                        styles.pageButton,
                        styles.nextButton,
                        nextButtonShow() ? null : styles.hidden
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

export default TestSteps

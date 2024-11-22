import Header from '@/components/header'
import Block from '@/components/ui/block'
import TestResult from '@/pages/test/result'
import TestSteps from '@/pages/test/steps'
import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import * as styles from './test-page.module.scss'

const TestPage: React.FC = () => {
    return (
        <Block className={styles.testPage}>
            <Header />
            <Routes>
                <Route path='steps/*' element={<TestSteps />} />
                <Route path='result' element={<TestResult />} />
                <Route path='*' element={<Navigate to='/test/steps/1' />} />
            </Routes>
        </Block>
    )
}

export default TestPage

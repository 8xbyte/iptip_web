import Block from '@/components/ui/block'
import FacultyPage from '@/pages/faculty'
import HomePage from '@/pages/home'
import TestPage from '@/pages/test'
import React, { useEffect } from 'react'

import { Route, Routes } from 'react-router'
import { Navigate } from 'react-router-dom'

import * as styles from './app.module.scss'

const App: React.FC = () => {
    useEffect(() => {
        const preventZoom = (event: TouchEvent) => {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        };

        document.addEventListener('touchmove', preventZoom, { passive: false });

        return () => {
            document.removeEventListener('touchmove', preventZoom);
        };
    }, []);
    return (
        <Block className={styles.app}>
            <Routes>
                <Route path='home' element={<HomePage />} />
                <Route path='faculties/:facultyId' element={<FacultyPage />} />
                <Route path='test' element={<Navigate to='/test/1' />} />
                <Route path='test/*' element={<TestPage />} />
                <Route path='*' element={<Navigate to='/home' />} />
            </Routes>
        </Block>
    )
}

export default App

import Header from '@/components/header'
import Block from '@/components/ui/block'
import Button from '@/components/ui/button'
import Arrow from '@/assets/arrow.c.svg'
import React from 'react'

import { Navigate, useNavigate, useParams } from 'react-router-dom'

import * as styles from './faculty-page.module.scss'
import BackButton from '@/components/ui/back-button'

const FacultyPage: React.FC = () => {
    const { facultyId } = useParams<{
        facultyId: string
    }>()

    const navigate = useNavigate()

    return facultyId ? (
        <Block className={styles.facultyPage}>
            <Header qr />
            <Block className={styles.header}>
                <BackButton onClick={() => navigate('/home')} />
            </Block>
        </Block>
    ) : (
        <Navigate to='/home' />
    )
}

export default FacultyPage

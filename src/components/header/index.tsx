import React from 'react'
import Block from '@/components/ui/block'
import Image from '@/components/ui/image'
import Text from '@/components/ui/text'
import Logo from '@/assets/logo.png'
import HeaderQr from '@/assets/header-qr.c.svg'
import Button from '@/components/ui/button'
import Lion from '@/assets/lion.png'

import { useNavigate } from 'react-router-dom'

import * as styles from './header.module.scss'
import { useAppDispatch } from '@/store'
import {
    clearThirdTestFilters,
    setFirstTestFilter,
    setSecondTestFilter
} from '@/store/slices/data'

export interface IHeaderProps {
    button?: boolean
    qr?: boolean
}

const Header: React.FC<IHeaderProps> = ({ button = false, qr = false }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const testButtonHandler = () => {
        dispatch(setFirstTestFilter(null))
        dispatch(setSecondTestFilter(null))
        dispatch(clearThirdTestFilters())
        navigate('/test')
    }

    return (
        <Block className={styles.header}>
            <Image
                onClick={() => navigate('/home')}
                className={styles.logo}
                src={Logo}
            />
            <Text className={styles.text}>
                Институт перспективных технологий и индустриального
                программирования
            </Text>
            {button ? (
                <Button
                    className={styles.testButton}
                    onClick={testButtonHandler}
                >
                    Тест на профориентацию
                    <Image className={styles.lion} src={Lion} />
                </Button>
            ) : null}
            {qr ? (
                <Block className={styles.qrBlock}>
                    <HeaderQr className={styles.qr} />
                    <Text
                        onClick={() =>
                            (window.location.href = 'https://priem.mirea.ru')
                        }
                        className={styles.link}
                    >
                        priem.mirea.ru
                    </Text>
                </Block>
            ) : null}
        </Block>
    )
}

export default Header

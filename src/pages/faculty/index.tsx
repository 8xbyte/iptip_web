import Header from '@/components/header'
import Block from '@/components/ui/block'
import Button from '@/components/ui/button'
import Arrow from '@/assets/arrow.c.svg'
import React from 'react'

import { Navigate, useNavigate, useParams } from 'react-router-dom'

import * as styles from './faculty-page.module.scss'
import BackButton from '@/components/ui/back-button'
import Filter from '@/components/ui/filter'
import { useAppSelector } from '@/store'
import faculties from '@/store/faculties'
import { IFaculty } from '@/interfaces/faculty'
import Text from '@/components/ui/text'
import Image from '@/components/ui/image'

const FacultyPage: React.FC = () => {
    const { facultyId } = useParams<{
        facultyId: string
    }>()

    const navigate = useNavigate()

    const [faculty, setFaculty] = React.useState<IFaculty | null>(null)

    React.useEffect(() => {
        if (facultyId) {
            setFaculty(
                faculties.find((value) => value.id === parseInt(facultyId)) ??
                    null
            )
        } else {
            navigate('/home')
        }
    }, [])

    return faculty ? (
        <Block className={styles.facultyPage}>
            <Header qr />
            <Block className={styles.header}>
                <BackButton onClick={() => navigate('/home')} />
                <Block className={styles.filters}>
                    <Filter className={styles.filter}>
                        {faculty.passingScore}
                        <Text className={styles.text}> — проходной балл</Text>
                    </Filter>
                    <Filter className={styles.filter}>
                        <Text className={styles.text}>{faculty.type}</Text>
                    </Filter>
                </Block>
            </Block>
            <Block className={styles.infoBlock}>
                <Block className={[styles.block, styles.leftBlock].join(' ')}>
                    <Text className={styles.bold}>{faculty.date}</Text>
                    <Text className={styles.description}>
                        {faculty.institute}
                    </Text>
                    <Text className={styles.bold}>{faculty.name}</Text>
                    {faculty.descriptions.map((text) => (
                        <Text className={styles.description}>{text}</Text>
                    ))}
                </Block>
                <Block className={[styles.block, styles.rightBlock].join(' ')}>
                    <Block className={styles.filters}>
                        <Filter selected className={styles.filter}>
                            от 288 000 ₽ *
                            <Text className={styles.text}>
                                cтоимость обучения
                            </Text>
                        </Filter>
                        <Filter selected className={styles.filter}>
                            140 *
                            <Text className={styles.text}>бюджетных мест</Text>
                        </Filter>
                    </Block>
                    <Text className={styles.description}>
                        *Данные на 2024 г. <br /> Актуальные данные появятся в
                        январе 2025 г.
                    </Text>
                </Block>
            </Block>
            <Block className={styles.examsBlock}>
                <Text className={styles.title}>Вступительные испытания</Text>
                <Block className={styles.filters}>
                    {faculty.exams.map((exam) => (
                        <Filter selected className={styles.filter}>
                            {exam.name}{' '}
                            <Text className={styles.description}>
                                от {exam.minScore} баллов
                            </Text>
                        </Filter>
                    ))}
                </Block>
            </Block>
            <Block className={styles.additionalInfoBlock}>
                <Block className={[styles.block, styles.leftBlock].join(' ')}>
                    <Text className={styles.title}>Что вы будете изучать</Text>
                    <Image className={styles.image} src={faculty.qrUrl} />
                </Block>
                <Block className={[styles.block, styles.middleBlock].join(' ')}>
                    <Text className={styles.title}>
                        Основные места прохождения практик
                    </Text>
                    <Block className={styles.list}>
                        {faculty.practicePlaces.map((place) => (
                            <Text className={styles.item}>{place}</Text>
                        ))}
                    </Block>
                </Block>
                <Block className={[styles.block, styles.rightBlock].join(' ')}>
                    <Text className={styles.title}>
                        Профессии, которые могут выбрать выпускники
                    </Text>
                    <Block className={styles.list}>
                        {faculty.professions.map((profession) => (
                            <Text className={styles.item}>
                                {profession}
                            </Text>
                        ))}
                    </Block>
                </Block>
            </Block>
        </Block>
    ) : null
}

export default FacultyPage

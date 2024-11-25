import Header from '@/components/header'
import BackButton from '@/components/ui/back-button'
import Block from '@/components/ui/block'
import Filter from '@/components/ui/filter'
import Image from '@/components/ui/image'
import Text from '@/components/ui/text'
import faculties from '@/store/faculties'
import React from 'react'

import { IFaculty } from '@/interfaces/faculty'
import { useNavigate, useParams } from 'react-router-dom'

import * as styles from './faculty-page.module.scss'

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
                    {faculty.passingScore ? (
                        <Filter className={styles.filter}>
                            {`${faculty.passingScore}*`}
                            <Text className={styles.text}>
                                — проходной балл
                            </Text>
                        </Filter>
                    ) : faculty.budgetPlaces === undefined ? (
                        <Filter className={styles.filter}>
                            <Text className={styles.text}>Новый профиль</Text>
                        </Filter>
                    ) : null}
                    <Filter className={styles.filter}>
                        <Text className={styles.text}>{faculty.type}</Text>
                    </Filter>
                </Block>
            </Block>
            <Block className={styles.infoBlock}>
                <Block className={[styles.block, styles.leftBlock].join(' ')}>
                    <Text className={[styles.bold, styles.date].join(' ')}>
                        {faculty.date}
                    </Text>
                    <Text className={styles.description}>
                        {faculty.institute}
                    </Text>
                    <Text className={styles.bold}>{faculty.name}</Text>
                    <Text className={styles.description}>
                        {faculty.description}
                    </Text>
                </Block>
                <Block className={[styles.block, styles.rightBlock].join(' ')}>
                    <Block className={styles.filters}>
                        {faculty.price !== undefined ? (
                            <Filter selected className={styles.filter}>
                                {`от ${new Intl.NumberFormat('ru-RU').format(
                                    faculty.price
                                )} ₽ *`}
                                <Text className={styles.text}>
                                    cтоимость обучения
                                </Text>
                            </Filter>
                        ) : null}
                        {faculty.budgetPlaces !== undefined ? (
                            <Filter selected className={styles.filter}>
                                {faculty.budgetPlaces} *
                                <Text className={styles.text}>
                                    бюджетных мест
                                </Text>
                            </Filter>
                        ) : null}
                    </Block>
                    {faculty.budgetPlaces && faculty.price ? (
                        <Text className={styles.description}>
                            *Данные на 2024 г. набора. <br /> Актуальные данные
                            появятся в январе 2025 г.
                        </Text>
                    ) : null}
                </Block>
            </Block>
            <Block className={styles.examsBlock}>
                <Text className={styles.title}>Вступительные испытания</Text>
                <Block className={styles.filters}>
                    {faculty.exams.map((exams, index) => (
                        <Filter key={index} selected className={styles.filter}>
                            {exams.map((exam) => exam.name).join(' / ')}
                            <Text className={styles.description}>
                                {exams
                                    .map(
                                        (exam) => `от ${exam.minScore} баллов *`
                                    )
                                    .join(' / ')}
                            </Text>
                        </Filter>
                    ))}
                </Block>
            </Block>
            <Block className={styles.additionalInfoBlock}>
                {faculty.qrUrl ? (
                    <Block
                        className={[styles.block, styles.leftBlock].join(' ')}
                    >
                        <Text className={styles.title}>
                            Что вы будете изучать
                        </Text>
                        <Image className={styles.image} src={faculty.qrUrl} />
                    </Block>
                ) : null}
                {faculty.practicePlaces.length ? (
                    <Block
                        className={[styles.block, styles.middleBlock].join(' ')}
                    >
                        <Text className={styles.title}>
                            Основные места прохождения практик
                        </Text>
                        <Block className={styles.lists}>
                            {faculty.practicePlaces.map((places, index) => (
                                <Block key={index} className={styles.list}>
                                    {places.map((place, index) => (
                                        <Text
                                            key={index}
                                            className={styles.item}
                                        >
                                            {place}
                                        </Text>
                                    ))}
                                </Block>
                            ))}
                        </Block>
                    </Block>
                ) : null}
                {faculty.professions.length ? (
                    <Block
                        className={[styles.block, styles.rightBlock].join(' ')}
                    >
                        <Text className={styles.title}>
                            Профессии, которые могут выбрать выпускники
                        </Text>
                        <Block className={styles.lists}>
                            {faculty.professions.map((professions, index) => (
                                <Block key={index} className={styles.list}>
                                    {professions.map((profession, index) => (
                                        <Text
                                            key={index}
                                            className={styles.item}
                                        >
                                            {profession}
                                        </Text>
                                    ))}
                                </Block>
                            ))}
                        </Block>
                    </Block>
                ) : null}
            </Block>
        </Block>
    ) : null
}

export default FacultyPage

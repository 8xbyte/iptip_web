import Header from '@/components/header'
import ArrowButton from '@/components/ui/arrow-button'
import Block from '@/components/ui/block'
import Filter from '@/components/ui/filter'
import Image from '@/components/ui/image'
import Text from '@/components/ui/text'
import faculties from '@/store/faculties'
import React from 'react'

import { IFaculty } from '@/interfaces/faculty'
import { useNavigate, useParams } from 'react-router-dom'

import * as styles from './faculty-page.module.scss'

const getBudgetPlacesLabel = (count: number): string => { // Функция склонения 
    const forms = ['бюджетное место', 'бюджетных места', 'бюджетных мест'];
    const absCount = Math.abs(count) % 100;
    const lastDigit = absCount % 10;

    if (absCount > 10 && absCount < 20) {
        return forms[2]; // 11-19 — всегда "бюджетных мест"
    }
    if (lastDigit > 1 && lastDigit < 5) {
        return forms[1]; // 2, 3, 4 — "бюджетных места"
    }
    if (lastDigit === 1) {
        return forms[0]; // 1 — "бюджетное место"
    }
    return forms[2]; // Остальные — "бюджетных мест"
};

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
            <Block
                className={[
                    styles.header,
                    faculty.sponsorLogoUrl ? styles.sponsorHeader : null
                ].join(' ')}
            >
                <ArrowButton
                    leftArrow
                    text='Вернуться назад'
                    onClick={() => navigate('/home')}
                />
                <Block className={styles.filters}>
                    {faculty.sponsorLogoUrl ? (
                        <Filter
                            className={[
                                styles.filter,
                                styles.sponsorFilter
                            ].join(' ')}
                        >
                            <Image src={faculty.sponsorLogoUrl} />
                        </Filter>
                    ) : null}
                    {faculty.passingScore ? (
                        <Filter className={styles.filter}>
                            {`${faculty.passingScore}`}
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
                    <Text
                        className={styles.description}
                        dangerouslySetInnerHTML={{
                            __html: faculty.description
                        }}
                    />
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
                                {faculty.budgetPlaces} 
                                <Text className={styles.text}>
                                    {getBudgetPlacesLabel(faculty.budgetPlaces)}                    
                                </Text>
                            </Filter>
                        ) : null}
                    </Block>
                    {
                        /* faculty.budgetPlaces &&*/ faculty.price ? (
                            <Text className={styles.data}>
                                *Данные на 2024 г. набора. <br /> Актуальные
                                данные появятся в апреле 2025 г.
                            </Text>
                        ) : null
                    }
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
                                        (exam) => `от ${exam.minScore} баллов`
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
            {faculty.budgetPlaces === undefined ? (
                <Text className={styles.data}>
                    *Данные на 2024 г. набора. <br /> Актуальные данные появятся
                    в апреле 2025 г.
                </Text>
            ) : null}
        </Block>
    ) : null
}

export default FacultyPage

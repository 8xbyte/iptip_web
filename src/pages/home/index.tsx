import Faculty from '@/components/faculty'
import Header from '@/components/header'
import Block from '@/components/ui/block'
import Filter from '@/components/ui/filter'
import Text from '@/components/ui/text'
import faculties from '@/store/faculties'
import React from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import { setHomeNavigation } from '@/store/slices/data'

import * as styles from './home-page.module.scss'

const HomePage: React.FC = () => {
    const data = useAppSelector((state) => state.data)

    const dispatch = useAppDispatch()

    return (
        <Block className={styles.homePage}>
            <Header button />
            <Block className={styles.filters}>
                <Filter
                    className={styles.filter}
                    onClick={() =>
                        dispatch(setHomeNavigation('Бакалавриат и специалитет'))
                    }
                    selected={data.homeFilter === 'Бакалавриат и специалитет'}
                >
                    <Text>Бакалавриат и специалитет</Text>
                </Filter>
                <Filter
                    className={styles.filter}
                    onClick={() => dispatch(setHomeNavigation('Магистратура'))}
                    selected={data.homeFilter === 'Магистратура'}
                >
                    <Text>Магистратура</Text>
                </Filter>
            </Block>
            {['Бакалавриат и специалитет', null].includes(data.homeFilter) ? (
                <Block className={styles.facultiesBlock}>
                    {!data.homeFilter ? (
                        <Text className={styles.title}>
                            Бакалавриат и специалитет
                        </Text>
                    ) : null}
                    <Block className={styles.list}>
                        {faculties
                            .slice(
                                0,
                                data.homeFilter === null ? 8 : faculties.length
                            )
                            .filter(
                                (faculty) =>
                                    faculty.type === 'Бакалавриат' ||
                                    faculty.type === 'Специалитет'
                            )
                            .sort((first, second) => first.id - second.id)
                            .map((faculty) => (
                                <Faculty
                                    wide
                                    key={faculty.id}
                                    faculty={faculty}
                                />
                            ))}
                    </Block>
                </Block>
            ) : null}
            {['Магистратура', null].includes(data.homeFilter) ? (
                <Block className={styles.facultiesBlock}>
                    {!data.homeFilter ? (
                        <Text className={styles.title}>Магистратура</Text>
                    ) : null}
                    <Block className={styles.list}>
                        {faculties
                            .filter(
                                (faculty) => faculty.type === 'Магистратура'
                            )
                            .sort((first, second) => first.id - second.id)
                            .map((faculty) => (
                                <Faculty
                                    wide
                                    key={faculty.id}
                                    faculty={faculty}
                                />
                            ))}
                    </Block>
                </Block>
            ) : null}
            <Text className={styles.description}>
                *Данные на 2024 г. набора <br /> Актуальные данные появятся в
                январе 2025 г.
            </Text>
        </Block>
    )
}

export default HomePage

import Block from '@/components/ui/block'
import Text from '@/components/ui/text'
import React from 'react'

import { IFaculty } from '@/interfaces/faculty'
import { useNavigate } from 'react-router-dom'

import * as styles from './faculty.module.scss'
import Image from '../ui/image'

export interface IFacultyProps {
    faculty: IFaculty
    wide?: boolean
}

const Faculty: React.FC<IFacultyProps> = ({ faculty, wide = false }) => {
    const navigate = useNavigate()

    return (
        <Block
            className={[
                styles.faculty,
                faculty.wide && wide ? styles.wide : null
            ].join(' ')}
            onClick={() => navigate(`/faculties/${faculty.id}`)}
        >
            <Block className={styles.topBlock}>
                <Block className={styles.leftBlock}>
                    <Block className={styles.infoBlock}>
                        <Block className={styles.info}>{faculty.date}</Block>
                        <Block className={styles.info}>
                            {faculty.direction}
                        </Block>
                    </Block>
                    <Block
                        style={{
                            width: faculty.nameBlockWidth
                        }}
                        className={styles.textBlock}
                    >
                        <Text className={styles.subTitle}>
                            {faculty.institute}
                        </Text>
                        <Text className={styles.title}>{faculty.name}</Text>
                    </Block>
                    {faculty.sponsorLogoUrl ? (
                        <Block className={styles.sponsorBlock}>
                            <Text className={styles.text}>
                                Программа реализована при поддержке:
                            </Text>
                            <Image
                                className={styles.sponsorLogo}
                                src={faculty.sponsorLogoUrl}
                            />
                        </Block>
                    ) : null}
                </Block>
                <Block
                    className={[
                        styles.examsBlock,
                        faculty.type === 'Магистратура'
                            ? styles.alignCenter
                            : null
                    ].join(' ')}
                >
                    {faculty.exams.map((exams, index) => (
                        <Block
                            key={index}
                            className={[
                                styles.info,
                                faculty.type === 'Магистратура'
                                    ? styles.noWrap
                                    : null
                            ].join(' ')}
                        >
                            {exams
                                .map((exam) => exam.shortName ?? exam.name)
                                .join(' / ')}
                        </Block>
                    ))}
                </Block>
            </Block>
            <Block className={styles.bottomBlock}>
                {faculty.passingScore ? (
                    <Block
                        className={[
                            styles.info,
                            faculty.passingScore ? null : styles.newProfile
                        ].join(' ')}
                    >
                        {`${faculty.passingScore} — проходной балл`}
                    </Block>
                ) : null}
                {faculty.budgetPlaces === undefined ? (
                    <Block
                        className={[styles.info, styles.newProfile].join(' ')}
                    >
                        Новая программа
                    </Block>
                ) : null}
                {faculty.budgetPlaces !== undefined ? (
                    <Block className={styles.info}>
                        {`${faculty.budgetPlaces} — бюджетных мест`}
                    </Block>
                ) : null}
            </Block>
        </Block>
    )
}

export default Faculty

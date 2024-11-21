import Block from '@/components/ui/block'
import Text from '@/components/ui/text'
import React from 'react'

import { IFaculty } from '@/interfaces/faculty'
import { useNavigate } from 'react-router-dom'

import * as styles from './faculty.module.scss'

export interface IFacultyProps {
    faculty: IFaculty
}

const Faculty: React.FC<IFacultyProps> = ({ faculty }) => {
    const navigate = useNavigate()

    return (
        <Block
            className={[
                styles.faculty,
                faculty.bigName ? styles.bigName : null
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
                    <Block className={styles.textBlock}>
                        <Text className={styles.subTitle}>
                            {faculty.institute}
                        </Text>
                        <Text className={styles.title}>{faculty.name}</Text>
                    </Block>
                </Block>
                <Block className={styles.examsBlock}>
                    {faculty.exams.map((exam, index) => (
                        <Block key={index} className={styles.info}>
                            {exam.name}
                        </Block>
                    ))}
                </Block>
            </Block>
            <Block className={styles.bottomBlock}>
                <Block
                    className={[
                        styles.info,
                        faculty.passingScore === null ? styles.newProfile : null
                    ].join(' ')}
                >
                    {faculty.passingScore
                        ? `${faculty.passingScore} — проходной балл`
                        : 'Новый профиль'}
                </Block>
                {faculty.passingScore ? (
                    <Block className={styles.info}>
                        {faculty.places.budget} — бюджетных мест
                    </Block>
                ) : null}
            </Block>
        </Block>
    )
}

export default Faculty
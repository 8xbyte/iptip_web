import Block from '@/components/ui/block'
import Error from '@/assets/error.c.svg'
import Close from '@/assets/close.c.svg'
import React from 'react'

import * as styles from './test-steps-modal.module.scss'
import Text from '@/components/ui/text'

export interface IModalProps {
    show: boolean
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

const TestStepsModal: React.FC<IModalProps> = ({ show = false, onClose }) => {
    return show ? (
        <Block className={styles.testStepsModal}>
            <Block className={styles.container}>
                <Block className={styles.leftBlock}>
                    <Error />
                    <Block className={styles.texts}>
                        <Text className={styles.title}>Внимание</Text>
                        <Text className={styles.subTitle}>
                            К сожалению, нет ни одной программы обучения,
                            соответствующей выбранным вступительным экзаменам
                        </Text>
                    </Block>
                </Block>
                <Close onClick={onClose} />
            </Block>
        </Block>
    ) : null
}

export default TestStepsModal

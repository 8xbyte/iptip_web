import Close from '@/assets/close.c.svg'
import Error from '@/assets/error.c.svg'
import Block from '@/components/ui/block'
import Text from '@/components/ui/text'
import React from 'react'

import * as styles from './test-steps-modal.module.scss'

export interface IModalProps {
    show: boolean
    onClose?: React.MouseEventHandler<HTMLDivElement>
}

const TestStepsModal: React.FC<IModalProps> = ({ show = false, onClose }) => {
    return show ? (
        <Block className={styles.testStepsModal}>
            <Block className={styles.container}>
                <Block className={styles.leftBlock}>
                    <Error className={styles.error} />
                    <Block className={styles.texts}>
                        <Text className={styles.title}>Внимание</Text>
                        <Text className={styles.subTitle}>
                            К сожалению, нет ни одной программы обучения,
                            соответствующей выбранным вступительным экзаменам.
                            Выберите дополнительные экзамены или другую группу
                            направлений на предыдущем шаге
                        </Text>
                    </Block>
                </Block>
                <Close className={styles.close} onClick={onClose} />
            </Block>
        </Block>
    ) : null
}

export default TestStepsModal

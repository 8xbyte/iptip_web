import React from 'react'
import Text from '@/components/ui/text'
import Button from '@/components/ui/button'
import Arrow from '@/assets/arrow.c.svg'

import * as styles from './back-button.module.scss'

export interface IBackButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const BackButton: React.FC<IBackButtonProps> = ({
    className,
    children,
    ...others
}) => {
    return (
        <Button
            className={[styles.backButton, className].join(' ')}
            {...others}
        >
            <Arrow /> <Text>Вернуться на главную страницу</Text>
        </Button>
    )
}

export default BackButton

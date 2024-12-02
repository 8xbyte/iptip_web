import React from 'react'
import Text from '@/components/ui/text'
import Button from '@/components/ui/button'
import Arrow from '@/assets/arrow.c.svg'

import * as styles from './arrow-button.module.scss'

export interface IArrowButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    text: string
    rightArrow?: boolean
    leftArrow?: boolean
}

const ArrowButton: React.FC<IArrowButtonProps> = ({
    className,
    children,
    text,
    leftArrow = false,
    rightArrow = false,
    ...others
}) => {
    return (
        <Button
            className={[styles.arrowButton, className].join(' ')}
            {...others}
        >
            {leftArrow ? <Arrow /> : null}
            <Text>{text}</Text>
            {rightArrow ? <Arrow className={styles.right} /> : null}
        </Button>
    )
}

export default ArrowButton

import React from 'react'

import Button, { IButtonProps } from '@/components/ui/button'

import * as styles from './filter.module.scss'

export interface IFilterProps extends IButtonProps {
    selected?: boolean
}

const Filter: React.FC<IFilterProps> = ({
    className,
    children,
    selected = false,
    ...others
}) => {
    return (
        <Button
            className={[
                styles.filter,
                selected ? styles.selected : null,
                className
            ].join(' ')}
            {...others}
        >
            {children}
        </Button>
    )
}

export default Filter

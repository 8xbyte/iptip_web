import React from 'react'

import * as styles from './button.module.scss'

export interface IButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

const Button: React.FC<IButtonProps> = ({ className, children, ...others }) => {
    return (
        <button className={[className, styles.button].join(' ')} {...others}>
            {children}
        </button>
    )
}

export default Button

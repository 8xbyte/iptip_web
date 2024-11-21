import React from 'react'

import * as styles from './text.module.scss'

export interface ITextProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    > {}

const Text: React.FC<ITextProps> = ({ className, children, ...others }) => {
    return (
        <span className={[className, styles.text].join(' ')} {...others}>
            {children}
        </span>
    )
}

export default Text

import React from 'react'

import * as styles from './block.module.scss'

export interface IBlockProps
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {}

const Block: React.FC<IBlockProps> = ({ className, children, ...others }) => {
    return (
        <div className={[className, styles.block].join(' ')} {...others}>
            {children}
        </div>
    )
}

export default Block

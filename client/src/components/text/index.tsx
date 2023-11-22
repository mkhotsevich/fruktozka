import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

type Props = PropsWithChildren<{
    variant?: 'h1' | 'h2' | 'h3' | 'p';
    align?: 'center' | 'right';
    fullWidth?: boolean;
}>

export const Text: FC<Props> = (props) => {
    const { children, variant = 'p', align, fullWidth } = props

    return (
        <div className={clsx(styles.text, {
            [styles.h1]: variant === 'h1',
            [styles.h2]: variant === 'h2',
            [styles.h3]: variant === 'h3',
            [styles.p]: variant === 'p',
            [styles.center]: align === 'center',
            [styles.right]: align === 'right',
            [styles.fullWidth]: fullWidth,
        })}>
            {children}
        </div>
    )
}
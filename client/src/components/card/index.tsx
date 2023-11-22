import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.css'

export const Card: FC<PropsWithChildren> = (props) => {
    const { children } = props

    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}
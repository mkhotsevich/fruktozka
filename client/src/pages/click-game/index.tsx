import { useEffect } from "react"
import { Card, Text } from "../../components"
import styles from './styles.module.css'
import { socket } from "../../utils/socket"

export const ClickGame = () => {

    useEffect(() => { 
        const onConnect = () => {
            console.log('connect')
        }

        socket.on('connect', onConnect)

        return () => {
            socket.on('connect', onConnect)
        }
    }, [])

    return (
        <div className={styles.clickGame}>
            <Text variant="h1" align="center">#FREEFRUKTOZKA</Text>
            <div className={styles.infoContainer}>
                <Card>
                    <div className={styles.info}>
                        <Text>Всего кликов: 2 435 543</Text>
                        <div className={styles.divider} />
                        <Text>Уже в бане: 103:23:59:59</Text>
                        <div className={styles.divider} />
                        <Text>Поддержать fruktozka</Text>
                        <div className={styles.divider} />
                        <Text>Поддержать hotsavage66</Text>
                        <div className={styles.divider} />
                        <Text>Призы</Text>
                    </div>
                </Card>
            </div>

            <div className={styles.content}>
                <div className={styles.gameContainer}>
                    <Card>
                        <div className={styles.game}>
                            <div className={styles.contentHeader}>
                                <Text variant='h2' align='center'>Игра</Text>
                                <div className={styles.contentDivider} />
                            </div>
                            <div className={styles.gameField}>
                                123
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={styles.leaderboardWrapper}>
                    <Card>
                        <div className={styles.leaderboard}>
                            <div className={styles.contentHeader}>
                                <Text variant='h2' align='center'>Таблица лидеров</Text>
                                <div className={styles.contentDivider} />
                            </div>
                            <div className={styles.leaderboardList}>
                                <Text>1. hotsavage666 - 2 543 556</Text>
                                <Text>2. BY_OWL - 2 543</Text>
                                <Text>3. sinkedmernaid - 2</Text>
                            </div>

                            <div className={styles.leaderboardFooter}>
                                <div className={styles.contentDivider} />
                                <Text>3. sinkedmernaid - 2</Text>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
import { FC } from 'react'
import styles from './title.module.css'
const Title: FC = ({ children }) => {
	return <div className={styles.main__page__title}>{children}</div>
}

export default Title

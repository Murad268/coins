import { FC } from 'react'
import styles from './input.module.css'
const Input: FC = () => {
	return (
		<form className={styles.search}>
			<label className={styles.search__label}>Input field</label>
			<div className={styles.input__wrapper}>
				<input type='text' />
				<button>Search</button>
			</div>
		</form>
	)
}

export default Input

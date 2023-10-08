import CoinsCategory from '../CoinsCategory/CoinsCategory'
import styles from './coinsCategories.module.css'
const CoinsCategories = () => {
	return (
		<div className={styles.coins__categories}>
			<CoinsCategory />
			<CoinsCategory />

			<CoinsCategory />
		</div>
	)
}

export default CoinsCategories

import React from 'react'
import styles from './advancedFilter.module.css'
const AdvancedFilter = () => {
	return (
		<div className={styles.advanced}>
			<div className={styles.advanced__info}>
				<div>
					<label htmlFor=''>Issuing country</label>
					<select name='' id=''>
						<option value=''>Canada</option>
					</select>
				</div>
				<div>
					<label htmlFor=''>Issuing country</label>
					<select name='' id=''>
						<option value=''>Canada</option>
					</select>
				</div>
				<div>
					<label htmlFor=''>Issuing country</label>
					<select name='' id=''>
						<option value=''>Canada</option>
					</select>
				</div>
			</div>
			<div className={styles.advanced__price}>
				<div className={styles.advanced__hum}>
					<div>
						<label htmlFor=''>Price </label>
						<input type='text' placeholder='from' />
					</div>
					<div>
						<label htmlFor=''>Price </label>
						<input type='text' placeholder='to' />
					</div>
				</div>

				<div className={styles.advanced__hum}>
					<div>
						<label htmlFor=''>Year of issue </label>
						<input type='text' placeholder='from' />
					</div>
					<div>
						<label htmlFor=''>Year of issue </label>
						<input type='text' placeholder='to' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdvancedFilter

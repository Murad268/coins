import styles from './createCoin.module.css'
const UpdateCoin = () => {
	return (
		<div>
			<form className={styles.form} action=''>
				<div>
					<div>
						<label htmlFor=''>Coin name</label>
						<input name='name' type='text' />
					</div>

					<div>
						<label htmlFor=''>Face value</label>
						<input name='faceValue' type='text' />
					</div>

					<div>
						<label htmlFor=''>Year of issue</label>
						<input name='year' type='text' />
					</div>

					<div>
						<label htmlFor=''>Price</label>
						<input name='price' type='text' />
					</div>
					<div>
						<label htmlFor=''>Country</label>
						<input name='country' type='text' />
					</div>

					<div>
						<label htmlFor=''>Metal</label>
						<input name='metal' type='text' />
					</div>
				</div>

				<div>
					<div className={styles.area}>
						<label htmlFor=''>Short description</label>
						<textarea name='shortD'></textarea>
					</div>

					<div style={{ marginTop: '-25px' }} className={styles.area}>
						<label htmlFor=''>Long description</label>
						<textarea name='longD'></textarea>
					</div>

					<div style={{ marginTop: '-2px' }}>
						<label htmlFor=''>Quality of the coin</label>
						<input name='quality' type='text' />
					</div>
					<div>
						<label htmlFor=''>Weight</label>
						<input name='weight' type='text' />
					</div>
				</div>
				<div>
					<div>
						<label htmlFor=''>Link to obverse image</label>
						<input className={styles.file} name='observe' type='file' />
					</div>

					<div>
						<label htmlFor=''>Link to reverse image</label>
						<input name='reverse' className={styles.file} type='file' />
					</div>

					<div className={styles.btns}>
						<button className={styles.btn} type='submit'>
							create
						</button>
						<button className={styles.btn} type='submit'>
							cancel
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default UpdateCoin

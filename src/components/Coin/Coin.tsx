import React from 'react'
import styles from './coin.module.css'
const Coin = () => {
	return (
		<div className={styles.coin}>
			<div className={styles.coin__photo}>
				<img
					src='https://s3-alpha-sig.figma.com/img/28f4/5043/b838783aa13e9cbbb6987fb86b755be9?Expires=1697414400&Signature=ev9nitMNZjpD7kExS10xmuG7ei-IGvKCkVGQ~0kOPHK1g9SEmfEewP~ezNosh9at~FfCq4vNosTW9D-vQnaogxe5IOiXayVXrz9Qp3QlRkrCsUlDykFT5T794HJPC-0bcrwOEJgtdnD~u19UzdQgJ65OxEw~pczTplAnzQO-nAGnbh4EuDg~PUaQ1c3MxnEoTRV3n3bVWpZxkyRbOfhQn1EuwOrxfVtm3hjhvsLFc5PrUf1MjV~jDOv2yrZoo0ZZwgpkOv4yMSUUleg7GOynmI2HINq64aUUBEvrDiHgPFQ80cqM3eLQlzgOxeaEk78tUJSxs0DeNNmtV8CGIjtfBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
					alt=''
				/>
			</div>
			<div className='coin__center'>
				<h6 className={styles.coin__center__title}>ss</h6>
				<p>ss</p>
			</div>
			<div className={styles.coin__controlls}>
				<a className='coin__controlls__exit flex-center'>Edit</a>
				<a className='coin__controlls__delete flex-center'>Delete</a>
			</div>
		</div>
	)
}

export default Coin

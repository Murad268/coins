import React from 'react'
import Title from '../components/Title/Title'
import UpdateCoin from '../components/UpdateCoin/UpdateCoin'
const UpdateCoins = () => {
	return (
		<section className='admin_form'>
			<div className='container'>
				<Title>Admin panel</Title>
				<UpdateCoin />
			</div>
		</section>
	)
}

export default UpdateCoins

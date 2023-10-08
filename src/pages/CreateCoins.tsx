import React from 'react'
import Title from '../components/Title/Title'
import CreateCoin from '../components/CreateCoin/CreateCoin'
const CreateCoins = () => {
	return (
		<section className='admin_form'>
			<div className='container'>
				<Title>Admin panel</Title>
				<CreateCoin />
			</div>
		</section>
	)
}

export default CreateCoins

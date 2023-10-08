import { FC, useState } from 'react'
import Title from '../components/Title/Title'
import Input from '../components/Input/Input'
import CoinsCategories from '../components/CoinsCategories/CoinsCategories'
import AdvancedFilter from '../components/AdvancedFilter/AdvancedFilter'

const Home: FC = () => {
	const [activeComponent, setActiveComponent] =
		useState<string>('advancedFilter')

	const toggleComponent = (componentName: string) => {
		setActiveComponent(componentName)
	}
	return (
		<section className='home__page'>
			<div className='container'>
				<Title>Homepage</Title>
				<Input />
				{activeComponent === 'coinsCategories' && (
					<a
						className='advanced_filter active'
						href='#'
						onClick={() => setActiveComponent('advancedFilter')}
					>
						Advanced filter
					</a>
				)}
				{activeComponent === 'advancedFilter' && (
					<a
						className='advanced_filter active'
						href='#'
						onClick={() => setActiveComponent('coinsCategories')}
					>
						Categories
					</a>
				)}
				{activeComponent === 'advancedFilter' ? <AdvancedFilter /> : null}
				{activeComponent === 'coinsCategories' ? <CoinsCategories /> : null}
			</div>
		</section>
	)
}

export default Home

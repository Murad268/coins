import Input from '../components/Input/Input'
import Title from '../components/Title/Title'
import Coin from '../components/Coin/Coin'
import { Link } from 'react-router-dom'
const AdminPanel = () => {
	return (
		<section className='admin_panel'>
			<div className='container'>
				<Title>Admin panel</Title>
				<Input />
				<div className='panel__container flex-column'>
					<Coin />
					<Coin />
					<Coin />

					<Link to='/' className='add__coin'>
						<div className='add__block flex-center'>+</div>
						<span>Add a new coin</span>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default AdminPanel

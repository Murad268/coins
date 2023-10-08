import AdminPanel from './pages/AdminPanel'
import CreateCoins from './pages/CreateCoins'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UpdateCoins from './pages/UpdateCoins'
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/admin' element={<AdminPanel />} />
					<Route path='/admin/coins/create' element={<CreateCoins />} />
					<Route path='/admin/coins/update' element={<UpdateCoins />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App

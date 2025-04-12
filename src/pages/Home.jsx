import React, { useEffect } from 'react'

const Home = () => {
	const role = localStorage.getItem('role')
	useEffect(() => {
		if (role === null || role === '')
			window.location.href = '/login'
	}, [role])
	return (
		<div>
			<h1>Home Page</h1>
		</div>
	)
}

export default Home

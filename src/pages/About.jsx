import React, { useEffect } from 'react'

const About = () => {
	const role = localStorage.getItem('role')
	useEffect(()=>{
		if(!role)
			window.location.href = '/'
		},[role])
  return (
	<div>
	  <h1>About us page</h1>
	</div>
  )
}

export default About

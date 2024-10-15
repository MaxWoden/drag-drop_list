import logo from './logo.svg'
import './App.css'
import React from 'react'

export default function App() {
	return (
		<div className='relative h-screen'>
      <h1 className='font-bold text-8xl text-center pt-10 text-orange-500'>404</h1>
			<img className='absolute bottom-0' src={require('./vincent.gif')} />
		</div>
	)
};

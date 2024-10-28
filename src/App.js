import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'

export default function App() {

	const [posts, setPosts] = useState([
		{ src: 'img/1.jpg', order: 1, id: 0 },
		{ src: 'img/2.jpg', order: 2, id: 1 },
		{ src: 'img/3.jpg', order: 3, id: 2 },
		{ src: 'img/4.jpg', order: 4, id: 3 },
	])
	const [currentPost, setCurrentPost] = useState(null)

	function dragStartHandler(evt, post) {
		evt.target.classList.remove('bg-yellow-50')
		evt.target.classList.add('bg-orange-300')
		setCurrentPost(post)
	}

	function dragEndHandler(evt) {
		evt.target.classList.remove('bg-orange-300')
		evt.target.classList.add('bg-yellow-50')
	}

	function dragOverHandler(evt) {
		evt.preventDefault()
	}

	function dropHandler(evt, post) {
		evt.preventDefault()
		setPosts(posts.map(item =>{
			if(item.id === post.id){
				return {...item, order: currentPost.order}
			}
			if (item.id === currentPost.id) {
				return { ...item, order: post.order }
			}
			return item;
		}))
	}

	const sortPosts = (a,b) =>{
		if(a.order > b.order){
			return 1
		} else{
			return -1
		}
	}

	return (
		<div className='relative h-screen flex justify-center'>
			<div className='my-5 h-screen bg-orange-300 w-2/5 p-10 '>
				<div className='flex flex-col gap-10'>
					{
					posts.sort(sortPosts).map(post => (
						<div
							draggable
							className='border-2 border-red-900 rounded-xl bg-yellow-50 p-5 flex justify-between cursor-grab'
							onDragStart={evt => dragStartHandler(evt, post)}
							onDragLeave={evt => dragEndHandler(evt)}
							onDragEnd={evt => dragEndHandler(evt)}
							onDragOver={evt => dragOverHandler(evt)}
							onDrop={evt => dropHandler(evt, post)}
						>
							<h2 className='text-red-900 text-xl font-bold'>id: {post.id}</h2>
						</div>
					))
					}
				</div>
			</div>
			<img
				className='absolute bottom-0 left-0'
				src={require('./vincent.gif')}
			/>
		</div>
	)
}

"use client"
import React from 'react'
import { MdSearch } from 'react-icons/md'
import Lin from '../typograhy/Link'

const Searchbar = ({ className = "", placeholder = "", name, onClick }: SearchbarType) => {
	return (
		<div className='relative min-w-[40rem]'>
			<input className={`p-3 pl-12 w-full ${className} bg-secondary text-text-primary rounded-lg outline-none`} type="search" name={name} placeholder={placeholder} autoComplete='off' />
			<Lin href='/' className='absolute active:scale-110 hover:scale-95 duration-150 top-1/2 left-5 -translate-y-1/2 cursor-pointer'>
				<MdSearch className='size-5 text-text-primary' onClick={onClick} />
			</Lin>
		</div>
	)
}

export default Searchbar
'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Logo from './Logo'
import Lin from '../ui/typograhy/Link';
import { HDivider } from '../ui/Other/Divider'

import { RxDashboard } from "react-icons/rx";
import { LuConciergeBell } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdLogout } from 'react-icons/md';

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col justify-between shadow bg-secondary h-full rounded-lg max-w-20">
			<div className="row-span-5">
				<div className='w-full pt-5 flex flex-col justify-between items-center' >
					<Logo logoPath='/logo.svg' />
				</div>

				<HDivider className='my-3' />

				<Lin href='/' className='py-5 flex justify-center items-center' active={pathname === '/f'}>
					<FaRegHeart className='text-2xl' />
				</Lin>

				<Lin href='/' className='py-5 flex justify-center items-center' active={pathname === '/'}>
					<RxDashboard className='text-2xl' />
				</Lin>

				<Lin href='/' className='py-5 flex justify-center items-center' active={pathname === '/or'}>
					<LuConciergeBell className='text-2xl' />
				</Lin>


				<Lin href='/' className='py-5 flex justify-center items-center' active={pathname === '/o'}>
					<FaRegCreditCard className='text-2xl' />
				</Lin>
			</div>
			<div className="row-start-7 pb-5 ">
				<HDivider className='my-3' />
				<Lin href='/' className='py-5 flex justify-center items-end'>
					<MdLogout className='text-2xl' />
				</Lin>
			</div>
		</div>
	)
}

export default Sidebar
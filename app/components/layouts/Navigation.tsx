"use client"
import React from 'react'
import Searchbar from '../ui/Inputs/Searchbar'
import ThemeSwitch from '../ui/Buttons/ThemeSwitch'
import { ProfileBtn, ProfileOption } from '../ui/Buttons/Other'
import { SH3 } from '../ui/typograhy/Headings'

import { RxDashboard } from "react-icons/rx";
import { LuConciergeBell } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdLogout } from 'react-icons/md';
import { Para } from '../ui/typograhy/TextFormats'
import { HDivider } from '../ui/Other/Divider'
import { BiUser } from 'react-icons/bi'

const Navigation = () => {
	return (
		<div className='flex justify-between items-center *:last:grow '>
			<ThemeSwitch />
			<div className='flex gap-5 justify-end relative items-center'>
				<SH3 className='!text-text-primary !text-lg'>Hi, Utpal</SH3>
				<ProfileBtn name='profile' profileImg='/logo.svg' userName='John Doe'>
					<ProfileOption name='dashboard'>
						<div className='flex items-center gap-5 w-full'>
							<RxDashboard />
							<Para>Dashboard</Para>
						</div>
					</ProfileOption>
					<ProfileOption name='searchLocation'>
						<div className='flex items-center gap-5 w-full'>
							<LuConciergeBell />
							<Para>Checkout</Para>
						</div>
					</ProfileOption>
					<ProfileOption name='weekly'>
						<div className='flex items-center gap-5 w-full'>
							<FaRegHeart />
							<Para>Favourites</Para>
						</div>
					</ProfileOption>
					<ProfileOption name='favourites'>
						<div className='flex items-center gap-5 w-full'>
							<FaRegCreditCard />
							<Para>Order History</Para>
						</div>
					</ProfileOption>
					<div className='flex flex-col gap-3 pt-2'>
						<HDivider className='!w-full !h-[0.5px]' />
						<ProfileOption name='profile' accent={true}>
							<div className='flex items-center gap-5 w-full'>
								<BiUser />
								<Para>My Profile</Para>
							</div>
						</ProfileOption>
					</div>
				</ProfileBtn>
			</div>
		</div>
	)
}

export default Navigation
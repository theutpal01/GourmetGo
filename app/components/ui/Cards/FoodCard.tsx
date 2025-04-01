import React from 'react'
import { Caption, Para } from '../typograhy/TextFormats';
import { MdShoppingCartCheckout } from 'react-icons/md';
import Image from 'next/image';
import { IconBtn } from '../Buttons/Primary';
import { CgDetailsMore } from 'react-icons/cg';

const FoodCard = () => {
	return (
		<div className='max-w-72 max-h-96 h-fit min-w-64 flex flex-col justify-between border border-secondary rounded text-text-primary'>
			<div className='p-1.5 w-full'>
				<Image src="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food" width={300} height={200} className='rounded aspect-auto' />
			</div>

			<div className='flex flex-col p-2'>
				<div className='flex w-full justify-between items-start'>
					<div className='p-0 flex flex-col justify-center items-center gap-1'>
						<Para className='w-full text-lg text-left'>Food Name</Para>
						<Caption className='text-xs w-full text-left'>Food Description</Caption>
					</div>
					<Caption className='text-center'>₹ 100</Caption>
				</div>
				<div className='flex gap-2 justify-end pt-3'>
					<IconBtn className='text-xs !bg-accent' onClick={() => { console.log("CLICKED") }}>
						<div className='flex gap-2 items-center'>
							<MdShoppingCartCheckout className='size-4' /> Add to Cart
						</div>
					</IconBtn>
					<IconBtn className='text-xs' onClick={() => { console.log("CLICKED") }}>
						<div className='flex gap-2 items-center'>
							<CgDetailsMore className='size-4' /> Details
						</div>
					</IconBtn>
				</div>
			</div>
		</div>
	)
}

export default FoodCard
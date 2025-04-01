import React from 'react'
import { Caption, Para } from '../typograhy/TextFormats';
import { MdClose, MdShoppingCartCheckout } from 'react-icons/md';
import Image from 'next/image';
import { IconBtn } from '../Buttons/Primary';
import { CgDetailsMore } from 'react-icons/cg';
import { SH3 } from '../typograhy/Headings';
import Qty from '../Inputs/Qty';

const OrderCard = () => {
	return (
		<div className='w-full h-fit min-w-64 flex justify-between border border-secondary rounded text-text-primary p-2'>
			<div className='w-fit'>
				<Image src="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food" width={150} height={150} className='rounded aspect-square object-cover' />
			</div>

			<div className='flex flex-col justify-between items-baseline pl-2 w-full'>
				<div className='flex w-full justify-between items-start'>
					<SH3 className='w-full !text-base text-left'>Food Name</SH3>
					<Para className='text-center !font-semibold'>₹100</Para>
				</div>
				<div className='flex gap-2 justify-end pt-3'>
					<IconBtn className='text-xs !bg-transparent !p-2 border !border-secondary' onClick={() => { console.log("CLICKED") }}><MdClose className='size-5' /></IconBtn>
					<Qty id='counter' value={1} onChange={() => console.log("CLICK")} />
				</div>
			</div>
		</div>
	)
}

export default OrderCard
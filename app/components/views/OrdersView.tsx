import React from 'react'
import { H3, SH3 } from '../ui/typograhy/Headings'
import { HDivider } from '../ui/Other/Divider'
import { IconBtn } from '../ui/Buttons/Primary'
import { Para } from '../ui/typograhy/TextFormats'
import OrderCard from '../ui/Cards/OrderCard'

const OrdersView = () => {
	return (
		<div className='flex flex-col justify-between gap-3 h-full'>
			<div className='flex flex-col gap-2 overflow-hidden'>
				<H3 className='!text-lg'>My Orders</H3>
				<div className='overflow-y-scroll'>
					<div className='flex w-full'>
						<div className='w-full grid grid-cols-1 gap-2 pr-2'>
							<OrderCard />
							<OrderCard />
							<OrderCard />
							<OrderCard />
							<OrderCard />
							<OrderCard />
						</div>
					</div>

				</div>
			</div>
			<div>
				<HDivider className='!w-full' />
				<div className='flex justify-between items-center py-5'>
					<SH3 className='!text-base !font-normal'>Total: </SH3>
					<H3 className='!text-xl !font-semibold'>₹108</H3>
				</div>
				<IconBtn className='!w-full !bg-accent' onClick={() => { console.log("CLICKED") }}>
					<Para className='!text-base !font-semibold'>Check out</Para>
				</IconBtn>
			</div>

		</div>
	)
}

export default OrdersView
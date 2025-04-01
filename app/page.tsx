"use client"
import React from 'react'
import Sidebar from './components/layouts/Sidebar'
import Navigation from './components/layouts/Navigation'
import Searchbar from './components/ui/Inputs/Searchbar'
import FoodView from './components/views/FoodView'
import Filters from './components/layouts/Filters'
import OrdersView from './components/views/OrdersView'

const page = () => {
	return (

		<div className="grid grid-cols-12 grid-rows-7 w-full h-full">
			<div className="row-span-7 p-5">
				<Sidebar />
			</div>
			<div className="col-span-8 row-span-7 p-2.5 pt-5 pb-5 pl-0 flex flex-col">
				<div className='flex flex-col gap-3'>
					<Searchbar className='!w-full' placeholder="What would you like to eat?" name='search' onClick={() => { console.log("CLICKED") }} />
					<Filters />
				</div>
				<div className='flex gap-5 justify-center w-full mt-5 overflow-hidden'>
					<div className='flex w-full py-1'>
						<FoodView />
					</div>
				</div>
			</div>
			<div className="col-span-3 col-start-10 p-2.5 pt-5 pr-5">
				<Navigation />
			</div>
			<div className="col-span-3 row-span-6 col-start-10 row-start-2 p-2.5 pr-5 pb-5">
				<OrdersView />
			</div>
		</div>

	)
}

export default page
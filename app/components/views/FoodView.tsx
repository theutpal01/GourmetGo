import React from 'react'
import FoodCard from '../ui/Cards/FoodCard'

const FoodView = () => {
	return (
		<div className='grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-scroll pr-5 w-full'>
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
			<FoodCard />
		</div>
	)
}

export default FoodView
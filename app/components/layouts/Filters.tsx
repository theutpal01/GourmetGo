"use client"
import React from 'react'
import { SH3 } from '../ui/typograhy/Headings'
import { FilterBtn, FliterOption } from '../ui/Buttons/FilterBtn'
import { set } from 'mongoose'

const Filters = () => {
	const [filtersActive, setFiltersActive] = React.useState<{ category: boolean, cuisine: boolean, rating: boolean, price: boolean }>({
		category: false,
		cuisine: false,
		rating: false,
		price: false,
	})
	return (
		<div className='flex gap-5 w-full center'>
			<SH3 className='text-text-primary !text-lg'>Filters:</SH3>
			<div className='flex gap-3'>
				<FilterBtn text='Category' id="category" active={filtersActive.category} onClick={() => setFiltersActive({ cuisine: false, rating: false, price: false, category: !filtersActive.category })}>
					<FliterOption text='Category 1' id='category-1' />
					<FliterOption text='Category 2' id='category-2' />
					<FliterOption text='Category 3' id='category-3' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
				</FilterBtn>

				<FilterBtn text='Cuisine' id="cuisine" active={filtersActive.cuisine} onClick={() => setFiltersActive({ category: false, rating: false, price: false, cuisine: !filtersActive.cuisine })}>
					<FliterOption text='Category 1' id='category-1' />
					<FliterOption text='Category 2' id='category-2' />
					<FliterOption text='Category 3' id='category-3' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
				</FilterBtn>

				<FilterBtn text='Rating' id="rating" active={filtersActive.rating} onClick={() => setFiltersActive({ category: false, cuisine: false, price: false, rating: !filtersActive.rating })}>
					<FliterOption text='Category 1' id='category-1' />
					<FliterOption text='Category 2' id='category-2' />
					<FliterOption text='Category 3' id='category-3' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
				</FilterBtn>

				<FilterBtn text='Price' id="price" active={filtersActive.price} onClick={() => setFiltersActive({ category: false, cuisine: false, rating: false, price: !filtersActive.price })}>
					<FliterOption text='Category 1' id='category-1' />
					<FliterOption text='Category 2' id='category-2' />
					<FliterOption text='Category 3' id='category-3' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
					<FliterOption text='Category 4' id='category-4' />
				</FilterBtn>
			</div>
		</div>
	)
}

export default Filters;
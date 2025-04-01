import React from 'react'
import { GoChevronDown } from 'react-icons/go'

const Qty = ({ className, id, value = 1, onChange }: { className?: string, id: string, value: number, onChange: () => (void) }) => {
	return (
		<div className='relative'>
			<select
				className="w-20 relative bg-transparent placeholder:text-text-secondary text-text-primary text-sm border border-secondary rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-accent/80 shadow-sm focus:shadow cursor-pointer appearance-none *:bg-secondary *:hover:bg-secondary">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
				<GoChevronDown className='absolute text-text-primary -z-10 top-1/2 right-0 -translate-1/2' />
		</div>
	)
}

export default Qty
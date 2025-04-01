import React from 'react'
import { CgChevronDown } from 'react-icons/cg'

const FilterBtn = ({ className, text, id, active, onClick, children }: { className?: string, text: string, id: string, active: boolean, onClick: () => (void), children: React.ReactNode }) => {
	return (
		<div className="flex relative items-center justify-center">
			<button id={id} className={`${className} text-text-secondary border ${active ? 'border-accent' : 'border-secondary'} px-3 py-1.5 rounded-full active:border-accent flex items-center gap-2`}
				type="button" onClick={onClick}>
				{text}
				<CgChevronDown />
			</button>

			<div id={`${id}-option`} className={`z-10 absolute w-48 p-3 bg-secondary/60 backdrop-blur-2xl rounded top-full right-0 mt-1 ${active ? 'block' : 'hidden'}`}>
				<div className="space-y-2 text-sm">
					<div className="flex flex-col gap-2 justify-center">
						{children}
					</div>

				</div>
			</div>
		</div>
	)
}


const FliterOption = ({ text, id }: { text: string, id: string }) => {
	return (
		<div className="flex items-center">
			<input type="checkbox" value="" id={id} className="accent-accent mt-0.5" />
			<label htmlFor={id} className="ml-2 text-sm text-text-primary">
				{text}
			</label>
		</div>
	)
}

export { FilterBtn, FliterOption }
import React from 'react'

const Input = ({ className, name, type = "text", placeholder="Hello", onChange, children }: InputType) => {
	return (
		<div className='w-full flex flex-col relative'>
			<input type={type} name={name} id={name} placeholder={placeholder} className={`${className} p-2 border border-secondary bg-transparent text-text-primary rounded pl-7 w-full z-0 outline-none`} />

			<div className='absolute -translate-1/2 left-4 top-1/2 pointer-events-none z-10 text-text-primary'>
				{children}
			</div>
		</div>
	)
}

export default Input
import React from 'react'

const HDivider = ({ className = ''}: { className?: string }) => {
	return (
		<div className={`${className} self-center m-auto bg-text-secondary h-full max-h-[0.5px] w-[70%]`}>
			
		</div>
	)
}

const VDivider = ({ className = ''}: { className?: string }) => {
	return (
		<div className={`${className} self-center m-auto bg-text-secondary h-[70%] w-full max-w-[0.5px]`}>
			
		</div>
	)
}

export {HDivider, VDivider};
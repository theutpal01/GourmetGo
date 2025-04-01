"use client"
import React from 'react'

const IconBtn = ({ className, onClick, children }: IconBtnType) => {
	return (
		<button type="button" className={`${className} text-xl cursor-pointer outline outline-transparent active:outline-accent duration-150 shadow bg-secondary text-text-primary p-3 rounded`} onClick={onClick}>
			{children}
		</button>
	)
}

export { IconBtn }
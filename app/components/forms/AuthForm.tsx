import React from 'react'
import { H2 } from '../ui/typograhy/Headings'
import Image from 'next/image'

const AuthForm = ({ className, heading, children }: AuthFormType) => {
	return (
		<form action="" className={`${className} max-w-96 w-full rounded-xl flex bg-primary/40 z-10 backdrop-blur-2xl p-5 flex-col`}>
			<div className='flex flex-col justify-center items-center w-full'>
				<H2 className='!text-2xl !font-bold'>{heading}</H2>
				<Image src="/logo.svg" alt="GourmetGo" width={100} height={100} className='aspect-square' />
			</div>
			<div>
				{children}
			</div>
		</form>
	)
}

export default AuthForm
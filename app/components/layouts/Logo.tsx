import React from 'react'
import Lin from '../ui/typograhy/Link'
import Image from 'next/image'

const Logo = ({ logoPath }: LogoType) => {
	return (
		<div className='flex items-center justify-center overflow-hidden max-w-16 max-h-16'>
			<Lin className='flex items-center' href='/'>
				<Image className='aspect-square' src={logoPath} alt="Weather" width={50} height={50} />
			</Lin>
		</div>
	)
}

export default Logo
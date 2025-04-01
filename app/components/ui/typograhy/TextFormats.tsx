import React from 'react'

const Para = ({ className, children }: TypographyType) => (
	<p className={`${className} text-text-primary`}>{children}</p>
)

const Caption = ({ className, children }: TypographyType) => (
	<p className={`${className} font-thin text-text-secondary text-sm`}>{children}</p>
)

export { Para, Caption }
import React from 'react'

const H1 = ({className, children} : TypographyType) => (
	<div>
		<h1 className={`${className} text-text-primary text-4xl md:text-5xl lg:text-6xl`}>{children}</h1>
	</div>
);

const H2 = ({className, children} : TypographyType) => (
	<div>
		<h2 className={`${className} text-text-primary text-3xl md:text-4xl lg:text-5xl`}>{children}</h2>
	</div>
);

const H3 = ({className, children} : TypographyType) => (
	<div>
		<h3 className={`${className} text-text-primary text-2xl md:text-3xl lg:text-4xl`}>{children}</h3>
	</div>
);


const SH1 = ({className, children} : TypographyType) => (
	<div>
		<h1 className={`${className} text-text-secondary text-2xl md:text-3xl lg:text-4xl`}>{children}</h1>
	</div>
);

const SH2 = ({className, children} : TypographyType) => (
	<div>
		<h2 className={`${className} text-text-secondary text-xl md:text-2xl lg:text-3xl`}>{children}</h2>
	</div>
);

const SH3 = ({className, children} : TypographyType) => (
	<div>
		<h3 className={`${className} text-text-secondary text-lg md:text-xl lg:text-2xl`}>{children}</h3>
	</div>
);

export { H1, H2, H3, SH1, SH2, SH3 };
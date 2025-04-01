import Link from 'next/link';

const Lin = ({ className, href, target = '', active = false, children }: LinkType) => (
	<Link target={target} className={`${className} duration-300 ease-in-out ${active ? 'text-text-primary scale-125' : 'text-text-secondary scale-100'}`} href={href} >
		{children}
	</Link>
)


export default Lin;
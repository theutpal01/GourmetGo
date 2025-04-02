
interface TypographyType {
	className?: string,
	children: React.ReactNode,
}

interface LinkType {
	className?: string,
	href: string,
	target?: string,
	active?: boolean,
	children: React.ReactNode
}

interface LogoType {
	logoPath: string,
}

interface IconBtnType {
	className?: string,
	onClick: (e?: React.MouseEvent<HTMLButtonElement>) => (void),
	children: React.ReactNode
}

interface ToggleWrapperType {
	className?: string,
	children: React.ReactNode
}

interface ToggleBtnType {
	className?: string,
	name: string,
	active?: boolean,
	onClick: (e?: React.MouseEvent<HTMLButtonElement>) => (void),
	children: React.ReactNode
}

interface ProfileBtnType {
	className?: string,
	name: string,
	profileImg: string,
	userName: string,
	children: React.ReactNode
}

interface ProfileOptionType {
	className?: string,
	name: string,
	accent?: boolean,
	children: React.ReactNode
}


interface SearchbarType {
	className?: string,
	placeholder: string,
	name: string,
	onClick: () => (void)
}

interface AuthFormType {
	className?: string,
	heading: string,
	children: React.ReactNode
}

interface FilterBtnType {
	className?: string,
	text: string,
	id: string,
	active: boolean,
	onClick: () => (void),
	children: React.ReactNode
}

interface FilterOptionType {
	className?: string,
	text: string,
	id: string
}

interface InputType {
	className?: string,
	name: string
	value: string,
	type?: string,
	placeholder?: string,
	onChange: () => (void),
	children: React.ReactNode
}
import Image from "next/image"
import React from "react"
import { H3, SH3 } from "../typograhy/Headings"
import { Para } from "../typograhy/TextFormats"

const ToggleWrapper = ({ className, children }: ToggleWrapperType) => {
	return (
		<div className={`flex rounded-full bg-primary border border-text-secondary/20 overflow-hidden ${className}`}>
			{children}
		</div>
	)
}

const ToggleBtn = ({ className, name, active = false, onClick, children }: ToggleBtnType) => {
	return (
		<button className={`${className} ${active ? 'text-text-primary bg-secondary' : 'text-text-secondary bg-transparent'} duration-150 cursor-pointer rounded-full flex justify-center items-center p-4`} type="button" name={name} onClick={onClick}>
			{children}
		</button>
	)
}


const ProfileBtn = ({ className, name, profileImg = '', userName = 'U', children }: ProfileBtnType) => {
	const [active, setActive] = React.useState(false)
	return (
		<div className={`flex`}>

			<button className={`${className} overflow-hidden duration-150 border border-text-secondary cursor-pointer rounded-full flex justify-center items-center w-12 h-12`} type="button" name={name} onClick={() => setActive(!active)}>
				{profileImg !== '' ?
					<Image src={profileImg} alt={userName} className="w-12 h-12 aspect-square rounded-full" width={20} height={20} />
					: <SH3>{userName[0].toUpperCase()}</SH3>
				}
			</button>

			<div className={`${active ? 'h-fit p-2.5' : 'h-0 p-0 overflow-hidden'} !z-50 *:z-50 drop-shadow-sm absolute right-0 top-16 w-full min-w-72 bg-secondary rounded-lg shadow-lg transition-all duration-300 ease-in-out`}>
				{children}
			</div>

		</div>
	)
}

const ProfileOption = ({ className, name, accent = false, children }: ProfileOptionType) => {
	return (
		<button className={`${className} ${accent ? 'bg-gradient-to-b from-orange-300 to-accent' : 'bg-transparent hover:bg-primary'} w-full text-text-primary cursor-pointer flex-col flex gap-5 items-center p-2 rounded-lg`} type="button" name={name}>
			{children}
		</button>
	)
}

export { ToggleWrapper, ToggleBtn, ProfileBtn, ProfileOption }
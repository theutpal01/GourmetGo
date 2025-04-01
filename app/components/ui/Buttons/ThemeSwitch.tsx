"use client"
import React, { useEffect, useState } from 'react'
import { ToggleBtn, ToggleWrapper } from './Other'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'

const ThemeSwitch = () => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		if (!document) return;
		document.body.classList.toggle("dark", theme === "dark");
		document.body.classList.toggle("light", theme === "light");
	}, [theme]);



	const onClick = (e: React.MouseEvent<HTMLButtonElement> | undefined) => {
		if (!e) return
		const name = e.currentTarget.name;
		setTheme(name);
	}

	return (
		<ToggleWrapper>
			<ToggleBtn name='light' active={theme === "light"} onClick={onClick}>
				<FaRegSun />
			</ToggleBtn>
			<ToggleBtn name='dark' active={theme === "dark"} onClick={onClick}>
				<FaRegMoon />
			</ToggleBtn>
		</ToggleWrapper>
	)
}

export default ThemeSwitch
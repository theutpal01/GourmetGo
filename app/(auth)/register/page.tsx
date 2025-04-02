"use client"
import AuthForm from '@/app/components/forms/AuthForm'
import { IconBtn } from '@/app/components/ui/Buttons/Primary'
import Input from '@/app/components/ui/Inputs/Input'
import { HDivider } from '@/app/components/ui/Other/Divider'
import Image from 'next/image'
import React from 'react'
import { BiKey, BiUser } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'

const Page = () => {
	return (
		<div className='relative h-screen w-full flex bg-black/40 justify-center items-center overflow-hidden'>
			<Image
				src='/bg/bg.jpg'
				alt='Auth'
				width={1920}
				height={1080}
				className='absolute object-fill -z-10' />

			<AuthForm heading='New Here?'>
				<div className='flex flex-col gap-3 pt-5'>
					<Input name='name' value='Name' onChange={() => console.log("HIT")}>
						<BiUser className='text-text-primary' />
					</Input>
					<Input name='email' value='Email' type='email' onChange={() => console.log("HIT")}>
						<TfiEmail className='text-text-primary' />
					</Input>
					<Input name='password' value='Password' type='password' onChange={() => console.log("HIT")}>
						<BiKey className='text-text-primary' />
					</Input>
					<IconBtn className='my-5 !text-base !font-semibold !bg-accent' onClick={() => console.log("hi")}>Sign Up</IconBtn>
					<HDivider />
				</div>
			</AuthForm>
		</div>
	)
}

export default Page
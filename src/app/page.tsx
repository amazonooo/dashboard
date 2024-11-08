import AppLogo from '@/components/shared/app-logo'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
		<main className='flex min-h-screen flex-col'>
			<div className='flex h-20 shrink-0 items-center rounded-lg py-4 px-20 md:h-40 bg-secondary'>
				<AppLogo />
			</div>
			<div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
				<div className='flex flex-col justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20'>
					<p className='text-xl md:text-3xl md:leading-normal'>
						<strong>Welcome to Admin Dashboard</strong>
					</p>
					<Button asChild className='w-1/2 group'>
						<Link href={'/login'}>
							<span>Log in</span>
							<ArrowRightIcon className='w-6 group-hover:translate-x-1 transition-transform duration-300' />
						</Link>
					</Button>
				</div>
				<div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
					<Image
						src={'/hero-desktop.png'}
						width={1000}
						height={760}
						alt='screen'
						className='hidden md:block'
					/>
					<Image
						src={'/hero-mobile.png'}
						width={500}
						height={620}
						alt='screen'
						className='block md:hidden'
					/>
				</div>
			</div>
		</main>
	)
}

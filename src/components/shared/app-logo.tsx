import Link from 'next/link'
import { ChartColumnDecreasing } from 'lucide-react'
import { APP_NAME } from '@/constants/constants'

export default function AppLogo() {
  return (
		<Link href='/' className='flex-start group'>
			<div className={`flex flex-row items-end space-x-2`}>
				<ChartColumnDecreasing
					width={32}
					height={32}
				/>
				<span className='text-xl font-bold group-hover:dark:text-[#cbacf9] group-hover:text-black/60 transition-all duration-300'>
					{APP_NAME}
				</span>
			</div>
		</Link>
	)
}
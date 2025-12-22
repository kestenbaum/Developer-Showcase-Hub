"use client"
import Link from "next/link"
import React from "react"
import { useStoreMenu } from "@/store/use-store-menu"

const Header = () => {
	const { open, toggle, close } = useStoreMenu()
	const menu = useStoreMenu((state) => state.headerMenu)

	return (
		<header className="relative bg-gray-100 border-b border-gray-200 shadow-[0_4px_14px_rgba(0,0,0,0.08)] sticky top-0 w-full z-40">
			<div className="relative z-20 bg-gray-100 max-w-5xl mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<Link
						className="rounded-md text-gray-950 font-semibold tracking-tight"
						href="/frontend/public"
					>
						Developer Showcase
					</Link>

					<menu className="hidden md:flex gap-6 text-gray-900 font-medium">
						{menu &&
							menu.map((item) => (
								<Link
									key={item.id}
									className="flex gap-4 text-gray-600 font-medium hover:text-gray-900 transition-colors"
									href={item.link}
									onClick={close}
								>
									{item.text}
								</Link>
							))}
					</menu>

					<button className="md:hidden text-gray-900 focus:outline-none" onClick={toggle}>
						<svg
							className="w-6 h-6 transform transition-transform duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{open ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			<div
				className={`
                    absolute top-full left-0 w-full bg-gray-100 border-b border-gray-200 shadow-md md:hidden
                    flex flex-col items-center justify-center space-y-6 overflow-hidden
                    transition-all duration-300 ease-in-out origin-top z-10
                    ${
											open
												? "opacity-100 translate-y-0 py-6 pointer-events-auto"
												: "opacity-0 -translate-y-4 py-0 pointer-events-none h-0"
										}
                `}
			>
				<menu className="flex flex-col gap-4 text-gray-900 font-medium w-full items-center">
					{menu &&
						menu.map((item) => (
							<Link
								key={item.id}
								className="flex gap-4 text-gray-600 font-medium hover:text-black transition-colors"
								href={item.link}
								onClick={close}
							>
								{item.text}
							</Link>
						))}
				</menu>
			</div>
		</header>
	)
}

export default Header

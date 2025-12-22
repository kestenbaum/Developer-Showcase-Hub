import Image from "next/image"
import Link from "next/link"
import React from "react"
import Container from "@/components/layout/Container"
import git from "@/public/github-ico.png"
import link from "@/public/linkedin-ico.png"

const Footer = () => {
	return (
		<footer className="bg-black py-5">
			<Container>
				<div className="flex justify-between">
					<div className="flex flex-col gap-2.5 max-w-[750px]">
						<h2 className="text-white text-xs font-bold">Oleksii Vovnenko</h2>
						<p className="text-white text-[10px] font-medium">
							A Frontend focused Web Developer building the Frontend of Websites and Web
							Applications that leads to the success of the overall product.
						</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3>Social</h3>
						<menu className="flex gap-2">
							<Link href="https://www.linkedin.com/in/oleksii-vovnenko/">
								<Image src={link} width={25} height={25} alt="Social Link" />
							</Link>
							<Link href="https://github.com/kestenbaum">
								<Image src={git} width={25} height={25} alt="Social Link" />
							</Link>
						</menu>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer

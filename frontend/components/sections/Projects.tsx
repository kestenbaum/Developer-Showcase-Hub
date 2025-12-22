import React from "react"
import Container from "@/components/layout/Container"
import Card from "@/components/sections/components/Card"
import Title from "@/components/UI/Title"

const Projects = () => {
	return (
		<section className="bg-white">
			<Container>
				<div className="pt-20">
					<Title
						title="Projects"
						description="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
					/>
					<div className="flex flex-col gap-5">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Projects

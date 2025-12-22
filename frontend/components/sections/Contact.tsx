import React from "react"
import Container from "@/components/layout/Container"
import Button from "@/components/UI/Button"
import Field from "@/components/UI/Field"
import Title from "@/components/UI/Title"

const Contact = () => {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden">
			<img
				src="/common-bg.svg"
				alt="Hero Background"
				className="absolute inset-0 w-full h-full object-cover -z-10 blur-[3px]"
			/>

			<Container>
				<div className="flex flex-col items-center">
					<Title
						title="Contact"
						description="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
					/>

					<form className="bg-white p-6 md:p-10 rounded-xl shadow-xl w-full max-w-[700px]">
						<Field label="Name" id="name" name="name" placeholder="Enter Your Name" required />
						<Field
							label="Email"
							id="email"
							name="email"
							type="email"
							placeholder="Enter Your Email"
							required
						/>
						<Field
							label="Message"
							id="message"
							name="message"
							isTextarea={true}
							placeholder="Enter Your Message"
							required
						/>

						<div className="flex justify-end mt-4">
							<Button type="submit">Submit</Button>
						</div>
					</form>
				</div>
			</Container>
		</section>
	)
}

export default Contact

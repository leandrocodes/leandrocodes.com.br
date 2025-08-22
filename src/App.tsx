import Header from './components/Header';
import Home from './components/Home';
import ScrollReveal from './components/ScrollReveal';

function App() {
	return (
		<div className="min-h-screen bg-gradient-glass-primary relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-glass-cool opacity-20 animate-pulse"></div>
			<div className="absolute inset-0 bg-gradient-glass-warm opacity-15"></div>

			{/* Header */}
			<Header />

			{/* Home Section */}
			<Home />

			{/* About Section with ScrollReveal */}
			<section
				id="about"
				className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
			>
				<div className="max-w-4xl mx-auto text-center space-y-16">
					<ScrollReveal
						as="h2"
						containerClassName="text-center"
						textClassName="text-white font-bold"
						baseOpacity={0.2}
						baseRotation={2}
						enableBlur={true}
						blurStrength={3}
					>
						About Me
					</ScrollReveal>

					<ScrollReveal
						containerClassName="text-center max-w-3xl mx-auto"
						textClassName="text-gray-300 font-normal text-[clamp(1.2rem,2.5vw,1.8rem)]"
						baseOpacity={0.1}
						baseRotation={1}
						enableBlur={true}
						blurStrength={2}
					>
						I'm a passionate Frontend Developer with expertise in React,
						TypeScript, and modern web technologies. I love creating beautiful,
						interactive user experiences that make a difference.
					</ScrollReveal>
				</div>
			</section>

			{/* Skills Section */}
			<section
				id="skills"
				className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
			>
				<div className="max-w-6xl mx-auto space-y-20">
					<ScrollReveal
						as="h2"
						containerClassName="text-center"
						textClassName="text-orange-500 font-bold"
						baseOpacity={0.2}
						baseRotation={-2}
						enableBlur={true}
						blurStrength={4}
					>
						My Skills & Expertise
					</ScrollReveal>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
						<div>
							<ScrollReveal
								as="h3"
								containerClassName="mb-8"
								textClassName="text-white font-semibold text-[clamp(1.4rem,3vw,2.2rem)]"
								baseOpacity={0.15}
								baseRotation={1.5}
								enableBlur={true}
							>
								Frontend Technologies
							</ScrollReveal>

							<ScrollReveal
								containerClassName="space-y-4"
								textClassName="text-gray-300 font-normal text-[clamp(1rem,2vw,1.4rem)]"
								baseOpacity={0.1}
								baseRotation={0.5}
								enableBlur={true}
								blurStrength={2}
							>
								React, TypeScript, Next.js, Tailwind CSS, GSAP, Three.js, and
								modern JavaScript frameworks that bring ideas to life.
							</ScrollReveal>
						</div>

						<div>
							<ScrollReveal
								as="h3"
								containerClassName="mb-8"
								textClassName="text-white font-semibold text-[clamp(1.4rem,3vw,2.2rem)]"
								baseOpacity={0.15}
								baseRotation={-1.5}
								enableBlur={true}
							>
								Design & Animation
							</ScrollReveal>

							<ScrollReveal
								containerClassName="space-y-4"
								textClassName="text-gray-300 font-normal text-[clamp(1rem,2vw,1.4rem)]"
								baseOpacity={0.1}
								baseRotation={-0.5}
								enableBlur={true}
								blurStrength={2}
							>
								Creating smooth animations, responsive designs, and intuitive
								user interfaces that engage and delight users.
							</ScrollReveal>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section
				id="projects"
				className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
			>
				<div className="max-w-4xl mx-auto text-center space-y-16">
					<ScrollReveal
						as="h2"
						containerClassName="text-center"
						textClassName="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-bold"
						baseOpacity={0.2}
						baseRotation={3}
						enableBlur={true}
						blurStrength={5}
					>
						Featured Projects
					</ScrollReveal>

					<ScrollReveal
						containerClassName="text-center"
						textClassName="text-gray-300 font-normal text-[clamp(1.2rem,2.5vw,1.8rem)]"
						baseOpacity={0.1}
						baseRotation={-1}
						enableBlur={true}
						blurStrength={3}
					>
						Here are some of the projects I've worked on, showcasing my skills
						in modern web development and creative problem-solving.
					</ScrollReveal>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
			>
				<div className="max-w-4xl mx-auto text-center space-y-16">
					<ScrollReveal
						as="h2"
						containerClassName="text-center"
						textClassName="text-white font-bold"
						baseOpacity={0.2}
						baseRotation={-2}
						enableBlur={true}
						blurStrength={4}
					>
						Let's Work Together
					</ScrollReveal>

					<ScrollReveal
						containerClassName="text-center"
						textClassName="text-gray-300 font-normal text-[clamp(1.2rem,2.5vw,1.8rem)]"
						baseOpacity={0.1}
						baseRotation={1}
						enableBlur={true}
						blurStrength={2}
					>
						Ready to bring your ideas to life? Let's create something amazing
						together.
					</ScrollReveal>

					<div className="pt-8">
						<button className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
							Get In Touch
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;

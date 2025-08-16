import Header from './components/Header';
import './App.css';

function App() {
	return (
		<div className="min-h-screen bg-gradient-glass-primary relative overflow-hidden">
			{/* Background gradient overlays for depth */}
			<div className="absolute inset-0 bg-gradient-glass-cool opacity-20 animate-pulse"></div>
			<div className="absolute inset-0 bg-gradient-glass-warm opacity-15"></div>

			{/* Header */}
			<Header />

			{/* Main content */}
			<main className="relative z-10">
				{/* Hero Section */}
				<section
					id="home"
					className="min-h-screen flex flex-col items-center justify-center px-4"
				>
					<div className="text-center max-w-4xl mx-auto">
						<h1 className="text-5xl md:text-7xl font-bold text-orange-500 mb-6 drop-shadow-lg">
							Leandro Viana
						</h1>
						<h2 className="text-2xl md:text-3xl text-white mb-8 font-light">
							Full Stack Developer
						</h2>
						<div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
							<p className="text-white text-lg leading-relaxed mb-6">
								Creating beautiful, functional, and user-centered digital
								experiences with modern technologies.
							</p>
							<button
								type="button"
								className="bg-gradient-glass-accent text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg glass border-0"
							>
								View My Work
							</button>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section
					id="about"
					className="min-h-screen flex items-center justify-center px-4 py-20"
				>
					<div className="max-w-4xl mx-auto glass-card p-12 rounded-2xl">
						<h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">
							About Me
						</h2>
						<p className="text-white text-lg leading-relaxed text-center">
							Passionate developer with expertise in modern web technologies. I
							love creating innovative solutions and bringing ideas to life
							through code.
						</p>
					</div>
				</section>

				{/* Work Section */}
				<section
					id="work"
					className="min-h-screen flex items-center justify-center px-4 py-20"
				>
					<div className="max-w-4xl mx-auto glass-card p-12 rounded-2xl">
						<h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">
							My Work
						</h2>
						<p className="text-white text-lg leading-relaxed text-center">
							Here are some of my featured projects and contributions. Each
							project represents a unique challenge and solution.
						</p>
					</div>
				</section>
			</main>

			{/* Floating glassmorphism elements for depth */}
			<div className="absolute top-20 left-10 w-32 h-32 glass rounded-full opacity-20 animate-bounce"></div>
			<div className="absolute bottom-20 right-16 w-24 h-24 glass rounded-full opacity-15 animate-pulse"></div>
			<div className="absolute top-1/3 right-10 w-16 h-16 glass rounded-full opacity-25"></div>
		</div>
	);
}

export default App;

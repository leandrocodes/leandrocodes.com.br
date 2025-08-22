import { useRef, useLayoutEffect } from 'react';
import { DownloadIcon } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import pixelImage from '../assets/pixel.jpg';
import TextType from './TextType';

const Home = () => {
	const sectionRef = useRef<HTMLElement | null>(null);
	const leftContentRef = useRef<HTMLDivElement | null>(null);
	const rightContentRef = useRef<HTMLDivElement | null>(null);
	const textElementsRef = useRef<HTMLElement[]>([]);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const imageRef = useRef<HTMLImageElement | null>(null);

	useLayoutEffect(() => {
		const sectionEl = sectionRef.current;
		const leftEl = leftContentRef.current;
		const rightEl = rightContentRef.current;
		const textElements = textElementsRef.current;
		const buttonEl = buttonRef.current;
		const imageEl = imageRef.current;

		if (!sectionEl) return;

		gsap.set([leftEl, rightEl], {
			opacity: 0,
			y: 50,
		});

		gsap.set(textElements, {
			opacity: 0,
			y: 30,
		});

		gsap.set(buttonEl, {
			opacity: 0,
			scale: 0.8,
		});

		gsap.set(imageEl, {
			opacity: 0,
			scale: 0.9,
			rotation: -5,
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionEl,
				start: 'top 80%',
				end: 'bottom 20%',
				toggleActions: 'play none none reverse',
			},
		});

		tl.to([leftEl, rightEl], {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: 'power3.out',
			stagger: 0.2,
		});

		tl.to(
			textElements,
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: 'power2.out',
				stagger: 0.1,
			},
			'-=0.4',
		);

		tl.to(
			buttonEl,
			{
				opacity: 1,
				scale: 1,
				duration: 0.5,
				ease: 'back.out(1.7)',
			},
			'-=0.3',
		);

		tl.to(
			imageEl,
			{
				opacity: 1,
				scale: 1,
				rotation: 0,
				duration: 0.8,
				ease: 'power3.out',
			},
			'-=0.6',
		);

		return () => {
			tl.kill();
		};
	}, []);

	const handleDownloadCV = () => {
		const link = document.createElement('a');
		link.href = '/path-to-your-cv.pdf';
		link.download = 'Leandro_Viana_CV.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<section
			id="home"
			ref={sectionRef}
			className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
		>
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div ref={leftContentRef} className="space-y-6 lg:pr-8">
						<div className="min-h-[2.5rem]">
							<TextType
								text={["Hi there, I'm Leandro", 'Welcome!']}
								as="h3"
								className="text-xl sm:text-2xl text-orange-500 font-liter font-medium"
								typingSpeed={80}
								pauseDuration={3000}
								deletingSpeed={50}
								loop={true}
								showCursor={true}
								cursorCharacter="|"
								cursorClassName="text-orange-400"
								startOnVisible={true}
								initialDelay={1000}
							/>
						</div>

						<div className="space-y-2">
							<div className="min-h-[4rem] sm:min-h-[5rem] lg:min-h-[6rem] xl:min-h-[7rem]">
								<TextType
									text={[
										'Frontend',
										'React',
										'JavaScript',
										'Typescript',
										'Vue.js',
									]}
									as="h1"
									className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
									typingSpeed={100}
									pauseDuration={2500}
									deletingSpeed={60}
									loop={true}
									showCursor={true}
									cursorCharacter="_"
									cursorClassName="text-orange-500"
									startOnVisible={true}
									initialDelay={2000}
								/>
							</div>

							<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 leading-tight">
								Developer
							</h1>
						</div>

						<div className="min-h-[2rem]">
							<TextType
								text={[
									'based in Brazil.',
									'from Campo Grande, Mato Grosso do Sul.',
								]}
								as="h3"
								className="text-xl sm:text-2xl text-gray-300 font-liter"
								typingSpeed={70}
								pauseDuration={4000}
								deletingSpeed={40}
								loop={true}
								showCursor={true}
								cursorCharacter="|"
								cursorClassName="text-gray-400"
								startOnVisible={true}
								initialDelay={3500}
							/>
						</div>

						<div className="pt-4">
							<button
								ref={buttonRef}
								type="button"
								onClick={handleDownloadCV}
								className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-liter font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 group"
							>
								<DownloadIcon
									size={24}
									weight="duotone"
									className="group-hover:animate-bounce"
								/>
								Download CV
							</button>
						</div>
					</div>

					<div
						ref={rightContentRef}
						className="flex justify-center lg:justify-end"
					>
						<div className="relative">
							{/* Enhanced Grid Background */}
							<div className="absolute inset-0 opacity-20">
								<div className="grid grid-cols-8 grid-rows-8 h-full w-full">
									{Array.from({ length: 64 }).map((_, i) => {
										const row = Math.floor(i / 8);
										const col = i % 8;
										return (
											<div
												key={`grid-${row}-${col}`}
												className="border border-orange-400/30 animate-pulse relative overflow-hidden"
												style={{
													borderColor: 'rgba(255, 212, 79, 0.3)',
													animationDelay: `${i * 0.1}s`,
													animationDuration: '3s',
												}}
											>
												{Math.random() > 0.8 && (
													<div
														className="absolute inset-0 bg-orange-400/10 animate-ping"
														style={{
															animationDelay: `${Math.random() * 5}s`,
															animationDuration: '2s',
														}}
													/>
												)}
											</div>
										);
									})}
								</div>
							</div>

							{/* Enhanced Glow Layers */}
							<div
								className="absolute -inset-12 rounded-3xl blur-3xl animate-pulse opacity-60"
								style={{
									background: `conic-gradient(from 0deg,
										rgba(255, 193, 7, 0.4),
										rgba(255, 179, 0, 0.2),
										rgba(255, 143, 0, 0.4),
										rgba(255, 212, 79, 0.3),
										rgba(255, 193, 7, 0.4))`,
									animationDuration: '4s',
								}}
							></div>
							<div
								className="absolute -inset-8 rounded-2xl blur-2xl animate-pulse"
								style={{
									background: `linear-gradient(45deg,
										rgba(255, 193, 7, 0.3),
										rgba(255, 179, 0, 0.2),
										rgba(255, 143, 0, 0.3))`,
								}}
							></div>
							<div
								className="absolute -inset-6 rounded-xl blur-xl"
								style={{
									background: `radial-gradient(circle,
										rgba(255, 212, 79, 0.25),
										rgba(255, 193, 7, 0.15),
										rgba(255, 179, 0, 0.2))`,
								}}
							></div>

							{/* Animated Scan Lines */}
							<div className="absolute inset-0 overflow-hidden rounded-xl">
								<div
									className="absolute top-0 left-0 w-full h-1 animate-scan-down opacity-80"
									style={{
										background: `linear-gradient(to right,
											transparent,
											rgb(255, 212, 79),
											rgba(255, 255, 255, 0.8),
											rgb(255, 212, 79),
											transparent)`,
									}}
								></div>
								<div
									className="absolute top-0 left-0 w-1 h-full animate-scan-right opacity-80"
									style={{
										background: `linear-gradient(to bottom,
											transparent,
											rgb(255, 193, 7),
											rgba(255, 255, 255, 0.8),
											rgb(255, 193, 7),
											transparent)`,
									}}
								></div>
							</div>

							{/* Main Glass Card */}
							<div
								className="relative glass-card rounded-xl overflow-hidden border-2 backdrop-blur-md"
								style={{
									borderColor: 'rgba(255, 212, 79, 0.6)',
									background: 'rgba(0, 0, 0, 0.2)',
								}}
							>
								{/* Enhanced Corner Brackets */}
								<div
									className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 animate-pulse"
									style={{ borderColor: 'rgb(255, 212, 79)' }}
								>
									<div className="absolute -top-1 -left-1 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75"></div>
								</div>
								<div
									className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 animate-pulse"
									style={{
										borderColor: 'rgb(255, 212, 79)',
										animationDelay: '0.5s',
									}}
								>
									<div
										className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75"
										style={{ animationDelay: '0.5s' }}
									></div>
								</div>
								<div
									className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 animate-pulse"
									style={{
										borderColor: 'rgb(255, 212, 79)',
										animationDelay: '1s',
									}}
								>
									<div
										className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75"
										style={{ animationDelay: '1s' }}
									></div>
								</div>
								<div
									className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 animate-pulse"
									style={{
										borderColor: 'rgb(255, 212, 79)',
										animationDelay: '1.5s',
									}}
								>
									<div
										className="absolute -bottom-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-75"
										style={{ animationDelay: '1.5s' }}
									></div>
								</div>

								{/* Enhanced Status Indicators */}
								<div className="absolute top-4 left-4 flex gap-3">
									<div className="flex flex-col items-center gap-1">
										<div
											className="w-3 h-3 rounded-full animate-pulse shadow-lg"
											style={{
												backgroundColor: 'rgb(239, 115, 86)',
												boxShadow: '0 0 10px rgba(239, 115, 86, 0.8)',
											}}
										></div>
										<div className="w-1 h-4 bg-gradient-to-b from-red-400 to-transparent opacity-60"></div>
									</div>
									<div className="flex flex-col items-center gap-1">
										<div
											className="w-3 h-3 rounded-full animate-pulse shadow-lg"
											style={{
												backgroundColor: 'rgb(255, 212, 79)',
												animationDelay: '0.5s',
												boxShadow: '0 0 10px rgba(255, 212, 79, 0.8)',
											}}
										></div>
										<div className="w-1 h-4 bg-gradient-to-b from-yellow-400 to-transparent opacity-60"></div>
									</div>
									<div className="flex flex-col items-center gap-1">
										<div
											className="w-3 h-3 rounded-full animate-pulse shadow-lg"
											style={{
												backgroundColor: 'rgb(255, 193, 7)',
												animationDelay: '1s',
												boxShadow: '0 0 10px rgba(255, 193, 7, 0.8)',
											}}
										></div>
										<div className="w-1 h-4 bg-gradient-to-b from-orange-400 to-transparent opacity-60"></div>
									</div>
								</div>

								{/* Data Stream Effect */}
								<div className="absolute top-16 right-4 flex flex-col gap-1 opacity-60">
									{Array.from({ length: 8 }).map((_, i) => (
										<div
											key={i}
											className="w-12 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"
											style={{
												animationDelay: `${i * 0.2}s`,
												animationDuration: '2s',
											}}
										></div>
									))}
								</div>

								{/* Glitch Overlay */}
								<div
									className="absolute inset-0 mix-blend-overlay opacity-30"
									style={{
										background: `linear-gradient(45deg,
											rgba(255, 193, 7, 0.1),
											rgba(255, 179, 0, 0.1),
											rgba(255, 235, 59, 0.05))`,
									}}
								></div>

								{/* Holographic Reflection */}
								<div
									className="absolute inset-0 opacity-20 animate-pulse"
									style={{
										background: `linear-gradient(135deg,
											transparent 30%,
											rgba(255, 255, 255, 0.1) 50%,
											transparent 70%)`,
										animationDuration: '3s',
									}}
								></div>

								<img
									ref={imageRef}
									src={pixelImage}
									alt="Leandro Viana"
									className="w-80 h-96 sm:w-96 sm:h-[28rem] object-cover filter contrast-110 saturate-110 relative"
									style={{
										objectPosition: 'center 70%',
									}}
								/>

								{/* Enhanced Color Overlay */}
								<div
									className="absolute inset-0 mix-blend-multiply opacity-60"
									style={{
										background: `linear-gradient(to top,
											rgba(230, 81, 0, 0.3),
											transparent 50%,
											rgba(255, 111, 0, 0.2))`,
									}}
								></div>

								{/* Enhanced Bottom Panel */}
								<div
									className="absolute bottom-0 left-0 right-0 glass p-4 border-t backdrop-blur-sm"
									style={{
										borderColor: 'rgba(255, 212, 79, 0.4)',
										background: 'rgba(0, 0, 0, 0.3)',
									}}
								>
									<div
										className="flex items-center justify-between text-xs font-mono"
										style={{ color: 'rgb(255, 212, 79)' }}
									>
										<div className="flex items-center gap-2">
											<span className="animate-pulse">ONLINE</span>
											<div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
										</div>
										<div className="flex items-center gap-2">
											<span>ID: LV_2025</span>
											<div className="w-1 h-4 bg-gradient-to-t from-orange-400 to-transparent animate-pulse"></div>
										</div>
										<div className="flex items-center gap-1">
											<span className="animate-pulse">●</span>
											<span className="text-[10px] opacity-60">ACTIVE</span>
										</div>
									</div>
									<div className="mt-2 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
										<div
											className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 animate-pulse"
											style={{ width: '85%' }}
										></div>
									</div>
								</div>
							</div>

							{/* Enhanced Floating Elements */}
							<div
								className="absolute -top-8 -right-8 w-6 h-6 rounded-full animate-float shadow-2xl"
								style={{
									backgroundColor: 'rgb(255, 212, 79)',
									boxShadow:
										'0 0 30px rgba(255, 212, 79, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)',
								}}
							>
								<div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
							</div>
							<div
								className="absolute -bottom-10 -left-10 w-8 h-8 rounded-full animate-float-delayed shadow-2xl"
								style={{
									backgroundColor: 'rgb(255, 193, 7)',
									boxShadow:
										'0 0 30px rgba(255, 193, 7, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.3)',
								}}
							>
								<div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
							</div>
							<div
								className="absolute top-1/2 -right-10 w-4 h-4 rounded-full animate-pulse shadow-2xl"
								style={{
									backgroundColor: 'rgb(255, 235, 59)',
									boxShadow:
										'0 0 25px rgba(255, 235, 59, 0.8), inset 0 0 8px rgba(255, 255, 255, 0.3)',
								}}
							>
								<div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/40 to-transparent"></div>
							</div>

							{/* Enhanced HUD Element */}
							<div className="absolute -bottom-6 -right-6 w-20 h-20 opacity-40">
								<svg
									viewBox="0 0 80 80"
									className="w-full h-full"
									style={{ color: 'rgb(255, 212, 79)' }}
									aria-hidden="true"
									focusable="false"
								>
									<circle
										cx="40"
										cy="40"
										r="35"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
										strokeDasharray="5,5"
										className="animate-spin"
										style={{ animationDuration: '10s' }}
									/>
									<path
										d="M10 10 L70 10 L70 40 L40 40 L40 70 L10 70 Z"
										fill="none"
										stroke="currentColor"
										strokeWidth="1"
										className="animate-pulse"
									/>
									<circle
										cx="40"
										cy="40"
										r="4"
										fill="currentColor"
										className="animate-ping"
									/>
									<text
										x="40"
										y="75"
										textAnchor="middle"
										className="text-[8px] font-mono"
										fill="currentColor"
									>
										SYS_OK
									</text>
								</svg>
							</div>

							{/* Additional Floating Data Points */}
							<div className="absolute top-1/4 -left-6 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
							<div
								className="absolute top-3/4 -right-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-60"
								style={{ animationDelay: '1s' }}
							></div>
							<div
								className="absolute top-1/3 -left-8 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-60"
								style={{ animationDelay: '2s' }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;

import { useRef, useState, useLayoutEffect, useCallback } from 'react';
import {
	List,
	X,
	LinkedinLogo,
	GithubLogo,
	Envelope,
} from '@phosphor-icons/react';
import { gsap } from 'gsap';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);
	const headerRef = useRef<HTMLElement | null>(null);
	const logoRef = useRef<HTMLHeadingElement | null>(null);
	const desktopNavRef = useRef<HTMLDivElement | null>(null);
	const desktopSocialRef = useRef<HTMLDivElement | null>(null);
	const mobileButtonRef = useRef<HTMLButtonElement | null>(null);
	const mobileMenuRef = useRef<HTMLDivElement | null>(null);
	const menuItemsRef = useRef<HTMLAnchorElement[]>([]);
	const socialItemsRef = useRef<HTMLAnchorElement[]>([]);
	const tlRef = useRef<gsap.core.Timeline | null>(null);

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Work', href: '#work' },
	];

	const socialLinks = [
		{
			icon: LinkedinLogo,
			href: 'https://linkedin.com/in/leandroviana',
			label: 'LinkedIn',
		},
		{
			icon: GithubLogo,
			href: 'https://github.com/leandroviana',
			label: 'GitHub',
		},
		{ icon: Envelope, href: 'mailto:leandro@example.com', label: 'Email' },
	];

	useLayoutEffect(() => {
		const headerEl = headerRef.current;
		const logoEl = logoRef.current;
		const desktopNavEl = desktopNavRef.current;
		const desktopSocialEl = desktopSocialRef.current;
		const mobileButtonEl = mobileButtonRef.current;

		if (!headerEl) return;

		gsap.set(headerEl, {
			y: -100,
			opacity: 0,
		});

		gsap.set(
			[logoEl, desktopNavEl, desktopSocialEl, mobileButtonEl].filter(Boolean),
			{
				y: -20,
				opacity: 0,
			},
		);

		const entranceTl = gsap.timeline();

		entranceTl.to(headerEl, {
			y: 0,
			opacity: 1,
			duration: 0.6,
			ease: 'power3.out',
		});

		entranceTl.to(
			[logoEl, desktopNavEl, desktopSocialEl, mobileButtonEl].filter(Boolean),
			{
				y: 0,
				opacity: 1,
				duration: 0.4,
				ease: 'power2.out',
				stagger: 0.1,
			},
			'-=0.3',
		);

		if (desktopSocialEl) {
			const socialLinks = desktopSocialEl.querySelectorAll('a');
			gsap.set(socialLinks, { scale: 0, opacity: 0 });
			entranceTl.to(
				socialLinks,
				{
					scale: 1,
					opacity: 1,
					duration: 0.3,
					ease: 'back.out(1.7)',
					stagger: 0.05,
				},
				'-=0.2',
			);
		}

		if (desktopNavEl) {
			const navLinks = desktopNavEl.querySelectorAll('a');
			gsap.set(navLinks, { y: -10, opacity: 0 });
			entranceTl.to(
				navLinks,
				{
					y: 0,
					opacity: 1,
					duration: 0.3,
					ease: 'power2.out',
					stagger: 0.05,
				},
				'-=0.4',
			);
		}

		return () => {
			entranceTl.kill();
		};
	}, []);

	const calculateMobileMenuHeight = useCallback(() => {
		const mobileMenuEl = mobileMenuRef.current;
		if (!mobileMenuEl) return 200;

		const wasVisible = mobileMenuEl.style.visibility;
		const wasHeight = mobileMenuEl.style.height;

		mobileMenuEl.style.visibility = 'visible';
		mobileMenuEl.style.height = 'auto';

		const contentHeight = mobileMenuEl.scrollHeight;

		mobileMenuEl.style.visibility = wasVisible;
		mobileMenuEl.style.height = wasHeight;

		return contentHeight + 16;
	}, []);

	const createTimeline = useCallback(() => {
		const mobileMenuEl = mobileMenuRef.current;
		if (!mobileMenuEl) return null;

		gsap.set(mobileMenuEl, {
			height: 0,
			opacity: 0,
			overflow: 'hidden',
			transformOrigin: 'top center',
		});
		gsap.set([...menuItemsRef.current, ...socialItemsRef.current], {
			y: 20,
			opacity: 0,
		});

		const tl = gsap.timeline({ paused: true });

		tl.to(mobileMenuEl, {
			height: calculateMobileMenuHeight,
			opacity: 1,
			duration: 0.4,
			ease: 'power3.out',
		});

		tl.to(
			menuItemsRef.current,
			{
				y: 0,
				opacity: 1,
				duration: 0.3,
				ease: 'power2.out',
				stagger: 0.05,
			},
			'-=0.2',
		);

		tl.to(
			socialItemsRef.current,
			{
				y: 0,
				opacity: 1,
				duration: 0.3,
				ease: 'power2.out',
				stagger: 0.03,
			},
			'-=0.1',
		);

		return tl;
	}, [calculateMobileMenuHeight]);

	useLayoutEffect(() => {
		const tl = createTimeline();
		tlRef.current = tl;

		return () => {
			tl?.kill();
			tlRef.current = null;
		};
	}, [createTimeline]);

	useLayoutEffect(() => {
		const handleResize = () => {
			if (!tlRef.current) return;

			if (isExpanded) {
				const newHeight = calculateMobileMenuHeight();
				gsap.set(mobileMenuRef.current, { height: newHeight });
				tlRef.current.kill();
				const newTl = createTimeline();
				if (newTl) {
					newTl.progress(1);
					tlRef.current = newTl;
				}
			} else {
				tlRef.current.kill();
				const newTl = createTimeline();
				if (newTl) {
					tlRef.current = newTl;
				}
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [isExpanded, calculateMobileMenuHeight, createTimeline]);

	const toggleMenu = () => {
		const tl = tlRef.current;
		if (!tl) return;

		if (!isExpanded) {
			setIsMenuOpen(true);
			setIsExpanded(true);
			tl.play(0);
		} else {
			setIsMenuOpen(false);
			tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
			tl.reverse();
		}
	};

	const handleMenuItemClick = () => {
		const tl = tlRef.current;
		if (!tl) return;

		setIsMenuOpen(false);
		tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
		tl.reverse();
	};

	const setMenuItemRef = (index: number) => (el: HTMLAnchorElement | null) => {
		if (el) menuItemsRef.current[index] = el;
	};

	const setSocialItemRef =
		(index: number) => (el: HTMLAnchorElement | null) => {
			if (el) socialItemsRef.current[index] = el;
		};

	return (
		<header
			ref={headerRef}
			className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-gray-300/10"
		>
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<h1
							ref={logoRef}
							className="text-xl font-bold text-orange-500 hover:text-orange-400 transition-colors duration-200"
						>
							Leandro Viana
						</h1>
					</div>

					<div ref={desktopNavRef} className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-white hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:glass-strong rounded-lg font-liter"
								>
									{item.name}
								</a>
							))}
						</div>
					</div>

					<div
						ref={desktopSocialRef}
						className="hidden md:flex items-center space-x-4"
					>
						{socialLinks.map((social) => (
							<a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-orange-500 p-2 rounded-lg hover:glass-strong transition-all duration-200 group"
								aria-label={social.label}
							>
								<social.icon
									size={20}
									weight="bold"
									className="group-hover:scale-110 transition-transform duration-200"
								/>
							</a>
						))}
					</div>

					<div className="md:hidden">
						<button
							ref={mobileButtonRef}
							type="button"
							onClick={toggleMenu}
							className="text-white hover:text-orange-500 p-2 rounded-lg hover:glass-strong transition-all duration-200 group"
							aria-label="Toggle menu"
						>
							<div className="relative w-6 h-6">
								<div
									className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
										isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
									}`}
								/>
								<div
									className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
										isMenuOpen ? 'opacity-0' : ''
									}`}
								/>
								<div
									className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
										isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
									}`}
								/>
							</div>
						</button>
					</div>
				</div>

				<div
					ref={mobileMenuRef}
					className={`md:hidden overflow-hidden ${
						isExpanded ? 'visible' : 'invisible'
					}`}
					aria-hidden={!isExpanded}
				>
					<div className="glass-card mt-2 rounded-xl border border-gray-300/10 p-4">
						<div className="space-y-2">
							{navItems.map((item, index) => (
								<a
									key={item.name}
									ref={setMenuItemRef(index)}
									href={item.href}
									className="text-white hover:text-orange-500 block px-3 py-3 text-base font-medium transition-colors duration-200 hover:glass-strong rounded-lg font-liter"
									onClick={handleMenuItemClick}
								>
									{item.name}
								</a>
							))}
						</div>

						<div className="flex items-center justify-center space-x-4 pt-6 mt-6 border-t border-gray-300/10">
							{socialLinks.map((social, index) => (
								<a
									key={social.label}
									ref={setSocialItemRef(index)}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-orange-500 p-3 rounded-lg hover:glass-strong transition-all duration-200 group"
									aria-label={social.label}
								>
									<social.icon
										size={22}
										weight="bold"
										className="group-hover:scale-110 transition-transform duration-200"
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;

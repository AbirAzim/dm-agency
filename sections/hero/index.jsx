import {useEffect, useState, useRef} from 'react'
import SloganText from "../../components/Home/SloganText";
import Logo from "../../components/Home/Logo";
import Nav from "../../components/Home/Nav";
import MainText from "../../components/Home/MainText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope
} from '@fortawesome/free-solid-svg-icons'



const Hero = () => {
	const [isSticky, setIsSticky] = useState(false);
	const navRef = useRef(null);

	console.log(navRef)
	useEffect(()=> {
		console.log(isSticky)
		window.addEventListener('scroll', ()=> {
			if(window.scrollY >= 180){
				setIsSticky(true)
				return
			}
			setIsSticky(false)
		})
	}, [isSticky])
	return (
		<header id='home'>
			<div className='pattern'></div>
			<nav id='topnav' ref={navRef} className = {`${isSticky ? 'sticky' : 'transparents'}`}> 
				<div className='row' >
					<Logo />
					<Nav />
				</div>
			</nav>
			<div className='container'>
				<div className='row'>
					<div className='span12'>
						<div>
							<SloganText />
							<MainText />
						</div>

						{/* <script>$(window).resize();</script> */}

						<div className='scroll-links'>
							<a href='#about' className='nextslide'>
								<span>
									<i className='nextslide-icon'>
										<FontAwesomeIcon icon={faEnvelope} />
									</i>
									Who we are?
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Hero;

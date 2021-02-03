import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as all from '@fortawesome/free-solid-svg-icons'
// import * as alll from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
	return (
		<section id='contact' style={{ backgroundColor: "#FEC400" }}>
			<div classNameName="overlay-contact"></div>
			<div className='container'>
				<div className='row'>
					<div className='span12'>
						<div className='title'>Contact Us</div>
						<div className='contact-text'>
							Praesent rhoncus nunc vitae metus condimentum viverra. Fusce sed
							est orci, vel condimentum felis. Suspendisse ullamcorper vulputate
							sagittis. Quisque ullamcorper euismod diam at bibendum.
							Nullafacilisi. Donec id mi sed ante ullamcorper metus condimentum
							viverra tincidunt.
						</div>
						<address>
							<div className='email'>
								<FontAwesomeIcon className="contact-icon" icon={all.faEnvelope} />
								hello@goltsman.com
							</div>
							<div className='phone'>
								<FontAwesomeIcon className="contact-icon" icon={all.faPhone} />
								8 800-580-46-32
							</div>
							<div className='address'>
								<FontAwesomeIcon className="contact-icon" icon={all.faMapMarkerAlt} />
								103637, Russia, Moscow, Leninskaya street, bld. 36
							</div>
						</address>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

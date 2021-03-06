import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as all from '@fortawesome/free-solid-svg-icons'
// import * as alll from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
	return (
		<section id='contact' style={{ backgroundColor: "#FEC400" }}>
			<div className="overlay-contact"></div>
			<div class='container'>
				<div class='row'>
					<div class='span12'>
						<div class='title'>Contact Us</div>
						<div class='contact-text'>
							Praesent rhoncus nunc vitae metus condimentum viverra. Fusce sed
							est orci, vel condimentum felis. Suspendisse ullamcorper vulputate
							sagittis. Quisque ullamcorper euismod diam at bibendum.
							Nullafacilisi. Donec id mi sed ante ullamcorper metus condimentum
							viverra tincidunt.
						</div>
						<address>
							<div class='email'>
								<FontAwesomeIcon icon={all.faAddressBook} />
								hello@goltsman.com
							</div>
							<div class='phone'>
								<FontAwesomeIcon icon={all.faPhone} />
								8 800-580-46-32
							</div>
							<div class='address'>
								<FontAwesomeIcon icon={all.faMapMarkerAlt} />
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

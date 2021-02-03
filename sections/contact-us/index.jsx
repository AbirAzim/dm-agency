import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPhone,
	faAddressBook,
	faTwitterSquare,
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
	return (
		<section id='contact' style={{ backgroundColor: "#FEC400" }}>
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
								<FontAwesomeIcon icon={faEnvelope} />
								hello@goltsman.com
							</div>
							<div class='phone'>
								<FontAwesomeIcon icon={faPhone} />
								8 800-580-46-32
							</div>
							<div class='address'>
								<FontAwesomeIcon icon={faAddressBook} />
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

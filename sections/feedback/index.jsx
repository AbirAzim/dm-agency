import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as all from '@fortawesome/free-solid-svg-icons'


const Feedback = () => {
	return (
		<section id='feedback'>
			<div className='container'>
				<div className='row'>
					<div className='span12'>
						<div className='title'>Feedback form</div>
						<div className='result'></div>

						<form className='well'>
							<div className='row'>
								<div className='span6 pull-left'>
									<label>Your name</label>
									<input
										className='span6'
										type='text'
										name='name'
										placeholder='Your Name'
									/>
								</div>
								<div className='span6 pull-right'>
									<label>Your e-mail</label>
									<input
										className='span6'
										type='text'
										name='email'
										placeholder='Your E-mail'
									/>
								</div>
							</div>
							<div className='row'>
								<div className='span12 textarea-margin'>
									<label>Message</label>
									<textarea
										className='span12'
										rows='6'
										name='message'
										placeholder='Message'></textarea>
									<button type='submit' className='btn rounded color'>
										<FontAwesomeIcon className="feedback-icon" icon={all.faEnvelope} />
										Send Message
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feedback;

import SocialIcons from "../SocialIcons/SocialIcons";
import Navigation from "./Navigation";

const Nav = () => {
	return (
		<div className='span6'>
			<Navigation lists={
				[
					{id: 'home', title: 'Home'},
					{id: 'about', title: 'About-Us'},
					{id: 'services', title: 'services'},
					{id: 'portfolio', title: 'portfolio'},
					{id: 'contact', title: 'contact'}
				]
			}/>
			<SocialIcons />
		</div>
	);
};

export default Nav;

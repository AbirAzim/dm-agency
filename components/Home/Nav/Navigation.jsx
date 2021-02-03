import {useState} from 'react';


const Navigation = ({lists}) => {
	const [current, setCurrent] = useState('');
	const handleClick = (id) => {
		setCurrent(id)
	}
	console.log(current)

	return (
		<ul id='fixed-nav' className='hidden-phone scroll-links'>
			{/* <li id='home' className='current'>
				<a  href='#home'>Home</a>
			</li>
			<li id='about'>
				<a href='#about'>About Us</a>
			</li>
			<li id='about'>
				<a href='#team'>Team</a>
			</li>
			<li id='services'>
				<a href='#services'>Services</a>
			</li>
			<li id='portfolio'>
				<a href='#portfolio'>Portfolio</a>
			</li>
			<li id='contact' onClick={()=> console.log()}>
				<a href='#contact'>Contact Us</a>
			</li> */}
			{lists.map(list => (
				<li key= {list.id} className= {`${current === list.id  ? 'current' : ''}`} onClick={()=>handleClick(list.id)}>
					<a href={`#${list.id}`}> {list.title} </a>
				</li>
			))}
		</ul>
	);
};

export default Navigation;

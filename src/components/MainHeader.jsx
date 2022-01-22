import { NavLink } from 'react-router-dom';
import { formatToBeautifulDate } from '../isDevAvailable';
import Button from '../styled-components/Button';
import MainHeaderStyled from '../styled-components/MainHeaderStyled';

const MainHeader = ({ availableDevelopers, selectedDate, selectedDevs }) => {
	return (
		<MainHeaderStyled>
			{selectedDate.start && (
				<section>
					<article>
						{formatToBeautifulDate(selectedDate.start)} - {formatToBeautifulDate(selectedDate.end)}
					</article>
					<article>Available developers: {availableDevelopers.length}</article>
					{selectedDevs.length && <article>Selected: {selectedDevs.length}</article>}
				</section>
			)}
			<nav>
				<ul>
					<li>
						<NavLink to="/hiring-developers">
							<Button>&#9750;</Button>
						</NavLink>
					</li>
					<li>
						<NavLink className={navData => (navData.isActive ? 'links active' : 'links')} activeclassname="active" to="/hire/select-date">
							WORK PERIOD
						</NavLink>
					</li>
					<li>&rarr;</li>
					<li>
						<NavLink className={navData => (navData.isActive ? 'links active' : 'links')} to="/hire/select-developer">
							SELECTION
						</NavLink>
					</li>
					<li>&rarr;</li>
					<li>
						<NavLink className={navData => (navData.isActive ? 'links active' : 'links')} to="/hire/confirm">
							CONFIRM
						</NavLink>
					</li>
				</ul>
			</nav>
		</MainHeaderStyled>
	);
};

export default MainHeader;

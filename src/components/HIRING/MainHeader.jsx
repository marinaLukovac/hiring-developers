import { NavLink } from 'react-router-dom';
import { formatToBeautifulDate } from '../../isDevAvailable';
import Button from '../../styled-components/Button';
import MainHeaderStyled from '../../styled-components/MainHeaderStyled';

const MainHeader = ({ countAvailableDevs, selectedDate, countSelectedDevs }) => {
	return (
		<MainHeaderStyled>
			{selectedDate.starting && (
				<section>
					<article>
						{formatToBeautifulDate(selectedDate.starting)} - {formatToBeautifulDate(selectedDate.ending)}
					</article>
					<article>Available developers: {countAvailableDevs}</article>
					{countSelectedDevs && <article>Selected: {countSelectedDevs}</article>}
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

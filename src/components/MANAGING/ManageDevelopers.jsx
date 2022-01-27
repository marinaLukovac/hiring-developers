import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Button from '../../styled-components/Button';
import MainHeaderStyled from '../../styled-components/MainHeaderStyled';

const ManageDevelopers = ({ developers, setDevelopers, procedure }) => {
	const history = useNavigate();
	const goHome = () => {
		history('/hiring-developers', { replace: true });
	};
	return (
		<>
			<MainHeaderStyled>
				<nav>
					<ul>
						<li>
							<Button className="home-btn" onClick={goHome}>
								&#9750;
							</Button>
						</li>
						<li>
							<NavLink className={navData => (navData.isActive ? 'links active' : 'links')} to="/manage/all">
								<Button className="home-btn">ALL</Button>
							</NavLink>
						</li>
						<li>
							<NavLink className={navData => (navData.isActive ? 'links active' : 'links')} to="/manage/all/new">
								<Button className="home-btn">ADD NEW DEVELOPER</Button>
							</NavLink>
						</li>
					</ul>
				</nav>
			</MainHeaderStyled>
			<Outlet />
		</>
	);
};

export default ManageDevelopers;

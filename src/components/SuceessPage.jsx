import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../styled-components/Button';
import SuccessPageStyled from '../styled-components/SuccessPageStyled';

const SuccessPage = () => {
	const param = useParams();
	const history = useNavigate();
	const [content, setContent] = useState('');
	if (!content) {
		if (param.success === 'deleted') setContent('SUCESSFULY DELETED A DEVELOPER');
		if (param.success === 'created') setContent('SUCESSFULY ADDED NEW DEVELOPER');
		if (param.success === 'updated') setContent('SUCESSFULY EDITED A DEVELOPER');
		if (param.success === 'hired') setContent('HIRING PROCESS WAS A SUCCESS');
		if (param.success === 'false') setContent('SOMETHING WENT WRONG');
	}

	useEffect(() => {
		!content && history(`/hiring-developers`);
	});
	return (
		<SuccessPageStyled>
			<h2>{content}</h2>
			<Button
				onClick={() => {
					history('/hiring-developers');
				}}
			>
				Go Home
			</Button>
		</SuccessPageStyled>
	);
};

export default SuccessPage;

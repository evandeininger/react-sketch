import * as React from 'react';
import { Subtitle, Body } from './textComponents';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

const Wrapper = styled.View`
	background-color: orange;
	width: 100%;
	padding: 20px;
	display: flex;
`;

const Description = styled.View`
	display: block;
	margin-top: 15px;
	justify-content: space-between;
`;

const Details = styled.View`
	display: flex;
	flex-direction: row;
	height: auto;
	align-items: center;
	margin-top: 15px;
`;

const Icon = styled.Image`
	width: 20px;
	height: 20px;
	margin-right: 8px;
	background-color: red;
`;

const SourceDate = styled.View`
	display: flex;
`;

const ArticleImage = styled.Image`
	max-height: 400px;
	min-height: 100px;
	width: 100%;
`;

const Tile = ({ copy, icon, picture, date, source }) => {
	return (
		<Wrapper>
			<ArticleImage ResizeMode="none" source={picture} />
			<Description>
				<Body>{copy}</Body>
				<Details>
					<Icon source={icon} />
					<SourceDate>
						<Subtitle>{`${date}`}</Subtitle>
						<Subtitle>{source}</Subtitle>
					</SourceDate>
				</Details>
			</Description>
		</Wrapper>
	);
};

Tile.propTypes = {
	picture: PropTypes.string.isRequired,
};

export default Tile;

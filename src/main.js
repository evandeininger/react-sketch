import * as React from 'react';
import { render } from 'react-sketchapp';
import { Text, View } from 'react-primitives';

import { fonts } from './designSystem';
import Tile from './components/Tile';

const FAKE_DATA = {
	picture:
		'https://images.unsplash.com/photo-1536185503-b705a9bec60d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fd8b49418abad0fbd2ffc6c66e81ace&auto=format&fit=crop&w=800&q=60',
	icon:
		'https://cdn2.iconfinder.com/data/icons/social-icon-3/512/social_style_3_rss-512.png',
};

const Page = ({ users }) => (
	<View>
		<Text style={fonts['Title 1']}>Tile Example </Text>
		<View
			style={{
				flexDirection: 'row',
				flexWrap: 'wrap',
				width: '120px',
			}}>
			<Tile
				picture={FAKE_DATA.picture}
				icon={FAKE_DATA.icon}
				copy="hello! This is some body copys"
				date="12/12/12"
				source="RSS"
			/>
		</View>
	</View>
);

export default () => {
	render(<Page />, context.document.currentPage());
};

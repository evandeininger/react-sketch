export const colors = {
	Haus: '#F3F4F4',
	Night: '#333',
	Sur: '#96DBE4',
	'Sur a11y': '#24828F',
	Peach: '#EFADA0',
	'Peach a11y': '#E37059',
	Pear: '#93DAAB',
	'Pear a11y': '#2E854B',
};

export const spacing = 16;

const fontFamilies = {
	display: 'Helvetica',
	body: 'Arial',
};

const fontWeights = {
	regular: 'regular',
	bold: 'bold',
};

export const fonts = {
	Headline: {
		color: colors.Night,
		fontSize: 80,
		fontFamily: fontFamilies.display,
		fontWeight: fontWeights.bold,
		lineHeight: 80,
	},
	'Title 1': {
		color: colors.Night,
		fontSize: 48,
		fontFamily: fontFamilies.display,
		fontWeight: fontWeights.bold,
		lineHeight: 48,
	},
	'Title 2': {
		color: colors.Night,
		fontSize: 36,
		fontFamily: fontFamilies.display,
		fontWeight: fontWeights.bold,
		lineHeight: 36,
	},
	'Title 3': {
		color: colors.Night,
		fontSize: 24,
		fontFamily: fontFamilies.body,
		fontWeight: fontWeights.regular,
		lineHeight: 24,
	},
	'Title 4': {
		color: colors.Night,
		fontSize: 12,
		fontFamily: fontFamilies.body,
		fontWeight: fontWeights.regular,
		lineHeight: 12,
	},
	Body: {
		color: colors.Night,
		fontSize: 16,
		fontFamily: fontFamilies.body,
		fontWeight: fontWeights.regular,
		lineHeight: 20,
	},
};

export default {
	colors,
	fonts,
	spacing,
};

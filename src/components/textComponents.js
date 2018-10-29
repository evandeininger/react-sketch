import * as React from 'react';
import { Text } from 'react-primitives';
import { fonts } from '../designSystem';
import { StyleSheet } from 'react-primitives';

const styles = StyleSheet.create({
	title: fonts['Title 2'],
	subtitle: fonts['Title 4'],
	body: fonts.Body,
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

const Subtitle = ({ children }) => (
	<Text style={styles.subtitle}>{children}</Text>
);

const Body = ({ children }) => <Text style={styles.body}>{children}</Text>;

export { Title, Subtitle, Body };

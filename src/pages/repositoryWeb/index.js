import React from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default function RepositoryWeb({ navigation }) {
	const repository = navigation.getParam('repository');

	return (
		<WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />
	);
}

RepositoryWeb.navigationOptions = ({ navigation }) => ({
	title: navigation.getParam('repository').name,
});

RepositoryWeb.propTypes = {
	navigation: PropTypes.shape({
		getParam: PropTypes.func,
		navigate: PropTypes.func,
	}).isRequired,
};

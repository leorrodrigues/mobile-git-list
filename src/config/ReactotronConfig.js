import Reactotron from 'reactotron-react-native';

if (__DEV__) {
	const tron = Reactotron.configure({ host: '10.10.0.8' })
		.useReactNative()
		.connect();
	console.tron = tron;

	tron.clear();
}

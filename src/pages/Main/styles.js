import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view';

export const Container = styled.View`
	flex: 1;
	padding: 30px;
`;

export const Form = styled.View`
	flex-direction: row;
	padding-bottom: 20px;
	border-bottom-width: 1px;
	border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
	placeholderTextColor: '#999',
})`
	flex: 1;
	height: 40px;
	background: #eee;
	border-radius: 4px;
	padding: 0 15px;
	border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
	justify-content: center;
	align-items: center;
	background: #7159c1;
	border-radius: 4px;
	margin-left: 10px;
	padding: 0 12px;
`;

export const List = styled(SwipeListView).attrs({
	showsVerticalScrollIndicator: false,
})`
	margin-top: 20px;
`;

export const User = styled.View`
	align-items: center;
	margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
	width: 64px;
	height: 64px;
	border-radius: 32px;
	background: #eee;
`;

export const Name = styled.Text`
	font-size: 14px;
	color: #333;
	font-weight: bold;
	margin-top: 4px;
	text-align: center;
`;

export const Bio = styled.Text.attrs({
	numberOfLines: 2,
})`
	font-size: 13px;
	line-height: 18px;
	color: #999;
	margin-top: 5px;
	text-align: center;
`;

export const ProfileButton = styled(RectButton)`
	margin-top: 10px;
	align-self: stretch;
	border-radius: 4px;
	background: #7159c1;
	justify-content: center;
	align-items: center;
	height: 36px;
	opacity: ${props => (props.loading ? 0.5 : 1)};
`;

export const ProfileButtonText = styled.Text`
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	text-transform: uppercase;
`;

export const SwipeArea = styled.View`
	align-items: center;
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 15px;
`;

export const SwipeButtonLeft = styled.TouchableOpacity`
	align-items: center;
	bottom: 0px;
	justify-content: center;
	position: absolute;
	top: 0px;
	width: 75px;
	background-color: green;
	left: 0px;
`;

export const SwipeButtonRight = styled.TouchableOpacity`
	align-items: center;
	bottom: 0px;
	justify-content: center;
	position: absolute;
	top: 0px;
	width: 80px;
	height: 175px;
	right: 0px;
`;

export const SwipeButtonText = styled.Text`
	font-size: 14px;
	font-weight: bold;
	color: red;
	text-transform: uppercase;
`;

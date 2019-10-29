import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
	Container,
	Form,
	Input,
	SubmitButton,
	List,
	User,
	Avatar,
	Name,
	Bio,
	ProfileButton,
	ProfileButtonText,
	SwipeArea,
	SwipeButtonRight,
	SwipeButtonText,
} from './styles';

export default class Main extends Component {
	static navigationOptions = {
		title: 'Users',
	};

	static propTypes = {
		navigation: PropTypes.shape({
			navigate: PropTypes.func,
		}).isRequired,
	};

	state = {
		newUser: '',
		users: [],
		oppend: '',
		loading: false,
	};

	async componentDidMount() {
		const users = await AsyncStorage.getItem('users');

		if (users) {
			this.setState({ users: JSON.parse(users) });
		}
	}

	async componentDidUpdate(_, prevState) {
		const { users } = this.state;

		if (prevState.users !== users) {
			AsyncStorage.setItem('users', JSON.stringify(users));
		}
	}

	handleAddUser = async () => {
		const { users, newUser } = this.state;

		this.setState({ loading: true });

		const response = await api.get(`users/${newUser}`);

		const data = {
			name: response.data.name,
			login: response.data.login,
			bio: response.data.bio,
			avatar: response.data.avatar_url,
		};

		this.setState({
			users: [...users, data],
			newUser: '',
			loading: false,
			oppend: '',
		});
		Keyboard.dismiss();
	};

	handleNavigate = user => {
		const { navigation } = this.props;

		navigation.navigate('User', { user });
	};

	handleDeleteUser = userLogin => {
		const { users } = this.state;
		const filteredData = users.filter(user => user.login !== userLogin);
		this.setState({ users: filteredData, oppend: '' });
	};

	handleRowOpen = userLogin => {
		this.setState({ oppend: userLogin });
	};

	handleRowClose = () => {
		this.setState({ oppend: '' });
	};

	render() {
		const { users, newUser, loading, oppend } = this.state;
		return (
			<Container>
				<Form>
					<Input
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Add user"
						value={newUser}
						onChangeText={text => this.setState({ newUser: text })}
						returnKeyType="send"
						onSubmitEditing={this.handleAddUser}
					/>
					<SubmitButton
						loading={loading}
						onPress={this.handleAddUser}
					>
						{loading ? (
							<ActivityIndicator color="#FFF" />
						) : (
							<Icon name="add" size={20} color="#fff" />
						)}
					</SubmitButton>
				</Form>
				<List
					useFlatList
					disableRightSwipe
					data={users}
					keyExtractor={user => user.login}
					renderItem={({ item }) => (
						<User>
							<Avatar source={{ uri: item.avatar }} />
							<Name>{item.name}</Name>
							<Bio>{item.bio}</Bio>

							<ProfileButton
								onPress={() => this.handleNavigate(item)}
							>
								<ProfileButtonText>
									See profile
								</ProfileButtonText>
							</ProfileButton>
						</User>
					)}
					renderHiddenItem={({ item }) => (
						<>
							{oppend === item.login && (
								<SwipeArea>
									<SwipeButtonRight
										onPress={() =>
											this.handleDeleteUser(item.login)
										}
									>
										<Icon
											name="delete"
											size={30}
											color="red"
										/>
										<SwipeButtonText>
											Delete
										</SwipeButtonText>
									</SwipeButtonRight>
								</SwipeArea>
							)}
						</>
					)}
					rightOpenValue={-60}
					previewRowKey="0"
					previewOpenValue={-40}
					previewOpenDelay={3000}
					onRowOpen={this.handleRowOpen}
					onRowClose={this.handleRowClose}
				/>
			</Container>
		);
	}
}

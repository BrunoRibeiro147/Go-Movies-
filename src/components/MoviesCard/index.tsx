import React, { useState } from 'react';
import { Image, GestureResponderEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import Dialog from 'react-native-dialog';

import getRealm from '../../services/realm';

import { Movies } from '../../Interfaces/Movies';

import {
	Container,
	Title,
	Description,
	Year,
	YearText,
	Genre,
	GenreText,
	Duration,
	Runtime,
	Director,
	DirectorName,
	Row,
	Column,
	Refresh,
	RefreshText,
	Type,
	TypeText,
} from './styles';

const MovieCard: React.FC<{
	data: Movies,
	onRefresh: (event: GestureResponderEvent) => void,
	onDeleteMovie: Function,
}> = ({ data, onRefresh, onDeleteMovie }) => {

	const [dialogVisible, setDialogVisible] = useState(false);

	const navigation = useNavigation();

	function navigateToDetail(movie: Movies) {
		navigation.navigate('Details', { movie })
	}

	function handleCancel() {
		setDialogVisible(false);
	}

	async function handleDelete() {
		onDeleteMovie;

		const realm = await getRealm();

		realm.write(() => {
			realm.delete(data);
		});

		setDialogVisible(false);
	}

	return (
		<Container
			onPress={() => navigateToDetail(data)}
			onLongPress={() => { setDialogVisible(true) }}
		>

			<Dialog.Container visible={dialogVisible}>
				<Dialog.Title>Deletar Filme</Dialog.Title>

				<Dialog.Description>
					Você deseja apagar esse filme do seu banco de dados?
				</Dialog.Description>

				<Dialog.Button label="Cancelar" onPress={handleCancel} />

				<Dialog.Button label="Deletar" onPress={handleDelete} />

			</Dialog.Container>

			<Row>
				<Image
					source={{ uri: data.poster }}
					style={{ width: 150, height: 350, alignSelf: "center" }}
				/>

				<Column>
					<Title>{data.title}</Title>

					<Description>{data.plot}</Description>

					<Genre>
						<Icon name="book" size={22} color="#666" />
						<GenreText>{data.genre}</GenreText>
					</Genre>


					<Year>
						<Icon name="calendar" size={22} color="#666" />
						<YearText>{data.year}</YearText>
					</Year>

					<Duration>
						<Icon name="clock" size={22} color="#666" />
						<Runtime>{data.runtime}</Runtime>
					</Duration>

					<Director>
						<Icon name="user" size={22} color="#666" />
						<DirectorName>{data.director}</DirectorName>
					</Director>

					<Type>
						<Icon name="filter" size={22} color="#666" />
						<TypeText>{data.type}</TypeText>
					</Type>


					<Refresh onPress={onRefresh}>
						<Icon name="refresh-ccw" color="#FFD700" size={16} />
						<RefreshText>Atualizar</RefreshText>
					</Refresh>


				</Column>
			</Row>
		</Container>
	);
};

export default MovieCard;

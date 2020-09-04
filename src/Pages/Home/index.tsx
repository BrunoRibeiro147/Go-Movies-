import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-tiny-toast';

import { IMDB_KEY } from 'react-native-dotenv';

import api from '../../services/api';
import getRealm from '../../services/realm';

import MoviesCard from '../../components/MoviesCard';

import { Movies } from '../../Interfaces/Movies';

import {
	Container,
	LogoContainer,
	Form,
	Input,
	Submit,
	List,
} from './styles';

import logoImg from '../../assets/logo.png';

const Home: React.FC = () => {
	const [input, setInput] = useState('');
	const [error, setError] = useState(false);
	const [movies, setMovies] = useState<Movies[]>([]);

	useEffect(() => {
		async function loadMovies() {
			const realm = await getRealm();

			const data: Movies[] = realm.objects('Movies').sorted('title', false);

			setMovies(data);
		}

		loadMovies();
	}, []);

	async function saveMovie(data) {

		const movie: Movies = {
			id: data.imdbID,
			title: data.Title,
			actors: data.Actors,
			genre: data.Genre,
			awards: data.Awards,
			box_office: data.BoxOffice ?? '',
			country: data.Country,
			director: data.Director,
			dvd: data.DVD ?? '',
			rated: data.Rated,
			imdbRating: data.imdbRating,
			imdbVotes: data.imdbVotes,
			language: data.Language,
			year: data.Year,
			type: data.Type,
			poster: data.Poster,
			plot: data.Plot,
			production: data.Production ?? '',
			total_seasons: data.totalSeasons ?? 'Não possui.',
			internet_movie_database: data.Ratings[0] ? data.Ratings[0].Value : 'Sem resultados',
			rotten_tomatoes: data.Ratings[1] ? data.Ratings[1].Value : 'Sem resultados',
			metacritic: data.Ratings[2] ? data.Ratings[2].Value : 'Sem resultados',
			metascore: data.Metascore,
			runtime: data.Runtime,
			released: data.Released,
			website: data.Website ?? '',
			writer: data.Writer,
			favorite: false,
		}

		const realm = await getRealm();

		realm.write(() => {
			realm.create('Movies', movie, 'modified');
		})

		return movie;
	}

	async function handleAddMovie() {
		try {
			const response = await api.get(`${input}&apikey=${IMDB_KEY}`);

			await saveMovie(response.data);

			setError(false);

			Keyboard.dismiss();

			Toast.showSuccess(`${input} foi inserido com sucesso.`);

			setInput('');
		} catch (error) {

			setError(true);

			Toast.show(`${input} não foi encontrado.`);

			console.log(error);
		}
	}

	async function handleRefreshMovie(dados: Movies) {
		const response = await api.get(`${dados.title}&apikey=e3fa6d3d`);

		const data = await saveMovie(response.data);

		setMovies(movies.map(movie => movie.id === data.id ? data : movie));

		Toast.showSuccess(`${data.title} foi atualizado com sucesso.`);
	}

	async function handleDeleteMovie(deletedMovie: Movies) {

		setMovies(movies.filter(movie => movie.id === deletedMovie.id));

	}

	return (
		<Container>
			<LogoContainer>
				<Image source={logoImg} />
			</LogoContainer>

			<Form>
				<Input
					value={input}
					error={error}
					onChangeText={setInput}
					autoCapitalize="none"
					autoCorrect={false}
					placeholder="Procurar filmes..."
				/>

				<Submit onPress={handleAddMovie}>
					<Icon name="search" size={22} color="#FFF" />
				</Submit>
			</Form>

			<List
				keyboardShouldPersistTaps="handled"
				data={movies}
				keyExtractor={movies => movies.id}
				renderItem={({ item: movie }) => (
					<MoviesCard
						data={movie}
						onRefresh={() => handleRefreshMovie(movie)}
						onDelete={() => handleDeleteMovie(movie)}
					/>
				)}
			/>

		</Container>
	)
}

export default Home;

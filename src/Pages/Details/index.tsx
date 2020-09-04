import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { Movies } from '../../Interfaces/Movies';

import {
	Container,
	List,
	Title,
	Information,
	Ratings,
	RatingContainer,
	Text,
	Poster,
	Gradient,
	Separator,
	InformationsContainer,
	Topic,
} from './styles';

type ParamList = {
	Details: {
		movie: Movies
	}
}

const Details: React.FC = () => {
	const route = useRoute<RouteProp<ParamList, 'Details'>>();

	const movie = route.params.movie;

	return (
		<Container>
			<List>
				<Poster
					source={{ uri: movie.poster }}
				>
					<Gradient />
				</Poster>

				<Separator />

				<InformationsContainer>

					<Title>{movie.title}</Title>

					<Information>Informações:</Information>

					<Topic>Resumo: <Text>{movie.plot}</Text></Topic>

					<Topic>Lançamento: <Text>{movie.released}</Text></Topic>

					<Topic>Gênero: <Text>{movie.genre}</Text></Topic>

					<Topic>Temporadas: <Text>{movie.total_seasons}</Text></Topic>

					<Topic>Filme/Serie: <Text>{movie.type}</Text></Topic>

					<Topic>Diretor: <Text>{movie.director}</Text></Topic>

					<Topic>Atores: <Text>{movie.actors}</Text></Topic>

					<Topic>Escritores: <Text>{movie.writer}</Text></Topic>

					<Topic>Premios: <Text>{movie.awards}</Text></Topic>

					<Topic>Classificação: <Text>{movie.rated}</Text></Topic>

					<Topic>Duração: <Text>{movie.runtime}</Text></Topic>

					<Topic>Linguagens: <Text>{movie.language}</Text></Topic>

					<Topic>Produção: <Text>{movie.production}</Text></Topic>

					<Topic>Pais:
						<Text style={{ textTransform: 'uppercase' }}>
							{movie.country}
						</Text>
					</Topic>

					<Topic>DVD: <Text>{movie.dvd}</Text></Topic>

					<Topic>Bilheteria: <Text>{movie.box_office}</Text></Topic>

					<Topic>ImdbID: <Text>{movie.id}</Text></Topic>

					<Ratings>Avaliações:</Ratings>

					<Separator />

					<RatingContainer>

						<Topic>Internet Movie Database:
							<Text>{movie.internet_movie_database}</Text>
						</Topic>

						<Topic>Rotten Tomatoes: <Text>{movie.rotten_tomatoes}</Text></Topic>

						<Topic>Metacritic: <Text>{movie.metacritic}</Text></Topic>

						<Topic>Avaliações do Imdb: <Text>{movie.imdbRating}</Text></Topic>

						<Topic>Votações no Imdb: <Text>{movie.imdbVotes}</Text></Topic>

					</RatingContainer>


				</InformationsContainer>

			</List>
		</Container>
	)

}

export default Details;

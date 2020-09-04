import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


export const Container = styled.View`
	background-color: #000;
	flex: 1;
`;

export const List = styled.ScrollView``;

export const Title = styled.Text`
	margin-bottom: 21px;
	color: #FFF;
	font-size: 32px;
	font-weight: bold;
	align-self: center;
	text-transform: uppercase;
`;

export const Text = styled.Text`
	color: #FFF;
	font-size: 16px;
	font-weight: 400;
	text-transform: capitalize;
`;

export const Information = styled.Text`
	color: #FFF;
	margin-bottom: 18px;
	font-size: 16px;
	font-weight: 700;
`;

export const Ratings = styled.Text`
	margin-top: 28px;
	align-self: center;
	color: #FFF;
	font-size: 16px;
	font-weight: 700;
`;

export const Poster = styled.ImageBackground`
	width: 100%;
	height: 520px;
`;

export const Gradient = styled(LinearGradient).attrs({
	locations: [0, 0.2, 0.9, 1],
	colors:
		[
			`rgba(0,0,0,0.5)`,
			`rgba(0,0,0,0)`,
			`rgba(0,0,0,0)`,
			`rgba(0,0,0,1)`
		],
})`
	height: 100%;
`;

export const Separator = styled.View`
	width: 100%;
	height: 1px;
	background-color: #C4C4C4;
	opacity: 0.1;
	margin: 6px 0;
`;

export const InformationsContainer = styled.View`
	padding: 21px;
`;

export const Topic = styled.Text`
	margin-bottom: 18px;
	color: #FFF;
	font-size: 16px;
	font-weight: 700;
`;

export const RatingContainer = styled.View`
	background-color: #666360;
	padding: 8px;
	border-radius: 12px;
`;

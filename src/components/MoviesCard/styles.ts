import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	padding: 5px;
	border-radius: 4px;
	background: #FFF;
	margin-bottom: 15px;
`;

export const Row = styled.View`
	flex-direction: row;
`;

export const Column = styled.View`
	flex-direction: column;
	margin-left: 10px;
	flex-shrink: 1;
`;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #333;
`;

export const Description = styled.Text.attrs({
	numberOfLines: 3,
})`
	color: #666;
	margin-top: 5px;
	line-height: 20px;
`;

export const Year = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 15px;
`;

export const YearText = styled.Text`
	margin-left: 10px;
`;

export const Genre = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 15px;
`;

export const GenreText = styled.Text`
	margin-left: 10px;
	flex-shrink: 1;
`;

export const Duration = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 15px;
`;

export const Runtime = styled.Text`
	margin-left: 10px;
`;

export const Director = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 15px;
`;

export const DirectorName = styled.Text`
	margin-left: 10px;
`;

export const Type = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 15px;
`;

export const TypeText = styled.Text`
	margin-left: 10px;
	text-transform: capitalize;
`;


export const Refresh = styled.TouchableOpacity`
	margin-top: 20px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const RefreshText = styled.Text`
	font-size: 14px;
	font-weight: bold;
	color: #999;
	margin-left: 5px;
`;

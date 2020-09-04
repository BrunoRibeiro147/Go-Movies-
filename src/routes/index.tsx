import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';
import Details from '../Pages/Details';

const Stack = createStackNavigator();

const MoviesRoutes: React.FC = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Home"
			component={Home}
			options={{ headerShown: false }}
		/>
		<Stack.Screen
			name="Details"
			component={Details}
			options={
				{
					title: 'Detalhes',
					headerStyle: { backgroundColor: '#28262E' },
					headerTintColor: '#FFF',
					headerTitleStyle: { fontWeight: '600' }
				}
			}
		/>
	</Stack.Navigator>
)

export default MoviesRoutes;

import { AppRegistry } from 'react-native';
import App from './App';
import AmbulanceMainPage from './ambulance';
import { name as appName } from './app.json';
import Page from './welcome';

// Registering App component as the root component
AppRegistry.registerComponent(appName, () =>AmbulanceMainPage);

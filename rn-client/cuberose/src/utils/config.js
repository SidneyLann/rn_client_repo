// src/utils/config.js
import Config from 'react-native-config';

export default {
  API_URL: Config.API_URL || 'https://default.api.url',
  APP_NAME: Config.APP_NAME || 'cuberose',
  // Add other config values
};
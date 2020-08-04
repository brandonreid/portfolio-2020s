'use strict';

import Amplify, { Auth } from 'aws-amplify';
import awsConfig from './src/aws-exports';

Amplify.configure(awsConfig);

require('./src/assets/scss/init.scss');
require('./static/css/prismjs/theme.min.css');

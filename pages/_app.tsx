import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import '../styles/globals.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

Amplify.configure(awsconfig);

console.log('Starting: My App')

export default withAuthenticator(MyApp);

import React from 'react';
import { render } from 'react-dom';
import { useSocialLogin } from '../src';

const onSuccess = (response) => console.log('response', response);
const onFailure = (response) => console.log('error', response);

const App = () => {
    const handleGithub = useSocialLogin({
        provider: 'github',
        clientId: 'YOUR_GITHUB_CLIENT_ID',
        redirectUri: window.location.origin,
        state: 'fasdg123asdfads',
        onSuccess,
        onFailure,
    });

    const handleLinkedin = useSocialLogin({
        provider: 'linkedin',
        clientId: 'YOUR_LINKEDIN_CLIENT_ID',
        redirectUri: window.location.origin,
        onSuccess,
        onFailure,
    });

    const handleGoogle = useSocialLogin({
        provider: 'google',
        clientId: 'YOUR_GOOGLE_CLIENT_ID',
        redirectUri: window.location.origin,
        onSuccess,
        onFailure,
    });

    const handleFacebook = useSocialLogin({
        provider: 'facebook',
        clientId: 'YOUR_FACEBOOK_CLIENT_ID',
        redirectUri: window.location.origin,
        onSuccess,
        onFailure,
    });

    return (
        <div>
            <button onClick={handleGithub}>Sign in with GitHub</button>
            <button onClick={handleLinkedin}>Sign in with LinkedIn</button>
            <button onClick={handleGoogle}>Sign in with Google</button>
            <button onClick={handleFacebook}>Sign in with Facebook</button>
        </div>
    );
};

render(<App />, document.getElementById('example'));

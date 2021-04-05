# React Social Login

React component for [GitHub login](https://developer.github.com/v3/oauth/).

## Usage

```js
import React from 'react';
import { render } from 'react-dom';
import { useSocialLogin } from 'react-social-login-hook';

const onSuccess = (response) => console.log(response);
const onFailure = (response) => console.error(response);

const App = () => {
    const handleGithub = useSocialLogin({
        provider: 'github',
        clientId: YOUR_GITHUB_CLIENT_ID,
        onSuccess,
        onFailure,
    });

    const handleLinkedin = useSocialLogin({
        provider: 'linkedin',
        clientId: YOUR_LINKEDIN_CLIENT_ID,
        redirectUri: window.location.origin,
        onSuccess,
        onFailure,
    });

    const handleGoogle = useSocialLogin({
        provider: 'google',
        clientId: YOUR_GOOGLE_CLIENT_ID,
        redirectUri: window.location.origin,
        onSuccess,
        onFailure,
    });

    const handleFacebook = useSocialLogin({
        provider: 'facebook',
        clientId: YOUR_FACEBOOK_CLIENT_ID,
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
```

### Props

#### `clientId`

`{string}` _required_

Client ID for GitHub OAuth application.

#### `redirectUri`

`{string}`

Registered redirect URI for GitHub OAuth application.

#### `scope`

`{string}`

Scope for GitHub OAuth application. Defaults to `user:email`.

#### `className`

`{string}`

CSS class for the login button.

#### `childern`

`{node}`

Content for the login button.

#### `onRequest`

`{function}`

Callback for every request.

#### `onSuccess`

`{function}`

Callback for successful login. An object will be passed as an argument to the callback, e.g. `{ "code": "..." }`.

#### `onFailure`

`{function}`

Callback for errors raised during login.

## Development

```sh
$ npm start
```

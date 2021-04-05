import { useState } from 'react';

import { PopupWindow } from './popup-window';
import { generateRandomString } from './utils';
import { SocialUriTypes } from './oauth-uri';

export const useSocialLogin = ({
    provider,

    scope,
    clientId,
    redirectUri,

    onRequest = () => {},
    onSuccess = () => {},
    onFailure = () => {},
}) => {
    const [state, setState] = useState(generateRandomString());

    const getUri = SocialUriTypes[provider];

    const _handleSuccess = (data) => {
        if (!data.code) {
            return onFailure(new Error("'code' not found"));
        }

        if (data.state !== state) {
            return onFailure(new Error("'state' not equal"));
        }

        setState(generateRandomString());

        onSuccess(data);
    };

    const handleLogin = () => {
        const popup = PopupWindow.open(
            `${provider}-oauth-authorize`,
            getUri({
                scope,
                clientId,
                redirectUri,
                state: state,
            }),
            {
                height: 750,
                width: 600,
            }
        );

        onRequest();

        popup.then(_handleSuccess, onFailure);
    };

    return handleLogin;
};

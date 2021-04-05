import { toQuery } from './utils';

export const GITHUB_OAUTH_URI = 'https://github.com/login/oauth/authorize';
export const LINKEDIN_OAUTH_URI =
    'https://www.linkedin.com/oauth/v2/authorization';
export const GOOGLE_OAUTH_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
export const FACEBOOK_OAUTH_URI = 'https://www.facebook.com/v10.0/dialog/oauth';

export const getFacebookUri = ({
    scope = 'public_profile,email',
    clientId,
    redirectUri = '',
    state,
}) => {
    const search = toQuery({
        display: 'popup',
        client_id: clientId,
        scope,
        redirect_uri: redirectUri,
        state: state,
    });

    return `${FACEBOOK_OAUTH_URI}?${search}`;
};

export const getGithubUri = ({
    scope = 'user:email',
    clientId,
    redirectUri = '',
    state,
}) => {
    const search = toQuery({
        client_id: clientId,
        scope,
        redirect_uri: redirectUri,
        state: state,
    });

    return `${GITHUB_OAUTH_URI}?${search}`;
};

export const getGoogleUri = ({
    scope = 'userinfo.profile',
    clientId,
    redirectUri = '',
    state,
}) => {
    const search = toQuery({
        include_granted_scopes: true,
        response_type: 'code',
        access_type: 'offline',
        client_id: clientId,
        scope: `https://www.googleapis.com/auth/${scope}`,
        redirect_uri: redirectUri,
        state: state,
    });

    return `${GOOGLE_OAUTH_URI}?${search}`;
};

export const getLinkedInUri = ({
    scope = 'r_liteprofile',
    clientId,
    redirectUri = '',
    state,
}) => {
    const search = toQuery({
        response_type: 'code',
        client_id: clientId,
        scope: encodeURI(scope),
        redirect_uri: redirectUri,
        state: state,
    });

    return `${LINKEDIN_OAUTH_URI}?${search}`;
};

export const SocialUriTypes = {
    github: getGithubUri,
    google: getGoogleUri,
    facebook: getFacebookUri,
    linkedin: getLinkedInUri,
};

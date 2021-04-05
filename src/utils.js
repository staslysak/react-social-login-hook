export function toParams(query) {
    return query
        .replace(/^\??\//, '')
        .split('&')
        .reduce((values, param) => {
            const [key, value] = param.split('=');
            values[key] = value;
            return values;
        }, {});
}

export const toQuery = (params, separator = '&') => {
    return Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join(separator);
};

export const getPopupPositionProperties = ({ width = 600, height = 600 }) => {
    return toQuery(
        {
            left: window.screen.width / 2 - width / 2,
            top: window.screen.height / 2 - height / 2,
            width,
            height,
        },
        ','
    );
};

export const generateRandomString = (length = 20) => {
    let result = '';
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return result;
};

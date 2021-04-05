export function toParams(query) {
    const q = query.replace(/^\??\//, '');

    return q.split('&').reduce((values, param) => {
        const [key, value] = param.split('=');
        values[key] = value;
        return values;
    }, {});
}

export function toQuery(params, delimiter = '&') {
    const keys = Object.keys(params);

    return keys.reduce((str, key, index) => {
        let query = `${str}${key}=${params[key]}`;

        if (index < keys.length - 1) {
            query += delimiter;
        }

        return query;
    }, '');
}

export const getPopupPositionProperties = ({ width = 600, height = 600 }) => {
    const left = screen.width / 2 - width / 2;
    const top = screen.height / 2 - height / 2;
    return `left=${left},top=${top},width=${width},height=${height}`;
};

export const generateRandomString = (length = 20) => {
    let result = '';
    let characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
};

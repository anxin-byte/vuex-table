const devConfig = {
    httpProtocol: 'http://',
    wsProtocol: 'ws://',
    port: '9090',
    host: '127.28.101.25',
    prefix: '/api/',
    wsPath: ''
};
const testConfig = {
    httpProtocol: 'http://',
    wsProtocol: 'ws://',
    port: '9090',
    host: '127.28.101.25',
    prefix: '/api/',
    wsPath: ''
}
const prodConfig = {
    httpProtocol: 'http://',
    wsProtocol: 'ws://',
    port: window.location.port,
    host: window.location.hostname,
    prefix: '/api/',
    wsPath: ''
}
export const apiConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
const {httpProtocol, host, port, prefix, wsProtocol} = apiConfig;
export const rootURL = `${httpProtocol}${host}${port ? ':' + port : ''}`;
export const baseURL= `${rootURL}${prefix}`;
export const wsURL = `${wsProtocol}${host}${port ? ':' + port : ''}`;
// export const apiConfig

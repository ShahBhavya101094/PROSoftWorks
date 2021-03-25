export function isLogin() {
    let token = JSON.parse(localStorage.getItem('adminData'));
    if (token && token.token) {
        return true;
    }
    return false;
}

export function getHeaderWithToken() {
    let token = JSON.parse(localStorage.getItem('adminData'));
    let headers = {
        // 'content-type': 'application/json',
        'x-access-token': token.token
    };
    return headers;
};
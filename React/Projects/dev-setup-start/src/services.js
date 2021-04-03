export const fetchTry = function() {
    return fetch(`/api/test`)
    .catch (() => {
        Promise.reject({ error: 'network-error' });
    })
    .then( response => {
        if (response.ok) {
            return response.text();
        } else { 
            return PromiseRejectionEvent.jreject(response.status);
        }
    });
};
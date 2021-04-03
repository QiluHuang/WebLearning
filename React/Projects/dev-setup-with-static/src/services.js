// GET的写法
export const fetchTry = function() {
    return fetch('/api/test')
    .catch (() => {
        return Promise.reject({ error: 'network-error' });
    })
    .then( response => {
        if (response.ok) {
            return response.text();
        } else { 
            return Promise.reject(response.status);
        }
    });
};

// GET的写法
export function fetchCats() {
    return fetch('/api/catFacts')
    .catch (() => {
        return Promise.reject({ error: 'network-error' });
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        } else { 
            return Promise.reject(response.status);
        }
    });
};

// POST的写法
export function fetchCount() {
    return fetch('/api/count', {
        method: 'POST',
    })
    .catch( () => {
        return Promise.reject({ error: 'network-error' });
    })
    .then( response => {
        if (response.ok) {
            return response.json();
        } else { 
            return Promise.reject(response.status);
        }
    });
}
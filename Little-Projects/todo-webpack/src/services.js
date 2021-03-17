export function demo() {
   return fetch('/demo') 
   .then( response => {
    if(response.ok) {
        return response.json();
    }
    console.log('error!');
    });
} 
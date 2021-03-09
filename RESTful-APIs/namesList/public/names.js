(function iife() {
    const namesList = document.querySelector('.names');
    const status = document.querySelector('.status');
    const addButton = document.querySelector('.add-button');
    const addInput = document.querySelector('.add-name-input');

    // Appliation state
    let names = [];

    // translate error codes to human-friendly messages
    const errMsgs = {
        'duplicate': 'That name already exists',
        'network-error': 'There was a problem connecting to the network, try again',
    }

    // Rendering functions (update HTML)
    function renderNames( names ) {
        const html = names.map(
            (name) => 
                `<li>
                    <span class="name">${name}</span> <span class="delete data-name="${name}>X</span>
                </li>`
        ).join('');
        namesList.innerHTML = html;
    }

    function updateStatus( message ) {
        status.innerText = message;
    }


    // Used by multiple fetch() calls
    function convertError(response) {
        if(response.ok) {
            return response.json();
        }
        return response.json()
        .then( err => Promise.reject(err) );
    }


    // Adding handlers for various DOM events
    namesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const name = e.target.dataset.name;
            fetch(`/people/${name}`, {
                method: 'DELETE'
            })
            .catch( () => Promise.reject( {error: 'network-error'}) )
            .then( names => {
                renderNames(names);
                updateStatus('');
            })
            .catch( err => {
                updateStatus(errMsgs[err.error] || err.error);
            });
        }
    })

    addButton.addEventListener('click', () => {
        const name = addInput.value;
        if (name) {
            console.log(name);

            fetch(`/people/${name}`, {
                method: 'POST',
            })
            .catch( () => Promise.reject( { error: 'network-error' }) )
            .then( convertError )
            .then( names => {
                addInput.value = '';
                renderNames(names);
                updateStatus('');
            })
            .catch( err => {
                updateStatus(errMsgs[err.error] || err.error);
            });
        }
    });

    // code that runis on page load
    // (Technically it all runs on page load, but this has an immediate visible effect)
    fetch('/people/', {
        method: 'GET',
    })
        .catch( () => Promise.reject( { error: 'network-error' }) )
        .then( convertError )
        .then( names => {
        renderNames(names);
        updateStatus('');
        })
        .catch( err => {
        updateStatus(errMsgs[err.error] || err.error);
        });
})();
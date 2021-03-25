// console.log("Hello World");

(function IIFE() {
    const sendButton = document.querySelector(".send button");
    const toSend = document.querySelector(".to-send");
    if (toSend && sendButton) {
        sendButton.disabled = !toSend.value;
        toSend.addEventListener('input', (e) => {
            // if (e.target.value) {
            //     sendButton.disabled = false;
            // } else {
            //     sendButton.disabled = true;
            // }
            sendButton.disabled = !e.target.value;
        })
    }

    // Add disable login here
    //
})();
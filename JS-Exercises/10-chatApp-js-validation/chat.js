// console.log("Hello world");    // for test 

(function IIFE() {
    const sendButton = document.querySelector(".send button");
    const toSend = document.querySelector(".to-send");
    if (toSend && sendButton) {
        sendButton.disabled = !toSend.value;
        toSend.addEventListener('input', (e) => {
            sendButton.disabled = !e.target.value;
        });
    }


    // Add disable login here
    //
})();


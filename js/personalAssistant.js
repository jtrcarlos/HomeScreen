//#region Verificar browser
/**
 * Verifica se o browser é compativel (neste momento só o chrome é!!!)
 */
window.onerror = function (error) {
    if (error) {
        this.alert("This browser is not supported!!!");
    }
}
//#endregion

const greet = ["Im good", " What’s up?", "Im ok, thanks"];

//#region 
const getCommand = document.getElementById('getCommand');
const voiceFeedback = document.getElementById('voiceFeedback');
//#endregion



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


// Voice activation feedback
recognition.onstart = () => {
    console.log("voice activated");
}

recognition.onresult = (event) => {
    console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    voiceFeedback.textContent = transcript;
    readMessage(transcript);
}

getCommand.addEventListener('click', () => {
    recognition.start();
});

/**
 * Reads mic input and reads outloud response
 * @param {*} message 
 */
function readMessage(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I didn't understand, do it again";

    if (message.includes('how are you')) {
        const finalSpeech = greet[Math.floor(Math.random() * greet.length)];
        speech.text = finalSpeech;
    }

    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}


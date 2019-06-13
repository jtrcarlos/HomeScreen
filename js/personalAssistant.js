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

//#region 
const getCommand = document.querySelector('.getCommand');
const voiceFeedback = document.querySelector('.voiceFeedback');
//#endregion

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


// Voice activation feedback
recognition.onstart = () => {
    console.log("voice activated");
}

recognition.onresult = (event) => {
    const current = event.resultIndex;
}


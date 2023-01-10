const textArea = document.querySelector('#normal-text');
const encryptButton = document.querySelector('#encrypt-btn');
const decryptButton = document.querySelector('#decrypt-btn');
const encryptedText = document.querySelector('#encrypted-text');
const copyButton = document.querySelector('#copy-btn');
const blockHidden = document.querySelector('#block-hidden');
const regex = /^[a-z]+$/;
const lowerText = document.querySelector('#text-lower');

let result;

function encryptText() {
    encryptLetter(textArea.value.trim());
}

encryptButton.addEventListener('click', encryptText);

function encryptLetter(message) {
    
    if(message == ''){
        alert('¡Ups! No has escrito nada')
        return;
    }

    if(regex.test(message)) {
        lowerText.style.display = 'none';
    } else {
        lowerText.style.display = 'block';
        return;
    } 

    const wordArray = message.split("").map((m) => {

        switch (m) {
            case 'a':
                return 'ai';

            case 'e':
                return 'enter';

            case 'i':
                return 'imes';

            case 'o':
                return 'ober';
            
            case 'u':
                return 'ufat';
            
            default:
                return m
          }

    })

    result = wordArray.join('');
    encryptedText.innerHTML = result;
    copyButton.style.display = 'block'
    blockHidden.style.display = 'none';

}

function decryptText() {
    
    decryptLetter(textArea.value.trim());
}

decryptButton.addEventListener('click', decryptText)

let decryptObj = {
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"
};

function decryptLetter(message) {

    if(message == ''){
        alert('¡Ups! No has escrito nada')
        return;
    }

    if(regex.test(message)) {
        lowerText.style.display = 'none';
    } else {
        lowerText.style.display = 'block';
        return;
    }


    let resultDecrypt = message.replace(/ai|enter|imes|ober|ufat/gi, function(letter){ 
    return decryptObj[letter]});

    result = resultDecrypt;
    encryptedText.innerHTML = result;
    copyButton.style.display = 'block'
    blockHidden.style.display = 'none';
}

function copyBoard() {
    console.log(result);
    navigator.clipboard.writeText(result);
    alert('Se ha copiado el texto');
}

copyButton.addEventListener('click', copyBoard);

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElementById (elementId){
    const element =document.getElementById(elementId);
    const element.classList.remove('hidden');
}

function setBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}


function removeBackgroundColorById(elementId){
   const element = document. getElementById(elementId);
   element.classList.add('bg-orange-400');
}

function getARandomAlphabet(elementId){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabat = alphabets[index]
    return alphabat;
}
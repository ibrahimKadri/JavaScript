
let inputTextArea = document.getElementById('input-textarea'),
    characterCount = document.getElementById('char-count'),
    wordCount = document.getElementById('word-count');

// console.log(inputTextArea,characterCount,wordCount);

inputTextArea.addEventListener('input',()=>{
    //counts no of ch
    characterCount.textContent=inputTextArea.value.length;
    //remove spaces
    let txt = inputTextArea.value.trim();
    // console.log(txt);
    /* split the text at spaces into array of substring
        filter the empty string
        count the length of this array */
    wordCount.textContent=txt.split(/\s+/).filter((item)=>item).length;
})
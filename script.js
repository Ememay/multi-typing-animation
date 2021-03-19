/* 
    0 : create the global typing animation function , 0-1 run this
    1 : build the typing text that we wanna show , 1-1 : get neccesery elemet
    2 : set global varibale("countindex" is for going after each words Letter , "wordindex" is for going to next word we have)
    3 : when windows load the main function run
    4 : check the variables number (4-1 : when count of a word end, next word will type, 4-2 : when numbers of the word end, it will be reapet all again infinite)
*/
// 0
function typinganimationfunction() {
    // 1
    const typingoptions = ['مستقل', ' متفکر', ' باهوش', ' زرنگ '];
    // 1-1
    const parenttypingarea = document.querySelector('.parenttypingarea');
    const typingarea = parenttypingarea.querySelector('span');
    // 2
    let countindex = 0;
    let wordindex = 0;
    // 3
    window.addEventListener('load', () => {
        typingTime = setInterval(typinganimation, 500);

        function typinganimation() {
            // 4
            let currentword = typingoptions[wordindex];
            // 4-1
            if (countindex > currentword.length) {
                wordindex++;
                countindex = 0;
            } else {
                let currenteachword = currentword.slice(0, ++countindex);
                typingarea.innerHTML = currenteachword;
            }
            // 4-2
            if (wordindex === typingoptions.length) {
                wordindex = 0;
                countindex = 0;
            }
        }
    })
}
// 0-1
typinganimationfunction()
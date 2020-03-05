function decode(expr) {
    const morzeMap = {
        '.-':     'a',
        '-...':   'b',
        '-.-.':   'c',
        '-..':    'd',
        '.':      'e',
        '..-.':   'f',
        '--.':    'g',
        '....':   'h',
        '..':     'i',
        '.---':   'j',
        '-.-':    'k',
        '.-..':   'l',
        '--':     'm',
        '-.':     'n',
        '---':    'o',
        '.--.':   'p',
        '--.-':   'q',
        '.-.':    'r',
        '...':    's',
        '-':      't',
        '..-':    'u',
        '...-':   'v',
        '.--':    'w',
        '-..-':   'x',
        '-.--':   'y',
        '--..':   'z',
        '.----':  '1',
        '..---':  '2',
        '...--':  '3',
        '....-':  '4',
        '.....':  '5',
        '-....':  '6',
        '--...':  '7',
        '---..':  '8',
        '----.':  '9',
        '-----':  '0',
    };

    return expr.split('*'.repeat(10))
        .map( word =>
            word.split('')
                .reduce( (acc, letter, index) => {
                    const subArrayIndex = Math.floor(index / 10);
                    if (subArrayIndex in acc) acc[subArrayIndex] += letter
                    else acc[subArrayIndex] = letter
                    return acc;
                }, [])
                .map( letter => letter.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, ''))
                .map( letter => morzeMap[letter]).join('')

        ).join(' ')
  }

module.exports = {
    decode
}



function generatePassword() {
    for (var i = 0; i < charLength; i++) {
        if (upCase === true) {
            writeUpperCase();
            charLength - 1;
        }
        else if (upCase === false) {
        };
        if (lowCase === true) {
            writeLowerCase();
            charLength - 1;
        }
        else if (lowCase === false) {
        };
        if (numb === true) {
            writeRanNumber();
            charLength - 1;
        }
        else if (numb === false) {
        };
        if (sym === true) {
            writeRanSymbol();
            charLength - 1;
        }
        else if (sym === false) {
        };  
    }



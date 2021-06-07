decodeMorse = function (morseCode) {
  let text = "";
  morseCode.split("   ").forEach((word) => {
    word.split(" ").forEach((letter) => {
      text += MORSE_CODE[letter];
    });
    text += " ";
  });
};

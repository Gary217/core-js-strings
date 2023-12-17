function encodeToRot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const caesar = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let result = '';
    for (let i = 0; i < alphabet.length; i += 1) {
      if (str[i] === alphabet[i]) {
        str[i] = caesar[i]
      }
    }
  
  }

encodeToRot13('hello') //'hello' => 'uryyb'
encodeToRot13('Why did the chicken cross the road?') //'Jul qvq gur puvpxra pebff gur ebnq?'
encodeToRot13('Gb trg gb gur bgure fvqr!') //'To get to the other side!'
encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz') //'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
document.getElementById('button').addEventListener('click', () => {
    let Hex_number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let HexCode = '';
    for(i = 0; i < 6; i++){
        let randomCode = Math.floor(Math.random() * Hex_number.length);
        HexCode += Hex_number[randomCode];
        document.getElementById('hexCode').innerHTML = HexCode;
        document.getElementById('body').style.backgroundColor = `#${HexCode}`;
    }
})
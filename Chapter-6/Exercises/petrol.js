function computePetrol(){
    const pricePL = parseFloat(document.getElementById('price').value);
    const outputBox = document.getElementById('output');
    const litresPurchased = 50 / pricePL; 
    outputBox.innerText = ` ${litresPurchased.toFixed(2)} L`;
}

console.log(document);
document.getElementById('priceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    
    const pricePerKm = 0.21;
    let price = km * pricePerKm;
    let discount = 0;
    
    if (age < 18) {
        discount = 20;
    } else if (age > 65) {
        discount = 40;
    }
    
    const finalPrice = price - (price * discount / 100);
    
    document.getElementById('finalPrice').textContent = finalPrice.toFixed(2);
    
    document.getElementById('result').style.display = 'block';
});

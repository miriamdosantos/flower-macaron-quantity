document.addEventListener('DOMContentLoaded', function() {
    const quantitySelectors = document.querySelectorAll('.custom-quantity-selector');
    const productPriceElement = document.querySelector('.productView-price .price--withoutTax');
    let basePrice = parseFloat(productPriceElement.textContent.replace('€', '').replace(',', '.'));

    const prices = {
        'decorative-florals': 1.50,
        'decorative-macarons': 2.00
    };

    function updateTotals() {
        let additionalCost = 0;
        quantitySelectors.forEach(selector => {
            const quantity = parseInt(selector.querySelector('.quantity-input').value);
            const option = selector.dataset.option;
            const price = prices[option];
            const total = quantity * price;
            
            selector.querySelector('.total-price').textContent = `Total: €${total.toFixed(2)}`;
            additionalCost += total;
        });

        const finalPrice = basePrice + additionalCost;
        productPriceElement.textContent = `€${finalPrice.toFixed(2)}`;
    }

    quantitySelectors.forEach(selector => {
        const minusBtn = selector.querySelector('.minus');
        const plusBtn = selector.querySelector('.plus');
        const input = selector.querySelector('.quantity-input');

        minusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (input.value > 0) {
                input.value = parseInt(input.value) - 1;
                updateTotals();
            }
        });

        plusBtn.addEventListener('click', (e) => {
            e.preventDefault();
            input.value = parseInt(input.value) + 1;
            updateTotals();
        });

        input.addEventListener('change', updateTotals);
    });
});

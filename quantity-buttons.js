document.addEventListener("DOMContentLoaded", function() {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');

    incrementButtons.forEach(button => {
        button.addEventListener('click', function() {
            const inputField = this.parentElement.querySelector('input');
            inputField.value = parseInt(inputField.value) + 1;
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', function() {
            const inputField = this.parentElement.querySelector('input');
            if (parseInt(inputField.value) > 1) {
                inputField.value = parseInt(inputField.value) - 1;
            }
        });
    });
});

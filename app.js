document.addEventListener("DOMContentLoaded", function() {
    let Display = document.getElementById('Display');

    let safeeval = (s) => {
        try {
            // Replace all occurrences of 'x' with '*'
            s = s.replace(/x/g, '*');

            let result = eval(s);
            // if (typeof result === 'number') {
            //     result = Math.round(result * 1000) / 1000; // Round to 3 decimal places
            // }
            return result;
        } catch (error) {
            Display.value = "error";
        }
    }

    let buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            if (button.innerHTML == '.' || button.innerHTML == 'x' || button.innerHTML == '/' ) {
                Display.value += button.innerHTML;
            } else if (Display.value === '0' && (button.innerHTML !== '.' && button.innerHTML !== '0')) {
                Display.value = button.innerHTML;
            } else {
                Display.value += button.innerHTML;
            }
        });
    });

    let reset = document.getElementById('default');
    reset.addEventListener("click", function () {
        Display.value = "0";
    });

    let ans = document.getElementById("ans");
    ans.addEventListener("click", function () {
        let exp = Display.value;
        Display.value = safeeval(exp);
    });

    let delet = document.getElementById('delete');
    delet.addEventListener('click', function () {
        let len = Display.value.length;
        if (Display.value == "undefined") {
            Display.value = '';
        }
        if (len == 1) Display.value = '0';
        else if (len > 1) {
            Display.value = Display.value.slice(0, len - 1);
        }
    });
});

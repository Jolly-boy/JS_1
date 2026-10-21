
function createCounter(init) {
    let current = init;

    return {
        increment: function() {
            current++;
            return current;
        },

        decrement: function() {
            current--;
            return current;
        },

        reset: function() {
            current = init;
            return current;
        }
    };
}

let counter;

const display = document.getElementById("display");

document.getElementById("startCounter").addEventListener("click", function() {
    const init = Number(document.getElementById("initialValue").value);

    counter = createCounter(init);
    display.textContent = "Current Value: " + init;
});

document.getElementById("increment").addEventListener("click", function() {
    if (!counter) return;

    display.textContent = "Current Value: " + counter.increment();
});

document.getElementById("decrement").addEventListener("click", function() {
    if (!counter) return;

    display.textContent = "Current Value: " + counter.decrement();
});

document.getElementById("reset").addEventListener("click", function() {
    if (!counter) return;

    display.textContent = "Current Value: " + counter.reset();
});
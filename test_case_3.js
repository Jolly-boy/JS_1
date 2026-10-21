function createCounter(n) {
    let count = n;

    return function() {
        return count++;
    };
}

let counter;

document.getElementById("startCounter").addEventListener("click", function() {
    const n = Number(document.getElementById("initialValue").value);

    counter = createCounter(n);

    document.getElementById("result").textContent =
        "Current count: " + counter();

    document.getElementById("incrementCounter").disabled = false;
});

document.getElementById("incrementCounter").addEventListener("click", function() {
    document.getElementById("result").textContent =
        "Current count: " + counter();
});
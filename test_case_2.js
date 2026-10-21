
function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

document.getElementById("runTest").addEventListener("click", function() {
    const hello = createHelloWorld();
    const output = hello();

    document.getElementById("result").textContent = output;

    console.log(output);
});
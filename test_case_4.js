
function expect(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            }

            throw new Error("Not Equal");
        },

        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            }

            throw new Error("Equal");
        }
    };
}

// Convert input strings to numbers when appropriate
function getValue(id) {
    const value = document.getElementById(id).value.trim();

    if (value !== "" && !isNaN(value)) {
        return Number(value);
    }

    return value;
}

function runTest(method) {
    const val1 = getValue("value1");
    const val2 = getValue("value2");
    const result = document.getElementById("result");

    try {
        const test = expect(val1);
        const output = test[method](val2);

        result.textContent = "Test passed: " + output;
    } catch (error) {
        result.textContent = "Test failed: " + error.message;
    }
}

document.getElementById("testToBe").addEventListener("click", function() {
    runTest("toBe");
});

document.getElementById("testNotToBe").addEventListener("click", function() {
    runTest("notToBe");
});
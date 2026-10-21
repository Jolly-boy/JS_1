var createHelloWorld = function() {
    return function() {
        return "Hello World";
    };
};

module.exports = createHelloWorld;
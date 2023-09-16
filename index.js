function receivesAFunction(callback){
    return callback();
}

receivesAFunction(function () { return 'Spy';});

function returnsANamedFunction() {
    return function add() {
    };
}

function returnsAnAnonymousFunction() {
    return () => {
        statements
      };
}
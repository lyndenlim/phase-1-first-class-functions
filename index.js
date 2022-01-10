function receivesAFunction(spy){
    spy();
};

function returnsANamedFunction(){
    let fn = function Named (){}
    return fn;
};

function returnsAnAnonymousFunction(){
    return (function(){});
};
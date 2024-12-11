// study function

const study =(callback) => {

    console.log("studying has started");

    setTimeout(()=>{
        console.log("studying is completed");
        callback();

    },3000);
};

// play function

const play = (cb) =>{

    console.log ("playing has started");

    setTimeout(()=>{

        console.log("playing is completed");

        cb();
    },2000);
};


// eat function

const eat =(callback) =>{

    console.log("Eating has started");

    setTimeout(() =>{

        console.log("Eating is completed");
        callback();

    },3000);
};

//execute the functions

study(()=> {
    play(() =>{

        eat(()=>{
            console.log("Thank you");
        });
    });

});

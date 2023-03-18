function isEven(target) {
    let value;

        if (target < 0) {
            return "Please don't give me a negative value, it doesn't sit well with my stomach. :)"
        } else if(target === 0) {
            console.log("step1")
            return value = true;
        } else if(target === 1) {
            console.log("step2")
            return value = false;
        } else {
            console.log(target, "step3");
            return(isEven(target - 2));
        }
    }

console.log(isEven(-1), "Hello");
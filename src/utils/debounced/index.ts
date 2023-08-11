
let timeoutID: any;
const Debounce = (func: any, delay: number) => {

    const debounced = (...args: any) => {
        clearTimeout(timeoutID);
        timeoutID = window.setTimeout(() => func(...args), delay);
    };

    return debounced;
}

export default Debounce
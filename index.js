let count = 0;


function fetchData() {
    console.log("Fetching data : ", ++count);
}


function optimise(cb, delay) {
    let timer = 0; // hash
    return () => {
        clearTimeout(timer);
        timer = setTimeout(cb, delay); // 500
    };
}
const optimisedFetchData = optimise(fetchData, 1000);
cx
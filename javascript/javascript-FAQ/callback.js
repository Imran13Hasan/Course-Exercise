function explaining_callback(name, age, task) {
    console.log('Hello', name);
    console.log('Is your age', age, '?');
    task();
}

function washHand(){
    console.log("wash your hand with Keya soap")
}

function takeShower() {
    console.log("take a shower with Kosko soap");
}

function praySalah() {
    console.log("go and take the shower fast and perform Zuhor Salah");
}

explaining_callback('Salimuddin', 18, washHand);
explaining_callback('Kalimuddin', 21, takeShower);
explaining_callback('robimuddin', 23, praySalah);
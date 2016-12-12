function fact(number) {
    if (number <= 0) {
        return 1;
    } else {
        return number*fact(number-1);
    }
}

console.log(fact(process.argv[2]));

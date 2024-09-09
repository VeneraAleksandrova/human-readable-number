module.exports = function toReadable(number) {
    let arr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let decade = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return arr[number];
    }
    if (number >= 20 && number < 100) {
        return number % 10 === 0
            ? `${decade[number / 10 - 2]}`
            : `${decade[Math.trunc(number / 10) - 2]} ${
                  arr[+String(number).slice(-1)]
              }`;
    } else {
        return number % 100 === 0
            ? `${arr[number / 100]} hundred`
            : +String(number).slice(-2) > 0 && +String(number).slice(-2) < 20
            ? `${arr[Math.trunc(number / 100)]} hundred ${
                  arr[+String(number).slice(-2)]
              }`
            : number % 10 === 0
            ? `${arr[Math.trunc(number / 100)]} hundred ${
                  decade[+String(number / 10).slice(-1) - 2]
              }`
            : `${arr[Math.trunc(number / 100)]} hundred ${
                  decade[+String(number / 100).slice(-2, -1) - 2]
              } ${arr[+String(number / 100).slice(-1)]}`;
    }
};

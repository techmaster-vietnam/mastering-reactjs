function divideByPromise(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (b != 0) {
            resolve(a / b);
        } else {
            reject("can not divide ZERO");
        }
    })
}

async function sumAndDeivide(a: number, b: number, c: number) {
    const sumAB = a + b;
    const answer = await divideByPromise(sumAB, c);
    return answer;
}

async function main() {
    const sumAndDeivideAnswer = await sumAndDeivide(2, 4, 2);
    console.log("sumAndDeivideAnswer:", sumAndDeivideAnswer);
    await sumAndDeivide(2, 4, 0);
}

main();
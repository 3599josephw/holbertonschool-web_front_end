function countPrimeNumbers() {
  var sieve = [], i, j, primes = [];
    for (i = 2; i <= 100; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= 100; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes.length;
}

const t0 = performance.now();

for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`)

process.on("message", (message) => {
  const jsonRes = isPrime(message.number);
  process.send(jsonRes);
  process.exit(1);
});

function isPrime(num) {
  let start = new Date();
  let end = new Date();
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      end = new Date();
      isPrime = false;
      break;
    }
  }

  if (isPrime) end = new Date();

  return {
    num,
    isPrime,
    time: start.getTime() - end.getTime(),
  };
}

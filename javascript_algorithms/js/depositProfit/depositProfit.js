deposit = 200;
rate = 12;
threshold = 4000;

function depositProfit( deposit, rate, threshold ) {
  let year = 0;

  while( threshold > deposit ) {
    deposit += deposit * ( rate / 100 );
    year++;
  }

  return year;
}

console.log(depositProfit(deposit, rate, threshold))

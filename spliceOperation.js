const months = ['Jan','march','April','June','July'];

months.push('Dec');
console.log(months);

months.splice(months.length,0,'Dec');
console.log(months);

months.splice(months.indexOf('march'),1,'March');
console.log(months);

months.splice(months.indexOf('June'),1);
console.log(months);
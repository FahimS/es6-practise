const ages = [12, 14, 16, 17, 18];
const ages2 = [21, 32, 23, 15];
const ages3 = [22, 33, 24, 19];

const allAges = ages.concat(ages2).concat(ages3);

const allAges2 = [...ages, ...ages2, ...ages3];

console.log(allAges);
console.log(allAges2);

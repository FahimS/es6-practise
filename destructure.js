const person = { name: 'Fahim Shahriar', age: 25, job: 'programming-hero', gfName: 'Ema Watson', address: 'Dhaka', phone: '01928363', friends: ['Sjaid', 'Momin', 'Taifur'] }

// console.log(person.gfName);

// const gfName=person.gfName;

// const phone=person.phone;
const { phone, gfName, job } = person;


console.log(gfName, phone, job);





///...........>Array

const friends = ['Sajid', 'Momin', 'Taifur', 'Sopto'];
const [first, ...restFriends] = friends;
console.log(restFriends);
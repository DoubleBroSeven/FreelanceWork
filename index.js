const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let index = 0; 
let totalDisplayedPrice = 0; 
let displayedCount = 0;

const freelancerList = document.querySelector('#freelancer-list');

const intervalId = setInterval(() => {
  if (index < freelancers.length) {
    const freelancer = freelancers[index];
    const li = document.createElement('li');
    li.innerText = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
    
    freelancerList.append(li); 

    totalDisplayedPrice += freelancer.price;
    displayedCount++;

    if (displayedCount > 0) {
      const average = (totalDisplayedPrice / displayedCount).toFixed(2);
      const avgPriceElement = document.querySelector('#average-price');
      avgPriceElement.innerText = `Average Starting Price: $${average}`;
    }

    index++; 
  }
}, 3000);


function applyForVisa(document) {
  console.log('Apply for visa...');
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const id = Math.random();
      id > 0 ? resolve(id) : reject('Visa declined!');
    }, 2000);
  });
  return promise;
}

function buyTickets(visaId) {
  console.log(`Buying tickets with visa ${visaId}...`);
  return new Promise(function (resolve, reject) {
    Math.random() > 0.5 ? resolve(123) : reject('Tickets unavailable!');
  });
}

function bookHotel(ticketDate) {
  console.log(`Hotel booked for date ${ticketDate}...`);
}

applyForVisa(123)
  .then(buyTickets)
  .then(bookHotel)
  .catch(console.error);

function initGreeting(name, greeting) {
  return function(time) {
    return `${name} ${greeting}. The time is: ${time}`;
  };
}

const eveningGeorge = initGreeting("George", "Evening");

const time = new Date(Date.now());
//getHours and getMinutes are methods that belong to 'Date'
console.log(eveningGeorge(`${time.getHours()}:${time.getMinutes()}`));

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let meridian = hours >= 12 ? 'PM' : 'AM';
  
  // Convert hours from 24-hour to 12-hour format
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }
  
  // Pad minutes with a leading zero if necessary
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  
  return hours + ':' + minutes + ' ' + meridian;
}

// Example usage:
const now = new Date();
console.log(formatTime(now)); // Outputs something like "3:30 PM"

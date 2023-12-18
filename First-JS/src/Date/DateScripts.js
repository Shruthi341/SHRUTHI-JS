const currentDate = new Date();
console.log("Current Date :",currentDate);

//Create with Specific Date
const specificDate = new Date('2024-01-01');
console.log("Created JAN 1 2024 :",specificDate)

// With Year, Month (0-indexed), and Day:
const specificDateCreate = new Date(2023, 0, 15); // January 15, 2023
console.log(specificDateCreate);
console.log("Created JAN 15 2023 : ", specificDateCreate.toLocaleDateString());

//With Year, Month (0-indexed), Day, Hour, Minute, Second, Millisecond:
const specificDateTimeSeconds = new Date(2023, 0, 15, 12, 30, 0, 0); // January 15, 2023, 12:30:00
console.log(specificDateTimeSeconds);


//Date Arthimetic
const todayDate = new Date();
const futureDate = new Date();

// Add 3 days to the current date
futureDate.setDate(todayDate.getDate() + 3);

console.log(todayDate);
console.log(futureDate);

//Timestamp
const today = new Date();
const timestamp = today.getTime();

console.log(timestamp);



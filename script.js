//циклы

// const friends = ["masha", "john", "mary", "asan", "pete", "tashken"];

// let i = 0;
// while (i < friends.length) {
//   console.log(friends[i].toUpperCase());
//   document.write(friends[i].toUpperCase() + "<br>");
//   i++;
// }

// for (let i = 0; i < friends.length; i++) {
//   if (friends[i] === "pete") {
//     continue;
//   } else {
//     console.log(friends[i]);
//   }
// }

// for (let i = 1; i <= 30; i++) {
//   if (i % 2 === 0) {
//     if (i === 10) {
//       //10 propuskaem
//       continue;
//     } else {
//       console.log(i);
//       document.write(i + "+");
//     }
//   }
// }

// let i = 12;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

const friends = ["masha", "john", "mary", "asan", "pete", "tashken"];

/*friends.forEach(showFriends);

function showFriends(name) {
  console.log(name);
}
// showFriends(friends[2]);*/
friends.forEach((i) => console.log(i)); // vetod kollekcia

// foreach();
// map();
// reduce();
// filter(); часто используется в продакшне

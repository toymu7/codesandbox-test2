// const myProfile = {
//   name:"じゃけえ",
//   age:28,
// };

// const {name, age} = myProfile;
// const message1 = `名前は${name}です。年齢は${age}です`;

// console.log(message1);

// const myProfile = ["じゃけえ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// // 分割代入
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // 配列をコピーして新たな配列を作成する
// // →参照先は一致しない
// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4,...arr5 ];
// // console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4);

const nameArr = ["田中", "山田", "じゃけえ"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "じゃけえ"){
//     return name;
//   }else{
//     return name + "さん";
//   }
// });

// console.log(newNameArr);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数字入力して";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100超えてる" : "許容範囲やで";
// };

// console.log(checkSum(389, 90));

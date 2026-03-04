const username = "";
if (username === "") {
    console.log("사용자명을 입력하세요");
}

const num = 11;
if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

const temp = 8;
if (temp >= 30) {
    console.log("무더위");
} else if (temp >= 10) {
    console.log("보통");
} else if (temp >= 0) {
    console.log("쌀쌀");
} else {
    console.log("한파");
}

const pwd = "abc123";
if (!pwd) {
    console.log("비밀번호 없음");
} else {
    if (pwd.length < 8) {
        console.log("너무 짧음");
    } else {
        console.log("사용 가능");
    }
}


const signal = "yellow";
switch (signal) {
    case "red":
        console.log("정지");
        break;
    case "yellow":
        console.log("주의");
        break;
    case "green":
        console.log("진행");
        break;
    default:
        console.log("알 수 없음");
}

const month = 4;
let season = "";
switch (month) {
    case 12:
    case 1:
    case 2:
        season = "겨울"; break;
    case 3:
    case 4:
    case 5:
        season = "봄"; break;
    case 6:
    case 7:
    case 8:
        season = "여름"; break;
    default:
        season = "가을";
}
console.log(season);

const isLoggedIn = false;
const msg = isLoggedIn ? "환영합니다" : "로그인이 필요합니다.";
console.log(msg);


const price = 42000;
let fee = "";
if (price >= 50000) {
    fee = "무료배송";
} else if (price >= 30000) {
    fee = "배송비 2500원";
} else {
    fee = "배송비 3000원";
}
console.log(fee);


let i = 0;
while (i < 3) {
    console.log("학습중...");
    i++;
}


let n = 5;
while (n > 0) {
    console.log(n);
    n--;
}


for (let k = 1; k <= 15; k++) {
    if (k % 3 === 0) {
        console.log(k);
    }
}


const word = "mango";
for (let x = 0; x < word.length; x++) {
    console.log(word.charAt(x));
}


let sum = 0;
for (let t = 1; t <= 10; t++) {
    sum += t
}
console.log(sum);


for (let r = 1; r <= 4; r++) {
    let stars = "";
    for (let c = 1; c <= r; c++) {
        stars += "*";
    }
    console.log(stars);
}


for (let i = 1; i <= 100; i++) {
    if (i % 9 === 0) {
        console.log(i);
        break;
    }
}


let total = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0) {
        continue;
    }
    total += i;
}
console.log(total);
# JavaScript Self-Study — Tổng hợp bài học

> Ghi chú tổng hợp các bài đã hoàn thành, theo thứ tự curriculum. Copy phần nào cần vào Notion.

---

## Section 1 — Foundations

### 1. JS Output

Bài này là về **4 cách JavaScript "xuất" dữ liệu ra ngoài**. Mỗi cách có một mục đích khác nhau, không thay thế cho nhau được.

**1. `innerHTML`** — ghi đè nội dung HTML của một phần tử đã có sẵn trên trang:

```javascript
document.getElementById("demo").innerHTML = "<h2>What is it???</h2>";
```

👉 Đây là cách phổ biến nhất để "vẽ" dữ liệu lên giao diện.

**2. `document.write()`** — ghi trực tiếp vào output của trang, ngay tại vị trí script chạy:

```javascript
document.write(5 + 6); // 11
```

⚠️ Lưu ý quan trọng: nếu gọi `document.write()` **sau khi trang đã load xong**, nó sẽ **xoá sạch toàn bộ trang** và ghi đè lên. Vì vậy trong thực tế gần như không dùng cách này ngoài mục đích debug nhanh.

**3. `window.alert()`** — bật popup hộp thoại cảnh báo:

```javascript
window.alert("This is my 1st!");
```

Chặn luồng thực thi (blocking) cho tới khi người dùng bấm OK.

**4. `console.log()`** — ghi vào console của trình duyệt (F12 → tab Console):

```javascript
console.log(100 + 101); // 201
```

👉 Đây là cách **dùng nhiều nhất khi debug**, vì nó không làm gián đoạn hay phá hỏng giao diện.

### Tóm tắt

| Cách | Ghi ra đâu | Dùng khi nào |
|---|---|---|
| `innerHTML` | Một phần tử HTML cụ thể | Hiển thị dữ liệu cho người dùng |
| `document.write()` | Toàn bộ trang | Gần như không dùng (demo/debug nhanh) |
| `window.alert()` | Popup | Cảnh báo cần người dùng xác nhận |
| `console.log()` | Console trình duyệt | Debug |

---

### 2. JS Syntax

Bài này ôn 4 khối xây dựng cơ bản nhất của cú pháp JS.

**1. Statements (câu lệnh)** — mỗi câu lệnh kết thúc bằng dấu `;`, nhiều câu lệnh có thể nối tiếp nhau để tính ra một giá trị:

```javascript
let a = 5;
let b = 6;
let result = (a + b) * 2; // 22
```

**2. Comments (chú thích)** — có 2 loại:

```javascript
// Chú thích một dòng

/* Chú thích
   nhiều dòng */
```

Chú thích **không tạo ra output** — chỉ để người đọc code hiểu, JS engine bỏ qua hoàn toàn.

**3. Variables (`let` / `const`)**:

```javascript
let name = "Vân";
name = "Meng";       // let → được phép gán lại

const age = 36;
// age = 40;         // ❌ lỗi — const không được gán lại
```

👉 Quy tắc chung: **dùng `const` mặc định**, chỉ chuyển sang `let` khi biết chắc sẽ cần gán lại giá trị.

**4. Types (`typeof`)** — kiểm tra kiểu dữ liệu của một giá trị:

```javascript
typeof 42;       // "number"
typeof "Hello";   // "string"
typeof false;     // "boolean"
```

---

## Section 2 — Control Flow

### 3. JS Operators

**1. Arithmetic (toán tử số học)**: `+ - * / %`

```javascript
let a = 5, b = 3;
a + b;  // 8
a - b;  // 2
a * b;  // 15
a / b;  // 1.666...
a % b;  // 2  (phần dư của phép chia)
```

**2. Assignment (toán tử gán rút gọn)**: `+= -= *= /=`

```javascript
let a = 10;
a += 5;  // a = a + 5 → 15
a -= 5;  // a = a - 5 → 10
a *= 5;  // a = a * 5 → 50
a /= 5;  // a = a / 5 → 10
```

⚠️ Điểm dễ nhầm: các phép này **thay đổi luôn giá trị của biến gốc** (không tạo biến mới), nên nếu chạy tuần tự trên cùng một biến `a`, mỗi bước sẽ dùng kết quả của bước trước — không phải luôn tính từ giá trị ban đầu.

**3. Comparisons (so sánh)** — điểm quan trọng nhất là phân biệt `==` và `===`:

```javascript
let x = 5;
let y = "5";

x == y;   // true  — chỉ so sánh giá trị, tự động ép kiểu
x === y;  // false — so sánh cả giá trị lẫn kiểu dữ liệu (number ≠ string)
```

👉 **Luôn ưu tiên `===` / `!==`** trong code thực tế để tránh bug do JS tự ép kiểu ngầm.

**4. Conditional (ternary)** — viết gọn cho if/else chỉ trả về giá trị:

```javascript
let age = 18;
let result = (age >= 18) ? "You can drive" : "You cannot drive";
```

Cú pháp: `điều_kiện ? giá_trị_nếu_true : giá_trị_nếu_false`

---

### 4. JS If Conditions

**1. If / Else If / Else** — rẽ nhánh theo điều kiện, JS kiểm tra từ trên xuống, dừng lại ở điều kiện đầu tiên đúng:

```javascript
let temperature = 30;
if (temperature > 30) {
  // nóng
} else if (temperature < 10) {
  // lạnh
} else {
  // vừa phải — chạy vì 30 không > 30 và không < 10
}
```

**2. Switch** — thay thế cho chuỗi if/else dài khi so sánh **một biến với nhiều giá trị cụ thể**:

```javascript
switch (new Date().getDate()) {
  case 1:
    // ...
    break;
  case 2:
    // ...
    break;
  default:
    // không khớp case nào
}
```

⚠️ Đừng quên `break;` sau mỗi `case` — thiếu nó JS sẽ "rơi" (fall through) xuống case tiếp theo luôn.

**3. Logical operators (`&&`, `||`, `!`)** — kết hợp nhiều điều kiện:

```javascript
let age = 40;
let budget = "10 tỷ";

if (age >= 30 && budget === "10 tỷ") {
  // chỉ chạy khi CẢ HAI điều kiện đều true
}
```

- `&&` (and) — tất cả phải true
- `||` (or) — chỉ cần một điều kiện true
- `!` (not) — đảo ngược true/false

---

### 5. JS Loops

**1. For loop** — dùng khi biết trước số lần lặp (hoặc lặp qua một danh sách có độ dài xác định):

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// sum = 15
```

Cấu trúc: `for (khởi_tạo; điều_kiện_dừng; bước_nhảy)`

**2. While loop** — dùng khi số lần lặp **không biết trước**, chỉ biết điều kiện dừng:

```javascript
let i = 0;
while (i < 10) {
  // ...
  i++;
}
```

⚠️ Luôn phải có bước tăng biến điều kiện (`i++`) bên trong, nếu không sẽ bị **vòng lặp vô hạn**.

**3. Break / Continue**:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 2) { continue; } // bỏ qua lần lặp này, nhảy sang i tiếp theo
  if (i === 5) { break; }    // thoát khỏi vòng lặp hoàn toàn
  // ...
}
// kết quả: chạy với i = 0, 1, 3, 4 (bỏ qua 2, dừng trước khi tới 5)
```

- `continue` → skip lần lặp hiện tại, vòng lặp vẫn tiếp tục
- `break` → thoát khỏi vòng lặp ngay lập tức, không chạy các lần lặp còn lại

---

## Section 3 — Core Data

### 6. JS Strings

**1. Template literals** — dùng dấu backtick `` ` `` thay vì nháy đơn/kép, cho phép chèn biến trực tiếp bằng `${}`:

```javascript
let name = "Vân";
let text = `Hello ${name}`;
```

👉 Ưu điểm so với nối chuỗi `"Hello " + name`: dễ đọc hơn, đặc biệt khi chèn nhiều biến hoặc có xuống dòng.

**2. String methods** — các phương thức có sẵn để biến đổi chuỗi, có thể **nối chuỗi (chain)** liên tiếp:

```javascript
let text = "Hello world!";
text.toUpperCase().slice(0, 5); // "HELLO"
```

- `toUpperCase()` / `toLowerCase()` — đổi hoa/thường
- `slice(start, end)` — cắt một đoạn của chuỗi (end không bao gồm)
- `trim()`, `replace()` — các method phổ biến khác

**3. String search** — kiểm tra một chuỗi con có tồn tại trong chuỗi lớn không:

```javascript
let text = "Today is a good day";
text.includes("good day"); // true
```

Các method tương tự: `indexOf()` (trả về vị trí, -1 nếu không tìm thấy), `startsWith()`, `endsWith()`.

---

### 7. JS Numbers

**1. Number methods** — định dạng lại một số:

```javascript
let x = 123.456;
x.toFixed(2); // "123.46" — làm tròn về 2 chữ số thập phân, TRẢ VỀ STRING
```

⚠️ Điểm dễ nhầm: `toFixed()` trả về **string**, không phải number — nếu cần tính toán tiếp phải `Number(...)` lại.

**2. Number properties / checks** — nằm trên object `Number`, không phải trên biến số:

```javascript
Number.isInteger(123.45); // false — có phần thập phân
Number.isInteger(123);    // true
```

⚠️ Bug hay gặp: gọi `Number.isInteger(x)` (đúng — gọi trên `Number`), chứ không phải `x.isInteger()` (sai — number không có method này).

**3. Arithmetic + `typeof`**:

```javascript
let result = 10 + 20;   // 30
typeof result;           // "number"
```

### Note kỹ thuật: vì sao `setDemoText(false)` không hiện chữ "false" ra màn hình?

Đây là hành vi của **React**, không phải lỗi JS: React **không render** các giá trị `false`, `true`, `null`, `undefined` khi đặt trực tiếp làm children của JSX (`{demoText}`). Muốn hiển thị được, phải ép về string trước:

```javascript
setDemoText(String(result));   // hoặc `${result}`
```

👉 Đây là lý do vì sao `console.log(result)` in ra `false` bình thường, nhưng box trên trang lại trống — hai cơ chế render khác nhau hoàn toàn.

---

### 8. JS Data Types

**1. `typeof` trên nhiều kiểu**:

```javascript
let x = 29;
let y = "Hôm nay là Quốc khánh 2/9";
typeof x; // "number"
typeof y; // "string"
```

**2. Type conversion (ép kiểu tường minh)**:

```javascript
let x = 292026;
String(x); // "292026" — number → string, tường minh (mình tự yêu cầu convert)
```

Các hàm convert phổ biến: `String()`, `Number()`, `Boolean()`.

👉 Phân biệt **type conversion** (mình chủ động convert) và **type coercion** (JS tự động convert ngầm, ví dụ trong `5 == "5"`).

**3. Destructuring** — lấy nhiều giá trị ra khỏi array/object cùng lúc, không cần truy cập từng phần tử một:

```javascript
let mentors = ["Nam", "Thomas", "Daphne"];
let [first, second] = mentors;
// first = "Nam", second = "Thomas"
```

Cú pháp tương tự cũng dùng được cho object: `let {a, b} = obj;` (lấy theo tên property thay vì vị trí).

---

## Section 4 — Functions & Scope

### 9. JS Functions

**1. Function declaration** — khai báo hàm có tên, nhận tham số, trả về giá trị bằng `return`:

```javascript
function double(x) {
  return x * 2;
}
double(10); // 20
```

**2. Default parameters** — tham số có giá trị mặc định, dùng khi gọi hàm **không truyền** đối số đó:

```javascript
function order(drink = "Coffee") {
  return `One more ${drink}`;
}
order(); // "One more Coffee" — vì không truyền gì nên dùng default
```

**3. Arrow function** — cú pháp gọn hơn cho cùng một loại logic, dùng `=>` thay cho từ khoá `function`:

```javascript
const double = (x) => {
  return x * 2;
};
double(10); // 20
```

👉 Hai cách viết (`function double(x) {...}` và `const double = (x) => {...}`) làm **cùng một việc**, khác nhau chủ yếu ở cú pháp và cách xử lý `this` (arrow function không có `this` riêng — sẽ gặp kỹ hơn ở phần Objects).

---

### 10. JS Timers

**1. `setTimeout`** — chạy một lần, sau một khoảng trễ (tính bằng mili-giây):

```javascript
const id = setTimeout(() => {
  // chạy sau 2 giây
}, 2000);
```

Lưu lại `id` trả về để có thể huỷ nó sau này.

**2. `clearTimeout`** — huỷ một `setTimeout` đang chờ chạy, trước khi nó kịp fire:

```javascript
clearTimeout(id);
```

**3. `setInterval` / `clearInterval`** — giống `setTimeout` nhưng **lặp lại liên tục** theo chu kỳ, cho tới khi bị huỷ:

```javascript
let count = 0;
const id = setInterval(() => {
  count++;
  // chạy lại mỗi 2 giây, vô hạn
}, 2000);

// sau này, khi muốn dừng:
clearInterval(id);
```

⚠️ Nếu không gọi `clearInterval`, nó sẽ **chạy mãi mãi** ngay cả khi không còn cần nữa — dễ gây rò rỉ bộ nhớ (memory leak) trong app thực tế.

---

### 11. JS Scope

Bài này về **phạm vi hoạt động của biến** (scope) — biến được khai báo ở đâu thì "nhìn thấy được" ở đâu.

**1. Block scope (`let` / `const`)** — biến khai báo bằng `let`/`const` bên trong `{ }` (ví dụ trong `if`) **chỉ tồn tại bên trong khối đó**:

```javascript
if (true) {
  let text = "Hello";
}
console.log(text); // ❌ ReferenceError: text is not defined
```

Ra khỏi `{ }`, biến `text` coi như không tồn tại.

**2. `var` bị "rò rỉ" ra khỏi block** — khác với `let`/`const`, `var` chỉ có phạm vi theo **function**, không theo block:

```javascript
if (true) {
  var text = "Hello";
}
console.log(text); // ✅ "Hello" — var "leak" ra ngoài block bình thường
```

👉 Đây là lý do các codebase hiện đại **hầu như không dùng `var` nữa** — hành vi rò rỉ ra ngoài block dễ gây bug khó phát hiện.

**3. Hoisting** — với `var`, phần **khai báo** được JS "kéo lên" đầu function trước khi chạy code, nhưng phần **gán giá trị** thì vẫn ở nguyên vị trí cũ:

```javascript
let result = text;   // đọc text TRƯỚC khi nó được gán
var text = "Hello";
// result = undefined (không lỗi!)
```

JS engine hiểu ngầm như sau:

```javascript
var text;              // ← khai báo được hoist lên đầu
let result = text;     // → undefined (đã tồn tại, nhưng chưa có giá trị)
text = "Hello";         // ← gán giá trị vẫn ở đúng vị trí cũ
```

**So sánh với `let`**: `let` cũng bị hoist, nhưng nằm trong "Temporal Dead Zone" — không được phép đọc trước khi khai báo, nên sẽ báo lỗi thay vì trả về `undefined`:

```javascript
console.log(text);
var text = "Hello";   // → undefined ✅ (không lỗi)

console.log(text2);
let text2 = "Hello";  // → ❌ ReferenceError (Temporal Dead Zone)
```

### Bạn chỉ cần nhớ

```text
var  → hoist khai báo, đọc trước khi gán = undefined, rò rỉ ra ngoài block
let/const → hoist nhưng không đọc được trước khi khai báo (TDZ), giới hạn trong block
```

---

## Đang học tiếp: Section 5 — Objects & Collections

Tiếp theo: JS Objects, JS Arrays, JS Sets, JS Maps, JS Iterations.

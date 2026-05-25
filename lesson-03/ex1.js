const numberInput = -1;
let messageDisplay = 'Giá trị bạn nhập là số đặc biệt (0)';
if (numberInput > 0) {
    messageDisplay = 'Giá trị bạn nhập là số dương';
} else if (numberInput < 0) {
    messageDisplay = 'Giá trị bạn nhập là số âm';
}
console.log(messageDisplay);
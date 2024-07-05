const title = document.getElementById('title');
const colors = ['#FF5733', '#FFA500', '#228B22', '#3366FF']; // 可以根據需要添加更多顏色

let index = 0;

function changeColor() {
  title.style.color = colors[index];
  index = (index + 1) % colors.length;
}

setInterval(changeColor, 1000); // 每隔1秒變換顏色

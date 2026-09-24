document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  const plan=document.getElementById("plan").value;
  const gameId=document.getElementById("gameId").value;
  const time=document.getElementById("time").value;
  const contact=document.getElementById("contact").value;
  const text=`柒遇下單\n方案：${plan}\n遊戲ID：${gameId}\n時間：${time}\n聯絡方式：${contact}`;
  alert("訂單資料已整理好！\n\n"+text+"\n\n正式上線時可改成送到 Google 表單、LINE 或後台。");
});

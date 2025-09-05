function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("msg");

  if (user === "admin" && pass === "Admin@123") {
    msg.innerText = "✅ Welcome Admin!";
  } else {
    msg.innerText = "❌ Invalid credentials";
  }
}

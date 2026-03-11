/* ===================== */
/* ส่งลิงก์ลืมรหัสผ่าน */
/* ===================== */

function sendReset() {

    const loader = document.getElementById("loader");
    const success = document.getElementById("successBox");

    if (loader) {
        loader.style.display = "block";
    }

    /* ดีเลย์จำลองการส่งอีเมล */

    setTimeout(function () {

        if (loader) {
            loader.style.display = "none";
        }

        if (success) {
            success.style.display = "block";
        }

        /* เด้งไปหน้าตั้งรหัสใหม่ */

        setTimeout(function () {

            window.location.href = "reset-password.html";

        }, 2000);

    }, 1500);

}


/* ===================== */
/* ตั้งรหัสผ่านใหม่ */
/* ===================== */

function resetPass() {

    let pass1 = document.getElementById("pass1")?.value;
    let pass2 = document.getElementById("pass2")?.value;

    if (!pass1 || !pass2) {

        alert("กรุณากรอกรหัสผ่าน");

        return;

    }

    if (pass1 !== pass2) {

        alert("รหัสผ่านไม่ตรงกัน");

        return;

    }

    /* บันทึกรหัสผ่านจำลอง */

    localStorage.setItem("userPassword", pass1);

    const loader = document.getElementById("loader");
    const success = document.getElementById("successBox");

    if (loader) {
        loader.style.display = "block";
    }

    setTimeout(function () {

        if (loader) {
            loader.style.display = "none";
        }

        if (success) {
            success.style.display = "block";
        }

        /* กลับหน้า Login */

        setTimeout(function () {

            window.location.href = "index.html";

        }, 2000);

    }, 1500);

}
<script>

    function logout(){

        let confirmLogout = confirm("คุณต้องการออกจากระบบหรือไม่?");

    if(confirmLogout){

        /* ลบข้อมูลทั้งหมด */

        localStorage.clear();

    /* กลับหน้า login */

    window.location.href="index.html";

}

}

</script>
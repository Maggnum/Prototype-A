const addEmoji = (emoji) => {
  const input = document.getElementById("message");

  input.value += emoji;
};

const toggleEmojiDrawer = () => {
  const drawer = document.getElementById("drawer");

  if (drawer.classList.contains("hidden")) {
    drawer.classList.remove("hidden");
  } else {
    drawer.classList.add("hidden");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init({
    publicKey: "4_zh7jIlJS3ioHRWX",
  });

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    emailjs.sendForm("service_nrztmni", "template_qtvps3i", form).then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Email sent successfully",
        });
        form.reset();
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Failed to send message",
          text: "Please try again",
        });
        console.log("email failed: ", error);
      }
    );
  });
});

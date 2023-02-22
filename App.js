const input = document.getElementById("input");
const submit = document.getElementById("submit");
const image = document.getElementById("img");

submit.addEventListener("click", () => {
    let data = input.value;

    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${data}`).then(
        (response) => {
            img.setAttribute("src", response.url);
            img.style.display = "block";
        }
    );
});
const list = [
    '"Jadilah cahaya, walau tak tersentuh, selalu menerangi. Jadilah angin, walau tak tampak, selalu memberi kesejukan. Jadilah sahabat sejati, walau tak bersama menjalani hari, selalu menjaga hati."',
    '"Kebijaksanaan laksana cahaya, ia akan mencerahkan daun-daun pemikiranmu, memeluk lembut ranting pemikiranmu, dan mengukuhkan akar karaktermu."',
    '"Tak ada yang muncul setelah kegelapan selain cahaya, tak ada yang muncul setelah kesedihan selain kebahagiaan."',
]

function getRandomQuote() {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}

const main = document.getElementById("main");
main.addEventListener("click", () => {
    main.textContent = getRandomQuote();
})

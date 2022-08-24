const list = [
    '"Kecantikan bukan hanya di wajah, kecantikan adalah cahaya di dalam hati."',
    '"Yakinilah, terangnya hati lebih terang dari cahaya matahari"',
    '"Sebelum kamu bisa melihat cahaya, kamu harus melewati kegelapan."',
    '"Jangan takut akan bayangan karena bayangan berarti ada suatu cahaya yang bersinar di dekatnya."',
    '"Meski matahari menolak untuk bersinar, aku akan tetap di sini dan menjadi cahaya untukmu."',
    'Kegelapan bukan ancaman, hanya peluang untuk menghidupkan cahaya."',
    '"Jadilah cahaya yang selalu menerangi sekitarnya di manapun melangkah."',
]

function getRandomQuote() {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}

const main = document.getElementById("main");
main.addEventListener("click", () => {
    main.textContent = getRandomQuote();
})

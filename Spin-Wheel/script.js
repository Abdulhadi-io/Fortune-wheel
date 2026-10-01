const spinBtn = document.getElementById("spinBtn");
const wheel = document.getElementById("wheel");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");

let score = 0;

const rewards = [
    { text: "Better Luck Next Time 😅", points: 100 },
    { text: "Better luck Next Time😅", points: 500 },
    { text: "Extra Life ❤️", points: 200 },
    { text: "Mystery Box ", points: 300 },
    { text: "Better Luck Next Time 😅", points: 0 }
];

spinBtn.addEventListener("click", () => {

    spinBtn.disabled = true;

    wheel.classList.add("spin");

    setTimeout(() => {

        const randomIndex = Math.floor(Math.random() * rewards.length);
        const reward = rewards[randomIndex];

        result.textContent = reward.text;

        score += reward.points;
        scoreText.textContent = score;

        wheel.classList.remove("spin");

        void wheel.offsetWidth;

        spinBtn.disabled = false;

    }, 3000);

});
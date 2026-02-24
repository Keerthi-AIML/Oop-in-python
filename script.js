function calculateScore() {

    let score = 0;

    const answers = {
        q1: "b",
        q2: "c",
        q3: "b",
        q4: "a",
        q5: "c",
        q6: "c",
        q7: "c",
        q8: "a",
        q9: "c",
        q10: "b"
    };

    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML =
        "Your Score: " + score + " / 10";
}
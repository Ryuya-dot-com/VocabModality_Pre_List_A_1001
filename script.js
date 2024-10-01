// script.js

function startTest() {
    const studentId = document.getElementById('student-id').value;
    const classSelect = document.getElementById('class-select').value;

    if (!studentId || !classSelect) {
        alert('学籍番号とクラスを入力してください。');
        return;
    }

    // テストを開始
    generateTest(audioFiles);
}

// 音声ファイルのリスト（audioフォルダ内に配置）
const audioFiles = [
    "stall.mp3",
    "revive.mp3",
    "sublime.mp3",
    "vacant.mp3",
    " shove.mp3",
    "exclaim.mp3",
    "overwhelm.mp3",
    "condemn.mp3",
    "dissolve.mp3",
    "feeble.mp3",
    "prompt.mp3",
    "assembly.mp3",
    "obedient.mp3",
    "decent.mp3",
    "contempt.mp3",
    "brook.mp3",
    "brim.mp3",
    "incline.mp3",
    "simplicity.mp3",
    "recess.mp3",
    "savage.mp3",
    "startle.mp3",
    "grind.mp3",
    "vigorous.mp3",
    "courageous.mp3",
    "refine.mp3",
    "undo.mp3",
    "compromise.mp3",
    "brutal.mp3",
    "salute.mp3",
    "proclaim.mp3",
    "heir.mp3",
    "triumph.mp3",
    "undertake.mp3",
    "gloomy.mp3",
    "slippery.mp3",
    "gulf.mp3",
    "impede.mp3",
    "genuine.mp3",
    "trivial.mp3",
    "patent.mp3",
    "daring.mp3",
    "profound.mp3",
    "arithmetic.mp3",
    "exhausted.mp3",
    "acute.mp3",
    "summon.mp3",
    "soothe.mp3",
    "wilderness.mp3",
    "sacred.mp3"
];

function generateTest(questions) {
    document.getElementById('student-form').style.display = 'none';
    const testSection = document.getElementById('test-section');
    testSection.style.display = 'block';

    questions.forEach((audioSrc, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const playButton = document.createElement('button');
        playButton.textContent = `音声を再生 (${2}回まで)`;
        let playCount = 0;

        playButton.addEventListener('click', () => {
            if (playCount >= 2) {
                alert('この音声は2回までしか再生できません。');
                return;
            }
            playCount++;
            const audio = new Audio(audioSrc);
            audio.play();
        });

        questionDiv.appendChild(document.createTextNode(`問題 ${index + 1}: `));
        questionDiv.appendChild(playButton);
        questionDiv.appendChild(document.createElement('br'));

        testSection.appendChild(questionDiv);
        testSection.appendChild(document.createElement('hr'));
    });
}

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
    "audio/shove.mp3",
    "audio/acute.mp3",
    "audio/arithmetic.mp3",
    "audio/assembly.mp3",
    "audio/brim.mp3",
    "audio/brook.mp3",
    "audio/brutal.mp3",
    "audio/compromise.mp3",
    "audio/condemn.mp3",
    "audio/contempt.mp3",
    "audio/courageous.mp3",
    "audio/daring.mp3",
    "audio/decent.mp3",
    "audio/dissolve.mp3",
    "audio/exclaim.mp3",
    "audio/exhausted.mp3",
    "audio/feeble.mp3",
    "audio/genuine.mp3",
    "audio/gloomy.mp3",
    "audio/grind.mp3",
    "audio/gulf.mp3",
    "audio/heir.mp3",
    "audio/impede.mp3",
    "audio/incline.mp3",
    "audio/obedient.mp3",
    "audio/overwhelm.mp3",
    "audio/patent.mp3",
    "audio/proclaim.mp3",
    "audio/profound.mp3",
    "audio/prompt.mp3",
    "audio/recess.mp3",
    "audio/refine.mp3",
    "audio/revive.mp3",
    "audio/sacred.mp3",
    "audio/salute.mp3",
    "audio/savage.mp3",
    "audio/simplicity.mp3",
    "audio/slippery.mp3",
    "audio/soothe.mp3",
    "audio/stall.mp3",
    "audio/startle.mp3",
    "audio/sublime.mp3",
    "audio/summon.mp3",
    "audio/triumph.mp3",
    "audio/trivial.mp3",
    "audio/undertake.mp3",
    "audio/undo.mp3",
    "audio/vacant.mp3",
    "audio/vigorous.mp3",
    "audio/wilderness.mp3"
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
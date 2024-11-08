var pokerHands = {
    name: "default",
    hands: [
        { cards: "AA", action: "fold" },
        { cards: "AKs", action: "fold" },
        { cards: "AQs", action: "fold" },
        { cards: "AJs", action: "fold" },
        { cards: "ATs", action: "fold" },
        { cards: "A9s", action: "fold" },
        { cards: "A8s", action: "fold" },
        { cards: "A7s", action: "fold" },
        { cards: "A6s", action: "fold" },
        { cards: "A5s", action: "fold" },
        { cards: "A4s", action: "fold" },
        { cards: "A3s", action: "fold" },
        { cards: "A2s", action: "fold" },
        { cards: "AKo", action: "fold" },
        { cards: "KK", action: "fold" },
        { cards: "KQs", action: "fold" },
        { cards: "KJs", action: "fold" },
        { cards: "KTs", action: "fold" },
        { cards: "K9s", action: "fold" },
        { cards: "K8s", action: "fold" },
        { cards: "K7s", action: "fold" },
        { cards: "K6s", action: "fold" },
        { cards: "K5s", action: "fold" },
        { cards: "K4s", action: "fold" },
        { cards: "K3s", action: "fold" },
        { cards: "K2s", action: "fold" },
        { cards: "AQo", action: "fold" },
        { cards: "KQo", action: "fold" },
        { cards: "QQ", action: "fold" },
        { cards: "QJs", action: "fold" },
        { cards: "QTs", action: "fold" },
        { cards: "Q9s", action: "fold" },
        { cards: "Q8s", action: "fold" },
        { cards: "Q7s", action: "fold" },
        { cards: "Q6s", action: "fold" },
        { cards: "Q5s", action: "fold" },
        { cards: "Q4s", action: "fold" },
        { cards: "Q3s", action: "fold" },
        { cards: "Q2s", action: "fold" },
        { cards: "AJo", action: "fold" },
        { cards: "KJo", action: "fold" },
        { cards: "QJo", action: "fold" },
        { cards: "JJ", action: "fold" },
        { cards: "JTs", action: "fold" },
        { cards: "J9s", action: "fold" },
        { cards: "J8s", action: "fold" },
        { cards: "J7s", action: "fold" },
        { cards: "J6s", action: "fold" },
        { cards: "J5s", action: "fold" },
        { cards: "J4s", action: "fold" },
        { cards: "J3s", action: "fold" },
        { cards: "J2s", action: "fold" },
        { cards: "ATo", action: "fold" },
        { cards: "KTo", action: "fold" },
        { cards: "QTo", action: "fold" },
        { cards: "JTo", action: "fold" },
        { cards: "TT", action: "fold" },
        { cards: "T9s", action: "fold" },
        { cards: "T8s", action: "fold" },
        { cards: "T7s", action: "fold" },
        { cards: "T6s", action: "fold" },
        { cards: "T5s", action: "fold" },
        { cards: "T4s", action: "fold" },
        { cards: "T3s", action: "fold" },
        { cards: "T2s", action: "fold" },
        { cards: "A9o", action: "fold" },
        { cards: "K9o", action: "fold" },
        { cards: "Q9o", action: "fold" },
        { cards: "J9o", action: "fold" },
        { cards: "T9o", action: "fold" },
        { cards: "99", action: "fold" },
        { cards: "98s", action: "fold" },
        { cards: "97s", action: "fold" },
        { cards: "96s", action: "fold" },
        { cards: "95s", action: "fold" },
        { cards: "94s", action: "fold" },
        { cards: "93s", action: "fold" },
        { cards: "92s", action: "fold" },
        { cards: "A8o", action: "fold" },
        { cards: "K8o", action: "fold" },
        { cards: "Q8o", action: "fold" },
        { cards: "J8o", action: "fold" },
        { cards: "T8o", action: "fold" },
        { cards: "98o", action: "fold" },
        { cards: "88", action: "fold" },
        { cards: "87s", action: "fold" },
        { cards: "86s", action: "fold" },
        { cards: "85s", action: "fold" },
        { cards: "84s", action: "fold" },
        { cards: "83s", action: "fold" },
        { cards: "82s", action: "fold" },
        { cards: "A7o", action: "fold" },
        { cards: "K7o", action: "fold" },
        { cards: "Q7o", action: "fold" },
        { cards: "J7o", action: "fold" },
        { cards: "T7o", action: "fold" },
        { cards: "97o", action: "fold" },
        { cards: "87o", action: "fold" },
        { cards: "77", action: "fold" },
        { cards: "76s", action: "fold" },
        { cards: "75s", action: "fold" },
        { cards: "74s", action: "fold" },
        { cards: "73s", action: "fold" },
        { cards: "72s", action: "fold" },
        { cards: "A6o", action: "fold" },
        { cards: "K6o", action: "fold" },
        { cards: "Q6o", action: "fold" },
        { cards: "J6o", action: "fold" },
        { cards: "T6o", action: "fold" },
        { cards: "96o", action: "fold" },
        { cards: "86o", action: "fold" },
        { cards: "76o", action: "fold" },
        { cards: "66", action: "fold" },
        { cards: "65s", action: "fold" },
        { cards: "64s", action: "fold" },
        { cards: "63s", action: "fold" },
        { cards: "62s", action: "fold" },
        { cards: "A5o", action: "fold" },
        { cards: "K5o", action: "fold" },
        { cards: "Q5o", action: "fold" },
        { cards: "J5o", action: "fold" },
        { cards: "T5o", action: "fold" },
        { cards: "95o", action: "fold" },
        { cards: "85o", action: "fold" },
        { cards: "75o", action: "fold" },
        { cards: "65o", action: "fold" },
        { cards: "55", action: "fold" },
        { cards: "54s", action: "fold" },
        { cards: "53s", action: "fold" },
        { cards: "52s", action: "fold" },
        { cards: "A4o", action: "fold" },
        { cards: "K4o", action: "fold" },
        { cards: "Q4o", action: "fold" },
        { cards: "J4o", action: "fold" },
        { cards: "T4o", action: "fold" },
        { cards: "94o", action: "fold" },
        { cards: "84o", action: "fold" },
        { cards: "74o", action: "fold" },
        { cards: "64o", action: "fold" },
        { cards: "54o", action: "fold" },
        { cards: "44", action: "fold" },
        { cards: "43s", action: "fold" },
        { cards: "42s", action: "fold" },
        { cards: "A3o", action: "fold" },
        { cards: "K3o", action: "fold" },
        { cards: "Q3o", action: "fold" },
        { cards: "J3o", action: "fold" },
        { cards: "T3o", action: "fold" },
        { cards: "93o", action: "fold" },
        { cards: "83o", action: "fold" },
        { cards: "73o", action: "fold" },
        { cards: "63o", action: "fold" },
        { cards: "53o", action: "fold" },
        { cards: "43o", action: "fold" },
        { cards: "33", action: "fold" },
        { cards: "32s", action: "fold" },
        { cards: "A2o", action: "fold" },
        { cards: "K2o", action: "fold" },
        { cards: "Q2o", action: "fold" },
        { cards: "J2o", action: "fold" },
        { cards: "T2o", action: "fold" },
        { cards: "92o", action: "fold" },
        { cards: "82o", action: "fold" },
        { cards: "72o", action: "fold" },
        { cards: "62o", action: "fold" },
        { cards: "52o", action: "fold" },
        { cards: "42o", action: "fold" },
        { cards: "32o", action: "fold" },
        { cards: "22", action: "fold" }
    ]
};
var isLeftMouseDown = false;
var isRightMouseDown = false;
var changedButtons = new Set();
var streak = 0;
function createGrid() {
    var grid = document.getElementById('grid');
    if (!grid)
        return;
    grid.innerHTML = ''; // Clear existing grid
    pokerHands.hands.forEach(function (hand, index) {
        var button = createButton(hand, index);
        grid.appendChild(button);
    });
    document.addEventListener('mouseup', handleMouseUp);
}
function createButton(hand, index) {
    var button = document.createElement('button');
    button.textContent = hand.cards;
    button.className = "grid-button ".concat(hand.action);
    button.addEventListener('mousedown', function (event) { return handleMouseDown(event, index); });
    button.addEventListener('mouseover', function () { return handleMouseOver(index); });
    button.addEventListener('contextmenu', function (event) { return handleRightClick(event, index); });
    return button;
}
function handleMouseDown(event, index) {
    if (event.button === 0) { // Left mouse button
        isLeftMouseDown = true;
        changedButtons.clear();
        handleButtonClick(index);
    }
    else if (event.button === 2) { // Right mouse button
        isRightMouseDown = true;
        changedButtons.clear();
        handleRightClick(event, index);
    }
}
function handleMouseOver(index) {
    if (isLeftMouseDown && !changedButtons.has(index)) {
        handleButtonClick(index);
    }
    else if (isRightMouseDown && !changedButtons.has(index)) {
        handleRightClick(new MouseEvent('contextmenu'), index);
    }
}
function handleMouseUp() {
    isLeftMouseDown = false;
    isRightMouseDown = false;
    changedButtons.clear();
}
function handleButtonClick(index) {
    changedButtons.add(index);
    var hand = pokerHands.hands[index];
    var actions = ['fold', 'call', 'raise', 'all-in'];
    var currentActionIndex = actions.indexOf(hand.action);
    var nextActionIndex = (currentActionIndex + 1) % actions.length;
    hand.action = actions[nextActionIndex];
    var button = document.querySelectorAll('.grid-button')[index];
    button.className = "grid-button ".concat(hand.action);
}
function handleRightClick(event, index) {
    event.preventDefault();
    changedButtons.add(index);
    var hand = pokerHands.hands[index];
    var actions = ['fold', 'call', 'raise', 'all-in'];
    var currentActionIndex = actions.indexOf(hand.action);
    var prevActionIndex = (currentActionIndex - 1 + actions.length) % actions.length;
    hand.action = actions[prevActionIndex];
    var button = document.querySelectorAll('.grid-button')[index];
    button.className = "grid-button ".concat(hand.action);
}
function handleGenerateClick() {
    var rangeNameInput = document.getElementById('range-name');
    var rangeName = rangeNameInput.value.trim() || 'poker_hands';
    var json = JSON.stringify(pokerHands, null, 2);
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = "".concat(rangeName, ".json");
    a.click();
    URL.revokeObjectURL(url);
}
function handleFileUpload(event) {
    var _a;
    var input = event.target;
    if (!((_a = input.files) === null || _a === void 0 ? void 0 : _a.length))
        return;
    var file = input.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        try {
            var json = JSON.parse((_a = e.target) === null || _a === void 0 ? void 0 : _a.result);
            if (json.hands) {
                pokerHands.hands = json.hands;
                createGrid();
            }
            else {
                alert('Invalid JSON file');
            }
        }
        catch (error) {
            alert('Error reading JSON file');
        }
    };
    reader.readAsText(file);
}
function toggleGridVisibility() {
    var grid = document.getElementById('grid');
    var chevron = document.getElementById('chevron');
    if (grid && chevron) {
        grid.classList.toggle('expanded');
        chevron.classList.toggle('expanded');
        chevron.innerHTML = grid.classList.contains('expanded') ? '&#9650;' : '&#9660;'; // Upward chevron when expanded
    }
}
function getRandomHand() {
    var randomIndex = Math.floor(Math.random() * pokerHands.hands.length);
    return pokerHands.hands[randomIndex];
}
function displayQuiz() {
    var quizHandElement = document.getElementById('quiz-hand');
    var quizFeedbackElement = document.getElementById('quiz-feedback');
    var streakElement = document.getElementById('streak');
    if (!quizHandElement || !quizFeedbackElement || !streakElement)
        return;
    var randomHand = getRandomHand();
    quizHandElement.textContent = randomHand.cards;
    quizFeedbackElement.textContent = '';
    var quizButtons = document.querySelectorAll('.quiz-button');
    quizButtons.forEach(function (button) {
        var newButton = button.cloneNode(true);
        button.replaceWith(newButton);
        newButton.addEventListener('click', function () {
            var action = newButton.getAttribute('data-action');
            if (action === randomHand.action) {
                streak++;
                streakElement.textContent = "Streak: ".concat(streak);
                displayQuiz(); // Move to the next card
            }
            else {
                streak = 0;
                streakElement.textContent = "Streak: ".concat(streak);
                quizFeedbackElement.textContent = "Incorrect! The correct action is ".concat(randomHand.action, ".");
                quizFeedbackElement.style.color = 'red';
                showDialog("Incorrect! The correct action is ".concat(randomHand.action, ".")); // Show custom dialog
            }
        });
    });
}
function showDialog(message) {
    var dialog = document.getElementById('dialog');
    var dialogMessage = document.getElementById('dialog-message');
    var dialogOkButton = document.getElementById('dialog-ok');
    if (dialog && dialogMessage && dialogOkButton) {
        dialogMessage.textContent = message;
        dialog.style.display = 'flex';
        dialogOkButton.onclick = function () {
            dialog.style.display = 'none';
            displayQuiz(); // Move to the next card after dialog is accepted
        };
    }
}
document.addEventListener('DOMContentLoaded', function () {
    createGrid();
    var generateButton = document.getElementById('generate');
    if (generateButton) {
        generateButton.addEventListener('click', handleGenerateClick);
    }
    var uploadInput = document.getElementById('upload');
    if (uploadInput) {
        uploadInput.addEventListener('change', handleFileUpload);
    }
    var gridHeader = document.getElementById('grid-header');
    if (gridHeader) {
        gridHeader.addEventListener('click', toggleGridVisibility);
    }
    displayQuiz();
});

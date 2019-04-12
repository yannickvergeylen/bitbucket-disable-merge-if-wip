let pullRequestTitle;
let mergeButton;

const workInProgressMatchers = [
    '^WIP',
    '(\\[WIP\\])'
];

function checkWipStatus() {
    if (!pullRequestTitle || mergeButton) {
        pullRequestTitle = getTitle();
        mergeButton = getMergeButton();
    }
    if (pullRequestTitle && mergeButton) {
        if (workInProgressMatchers.find(wipMactcher => pullRequestTitle.match(new RegExp(wipMactcher)))) {
            mergeButton.disabled = true;
        } else {
            mergeButton.disabled = false;
        }
    } else {
        setTimeout(checkWipStatus, 100);
    }
}

checkWipStatus();


function getTitle() {
    return document.getElementsByClassName('pull-request-title')[0].innerText
}

function getMergeButton() {
    return document.getElementById('fulfill-pullrequest');
}

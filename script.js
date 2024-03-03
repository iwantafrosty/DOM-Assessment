const main = document.querySelector('main');

const joke1 = "Parallel lines have so much in common. It’s a shame they’ll never meet.";
const joke2 = "My wife told me I should do lunges to stay in shape. That would be a big step forward.";
const joke3 = "Why don't scientists trust atoms? Because they make up everything.";

const template = `
    <div class="jokes-container">
        <h1 class="jokes-title">My Jokes</h1>
        <ul class="jokes-list">
            <li class="joke-item">${joke1}</li>
            <li class="joke-item">${joke2}</li>
            <li class="joke-item">${joke3}</li>
        </ul>
    </div>
`;

main.innerHTML = template;

const paragraph = document.createElement('p');
paragraph.classList.add('closing-remark');


paragraph.textContent = "That's all folks!";

document.body.appendChild(paragraph);

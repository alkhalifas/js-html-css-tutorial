// script.js

// Function to sort the list by name
function sortByName() {
    const nameList = document.getElementById("nameList");
    const listItems = Array.from(nameList.getElementsByTagName("li"));

    listItems.sort((a, b) => {
        const nameA = a.textContent.split(" - ")[0].toLowerCase();
        const nameB = b.textContent.split(" - ")[0].toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Clear the list and append the sorted items
    nameList.innerHTML = '';
    listItems.forEach(item => nameList.appendChild(item));
}

// Function to sort the list by age
function sortByAge() {
    const nameList = document.getElementById("nameList");
    const listItems = Array.from(nameList.getElementsByTagName("li"));

    listItems.sort((a, b) => {
        const ageA = parseInt(a.textContent.split(" - ")[1]);
        const ageB = parseInt(b.textContent.split(" - ")[1]);
        return ageA - ageB;
    });

    // Clear the list and append the sorted items
    nameList.innerHTML = '';
    listItems.forEach(item => nameList.appendChild(item));
}

// Function to fetch and display questions
async function displayQuestions() {
    try {
        const response = await fetch('questions.json');
        const questions = await response.json();
        const questionList = document.getElementById('questionList');

        questions.forEach(question => {
            const card = document.createElement('div');
            card.classList.add('question-card');
            card.innerHTML = `
                <h3>${question.question}</h3>
                <p>Views: ${question.views}</p>
                <p>Date Created: ${question.date_created}</p>
            `;
            questionList.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading questions:', error);
    }
}

// Call the function to display questions
displayQuestions();

// Event listeners for sorting buttons
document.getElementById("sortByName").addEventListener("click", sortByName);
document.getElementById("sortByAge").addEventListener("click", sortByAge);

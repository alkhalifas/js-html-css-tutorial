// script.js

// Function to sort the list by name
function sortByName () {
  const nameList = document.getElementById('nameList');
  const listItems = Array.from(nameList.getElementsByTagName('li'));

  listItems.sort((a, b) => {
    const nameA = a.textContent.split(' - ')[0].toLowerCase();
    const nameB = b.textContent.split(' - ')[0].toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Clear the list and append the sorted items
  nameList.innerHTML = '';
  listItems.forEach(item => nameList.appendChild(item));
}

// Adds Table to page
function addTable () {
  const tableNode = document.createElement("table");
  let trNode = document.createElement("tr");
  let tdNode1 = document.createElement("td");

  let tdText1 = document.createTextNode("Cell (0, 0)");
  tdNode1.appendChild(tdText1);
  trNode.appendChild(tdNode1);
  // let tdText2 = document.createTextNode("Cell (1, 0)");
  // let tdText3 = document.createTextNode("Cell (2, 0)");



  // tdNode1.appendChild(tdText2);
  // tdNode1.appendChild(tdText3);

  tableNode.appendChild(trNode);
  document.getElementById("main").appendChild(tableNode);
}

// Function to sort the list by age
function sortByAge () {
  const nameList = document.getElementById('nameList');
  const listItems = Array.from(nameList.getElementsByTagName('li'));

  listItems.sort((a, b) => {
    const ageA = parseInt(a.textContent.split(' - ')[1]);
    const ageB = parseInt(b.textContent.split(' - ')[1]);
    return ageA - ageB;
  });

  // Clear the list and append the sorted items
  nameList.innerHTML = '';
  listItems.forEach(item => nameList.appendChild(item));
}

// Function to fetch and display questions
async function displayQuestions () {
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
document.getElementById('sortByName').addEventListener('click', sortByName);
document.getElementById('sortByAge').addEventListener('click', sortByAge);

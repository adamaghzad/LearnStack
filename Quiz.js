	// Define quiz questions and answers
  const quizData = [
    {
            question: 'Quelle balise est utilisée pour créer une liste non ordonnée en HTML ?',
            answers: ['<ol>','<ul>' , '<li>', '<div>'],
            correct: '<ul>'
        },
        {
            question: 'Quelle balise est utilisée pour définir une cellule dans un tableau en HTML ?',
            answers: ['<table>', '<tr>','<td>' , '<th>'],
            correct: '<td>'
        },
        {
            question: 'Quel attribut HTML spécifie l\'URL d\'un lien hypertexte ?',
            answers: ['link', 'src', 'url', 'href'],
            correct: 'href'
        },
        {
            question: 'Quelle balise est utilisée pour créer un lien hypertexte en HTML ?',
            answers: ['<link>','<a>' , '<href>', '<url>'],
            correct: '<a>'
        },
        {
            question: 'Quelle balise est utilisée pour définir un en-tête dans HTML ?',
            answers: ['<h1>', '<head>','<header>' , '<title>'],
            correct: '<header>'
        },
        {
            question: 'Quelle balise est utilisée pour inclure du code JavaScript dans un document HTML ?',
            answers: ['<script>', '<javascript>', '<js>', '<code>'],
            correct: '<script>'
        },
        {
            question: 'Quel attribut HTML est utilisé pour définir une classe CSS ?',
            answers: ['class', 'css', 'style', 'id'],
            correct: 'class'
        },
        {
            question: 'Quelle balise est utilisée pour créer un lien vers une feuille de style CSS externe ?',
            answers: ['<link>', '<style>', '<css>', '<href>'],
            correct: '<link>'
        },
        {
            question: 'Quel élément HTML est utilisé pour afficher du texte en gras ?',
            answers: ['<strong>', '<bold>', '<b>', '<em>'],
            correct: '<strong>'
        },
        {
            question: 'Quel attribut HTML est utilisé pour définir un titre pour une image ?',
            answers: ['alt', 'title', 'caption', 'description'],
            correct: 'alt'
        },
        {
          question: 'Quelle balise est utilisée pour insérer une vidéo dans une page web ?',
          answers: ['<video>', '<media>', '<embed>', '<source>'],
          correct: '<video>'
      },
      {
          question: 'Quelle balise est utilisée pour définir le contenu principal d\'une page web ?',
          answers: ['<main>', '<body>', '<content>', '<section>'],
          correct: '<main>'
      },
      {
          question: 'Quelle balise est utilisée pour insérer une image dans une page web ?',
          answers: ['<img>', '<picture>', '<image>', '<graphic>'],
          correct: '<img>'
      },
      {
          question: 'Quelle balise est utilisée pour définir un paragraphe en HTML ?',
          answers: ['<p>', '<paragraph>', '<para>', '<text>'],
          correct: '<p>'
      },
      {
          question: 'Quelle balise HTML est utilisée pour créer un lien vers un fichier CSS externe ?',
          answers: ['<css>', '<stylesheet>', '<style>', '<link>'],
          correct: '<link>'
      },
      {
          question: 'Quel élément HTML est utilisé pour afficher du texte en italique ?',
          answers: ['<italic>', '<i>', '<emphasis>', '<em>'],
          correct: '<i>'
      },
      {
          question: 'Quelle balise HTML est utilisée pour définir un champ de saisie de texte ?',
          answers: ['<input>', '<text>', '<textfield>', '<textarea>'],
          correct: '<input>'
      },
      {
          question: 'Quelle balise HTML est utilisée pour définir une liste ordonnée en HTML ?',
          answers: ['<ol>', '<ul>', '<li>', '<list>'],
          correct: '<ol>'
      },
    ];
    
    const questionCountElement = document.getElementById('question-count');
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const scoreElement = document.getElementById('score');
    const targetScoreElement = document.getElementById('target-score');
    const timerElement = document.getElementById('time-left');
    const questionElement = document.getElementById('question');
    const answersContainer = document.getElementById('answers-container');
    const submitButton = document.getElementById('submit-btn');
    
    let currentQuestionIndex = 0;
    let score = 0;
    let targetScore = 20; // Define your target score here
    let timeLeft = 60; // Define your time limit here
    
    // Display current question and answers
    function displayQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answersContainer.innerHTML = '';
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answer-btn');
            button.addEventListener('click', selectAnswer);
            answersContainer.appendChild(button);
        });
    }
    
    // Handle answer selection
    function selectAnswer(event) {
        const selectedOption = event.target.textContent;
        const correctOption = quizData[currentQuestionIndex].correct;
        if (selectedOption === correctOption) {
            score++;
            scoreElement.textContent = score;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            updateQuestionCount();
            displayQuestion();
        } else {
            displayResult();
        }
    }
    
    // Update question count display
    function updateQuestionCount() {
        currentQuestionElement.textContent = currentQuestionIndex + 1;
    }
    
    // Display quiz result
    function displayResult() {
        clearInterval(countdown); // Stop the timer
        const finalScore = document.createElement('p');
        finalScore.textContent = `You scored ${score} out of ${quizData.length}!`;
        quizContainer.innerHTML = '';
        quizContainer.appendChild(finalScore);
    }
    
    // Handle quiz submission
    submitButton.addEventListener('click', () => {
        displayResult();
    });
    
    // Start timer
    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countdown);
            displayResult();
        }
    }, 1000);
    
    // Start quiz
    totalQuestionsElement.textContent = quizData.length;
    updateQuestionCount();
    displayQuestion();
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 3
    },
    {
      question: "Which language is used for web development?",
      options: ["Python", "Java", "C#", "JavaScript"],
      correct: 4
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correct: 8
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Leo Tolstoy", "William Shakespeare", "Mark Twain", "Charles Dickens"],
      correct: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  
  function loadQuiz() {
    resultEl.textContent = ""; 
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = ""; 
    currentQuiz.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.dataset.index = index;
      li.addEventListener("click", () => selectOption(index));
      optionsEl.appendChild(li);
    });
  }
  
  let selectedOption = null;
  
  function selectOption(index) {
    selectedOption = index;
    const allOptions = optionsEl.querySelectorAll("li");
    allOptions.forEach(option => option.classList.remove("selected"));
    allOptions[index].classList.add("selected");
  }
  
  submitBtn.addEventListener("click", () => {
    if (selectedOption === null) {
      alert("Please select an option!");
      return;
    }
    if (selectedOption === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    selectedOption = null;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      displayResult();
    }
  });
  
  function displayResult() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    submitBtn.style.display = "none";
    resultEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  }
  
  loadQuiz();
  
// Quiz Data - Preguntas sobre Biología
const quizData = {
    classic: [
        {
            question: "¿Cuál es la unidad básica de la vida?",
            options: ["Átomo", "Célula", "Molécula", "Proteína"],
            correct: 1,
            difficulty: "easy",
            explanation: "La célula es la unidad básica de la vida. Todos los organismos vivos están compuestos por una o más células."
        },
        {
            question: "¿Cuántos cromosomas tiene un humano?",
            options: ["23", "46", "48", "50"],
            correct: 1,
            difficulty: "easy",
            explanation: "Los humanos tienen 46 cromosomas: 23 pares, heredando uno de cada progenitor."
        },
        {
            question: "¿Cuál es el proceso por el cual las plantas producen su propio alimento?",
            options: ["Respiración", "Fermentación", "Fotosíntesis", "Digestión"],
            correct: 2,
            difficulty: "easy",
            explanation: "La fotosíntesis es el proceso que convierte luz solar, agua y dióxido de carbono en glucosa y oxígeno."
        },
        {
            question: "¿Cuál es la molécula que transporta la información genética?",
            options: ["ARN", "ADN", "Proteína", "Lípido"],
            correct: 1,
            difficulty: "easy",
            explanation: "El ADN (ácido desoxirribonucleico) es la molécula que contiene la información genética de los organismos."
        },
        {
            question: "¿Cuántas cámaras tiene el corazón humano?",
            options: ["2", "3", "4", "5"],
            correct: 2,
            difficulty: "easy",
            explanation: "El corazón humano tiene 4 cámaras: 2 aurículas (izquierda y derecha) y 2 ventrículos (izquierdo y derecho)."
        },
        {
            question: "¿Cuál es el tipo de reproducción que produce descendientes genéticamente idénticos?",
            options: ["Reproducción sexual", "Reproducción asexual", "Reproducción mixta", "Reproducción binaria"],
            correct: 1,
            difficulty: "medium",
            explanation: "La reproducción asexual produce descendientes genéticamente idénticos al progenitor."
        },
        {
            question: "¿Cuál es el pigmento que da color verde a las plantas?",
            options: ["Caroteno", "Clorofila", "Xantófila", "Antocianina"],
            correct: 1,
            difficulty: "medium",
            explanation: "La clorofila es el pigmento responsable del color verde en las plantas y es esencial para la fotosíntesis."
        },
        {
            question: "¿Cuál es la hormona que regula el nivel de glucosa en la sangre?",
            options: ["Adrenalina", "Insulina", "Cortisol", "Tiroxina"],
            correct: 1,
            difficulty: "medium",
            explanation: "La insulina es la hormona producida por el páncreas que regula el nivel de glucosa en la sangre."
        },
        {
            question: "¿Qué son los ribosomas?",
            options: ["Estructuras que almacenan energía", "Orgánulos que sintetizan proteínas", "Membranas celulares", "Pigmentos vegetales"],
            correct: 1,
            difficulty: "medium",
            explanation: "Los ribosomas son orgánulos celulares responsables de sintetizar proteínas según las instrucciones del ARN mensajero."
        },
        {
            question: "¿Cuál es el proceso de división celular que produce células haploides?",
            options: ["Mitosis", "Meiosis", "Citocinesis", "Binarización"],
            correct: 1,
            difficulty: "hard",
            explanation: "La meiosis es el tipo de división celular que produce cuatro células haploides (con la mitad del número de cromosomas)."
        },
        {
            question: "¿Cuál es el componente principal de la pared celular en las plantas?",
            options: ["Proteína", "Celulosa", "Quitina", "Colesterol"],
            correct: 1,
            difficulty: "hard",
            explanation: "La celulosa es el polisacárido que forma la pared celular de las plantas, dándoles rigidez y estructura."
        },
        {
            question: "¿Qué son los telómeros?",
            options: ["Enzimas de reparación del ADN", "Extremos protectores de los cromosomas", "Proteínas del citoesqueleto", "Receptores celulares"],
            correct: 1,
            difficulty: "hard",
            explanation: "Los telómeros son secuencias repetidas de ADN en los extremos de los cromosomas que protegen la información genética."
        },
        {
            question: "¿Cuál es el proceso mediante el cual se degradan las moléculas de glucosa para liberar energía?",
            options: ["Fotosíntesis", "Respiración celular", "Gluconeogénesis", "Fermentación láctica"],
            correct: 1,
            difficulty: "hard",
            explanation: "La respiración celular es el proceso metabólico que degrada la glucosa para producir ATP, la moneda energética de la célula."
        },
        {
            question: "¿Qué es la homeostasis?",
            options: ["La evolución de los organismos", "El mantenimiento del equilibrio interno del organismo", "La división celular", "La mutación genética"],
            correct: 1,
            difficulty: "hard",
            explanation: "La homeostasis es la capacidad de los organismos vivos de mantener un equilibrio interno estable."
        },
        {
            question: "¿Cuál es el papel del retículo endoplásmico rugoso?",
            options: ["Síntesis de lípidos", "Síntesis de proteínas", "Almacenamiento de calcio", "Desintoxicación celular"],
            correct: 1,
            difficulty: "hard",
            explanation: "El retículo endoplásmico rugoso tiene ribosomas adheridos y es responsable de la síntesis de proteínas destinadas a secretarse o usar en membranas."
        }
    ]
};

// Separar preguntas por dificultad
const difficultyData = {
    easy: quizData.classic.filter(q => q.difficulty === 'easy'),
    medium: quizData.classic.filter(q => q.difficulty === 'medium'),
    hard: quizData.classic.filter(q => q.difficulty === 'hard')
};

// Estado del Quiz
let currentQuiz = {
    questions: [],
    mode: 'classic',
    difficulty: 'all',
    currentQuestion: 0,
    answers: [],
    score: 0,
    timePerQuestion: 30,
    timeLeft: 30,
    timerInterval: null
};

let records = JSON.parse(localStorage.getItem('quizRecords')) || [];

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    showMenu();
});

// Mostrar Menú Principal
function showMenu() {
    hideAllSections();
    document.getElementById('mainMenu').classList.remove('hidden');
}

// Mostrar Menú de Dificultad
function showDifficultyMenu() {
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('difficultyMenu').classList.remove('hidden');
}

// Volver al Menú
function backToMenu() {
    stopTimer();
    hideAllSections();
    showMenu();
}

// Iniciar Quiz
function startQuiz(mode, difficulty = null) {
    currentQuiz.mode = mode;
    currentQuiz.currentQuestion = 0;
    currentQuiz.answers = [];
    currentQuiz.score = 0;

    if (mode === 'classic') {
        currentQuiz.questions = [...quizData.classic];
    } else if (mode === 'difficulty') {
        currentQuiz.difficulty = difficulty;
        currentQuiz.questions = [...difficultyData[difficulty]];
    } else if (mode === 'timed') {
        currentQuiz.questions = [...quizData.classic];
        currentQuiz.timePerQuestion = 30;
    }

    // Mezclar preguntas
    currentQuiz.questions = currentQuiz.questions.sort(() => Math.random() - 0.5);

    hideAllSections();
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('prevBtn').style.display = 'none';

    loadQuestion();

    // Iniciar temporizador si es modo timed
    if (mode === 'timed') {
        document.getElementById('timerDisplay').classList.remove('hidden');
        startTimer();
    }
}

// Cargar Pregunta
function loadQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestion];
    const totalQuestions = currentQuiz.questions.length;
    const questionNumber = currentQuiz.currentQuestion + 1;

    // Actualizar contador
    document.getElementById('currentQuestion').textContent = questionNumber;
    document.getElementById('totalQuestions').textContent = totalQuestions;

    // Actualizar barra de progreso
    const progress = (questionNumber / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';

    // Cargar pregunta
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('difficultyBadge').textContent = question.difficulty.toUpperCase();
    document.getElementById('difficultyBadge').className = `difficulty-badge ${question.difficulty}`;

    // Cargar opciones de respuesta
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.innerHTML = `
            <div class="answer-radio"></div>
            <span class="answer-text">${option}</span>
        `;

        // Marcar respuesta si ya fue contestada
        if (currentQuiz.answers[currentQuiz.currentQuestion] === index) {
            answerDiv.classList.add('selected');
        }

        answerDiv.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(answerDiv);
    });

    // Actualizar botones de navegación
    updateNavigationButtons();
    updateScoreDisplay();
}

// Seleccionar Respuesta
function selectAnswer(index) {
    currentQuiz.answers[currentQuiz.currentQuestion] = index;
    document.querySelectorAll('.answer-option').forEach(option => option.classList.remove('selected'));
    document.querySelectorAll('.answer-option')[index].classList.add('selected');
}

// Siguiente Pregunta
function nextQuestion() {
    if (currentQuiz.currentQuestion < currentQuiz.questions.length - 1) {
        currentQuiz.currentQuestion++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

// Pregunta Anterior
function previousQuestion() {
    if (currentQuiz.currentQuestion > 0) {
        currentQuiz.currentQuestion--;
        loadQuestion();
    }
}

// Actualizar Botones de Navegación
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const isFirst = currentQuiz.currentQuestion === 0;
    const isLast = currentQuiz.currentQuestion === currentQuiz.questions.length - 1;

    prevBtn.style.display = isFirst ? 'none' : 'block';
    nextBtn.textContent = isLast ? 'Finalizar' : 'Siguiente';
    nextBtn.className = isLast ? 'btn-nav primary danger' : 'btn-nav primary';
}

// Actualizar Pantalla de Puntuación
function updateScoreDisplay() {
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;

    currentQuiz.answers.forEach((answer, index) => {
        if (answer === undefined) {
            skipped++;
        } else if (answer === currentQuiz.questions[index].correct) {
            correct++;
        } else {
            incorrect++;
        }
    });

    document.getElementById('correctCount').textContent = correct;
    document.getElementById('incorrectCount').textContent = incorrect;
    document.getElementById('skippedCount').textContent = skipped;
}

// Iniciar Temporizador
function startTimer() {
    currentQuiz.timeLeft = currentQuiz.timePerQuestion;
    clearInterval(currentQuiz.timerInterval);

    currentQuiz.timerInterval = setInterval(() => {
        currentQuiz.timeLeft--;
        document.getElementById('timeLeft').textContent = currentQuiz.timeLeft;

        if (currentQuiz.timeLeft <= 10) {
            document.getElementById('timerDisplay').classList.add('warning');
        } else {
            document.getElementById('timerDisplay').classList.remove('warning');
        }

        if (currentQuiz.timeLeft <= 0) {
            nextQuestion();
        }
    }, 1000);
}

// Detener Temporizador
function stopTimer() {
    if (currentQuiz.timerInterval) {
        clearInterval(currentQuiz.timerInterval);
    }
    document.getElementById('timerDisplay').classList.add('hidden');
    document.getElementById('timerDisplay').classList.remove('warning');
}

// Finalizar Quiz
function finishQuiz() {
    stopTimer();

    // Calcular puntuación
    let correct = 0;
    let incorrect = 0;
    let skipped = 0;

    currentQuiz.answers.forEach((answer, index) => {
        if (answer === undefined) {
            skipped++;
        } else if (answer === currentQuiz.questions[index].correct) {
            correct++;
        } else {
            incorrect++;
        }
    });

    currentQuiz.score = correct;
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((correct / totalQuestions) * 100);

    // Guardar récord
    records.push({
        mode: currentQuiz.mode === 'difficulty' ? currentQuiz.difficulty : currentQuiz.mode,
        score: `${correct}/${totalQuestions}`,
        percentage: percentage,
        date: new Date().toLocaleDateString('es-ES'),
        answers: currentQuiz.answers
    });
    localStorage.setItem('quizRecords', JSON.stringify(records));

    // Mostrar resultados
    showResults(correct, incorrect, skipped, percentage);
}

// Mostrar Resultados
function showResults(correct, incorrect, skipped, percentage) {
    hideAllSections();
    document.getElementById('resultsScreen').classList.remove('hidden');

    document.getElementById('finalScore').textContent = correct;
    document.getElementById('finalPercentage').textContent = `${percentage}%`;
    document.getElementById('resultsCorrect').textContent = correct;
    document.getElementById('resultsIncorrect').textContent = incorrect;
    document.getElementById('resultsSkipped').textContent = skipped;

    // Mensaje de desempeño
    const messageDiv = document.getElementById('performanceMessage');
    let message = '';
    let className = '';

    if (percentage >= 90) {
        message = '¡Excelente! ¡Eres un experto en biología!';
        className = 'excellent';
    } else if (percentage >= 70) {
        message = '¡Muy bien! Tienes un buen conocimiento de biología.';
        className = 'good';
    } else if (percentage >= 50) {
        message = 'Promedio. Sigue estudiando para mejorar.';
        className = 'average';
    } else {
        message = 'Necesitas repasar los conceptos de biología.';
        className = 'poor';
    }

    messageDiv.textContent = message;
    messageDiv.className = `performance-message ${className}`;
}

// Revisar Respuestas
function reviewAnswers() {
    hideAllSections();
    document.getElementById('reviewScreen').classList.remove('hidden');

    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = '';

    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = currentQuiz.answers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;
        const isSkipped = userAnswer === undefined;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isSkipped ? 'skipped' : isCorrect ? 'correct' : 'incorrect'}`;

        let answerStatus = '';
        if (isSkipped) {
            answerStatus = '<div class="review-item-answer">Sin responder</div>';
        } else {
            answerStatus = `
                <div class="review-item-answer user">Tu respuesta: ${question.options[userAnswer]}</div>
                ${!isCorrect ? `<div class="review-item-answer correct">Respuesta correcta: ${question.options[correctAnswer]}</div>` : ''}
            `;
        }

        reviewItem.innerHTML = `
            <div class="review-item-number">Pregunta ${index + 1} - ${question.difficulty.toUpperCase()}</div>
            <div class="review-item-question">${question.question}</div>
            ${answerStatus}
            <div class="review-item-explanation">ℹ️ ${question.explanation}</div>
        `;

        reviewContent.appendChild(reviewItem);
    });
}

// Cerrar Revisión
function closeReview() {
    hideAllSections();
    document.getElementById('resultsScreen').classList.remove('hidden');
}

// Repetir Quiz
function retakeQuiz() {
    startQuiz(currentQuiz.mode, currentQuiz.difficulty);
}

// Mostrar Récords
function showRecords() {
    hideAllSections();
    document.getElementById('recordsScreen').classList.remove('hidden');

    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';

    if (records.length === 0) {
        recordsList.innerHTML = '<div class="records-empty">No hay récords aún. ¡Juega tu primer quiz!</div>';
        return;
    }

    records.slice().reverse().forEach((record, index) => {
        const recordItem = document.createElement('div');
        recordItem.className = 'record-item';
        recordItem.innerHTML = `
            <div class="record-info">
                <div class="record-mode">${record.mode.toUpperCase()}</div>
                <div class="record-date">${record.date}</div>
            </div>
            <div class="record-score">${record.score} (${record.percentage}%)</div>
        `;
        recordsList.appendChild(recordItem);
    });
}

// Ocultar todas las secciones
function hideAllSections() {
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('difficultyMenu').classList.add('hidden');
    document.getElementById('quizContainer').classList.add('hidden');
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('reviewScreen').classList.add('hidden');
    document.getElementById('recordsScreen').classList.add('hidden');
}
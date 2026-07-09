package com.example.biologyquiz

import android.os.Bundle
import android.widget.Button
import android.widget.ProgressBar
import android.widget.RadioButton
import android.widget.RadioGroup
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class QuizActivity : AppCompatActivity() {
    private var currentQuestion = 0
    private var score = 0
    private val questions = listOf(
        Question(
            "¿Cuál es la unidad básica de la vida?",
            listOf("Átomo", "Célula", "Molécula", "Proteína"),
            1
        ),
        Question(
            "¿Cuántos cromosomas tiene un humano?",
            listOf("23", "46", "48", "50"),
            1
        ),
        Question(
            "¿Cuál es el proceso por el cual las plantas producen su propio alimento?",
            listOf("Respiración", "Fermentación", "Fotosíntesis", "Digestión"),
            2
        ),
        Question(
            "¿Cuál es la molécula que transporta la información genética?",
            listOf("ARN", "ADN", "Proteína", "Lípido"),
            1
        ),
        Question(
            "¿Cuántas cámaras tiene el corazón humano?",
            listOf("2", "3", "4", "5"),
            2
        )
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_quiz)
        
        loadQuestion()
        
        val submitButton = findViewById<Button>(R.id.submitButton)
        submitButton.setOnClickListener {
            checkAnswer()
        }
    }

    private fun loadQuestion() {
        val question = questions[currentQuestion]
        val questionText = findViewById<TextView>(R.id.questionText)
        val radioGroup = findViewById<RadioGroup>(R.id.optionsGroup)
        val progressBar = findViewById<ProgressBar>(R.id.progressBar)
        
        questionText.text = question.question
        progressBar.progress = currentQuestion + 1
        
        radioGroup.removeAllViews()
        question.options.forEachIndexed { index, option ->
            val radioButton = RadioButton(this)
            radioButton.id = index
            radioButton.text = option
            radioGroup.addView(radioButton)
        }
    }

    private fun checkAnswer() {
        val radioGroup = findViewById<RadioGroup>(R.id.optionsGroup)
        val selectedId = radioGroup.checkedRadioButtonId
        
        if (selectedId == -1) {
            Toast.makeText(this, "Por favor selecciona una opción", Toast.LENGTH_SHORT).show()
            return
        }
        
        val question = questions[currentQuestion]
        if (selectedId == question.correctAnswer) {
            score++
            Toast.makeText(this, "¡Correcto!", Toast.LENGTH_SHORT).show()
        } else {
            Toast.makeText(this, "Incorrecto", Toast.LENGTH_SHORT).show()
        }
        
        currentQuestion++
        
        if (currentQuestion < questions.size) {
            loadQuestion()
        } else {
            showResults()
        }
    }

    private fun showResults() {
        Toast.makeText(this, "Quiz terminado. Puntuación: $score/${questions.size}", Toast.LENGTH_LONG).show()
        finish()
    }
}
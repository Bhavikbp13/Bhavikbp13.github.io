<template>
  <div class="projects-page">
    <div class="header">
      <h1 class="page-title">My Projects</h1>
      <p class="subtitle">A selection of my academic and personal development work.</p>
    </div>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.title" class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" rel="noopener noreferrer" class="cta-button">View on GitHub</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Machine Learning App",
    description: "Classification of handwritten digits from the MNIST dataset using NumPy and scikit-learn.",
    link: "https://github.com/Bhavikbp13/COMP472-Projects"
  },
  {
    title: "IoT Container Farm System",
    description: "Telemetry data transmission and motor control for a container farm using Azure IoT Hub.",
    link: "https://github.com/Bhavikbp13/FarmIoT"
  },
  {
    title: "Home Budget Tracker",
    description: "Desktop expense-tracking application built with C# and WPF, using SQLite for data persistence.",
    link: "https://github.com/Bhavikbp13/HomeBudgetGUI_CurryOnWhiteRice"
  },
  {
    title: "Task Reminder App",
    description: "Android application for task management with priority levels and custom time reminders.",
    link: "https://github.com/Bhavikbp13/AppDev2"
  },
  {
    title: "Game Programming Assignments",
    description: "Collection of game development projects and graphics programming assignments.",
    link: "https://github.com/Bhavikbp13/GameProgramming2021"
  }
];
</script>

<style scoped>
.projects-page {
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1rem;
}

.subtitle {
  color: #64748b;
  font-size: 1.1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  margin-top: 0;
  color: #1e293b;
  font-size: 1.4rem;
}

.project-card p {
  color: #475569;
  line-height: 1.6;
  flex-grow: 1; /* Pushes the button to the bottom */
  margin-bottom: 1.5rem;
}

/* Uses the global .cta-button style we created earlier! */
.cta-button {
  align-self: flex-start;
}
</style>
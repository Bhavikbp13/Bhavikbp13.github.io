<template>
  <div class="skills-page">
    <div class="skills-header">
      <h1 class="page-title">Technical Skills</h1>
      <p class="subtitle">A collection of the technologies, languages, and tools I use to build software.</p>
    </div>

    <div v-for="category in skillCategories" :key="category.name" class="category-section">
      <h2 class="category-title">{{ category.name }}</h2>
      
      <div class="skills-grid">
        <div v-for="skill in category.skills" :key="skill.name" class="skill-card">
          <img v-if="skill.icon" :src="skill.icon" :alt="skill.name" class="skill-icon" />
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </div>

    <div class="category-section">
      <h2 class="category-title">Core Concepts & AI Tools</h2>
      <div class="tags-container">
        <span class="concept-tag">Agile / Scrum</span>
        <span class="concept-tag">REST APIs</span>
        <span class="concept-tag">Object-Oriented Programming (OOP)</span>
        <span class="concept-tag">Machine Learning</span>
        <span class="concept-tag">Internet of Things (IoT)</span>
        <span class="concept-tag">ChatGPT / Claude / Gemini</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// This array holds all the data. Vue loops through this to generate the HTML automatically!
const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" }
    ]
  },
  {
    name: "Frameworks & Platforms",
    skills: [
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "Xamarin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" }
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
    ]
  },
  {
    name: "Developer Tools",
    skills: [
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
      { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" }
    ]
  }
];
</script>

<style scoped>
.skills-page {
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 2rem;
  color: #333;
}

.skills-header {
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
  max-width: 600px;
  margin: 0 auto;
}

.category-section {
  margin-bottom: 3.5rem;
}

.category-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

/* CSS Grid is perfect here! 
  'auto-fill' automatically creates as many columns as it can fit 
  while keeping them at least 140px wide. 
*/
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1.5rem;
}

/* Individual Skill Cards */
.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
  transition: transform 0.2s, box-shadow 0.2s;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
}

.skill-name {
  font-weight: 600;
  color: #475569;
  font-size: 0.95rem;
  text-align: center;
}

/* Styling for the Concepts section at the bottom */
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.concept-tag {
  background-color: #f8fafc;
  color: #3b82f6;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  border: 1px solid #bfdbfe;
}
</style>
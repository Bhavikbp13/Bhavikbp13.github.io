<template>
  <div class="about-container">
    
    <div class="profile-card">
      <div class="avatar-placeholder">
        <span class="emoji">👋</span>
      </div>
      
      <h2 class="title">Hello!</h2>
      <p class="tagline">Bachelors in Computer Science</p>
      
      <div class="badges">
        <span class="badge">📍 Montreal / Remote</span>
        <span class="badge">💻 Frontend & Backend</span>
        <span class="badge">🏒 Hockey Enthusiast</span>
      </div>
    </div>

    <div class="bio-content">
      <h1 class="header">About Me</h1>
      
      <p class="text-block">
        I am a recent Computer Science graduate passionate about building clean, efficient, and user-friendly applications. I enjoy tackling complex problems and writing code that scales elegantly from the backend database all the way to the frontend user interface.
      </p>
      
      <p class="text-block">
        Currently, I am seeking entry-level development opportunities where I can contribute to a collaborative team, continue growing my technical skillset, and build software that makes a real impact. 
      </p>
      
      <p class="text-block">
        When I am not in my code editor, you can usually find me catching a hockey game, exploring new tech stacks, or continuously tweaking this portfolio!
      </p>
      
      <a href="https://www.linkedin.com/in/bhavikbp13/" target="_blank" rel="noopener noreferrer" class="cta-button">Let's Connect</a>
    </div>

  </div>
</template>

<style scoped>
/* 1. Main Container 
  Uses CSS Grid to create a flexible two-column layout that centers on the page.
*/
.about-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 2rem;
  color: #333;
}

/* 2. The Profile Card (Left Side)
*/
.profile-card {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  height: fit-content;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  background: #f0f4f8;
  border-radius: 50%;
  margin: 0 auto 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: 4px solid white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.title {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.tagline {
  color: #64748b;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

/* Little tags for quick skills/facts */
.badges {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.badge {
  background: #f8fafc;
  color: #475569;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e2e8f0;
}

/* 3. The Bio Content (Right Side)
*/
.bio-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 1.5rem;
  margin-top: 0;
}

.text-block {
  line-height: 1.7;
  font-size: 1.1rem;
  color: #475569;
  margin-bottom: 1.5rem;
}

/* 4. The Button
*/
.cta-button {
  display: inline-block;
  background-color: #3b82f6;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  width: fit-content;
  margin-top: 1rem;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

/* 5. Mobile Responsiveness! 
  When the screen gets smaller than 768px, it stacks into one column.
*/
@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 2rem auto;
  }
  
  .header {
    text-align: center;
  }
  
  .cta-button {
    margin: 1rem auto 0 auto;
  }
}
</style>
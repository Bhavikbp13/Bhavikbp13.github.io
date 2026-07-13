<template>
  <div class="contact-page">
    <h2 class="page-title">Contact</h2>
    
    <div class="links-container">
      <p>
        <strong>E-Mail:</strong> 
        <a href="mailto:bhavikbp13@gmail.com" class="contact-link">bhavikbp13@gmail.com</a>
      </p>
      
      <p>
        <strong>LinkedIn:</strong> 
        <a href="https://www.linkedin.com/in/bhavikbp13" target="_blank" rel="noopener noreferrer" class="contact-link">linkedin.com/in/bhavikbp13</a>
      </p>
      
      <p>
        <strong>GitHub:</strong> 
        <a href="https://github.com/Bhavikbp13" target="_blank" rel="noopener noreferrer" class="contact-link">github.com/Bhavikbp13</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Centers the content and adds breathing room */
.contact-page {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
}

/* Matches the dark, bold header style from your About page */
.page-title {
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 2rem;
  text-align: center;
}

.links-container {
  font-size: 1.2rem;
  line-height: 2.5;
  text-align: center;
  color: #475569;
}

/* Gives the links a professional blue color with a nice hover effect */
.contact-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #2563eb;
  text-decoration: underline;
}
</style>
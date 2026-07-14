<template>
  <header>
    <router-link to="/" class="logo-link" @click="closeMenu">
      <div class="logo">
        <div class="circle">B</div>
        <h2>Bhavik</h2>
      </div>
    </router-link>

    <nav class="desktop-menu">
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/skills">Skills</router-link>
    </nav>

    <button class="desktop-contact-btn" @click="$router.push('/contact')">Contact</button>

    <button class="hamburger-btn" @click="toggleMenu">
      <span class="bar" :class="{ 'open': isMenuOpen }"></span>
      <span class="bar" :class="{ 'open': isMenuOpen }"></span>
      <span class="bar" :class="{ 'open': isMenuOpen }"></span>
    </button>

    <div class="overlay" :class="{ 'open': isMenuOpen }" @click="closeMenu"></div>

    <div class="side-menu" :class="{ 'open': isMenuOpen }">
      <div class="side-header">
        <h2>Menu</h2>
        <button class="close-btn" @click="closeMenu">&times;</button>
      </div>
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link to="/about" @click="closeMenu">About</router-link>
      <router-link to="/projects" @click="closeMenu">Projects</router-link>
      <router-link to="/skills" @click="closeMenu">Skills</router-link>
      <router-link to="/contact" class="mobile-contact-link" @click="closeMenu">Contact</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
/* We use scoped CSS here ONLY for the mobile menu mechanics. 
  Your global style.css will still control all the main colors, fonts, and the desktop layout!
*/

/* Hide the hamburger icon on desktop */
.hamburger-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  padding: 0;
  z-index: 1000; /* Ensure it stays clickable */
}

/* Hamburger lines */
.bar {
  height: 3px;
  width: 100%;
  background-color: #222;
  border-radius: 5px;
  transition: all 0.3s ease;
}

/* Animate hamburger to an 'X' */
.bar.open:nth-child(1) { transform: translateY(9px) rotate(45deg); }
.bar.open:nth-child(2) { opacity: 0; }
.bar.open:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

/* The dark background when menu is open */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 998;
}

.overlay.open {
  opacity: 1;
  visibility: visible;
}

/* The sliding side drawer */
.side-menu {
  position: fixed;
  top: 0;
  right: -300px; /* Hidden off-screen */
  width: 250px;
  height: 100vh;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transition: right 0.3s ease-in-out;
  z-index: 999;
}

.side-menu.open {
  right: 0; /* Slides in */
}

.side-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #666;
  cursor: pointer;
  padding: 0;
}

.close-btn:hover {
  background: none;
  color: #007bff;
}

/* Style the links inside the side menu */
.side-menu a {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  transition: 0.3s;
}

.side-menu a:hover {
  color: #007bff;
}

.mobile-contact-link {
  margin-top: 1rem;
  color: #007bff !important;
  font-weight: bold !important;
}

/* MOBILE BREAKPOINT 
  Overrides for screens 900px or smaller 
*/
@media (max-width: 900px) {
  /* Hide the original desktop elements */
  .desktop-menu, 
  .desktop-contact-btn {
    display: none;
  }
  
  /* Reveal the hamburger */
  .hamburger-btn {
    display: flex;
  }
}
</style>
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  useEffect(() => {
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    const handleMobileMenu = () => {
      mobileMenu?.classList.toggle('hidden');
    };
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', handleMobileMenu);
    }
    
    // Navbar Scroll
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('nav-blur');
      } else {
        navbar?.classList.remove('nav-blur');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const href = anchor.getAttribute('href'); // Changed from this.getAttribute
    const target = document.querySelector('href');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mobileMenu?.classList.add('hidden');
    }
  });
});
    
    // Reveal Sections
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    reveals.forEach(reveal => revealObserver.observe(reveal));
    
    // Cleanup
    return () => {
      if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener('click', handleMobileMenu);
      }
      window.removeEventListener('scroll', handleScroll);
      reveals.forEach(reveal => revealObserver.unobserve(reveal));
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap');
        
        * {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Sora', sans-serif;
        }
        
        /* Animations */
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes scaleIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        
        .animate-slideUp {
            animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-scaleIn {
            animation: scaleIn 0.6s ease-out forwards;
        }
        
        /* Gradient Text */
        .gradient-text {
            background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        /* Card Styles */
        .card-hover {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 20px 60px rgba(255, 107, 107, 0.2);
        }
        
        /* Custom Shapes */
        .blob {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
        }
        
        .blob-2 {
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
            background: linear-gradient(135deg, rgba(78, 205, 196, 0.1) 0%, rgba(255, 230, 109, 0.1) 100%);
        }
        
        /* Scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #FF6B6B 0%, #4ECDC4 100%);
            border-radius: 10px;
        }
        
        /* Section Reveal */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
        }
        
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Navbar */
        .nav-blur {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }
        
        /* Project Card */
        .project-card {
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 60px rgba(255, 107, 107, 0.3);
        }
        
        .project-content {
            position: relative;
            z-index: 10;
        }
        
        .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
        }
        
        .project-card:hover .project-image {
            transform: scale(1.05);
        }
        
        .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255, 107, 107, 0.8) 0%, rgba(78, 205, 196, 0.8) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .project-card:hover .project-overlay {
            opacity: 1;
        }
        
        /* Button */
        .btn-primary {
            background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(255, 107, 107, 0.4);
        }
        
        .btn-secondary {
            background: linear-gradient(135deg, #4ECDC4 0%, #6FE5DD 100%);
            box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
            transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(78, 205, 196, 0.4);
        }

        .bg-light {
            background-color: #F8F9FA;
        }

        .text-dark {
            color: #1A1A2E;
        }

        .text-primary {
            color: #FF6B6B;
        }

        .text-secondary {
            color: #4ECDC4;
        }

        .text-accent {
            color: #FFE66D;
        }

        .bg-dark {
            background-color: #1A1A2E;
        }

        .bg-primary {
            background-color: #FF6B6B;
        }

        .bg-secondary {
            background-color: #4ECDC4;
        }

        .bg-accent {
            background-color: #FFE66D;
        }

        .border-primary {
            border-color: #FF6B6B;
        }

        .from-primary {
            --tw-gradient-from: #FF6B6B;
        }

        .to-secondary {
            --tw-gradient-to: #4ECDC4;
        }

        .via-secondary {
            --tw-gradient-via: #4ECDC4;
        }

        .to-accent {
            --tw-gradient-to: #FFE66D;
        }

        .from-green-400 {
            --tw-gradient-from: #4ade80;
        }

        .to-emerald-500 {
            --tw-gradient-to: #10b981;
        }

        .from-blue-400 {
            --tw-gradient-from: #60a5fa;
        }

        .to-cyan-500 {
            --tw-gradient-to: #06b6d4;
        }

        .from-gray-700 {
            --tw-gradient-from: #374151;
        }

        .to-gray-900 {
            --tw-gradient-to: #111827;
        }
      `}</style>

      <div className="bg-light text-dark overflow-x-hidden">
        
        {/* Decorative Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 -left-40 w-96 h-96 blob animate-float"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 blob-2 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Navigation */}
        <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <Link href="#home" className="text-3xl font-bold font-display">
                <span className="text-primary">T</span><span className="text-dark">A</span>
              </Link>
              
              <div className="hidden md:flex items-center gap-8">
                <Link href="#home" className="nav-link text-dark hover:text-primary transition-colors font-medium">Home</Link>
                <Link href="#about" className="nav-link text-dark hover:text-primary transition-colors font-medium">About</Link>
                <Link href="#skills" className="nav-link text-dark hover:text-primary transition-colors font-medium">Skills</Link>
                <Link href="#projects" className="nav-link text-dark hover:text-primary transition-colors font-medium">Projects</Link>
                <Link href="#contact" className="btn-primary px-6 py-3 rounded-full text-white font-semibold">Contact</Link>
              </div>
              
              <button id="mobile-menu-btn" className="md:hidden text-dark focus:outline-none">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            
            <div id="mobile-menu" className="hidden md:hidden mt-6 bg-white rounded-3xl p-6 shadow-xl">
              <div className="flex flex-col gap-4">
                <Link href="#home" className="text-dark hover:text-primary transition-colors font-medium py-2">Home</Link>
                <Link href="#about" className="text-dark hover:text-primary transition-colors font-medium py-2">About</Link>
                <Link href="#skills" className="text-dark hover:text-primary transition-colors font-medium py-2">Skills</Link>
                <Link href="#projects" className="text-dark hover:text-primary transition-colors font-medium py-2">Projects</Link>
                <Link href="#contact" className="text-dark hover:text-primary transition-colors font-medium py-2">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-block mb-6 animate-fadeIn">
                  <span className="px-5 py-2 rounded-full bg-white shadow-lg text-sm font-semibold text-dark border-2 border-primary">
                    ✨ Available for Freelance
                  </span>
                </div>
                
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slideUp font-display leading-tight">
                  Hi, I&apos;m <br /><span className="gradient-text">Tamanna</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slideUp" style={{animationDelay: '0.2s'}}>
                  Creative Web Developer & UI/UX Designer crafting beautiful digital experiences
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp" style={{animationDelay: '0.4s'}}>
                  <Link href="#projects" className="btn-primary px-8 py-4 rounded-full text-white font-bold text-center">
                    View Projects
                  </Link>
                  <Link href="#contact" className="btn-secondary px-8 py-4 rounded-full text-white font-bold text-center">
                    Let&apos;s Connect
                  </Link>
                </div>
              </div>
              
              {/* Right Visual - Updated with Profile Photo */}
              <div className="relative animate-scaleIn" style={{animationDelay: '0.3s'}}>
                <div className="relative w-full aspect-square max-w-sm mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white">
                    <Image 
                      src="/profile-photo.jpg" 
                      alt="Tamanna Ansari - Portfolio Photo" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-accent animate-float"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-secondary opacity-50 animate-float" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-32 relative reveal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">About Me</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 font-display">
                Who I Am
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I&apos;m currently pursuing a <span className="font-bold text-primary">Bachelor&apos;s degree in Artificial Intelligence & Machine Learning</span> at <span className="font-bold text-secondary">Nexcore Institute of Technology</span>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My passion lies in creating <span className="font-bold text-primary">intuitive web interfaces</span> and <span className="font-bold text-secondary">aesthetically pleasing designs</span> that deliver exceptional user experiences.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center card-hover">
                  <div className="text-5xl font-bold gradient-text font-display mb-2">10+</div>
                  <div className="text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center card-hover">
                  <div className="text-5xl font-bold gradient-text font-display mb-2">6+</div>
                  <div className="text-gray-600 font-medium">Skills Mastered</div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center card-hover">
                  <div className="text-5xl font-bold gradient-text font-display mb-2">8+</div>
                  <div className="text-gray-600 font-medium">Certifications</div>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center card-hover">
                  <div className="text-5xl font-bold gradient-text font-display mb-2">∞</div>
                  <div className="text-gray-600 font-medium">Ideas & Dreams</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-32 relative reveal bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">My Toolkit</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 font-display">
                Skills & Technologies
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* HTML */}
              <div className="bg-light rounded-3xl p-8 text-center card-hover shadow-lg">
                <div className="w-20 h-20 mx-auto mb-4">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path>
                    <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
                    <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path>
                    <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">HTML</h3>
                <p className="text-sm text-gray-600">Structure</p>
              </div>
              
              {/* CSS */}
              <div className="bg-light rounded-3xl p-8 text-center card-hover shadow-lg">
                <div className="w-20 h-20 mx-auto mb-4">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path>
                    <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path>
                    <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path>
                    <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path>
                    <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path>
                    <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">CSS</h3>
                <p className="text-sm text-gray-600">Styling</p>
              </div>
              
              {/* Tailwind CSS */}
              <div className="bg-light rounded-3xl p-8 text-center card-hover shadow-lg">
                <div className="w-20 h-20 mx-auto mb-4">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">Tailwind</h3>
                <p className="text-sm text-gray-600">Framework</p>
              </div>
              
              {/* C Programming */}
              <div className="bg-light rounded-3xl p-8 text-center card-hover shadow-lg">
                <div className="w-20 h-20 mx-auto mb-4">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>
                    <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
                    <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">C</h3>
                <p className="text-sm text-gray-600">Programming</p>
              </div>
              
              {/* Figma */}
              <div className="bg-light rounded-3xl p-8 text-center card-hover shadow-lg">
                <div className="w-20 h-20 mx-auto mb-4">
                  <svg viewBox="0 0 128 128" className="w-full h-full">
                    <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"></path>
                    <path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path>
                    <path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path>
                    <path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path>
                    <path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-1">Figma</h3>
                <p className="text-sm text-gray-600">Design</p>
              </div>
              
              {/* WordPress */}
              <div className="bg-light rounded-3xl p-8 text-center card-hover shadow-lg">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                 <Image src="/WP.png" alt='Wordpress Image' className='w-40' width={300} height={300} />
                </div>
                <h3 className="font-bold text-lg mb-1">WordPress</h3>
                <p className="text-sm text-gray-600">CMS</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-32 relative reveal">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Portfolio</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 font-display">
                Featured Work
              </h2>
            </div>
            
            {/* Featured Coding Project */}
            <div className="mb-20">
              <Link href="YOUR_PROJECT_LINK_HERE" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-3xl p-8 md:p-12 shadow-xl card-hover">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold mb-4">
                      💻 Featured Project
                    </div>
                    <h3 className="text-4xl font-bold mb-4 font-display">Pinterest Clone</h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      A comprehensive web application recreating BookMyShow&apos;s core functionality with modern design patterns and interactive UI components.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 rounded-full bg-light text-sm font-semibold">HTML</span>
                      <span className="px-4 py-2 rounded-full bg-light text-sm font-semibold">Tailwind</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-primary font-bold">
                      View Project
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                    <Image src="/pinterest.png" alt="Pinterest Clone Project" fill className="project-image object-cover" />
                  </div>
                </div>
              </Link>
            </div>
            
            {/* UI/UX Projects Grid */}
            <h3 className="text-3xl font-bold mb-8 font-display gradient-text">🎨 UI/UX Designs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1: Blinkit Clone */}
              <Link href="YOUR_BLINKIT_LINK_HERE" target="_blank" rel="noopener noreferrer" className="project-card bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="aspect-video overflow-hidden relative">
                  <Image src="/blinkit.png" alt="Blinkit Clone" fill className="project-image object-cover" />
                  <div className="project-overlay">
                    <span className="text-white font-bold text-xl">View Project →</span>
                  </div>
                </div>
                <div className="p-6 project-content">
                  <span className="text-xs font-bold text-primary uppercase">Mobile App</span>
                  <h4 className="text-2xl font-bold mt-2 mb-3 font-display">Blinkit Clone</h4>
                  <p className="text-gray-600 mb-4">Modern grocery delivery app redesign with enhanced UX</p>
                </div>
              </Link>
              
              {/* Project 2: Gozoop */}
              <Link href="YOUR_GOZOOP_LINK_HERE" target="_blank" rel="noopener noreferrer" className="project-card bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="aspect-video overflow-hidden relative">
                  <Image src="/gozoop.png" alt="Gozoop Website" fill className="project-image object-cover" />
                  <div className="project-overlay">
                    <span className="text-white font-bold text-xl">View Project →</span>
                  </div>
                </div>
                <div className="p-6 project-content">
                  <span className="text-xs font-bold text-primary uppercase">Website</span>
                  <h4 className="text-2xl font-bold mt-2 mb-3 font-display">Gozoop</h4>
                  <p className="text-gray-600 mb-4">Creative agency website with portfolio showcase</p>
                </div>
              </Link>
              
              {/* Project 3: Urban Edge Clone */}
              <Link href="YOUR_PINTEREST_LINK_HERE" target="_blank" rel="noopener noreferrer" className="project-card bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="aspect-video overflow-hidden relative">
                  <Image src="/urban.png" alt="Pinterest Clone" fill className="project-image object-cover" />
                  <div className="project-overlay">
                    <span className="text-white font-bold text-xl">View Project →</span>
                  </div>
                </div>
                <div className="p-6 project-content">
                  <span className="text-xs font-bold text-primary uppercase">website</span>
                  <h4 className="text-2xl font-bold mt-2 mb-3 font-display">Edge Clone</h4>
                  <p className="text-gray-600 mb-4">E-commerce platform with streamlined checkout</p>
                </div>
              </Link>
              
              {/* Project 4: Travel Website */}
              <Link href="YOUR_TRAVEL_LINK_HERE" target="_blank" rel="noopener noreferrer" className="project-card bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="aspect-video overflow-hidden relative">
                  <Image src="/travel.png" alt="Travel Website" fill className="project-image object-cover" />
                  <div className="project-overlay">
                    <span className="text-white font-bold text-xl">View Project →</span>
                  </div>
                </div>
                <div className="p-6 project-content">
                  <span className="text-xs font-bold text-primary uppercase">Travel</span>
                  <h4 className="text-2xl font-bold mt-2 mb-3 font-display">Travel Website</h4>
                  <p className="text-gray-600 mb-4">Modern travel booking with immersive visuals</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-32 relative reveal bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-5xl md:text-6xl font-bold mt-4 font-display">
                Let&apos;s Work Together
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* WhatsApp */}
              <a href="https://wa.me/8700953211" target="_blank" rel="noopener noreferrer" className="bg-light rounded-3xl p-8 card-hover shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">WhatsApp</h4>
                <p className="text-sm text-gray-600">Chat with me</p>
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/tamanna-ansari-36832939a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bg-light rounded-3xl p-8 card-hover shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">LinkedIn</h4>
                <p className="text-sm text-gray-600">Connect with me</p>
              </a>
              
              {/* GitHub */}
              <a href="https://github.com/ansaritamanna23102006-debug" target="_blank" rel="noopener noreferrer" className="bg-light rounded-3xl p-8 card-hover shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2">GitHub</h4>
                <p className="text-sm text-gray-600">View my code</p>
              </a>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 bg-dark text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-lg mb-4">© 2026 Tamanna Ansari. Crafted with ❤️ and code.</p>
            <div className="flex gap-6 justify-center">
              <a href="https://github.com/ansaritamanna23102006-debug" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/tamanna-ansari-36832939a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:ansaritamanna23102006@gmail.com" className="hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
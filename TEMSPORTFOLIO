<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SiteSavvy - Frontend Developer</title>
    <!-- Google Fonts: Inter is preferred -->
    <link rel="stylesheet" href="./fontawesome-free-6.7.2-web/css/all.css">
    <!-- Font Awesome CDN for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <style>
        /* Design tokens */
        :root {
            --bg: #0c0d10;
            /* Deeper dark background */
            --card: #14171a;
            /* Dark card background */
            --muted: #9aaeb3;
            /* Light gray text */
            --accent: #8a2be2;
            /* Bright Purple (Violet) */
            --accent-2: #00ffff;
            /* Neon Cyan */
            --text: #e6f3f4;
            /* Near white text */
            --glass: rgba(255, 255, 255, 0.05);
            /* Lighter glass effect */
            --glass-border: rgba(255, 255, 255, 0.1);
            --radius: 12px;
            --transition: 350ms;
            --max-w: 1200px;
        }

        /* General Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg);
            background-image: radial-gradient(circle at top left, rgba(138, 43, 226, 0.06), transparent 50%),
                radial-gradient(circle at bottom right, rgba(0, 255, 255, 0.04), transparent 50%);
            color: var(--text);
            line-height: 1.6;
            scroll-behavior: smooth;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        .container {
            max-width: var(--max-w);
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Utility classes */
        .text-center {
            text-align: center;
        }

        /* Header/Navbar Styling */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 28px;
            background: rgba(12, 13, 16, 0.95);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            z-index: 1000;
            border-bottom: 1px solid var(--glass);
            transition: all var(--transition) ease;
        }

        .logo {
            font-size: 1.6em;
            font-weight: 800;
            color: var(--text);
            display: inline-flex;
            align-items: center;
            letter-spacing: -0.5px;
        }

        .logo-icon {
            color: var(--accent-2);
            background: rgba(0, 255, 255, 0.06);
            padding: 8px 10px;
            border-radius: var(--radius);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
            font-size: 0.8em;
        }

        nav {
            display: flex;
            align-items: center;
            gap: 6px
        }


        .nav-link {
            color: var(--muted);
            text-decoration: none;
            margin-left: 18px;
            padding: 8px 14px;
            transition: color var(--transition) ease, background var(--transition) ease, transform 0.2s;
            font-weight: 500;
            border-radius: 8px;
            font-family: Georgia, 'Times New Roman', Times, serif;
            position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
            color: #00ffff;
            background: var(--glass);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #00ffff;
            box-shadow: 0 0 6px var(--accent);
        }

        /* Animated underline for nav links */
        .nav-link {
            position: relative;
            overflow: visible;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            left: 12px;
            right: 12px;
            height: 2px;
            bottom: 6px;
            background: linear-gradient(90deg, var(--accent), var(--accent-2));
            transform: scaleX(0);
            transform-origin: left;
            transition: transform var(--transition) ease;
            border-radius: 2px;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
            transform: scaleX(1);
        }

        /* Typing caret */
        #caret {
            margin-left: 8px;
            color: var(--accent-2);
            opacity: 1;
            transition: opacity .2s
        }

        @keyframes blink {

            0%,
            50% {
                opacity: 1
            }

            51%,
            100% {
                opacity: 0
            }
        }

        #caret.blink {
            animation: blink 1s steps(2, end) infinite
        }

        /* Scroll progress bar (thin) */
        #scrollProgress {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            height: 3px;
            z-index: 1600;
            transform-origin: left;
            transform: scaleX(0);
            pointer-events: none;
            background: linear-gradient(90deg, var(--accent), var(--accent-2));
            box-shadow: 0 4px 18px rgba(0, 255, 255, 0.06);
        }

        /* Mobile nav toggle */
        .nav-toggle {
            display: none;
            background: transparent;
            border: 0;
            color: var(--accent-2);
            font-size: 24px;
            cursor: pointer;
            padding: 5px;
        }

        /* Section Styling */
        .section {
            padding: 140px 0 80px 0;
            min-height: 100vh;
            display: flex;
            font-family: Georgia, 'Times New Roman', Times, serif;
            align-items: center;
            /* Align content in the center vertically */
            position: relative;
        }

        .section-title {
            font-size: clamp(1.8em, 5vw, 2.8em);
            font-weight: 700;
            text-align: center;
            margin-bottom: 60px;
            color: var(--accent);
            text-transform: uppercase;
            font-family: Georgia, 'Times New Roman', Times, serif;
            letter-spacing: 2px;
            text-shadow: 0 0 8px rgba(138, 43, 226, 0.3);
        }

        /* Home Section Specific Styling */
        #home {
            text-align: center;
            padding-top: 200px;
            min-height: 80vh;
        }

        .home-content h2 {
            font-size: clamp(3rem, 8vw, 5rem);
            margin-bottom: 0.1em;
            color: #fff;
            font-weight: 900;
        }

        .home-content h3 {
            font-size: clamp(1.5rem, 4vw, 2.2em);
            font-weight: 500;
            color: var(--accent-2);
            margin-bottom: 1.5em;
            text-shadow: 0 0 6px rgba(0, 255, 255, 0.2);
        }

        .greeting,
        .bio-short {
            font-size: 1.2em;
            font-weight: 300;
            color: var(--muted);
            max-width: 600px;
            margin: 0 auto;
        }


        .bio-short {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
            font-size: 1.1em;
            color: #b0b0b0;
        }

        .more-text {
            display: none;
        }

        .see-more-btn {
            display: inline-block;
            margin-top: 12px;
            background: none;
            border: none;
            color: #00ffff;
            font-weight: 600;
            cursor: pointer;
            transition: color 0.3s ease;
            font-size: 1em;
        }

        .see-more-btn:hover {
            color: #00ffff;
            text-decoration: underline;
        }

        .cta-buttons {
            margin-top: 48px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .btn {
            padding: 14px 35px;
            border: none;
            border-radius: 50px;
            /* Pill shape */
            cursor: pointer;
            font-size: 1em;
            font-weight: 700;
            transition: all var(--transition) ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            text-decoration: none;
            display: inline-block;
        }

        .primary {
            background: linear-gradient(90deg, var(--accent), #d15fff);
            color: #fff;
        }

        .primary:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 15px 30px rgba(138, 43, 226, 0.4);
        }

        .secondary {
            background-color: transparent;
            color: var(--accent-2);
            border: 2px solid var(--accent-2);
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
        }

        .secondary:hover {
            background-color: rgba(0, 255, 255, 0.1);
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
        }

        .btn:focus {
            outline: 3px solid rgba(138, 43, 226, 0.3);
            outline-offset: 3px
        }

        /* About Section Specific Styling */
        .about-content {
            max-width: 800px;
            margin: 0 auto 50px auto;
            text-align: center;
            font-size: 1.1em;
            line-height: 1.8;
            color: var(--muted);
        }

        .about-content p {
            margin-bottom: 1.5em;
        }

        .stats {
            display: flex;
            justify-content: center;
            gap: clamp(30px, 8vw, 100px);
            text-align: center;
            flex-wrap: wrap;
        }

        .stat-item {
            padding: 15px;
            border-radius: var(--radius);
            transition: transform var(--transition);
        }

        .stat-item:hover {
            transform: translateY(-5px);
        }

        .stat-item .number {
            display: block;
            font-size: 3.5em;
            font-weight: 800;
            color: var(--accent-2);
            line-height: 1;
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
        }

        .stat-item .label {
            display: block;
            font-size: 1em;
            color: var(--accent);
            font-weight: 600;
            margin-top: 5px;
        }

        /* Projects and Skills Grid Styling (Card Look) */
        .projects-grid,
        .skills-grid {
            display: grid;
            /* Desktop: 3 columns */
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 30px;
            margin: 0 auto;
        }

        /* Responsive breakpoints: 2 columns and single column */
        @media (max-width: 1100px) {

            .projects-grid,
            .skills-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media (max-width: 700px) {

            .projects-grid,
            .skills-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Project card media (online images) */
        .project-card .card-media {
            width: 100%;
            height: 180px;
            overflow: hidden;
            border-radius: 10px;
            margin-bottom: 18px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0.02));
        }

        .project-card .card-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 400ms cubic-bezier(.2, .9, .3, 1);
        }

        .project-card:hover .card-media img {
            transform: scale(1.06) rotateZ(-0.3deg);
        }

        .project-card .card-body {
            text-align: left;
        }

        .project-card .card-body h3 {
            margin-top: 6px;
            margin-bottom: 8px;
        }

        .project-card .project-links {
            margin-top: 12px;
            display: flex;
            gap: 10px;
        }

        .project-card .project-links a {
            color: var(--accent-2);
            text-decoration: none;
            font-weight: 700;
            font-size: 0.95em;
        }

        .project-card .project-links a .fa-fw {
            margin-right: 8px;
        }

        .project-card,
        .skill-card {
            background-color: var(--card);
            border-radius: var(--radius);
            padding: 30px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
            border: 1px solid var(--glass-border);
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .project-card:hover,
        .skill-card:hover {
            transform: translateY(-8px) scale(1.01);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
            border-color: var(--accent);
            /* Highlight border on hover */
        }

        /* project overlay accent */
        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(138, 43, 226, 0.08) 0%, rgba(0, 255, 255, 0.02) 100%);
            opacity: 0;
            transition: opacity var(--transition);
            pointer-events: none;
        }

        .project-card:hover::before {
            opacity: 1;
        }

        .project-card .icon {
            font-size: 3em;
            display: block;
            margin-bottom: 15px;
            color: var(--accent-2);
        }

        .project-card h3 {
            color: var(--accent);
            margin-bottom: 10px;
            font-weight: 700;
        }

        .project-card p {
            color: var(--muted);
        }

        .skill-card {
            font-weight: 600;
            font-size: 1.1em;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            border-radius: 8px;
            background-color: var(--card);
            color: var(--text);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            /* Reduced shadow for subtler skill cards */
        }

        /* Contact Form Styling */
        .contact-content {
            max-width: 600px;
            margin: 0 auto;
        }

        .contact-form {
            display: grid;
            gap: 20px;
            margin-top: 30px;
        }

        .form-group {
            margin-bottom: 10px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--text);
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 15px;
            border: 1px solid var(--glass-border);
            border-radius: 8px;
            background-color: var(--card);
            color: var(--text);
            font-size: 1em;
            transition: border-color var(--transition), box-shadow var(--transition);
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent);
            box-shadow: 0 0 10px rgba(138, 43, 226, 0.4);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 150px;
        }

        .submit-btn {
            width: 100%;
            padding: 15px;
            border-radius: 8px;
            font-size: 1.1em;
            margin-top: 10px;
        }

        #form-message {
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            background-color: rgba(138, 43, 226, 0.1);
            color: var(--accent-2);
            text-align: center;
            font-weight: 600;
            opacity: 0;
            transition: opacity 0.5s;
        }

        /* Footer Styling */
        .footer {
            background-color: #1a1a1a;
            padding: 40px 20px;
            text-align: center;
            border-top: 1px solid var(--glass);
        }

        .social-links {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            gap: 25px;
        }

        .social-links a {
            color: var(--muted);
            font-size: 1.8em;
            transition: color var(--transition);
            text-decoration: none;
        }

        .social-links a:hover {
            color: var(--accent-2);
            transform: scale(1.1);
        }

        .footer p {
            font-size: 0.9em;
            color: var(--muted);
        }

        /* Animations & Motion (Keep existing animations and improve them slightly) */
        /* ... existing animation styles ... */

        .fade-in {
            opacity: 0;
            transform: translateY(12px);
            transition: opacity .8s cubic-bezier(0.17, 0.84, 0.44, 1), transform .8s cubic-bezier(0.17, 0.84, 0.44, 1);
        }

        .fade-in.in-view {
            opacity: 1;
            transform: none;
        }

        .slide-up {
            opacity: 0;
            transform: translateY(18px);
            transition: opacity .8s cubic-bezier(.2, .8, .2, 1), transform .8s cubic-bezier(.2, .8, .2, 1);
        }

        .slide-up.in-view {
            opacity: 1;
            transform: none;
        }

        /* 3D / Depth enhancements */
        .scene {
            perspective: 1200px;
        }

        .home-content,
        .projects-grid,
        .skills-grid {
            transform-style: preserve-3d;
        }

        /* Card base: preserve 3D, smoother transforms */
        .project-card,
        .skill-card {
            will-change: transform, box-shadow;
            backface-visibility: hidden;
            transform-origin: center;
            transition: transform .35s cubic-bezier(.2, .9, .3, 1), box-shadow .35s cubic-bezier(.2, .9, .3, 1);
        }

        /* Hover pop and subtle 3D tilt (fallback to simple lift for reduced-motion) */
        @media (prefers-reduced-motion: no-preference) {

            .project-card:hover,
            .skill-card:hover {
                transform: translateY(-12px) translateZ(18px) scale(1.025);
                box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7);
            }
        }

        /* Floating animation for emphasis on featured cards */
        @keyframes float3d {
            0% {
                transform: translateY(0) translateZ(0) rotateZ(0);
            }

            50% {
                transform: translateY(-8px) translateZ(10px) rotateZ(-0.25deg);
            }

            100% {
                transform: translateY(0) translateZ(0) rotateZ(0);
            }
        }

        .project-card.float {
            animation: float3d 6s ease-in-out infinite;
        }

        /* Decorative glow responds to tilt */
        .project-card::after {
            content: '';
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: radial-gradient(600px 200px at 10% 10%, rgba(0, 255, 255, 0.06), transparent 20%),
                radial-gradient(400px 150px at 90% 90%, rgba(138, 43, 226, 0.04), transparent 30%);
            mix-blend-mode: screen;
            transition: opacity .35s;
            opacity: 0;
        }

        .project-card.in-view::after,
        .project-card:hover::after {
            opacity: 1;
        }

        /* smaller tilt for skill cards */
        .skill-card {
            transition: transform .28s ease, box-shadow .28s ease;
        }

        .skill-card.in-view {
            transform: translateZ(8px);
        }

        /* reduce intensity on touch/small screens */
        @media (pointer: coarse) {

            .project-card,
            .skill-card {
                transition: transform .18s ease;
            }

            .project-card:hover,
            .skill-card:hover {
                transform: translateY(-6px) scale(1.01);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
            }
        }

        /* Responsive */
        @media (max-width: 900px) {
            .navbar {
                padding: 12px 14px
            }

            .nav-toggle {
                display: inline-flex
            }

            nav {
                display: none;
                position: absolute;
                right: 14px;
                top: 64px;
                background: var(--card);
                padding: 12px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                min-width: 200px;
                flex-direction: column;
                gap: 8px;
                border: 1px solid var(--glass-border);
            }

            nav.open {
                display: flex;
            }

            .nav-link {
                margin-left: 0;
                width: 100%;
                text-align: center;
            }

            .nav-link.active::after {
                display: none;
            }

            .section {
                padding-top: 100px;
                min-height: auto;
            }

            .home-content h2 {
                font-size: clamp(2.5rem, 10vw, 4rem);
            }

            .cta-buttons {
                flex-direction: column;
                gap: 15px;
                padding: 0 30px;
            }

            .btn {
                width: 100%;
            }

            .stats {
                gap: 30px;
            }

            .stat-item {
                flex-basis: 40%;
                /* Two items per row on small screens */
            }

            .projects-grid,
            .skills-grid {
                gap: 20px;
            }
        }

        /* Video preview modal and play overlay */
        .card-media {
            position: relative;
        }

        .card-media .play-button {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(180deg, rgba(0, 255, 255, 0.12), rgba(138, 43, 226, 0.12));
            color: var(--accent-2);
            border: none;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
            cursor: pointer;
            z-index: 6;
        }

        .preview-modal {
            position: fixed;
            inset: 0;
            display: none;
            align-items: center;
            justify-content: center;
            background: rgba(2, 6, 10, 0.7);
            z-index: 2000;
            padding: 28px;
        }

        .preview-modal.open {
            display: flex;
        }

        .preview-modal .panel {
            width: 100%;
            max-width: 1100px;
            background: var(--card);
            border-radius: 12px;
            overflow: hidden;
        }

        .preview-modal .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }

        .preview-modal .title {
            color: var(--text);
            font-weight: 700;
        }

        .preview-modal .content {
            background: #000;
            height: 60vh;
            max-height: 72vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .preview-modal video {
            width: 100%;
            height: 100%;
            background: #000;
        }

        .preview-modal .close {
            background: transparent;
            border: 0;
            color: var(--accent-2);
            cursor: pointer;
            font-weight: 700;
        }
    </style>
</head>

<body>
    <!-- Mobile Menu Toggle -->
    <header class="navbar">
        <h1 class="logo"><i class="fa-solid fa-laptop-code logo-icon" aria-hidden="true"></i>SiteSavvy</h1>
        <nav id="main-nav">
            <a href="#home" class="nav-link active">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#contact" class="nav-link">Contact</a>
        </nav>
        <button class="nav-toggle" aria-controls="main-nav" aria-expanded="false">
            <i class="fa-solid fa-bars"></i>
        </button>
    </header>

    <!-- scroll progress bar -->
    <div id="scrollProgress" aria-hidden="true"></div>
    <main>
        <!-- HOME SECTION -->
        <section id="home" class="section">
            <div class="container home-content">
                <p class="greeting slide-up">HI, I'm</p>
                <h2 class="slide-up" style="transition-delay: 100ms;">Marcus Thelma</h2>
                <h3 class="slide-up" style="transition-delay: 200ms;"><span id="roleTyped">Full Stack
                        Developer</span><span id="caret">|</span></h3>
                <p class="bio-short slide-up" style="transition-delay: 300ms;">
                    I’m a dedicated Full Stack Developer who thrives on transforming complex requirements into
                    intuitive, high-performance digital solutions. With a strong eye for design and deep technical
                    expertise, I create seamless user experiences powered by clean, efficient, and scalable code.
                    From crafting sleek front-end interfaces to building robust back-end systems, my goal is to deliver
                    web applications that are both visually compelling and technically sound.
                    <span class="more-text">
                        My skill set spans across the full development spectrum — from crafting elegant, responsive
                        interfaces with HTML, CSS, and JavaScript to building scalable back-end systems using PHP and
                        modern
                        frameworks. I’m also proficient with Bootstrap, React, and Node.js, and I rely on Git and GitHub
                        for
                        version control and team collaboration. I’m passionate about writing clean, maintainable code,
                        optimizing performance, and continuously learning new technologies to stay ahead in the
                        ever-evolving world of web development.
                    </span>
                    <button id="see-more-btn" class="see-more-btn">See More</button>
                </p>
                <div class="cta-buttons slide-up" style="transition-delay: 400ms;">
                    <a href="#contact" class="btn primary">Hire Me</a>
                    <a href="#projects" class="btn secondary">View Projects</a>
                </div>
            </div>
        </section>

        <!-- ABOUT ME SECTION -->
        <section id="about" class="section">
            <div class="container">
                <h2 class="section-title fade-in" style="color: #00ffff;">ABOUT ME</h2>
                <div class="about-content fade-in" style="transition-delay: 100ms;">
                    <p>
                        I’m a passionate <b>Full Stack Developer</b> with <b>one year of experience</b> building
                        responsive and user-friendly web applications.<br>
                        I specialize in <b>HTML, CSS, JavaScript, PHP</b>, and <b>GitHub</b>, crafting clean and
                        efficient code that transforms ideas into functional, visually engaging digital
                        products.<br>
                        I enjoy bridging the gap between design and functionality — ensuring that every project not only
                        looks great but performs flawlessly across all devices.<br>
                        With a continuous drive to learn and adapt to new technologies, I’m committed to delivering
                        modern, scalable, and impactful web solutions that help businesses and users succeed online.
                    </p>

                </div>
                <div class="stats fade-in" style="transition-delay: 200ms;">
                    <div class="stat-item">
                        <span class="number">1+</span>
                        <span class="label">Year Experience</span>
                    </div>
                    <div class="stat-item">
                        <span class="number">1+</span>
                        <span class="label">Project Completed</span>
                    </div>
                    <div class="stat-item">
                        <span class="number">1+</span>
                        <span class="label">Happy Client</span>
                    </div>
                    <div class="stat-item">
                        <span class="number">1000+</span>
                        <span class="label">Commits/Year</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- PROJECTS SECTION -->
        <section id="projects" class="section">
            <div class="container">
                <h2 class="section-title fade-in">My Portfolio</h2>
                <div class="projects-grid">
                    <div class="project-card"
                        data-video="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4">
                        <div class="card-media">
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1"
                                alt="Ecommerce website preview">
                            <button class="play-button" aria-label="Play project video"><i
                                    class="fa-solid fa-play"></i></button>
                        </div>
                        <div class="card-body">
                            <h3>E-commerce Website</h3>
                            <p>Online store with product catalog, secure checkout, payment integrations and an admin
                                dashboard.</p>
                            <div class="project-links">

                            </div>
                        </div>
                    </div>

                    <div class="project-card"
                        data-video="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4">
                        <div class="card-media">
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2"
                                alt="Business website preview">
                            <button class="play-button" aria-label="Play project video"><i
                                    class="fa-solid fa-play"></i></button>
                        </div>
                        <div class="card-body">
                            <h3>Real Estate Website</h3>
                            <p>Corporate site with services, case studies, contact forms and analytics integration.</p>
                            <div class="project-links">

                            </div>
                        </div>
                    </div>

                    <div class="project-card"
                        data-video="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4">
                        <div class="card-media">
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3"
                                alt="Personal blog preview">
                            <button class="play-button" aria-label="Play project video"><i
                                    class="fa-solid fa-play"></i></button>
                        </div>
                        <div class="card-body">
                            <h3>Personal Websites</h3>
                            <p>Content-driven blog with rich-text editor, categories, commenting and social sharing.</p>
                            <div class="project-links">

                            </div>
                        </div>
                    </div>

                    <div class="project-card"
                        data-video="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4">
                        <div class="card-media">
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4"
                                alt="Portfolio website preview">
                            <button class="play-button" aria-label="Play project video"><i
                                    class="fa-solid fa-play"></i></button>
                        </div>
                        <div class="card-body">
                            <h3>Portfolio Website</h3>
                            <p>Responsive portfolio to showcase projects, case studies, a resume and a contact/hire
                                flow.</p>
                            <div class="project-links">

                            </div>
                        </div>
                    </div>

                    <div class="project-card"
                        data-video="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4">
                        <div class="card-media">
                            <img loading="lazy"
                                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5"
                                alt="Education website preview">
                            <button class="play-button" aria-label="Play project video"><i
                                    class="fa-solid fa-play"></i></button>
                        </div>
                        <div class="card-body">
                            <h3>Education Website</h3>
                            <p>Learning platform with course catalogs, progress tracking, quizzes and user accounts.</p>
                            <div class="project-links">

                            </div>
                        </div>
                    </div>

                    <div class="project-card" data-video="./vid/first project.mp4">
                        <div class="card-media">
                            <video src="./vid/first project.mp4" class="project-video" muted></video>
                            <button class="play-button" aria-label="Play project video"><i
                                    class="fa-solid fa-play"></i></button>
                        </div>
                    </div>
        </section>

        <!-- SKILLS SECTION -->
        <section id="skills" class="section">
            <div class="container">
                <h2 class="section-title fade-in">Core Skills</h2>
                <div class="skills-grid">
                    <div class="skill-card">JavaScript</div>
                    <div class="skill-card">Php</div>
                    <div class="skill-card">HTML5 / CSS</div>
                    <div class="skill-card"> Bootstrap</div>
                    <div class="skill-card">GitHub </div>
                </div>
            </div>
        </section>

        <!-- CONTACT SECTION -->
        <section id="contact" class="section">
            <div class="container contact-content">
                <h2 class="section-title fade-in">Get In Touch</h2>
                <p class="text-center fade-in" style="color: var(--muted); margin-bottom: 30px;">
                    Have a question or a project idea? Let's connect and discuss how I can help bring your vision to
                    life.
                </p>
                <form id="contact-form" class="contact-form fade-in" onsubmit="handleFormSubmit(event)">
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" id="name" name="name" required placeholder="John Doe">
                    </div>
                    <div class="form-group">
                        <label for="email">Your Email</label>
                        <input type="email" id="email" name="email" required placeholder="john.doe@example.com">
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required
                            placeholder="Tell me about your project or inquiry..."></textarea>
                    </div>
                    <button type="submit" class="btn primary submit-btn">Send Message</button>
                </form>
                <div id="form-message" role="alert" aria-live="polite"></div>
            </div>
        </section>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="social-links">
                <a href="https://github.com/marcusthelma" target="_blank" aria-label="GitHub"><i
                        class="fa-brands fa-github"></i></a>
                <a href="https://linkedin.com/in/marcusthelma" target="_blank" aria-label="LinkedIn"><i
                        class="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:marcus.thelma@example.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://twitter.com/marcusthelma" target="_blank" aria-label="Twitter"><i
                        class="fa-brands fa-x-twitter"></i></a>
            </div>
            <p>&copy; 2024 Marcus Thelma | Built with passion.</p>
        </div>
    </footer>

    <script>

        document.addEventListener('DOMContentLoaded', () => {
            const cardMedia = document.querySelector('.card-media');
            const video = cardMedia.querySelector('video');
            const playButton = cardMedia.querySelector('.play-button');
            const icon = playButton.querySelector('i');

            playButton.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                    // Hide the button after starting playback (optional)
                    playButton.style.display = 'none';
                } else {
                    video.pause();
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                    playButton.style.display = 'block';
                }
            });

            // Show the play button again when the video finishes
            video.addEventListener('ended', () => {
                playButton.style.display = 'block';
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            });
        });
        // Toggle See More / See Less
        const btn = document.getElementById("see-more-btn");
        const moreText = document.querySelector(".more-text");

        btn.addEventListener("click", () => {
            const isVisible = moreText.style.display === "inline";
            moreText.style.display = isVisible ? "none" : "inline";
            btn.textContent = isVisible ? "See More" : "See Less";
        });
        // --- Global Variables (Canvas required) ---
        // Placeholder for firebase config if persistence were implemented
        // NOTE: Renamed local variables to avoid Temporal Dead Zone (TDZ) conflict
        // with the globally injected variables (__app_id, etc.), fixing the ReferenceError.
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
        // console.log("App ID:", appId, "Firebase Config Ready:", !!firebaseConfig);
        // ------------------------------------------

        // 1. Smooth Scrolling for Navigation
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Close mobile menu if open
                        if (document.getElementById('main-nav').classList.contains('open')) {
                            toggleMobileMenu();
                        }
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // 2. Observer to update the 'active' navigation link on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        const options = {
            root: null, // viewport
            rootMargin: "-20% 0px -80% 0px", // Use smaller top margin for better detection
            threshold: 0 // We use the margin to determine when it enters
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                const targetId = entry.target.id;
                const activeLink = document.querySelector(`nav a[href="#${targetId}"]`);

                if (activeLink) {
                    // Custom logic: Only add 'active' if intersecting and visible (allows multiple active links if sections are short)
                    if (entry.isIntersecting) {
                        // Remove active from all first
                        navLinks.forEach(link => link.classList.remove('active'));
                        // Add active to current
                        activeLink.classList.add('active');
                    }
                }
            });

            // Ensure the first link is active if at the very top
            if (window.scrollY < document.getElementById('about').offsetTop - 200) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector('nav a[href="#home"]')?.classList.add('active');
            }

        }, options);

        // Observe each section
        sections.forEach(section => {
            observer.observe(section);
        });


        // 3. Reveal-on-scroll for cards and sections
        const ioOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Check for staggered children (projects/skills grid)
                    if (entry.target.classList.contains('projects-grid') || entry.target.classList.contains('skills-grid')) {
                        const children = entry.target.querySelectorAll('.project-card, .skill-card');
                        children.forEach((c, i) => {
                            // Apply staggered delay using CSS property
                            c.style.transitionDelay = `${i * 80}ms`;
                            c.classList.add('in-view');
                        });
                        // Stop observing the parent after children are revealed
                        revealObserver.unobserve(entry.target);
                    }
                    // Stop observing single elements once they've animated
                    if (!entry.target.classList.contains('projects-grid') && !entry.target.classList.contains('skills-grid')) {
                        revealObserver.unobserve(entry.target);
                    }
                }
            });
        }, ioOptions);

        // Target individual elements and grid containers for reveal animation
        document.querySelectorAll('.fade-in, .slide-up, .projects-grid, .skills-grid').forEach(el => {
            revealObserver.observe(el);
        });

        // 4. Animate stats numbers
        function animateNumber(el, to) {
            const duration = 1800; // Increased duration for smoother effect
            const start = 0;
            const startTime = performance.now();
            const suffix = el.textContent.includes('+') ? '+' : '';
            const isThousands = to >= 1000;

            function tick(now) {
                const progress = Math.min((now - startTime) / duration, 1);
                // Use a cubic-bezier easing function (easeOutCubic)
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                const value = Math.floor(easedProgress * (to - start) + start);

                let displayValue = value;
                if (isThousands) {
                    displayValue = Math.floor(value / 100) * 100; // Count by hundreds for large numbers
                    if (progress === 1) displayValue = to; // Ensure final value is exact
                }

                el.textContent = displayValue + suffix;

                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }

        const stats = document.querySelectorAll('.stat-item .number');
        let statsAnimated = false;
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    statsAnimated = true;
                    // Define final values for animation
                    const finalValues = [3, 15, 5, 1000];
                    stats.forEach((stat, index) => {
                        animateNumber(stat, finalValues[index]);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        if (stats.length) statsObserver.observe(stats[0].closest('.stats'));

        // 5. Mobile Menu Toggle
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.getElementById('main-nav');

        function toggleMobileMenu() {
            const isExpanded = navMenu.classList.contains('open');
            navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navToggle.innerHTML = isExpanded ? '<i class="fa-solid fa-bars"></i>' : '<i class="fa-solid fa-xmark"></i>';
        }

        navToggle.addEventListener('click', toggleMobileMenu);

        // 6. Handle Contact Form Submission
        function handleFormSubmit(e) {
            e.preventDefault();
            const form = e.target;
            const messageEl = document.getElementById('form-message');
            const submitBtn = form.querySelector('.submit-btn');

            // Simple form validation (already handled by 'required' attributes, but good for message)
            if (!form.checkValidity()) {
                messageEl.style.opacity = 1;
                messageEl.textContent = 'Please fill out all required fields correctly.';
                setTimeout(() => messageEl.style.opacity = 0, 3000);
                return;
            }

            // Simulate form submission process
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // In a real application, you would use fetch() here to send data to a backend endpoint.
            // Since we don't have a backend, we just simulate success.

            console.log('Form data submitted:', {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            });

            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.disabled = false;
                form.reset();

                messageEl.style.opacity = 1;
                messageEl.textContent = 'Thank you for your message! I will be in touch shortly.';

                // Hide the success message after 5 seconds
                setTimeout(() => messageEl.style.opacity = 0, 5000);

                // Reset button text after 3 seconds
                setTimeout(() => submitBtn.textContent = 'Send Message', 3000);

            }, 2000); // 2 second delay to simulate network latency
        }

        // 7. CTA button actions (Replaced alert())
        document.querySelectorAll('.btn.primary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Scroll to contact section smoothly
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Typing effect for role subtitle
        (function typingLoop() {
            const roles = ['Full Stack Developer', 'Backend with PHP & MySQL', 'Frontend with HTML, CSS & Bootstrap', 'Web Designer', 'Tech Enthusiast'];
            const el = document.getElementById('roleTyped');
            const caret = document.getElementById('caret');
            if (!el || !caret) return;
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduced) { caret.style.opacity = 0; return; }
            let idx = 0, char = 0, forward = true;
            caret.classList.add('blink');
            function step() {
                const current = roles[idx];
                if (forward) {
                    char++;
                    el.textContent = current.slice(0, char);
                    if (char === current.length) { forward = false; setTimeout(step, 1200); return; }
                } else {
                    char--;
                    el.textContent = current.slice(0, char);
                    if (char === 0) { forward = true; idx = (idx + 1) % roles.length; setTimeout(step, 300); return; }
                }
                setTimeout(step, forward ? 80 : 30);
            }
            setTimeout(step, 600);
        })();

        // 3D tilt interaction for cards + hero parallax
        (function enable3DInteractions() {
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const coarse = window.matchMedia('(pointer: coarse)').matches;
            if (reduced || coarse) return;

            // Card tilt
            const cards = Array.from(document.querySelectorAll('.project-card, .skill-card'));
            cards.forEach(card => {
                let raf = null;
                function onMove(e) {
                    const rect = card.getBoundingClientRect();
                    const pointerX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? (window.innerWidth / 2);
                    const pointerY = e.clientY ?? (e.touches && e.touches[0].clientY) ?? (window.innerHeight / 2);
                    const px = (pointerX - (rect.left + rect.width / 2)) / (rect.width / 2);
                    const py = (pointerY - (rect.top + rect.height / 2)) / (rect.height / 2);
                    const maxTilt = card.classList.contains('skill-card') ? 6 : 10;
                    const rotY = px * maxTilt;
                    const rotX = -py * maxTilt;
                    const zBoost = 12 + Math.abs(px * 6) + Math.abs(py * 3);
                    cancelAnimationFrame(raf);
                    raf = requestAnimationFrame(() => {
                        card.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(${zBoost}px)`;
                        card.style.boxShadow = `${-rotY * 2}px ${rotX * 2 + 18}px ${30 + Math.abs(px * 20)}px rgba(0,0,0,0.65)`;
                    });
                }
                function onLeave() {
                    cancelAnimationFrame(raf);
                    card.style.transform = '';
                    card.style.boxShadow = '';
                }
                card.addEventListener('mousemove', onMove, { passive: true });
                card.addEventListener('touchmove', onMove, { passive: true });
                card.addEventListener('mouseleave', onLeave);
                card.addEventListener('touchend', onLeave);
            });

            // Hero parallax: subtle depth on mousemove across hero
            const hero = document.querySelector('.home-content');
            if (hero) {
                const layers = [hero.querySelector('h2'), hero.querySelector('h3'), hero.querySelector('.bio-short')].filter(Boolean);
                let rafH = null;
                hero.addEventListener('mousemove', (e) => {
                    const rect = hero.getBoundingClientRect();
                    const cx = (e.clientX - rect.left) / rect.width - 0.5;
                    const cy = (e.clientY - rect.top) / rect.height - 0.5;
                    cancelAnimationFrame(rafH);
                    rafH = requestAnimationFrame(() => {
                        layers.forEach((el, i) => {
                            const depth = (i + 1) * 6;
                            el.style.transform = `translate3d(${cx * depth}px, ${cy * depth}px, ${i * 8}px)`;
                        });
                    });
                }, { passive: true });
                hero.addEventListener('mouseleave', () => { layers.forEach(el => el.style.transform = ''); });
            }
        })();

        // Scroll progress bar update
        (function scrollProgress() {
            const bar = document.getElementById('scrollProgress');
            if (!bar) return;
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            function update() {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
                const pct = docHeight > 0 ? (scrollTop / docHeight) : 0;
                bar.style.transform = `scaleX(${pct})`;
            }
            if (!reduced) {
                window.addEventListener('scroll', update, { passive: true });
                window.addEventListener('resize', update);
                update();
            } else {
                bar.style.display = 'none';
            }
        })();

        // --- Video preview modal DOM ---
        const videoModalHtml = `
        <div class="preview-modal" id="videoModal" aria-hidden="true">
            <div class="panel">
                <div class="header">
                    <div class="title" id="videoTitle">Project Video</div>
                    <button class="close" id="closeVideo">Close</button>
                </div>
                <div class="content" id="videoContent">
                    <!-- video element will be inserted here -->
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', videoModalHtml);
        const videoModal = document.getElementById('videoModal');
        const videoContent = document.getElementById('videoContent');
        const videoTitle = document.getElementById('videoTitle');
        const closeVideo = document.getElementById('closeVideo');

        function openVideoModal(src, title) {
            videoContent.innerHTML = '';
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.autoplay = true;
            video.playsInline = true;
            video.style.maxHeight = '72vh';
            videoTitle.textContent = title || 'Project Video';
            videoContent.appendChild(video);
            videoModal.classList.add('open');
            videoModal.setAttribute('aria-hidden', 'false');
        }

        function closeVideoModal() {
            videoModal.classList.remove('open');
            videoModal.setAttribute('aria-hidden', 'true');
            // stop and cleanup
            const v = videoContent.querySelector('video');
            if (v) { v.pause(); v.src = ''; v.remove(); }
        }

        // Click handlers: play button or card opens modal
        document.addEventListener('click', (e) => {
            const play = e.target.closest('.play-button');
            if (play) {
                const card = play.closest('.project-card');
                const src = card?.getAttribute('data-video');
                const title = card?.querySelector('h3')?.textContent;
                if (src) { openVideoModal(src, title); }
            }
            const mediaClick = e.target.closest('.card-media');
            if (mediaClick && !e.target.closest('.project-links')) {
                // clicking media also opens video if data-video exists
                const card = mediaClick.closest('.project-card');
                const src = card?.getAttribute('data-video');
                const title = card?.querySelector('h3')?.textContent;
                if (src) { openVideoModal(src, title); }
            }
        });

        // close handlers
        closeVideo.addEventListener('click', closeVideoModal);
        videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });

    </script>
</body>

</html>

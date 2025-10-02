document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger')
    const navMenu = document.getElementById('navMenu')
    const navLinks = document.querySelectorAll('.nav-link')
    const contactForm = document.getElementById('contactForm')
    const toast = document.getElementById('toast')

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active')
    })

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active')
        })
    })

    const texts = [
        'Developpeuse web',
        'UI/UX Designer',
        'Expert Frontend',
        ' Designer créative',
    ]
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    const typingText = document.getElementById('typingText')

    function typeEffect() {
        const currentText = texts[textIndex]

        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1)
            charIndex--
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1)
            charIndex++
        }

        let typeSpeed = isDeleting ? 50 : 100

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000
            isDeleting = true
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false
            textIndex = (textIndex + 1) % texts.length
            typeSpeed = 500
        }

        setTimeout(typeEffect, typeSpeed)
    }

    typeEffect()

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in')
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    const sections = document.querySelectorAll(
        '.about-card, .project-card, .skill-card, .testimonial-card, .contact-wrapper'
    )
    sections.forEach(section => {
        observer.observe(section)
    })

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault()

        const name = document.getElementById('name').value.trim()
        const email = document.getElementById('email').value.trim()
        const subject = document.getElementById('subject').value.trim()
        const message = document.getElementById('message').value.trim()

        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Please fill in all fields')
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address')
            return
        }

        showToast()
        contactForm.reset()
    })

    function showToast() {
        toast.classList.add('show')
        setTimeout(() => {
            toast.classList.remove('show')
        }, 3000)
    }

    const navbar = document.getElementById('navbar')
    let lastScroll = 0

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset

        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)'
        } else {
            navbar.style.transform = 'translateY(0)'
        }

        lastScroll = currentScroll
    })

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const target = document.querySelector(this.getAttribute('href'))
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        })
    })

    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.zIndex = '10'
        })
        card.addEventListener('mouseleave', function () {
            this.style.zIndex = '1'
        })
    })

    const serviceCards = document.querySelectorAll('.service-card')
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.zIndex = '10'
        })
        card.addEventListener('mouseleave', function () {
            this.style.zIndex = '1'
        })
    })
})

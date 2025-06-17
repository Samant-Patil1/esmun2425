// Register Page JavaScript

// Registration functions
function registerStudent() {
    // Placeholder for Cashfree/Razorpay integration
    alert('Student Registration\n\nYou will be redirected to the payment gateway.\n\nPrice: ₹799\nNote: Valid student ID required during verification.');
    
    // In actual implementation, you would integrate with Cashfree/Razorpay here
    // Example:
    // window.location.href = 'https://checkout.cashfree.com/student-registration';
    
    console.log('Student registration initiated');
}

function registerEarlyBird() {
    // Placeholder for Cashfree/Razorpay integration
    alert('Early Bird Registration\n\nYou will be redirected to the payment gateway.\n\nPrice: ₹999 (Save ₹300!)\nLimited time offer!');
    
    // In actual implementation, you would integrate with Cashfree/Razorpay here
    // Example:
    // window.location.href = 'https://checkout.cashfree.com/early-bird-registration';
    
    console.log('Early bird registration initiated');
}

// Add click animations for pricing cards
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('disabled')) {
                this.style.transform = 'translateY(-15px) scale(1.02)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('featured')) {
                this.style.transform = 'scale(1.05) translateY(0)';
            } else if (!this.classList.contains('disabled')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Contact card interactions
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            const h3 = this.querySelector('h3').textContent;
            
            if (h3.includes('Email')) {
                window.location.href = 'mailto:registration@esmun2025.com';
            } else if (h3.includes('Phone')) {
                alert('Phone: +91 XXXXX XXXXX\nAvailable: Mon-Fri, 9 AM - 6 PM');
            } else if (h3.includes('WhatsApp')) {
                alert('WhatsApp: +91 XXXXX XXXXX\nClick to open WhatsApp');
                // In actual implementation:
                // window.open('https://wa.me/91XXXXXXXXXX', '_blank');
            }
        });
    });
});

// Form validation functions (for future use)
function validateStudentRegistration(formData) {
    // Add validation logic for student registration
    if (!formData.studentId) {
        alert('Student ID is required for student registration');
        return false;
    }
    return true;
}

function validateEarlyBirdRegistration(formData) {
    // Add validation logic for early bird registration
    return true;
}

// Payment gateway integration functions (placeholders)
function initializeCashfree(amount, purpose) {
    // Cashfree integration code would go here
    console.log(`Initializing Cashfree payment: ₹${amount} for ${purpose}`);
}

function initializeRazorpay(amount, purpose) {
    // Razorpay integration code would go here
    console.log(`Initializing Razorpay payment: ₹${amount} for ${purpose}`);
    
    // Example Razorpay implementation:
    /*
    var options = {
        "key": "YOUR_RAZORPAY_KEY",
        "amount": amount * 100, // Amount in paise
        "currency": "INR",
        "name": "ESMUN 2025",
        "description": purpose,
        "image": "https://your-logo-url.com/logo.png",
        "handler": function (response) {
            // Handle successful payment
            console.log('Payment successful:', response.razorpay_payment_id);
            redirectToSuccess(response);
        },
        "prefill": {
            "name": "",
            "email": "",
            "contact": ""
        },
        "notes": {
            "conference": "ESMUN 2025",
            "registration_type": purpose
        },
        "theme": {
            "color": "#4fc3f7"
        }
    };
    
    var rzp = new Razorpay(options);
    rzp.open();
    */
}

// Success page redirection
function redirectToSuccess(paymentResponse) {
    // Redirect to success page with payment details
    const params = new URLSearchParams({
        payment_id: paymentResponse.razorpay_payment_id,
        status: 'success'
    });
    window.location.href = `success.html?${params.toString()}`;
}

// Error handling
function handlePaymentError(error) {
    console.error('Payment error:', error);
    alert('Payment failed. Please try again or contact support.');
}

// Countdown timer for early bird offer (example)
function startCountdown() {
    // Set the date for early bird deadline (example: 30 days from now)
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 30);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = deadline.getTime() - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update countdown display if element exists
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
                countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        } else {
            // Early bird offer expired
            const earlyBirdCard = document.querySelector('.early-bird-card');
            if (earlyBirdCard) {
                earlyBirdCard.classList.add('disabled');
                const button = earlyBirdCard.querySelector('.early-bird-btn');
                if (button) {
                    button.disabled = true;
                    button.textContent = 'Offer Expired';
                }
            }
        }
    }
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Initialize countdown on page load
// startCountdown();

// Smooth scroll to pricing section
function scrollToPricing() {
    const pricingSection = document.querySelector('.pricing-section');
    if (pricingSection) {
        pricingSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add loading states to buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Processing...';
    button.disabled = true;
    
    // Remove loading state after 3 seconds (for demo)
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 3000);
}

// Enhanced registration functions with loading states
function registerStudentEnhanced() {
    const button = document.querySelector('.student-btn');
    addLoadingState(button);
    
    setTimeout(() => {
        registerStudent();
    }, 1000);
}

function registerEarlyBirdEnhanced() {
    const button = document.querySelector('.early-bird-btn');
    addLoadingState(button);
    
    setTimeout(() => {
        registerEarlyBird();
    }, 1000);
}
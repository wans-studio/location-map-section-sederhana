// Location Map Section - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation when section comes into view
    const locationSection = document.querySelector('.location-map-section');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    if (locationSection) {
        locationSection.style.opacity = '0';
        locationSection.style.transform = 'translateY(20px)';
        locationSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(locationSection);
    }
    
    // Handle iframe loading
    const mapIframe = document.querySelector('.map-container iframe');
    
    if (mapIframe) {
        mapIframe.addEventListener('load', function() {
            console.log('Google Maps loaded successfully');
        });
        
        mapIframe.addEventListener('error', function() {
            console.error('Failed to load Google Maps');
            const mapContainer = document.querySelector('.map-container');
            mapContainer.innerHTML = '<p style="padding: 40px; text-align: center; color: #dc3545;">Maaf, peta tidak dapat dimuat. Silakan coba lagi nanti.</p>';
        });
    }
});
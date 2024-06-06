function showPersonalInfo() {
    scrollToSection('personalInfo');
}

function showContact() {
    scrollToSection('contact');
}

function showPortfolio() {
    scrollToSection('portfolio');
}

function showArticles() {
    scrollToSection('articles');
}

function showMessageBoard() {
    scrollToSection('messageBoard');
}

function showAds() {
    scrollToSection('ads');
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

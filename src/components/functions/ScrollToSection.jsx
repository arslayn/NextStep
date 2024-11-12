
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        console.log("abc",section);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default scrollToSection;

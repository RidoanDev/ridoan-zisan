import { useState, useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { UserCircle, School, BookOpen, Briefcase, FileBadge, Code, HeartHandshake, Mail, Share2, Search, PenTool } from 'lucide-react';

// Import components in alphabetical order
import CertificateSection from './components/CertificateSection';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Education from './components/Education';
import Experience from './components/Experience';
import FloatingMenu from './components/FloatingMenu';
import Footer from './components/Footer';
import Information from './components/Information';
import Navigation from './components/Navigation';
import ProfileSection from './components/ProfileSection';
import Skill from './components/Skill';

// Import pages
import Research from './pages/Research';
import Blog from './pages/Blog';

// Import data
import { content, certificates } from './data/content';

function App() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [age, setAge] = useState<number>(0);

  // Calculate age on component mount and update daily
  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      setAge(age);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 86400000); // Update daily
    return () => clearInterval(interval);
  }, []);

  // Navigation configuration
  const navigationItems = [
    { id: 'profile', icon: <UserCircle size={20} /> },
    { id: 'education', icon: <School size={20} /> },
    { id: 'courses', icon: <BookOpen size={20} /> },
    { id: 'experience', icon: <Briefcase size={20} /> },
    { id: 'certificates', icon: <FileBadge size={20} /> },
    { id: 'skills', icon: <Code size={20} /> },
    { id: 'family', icon: <HeartHandshake size={20} /> },
    { id: 'contact', icon: <Mail size={20} /> },
    { id: 'research', icon: <Search size={20} /> },
    { id: 'blog', icon: <PenTool size={20} /> },
    { id: 'social-links', icon: <Share2 size={20} />, target: 'footer' }
  ];

  // Smooth scrolling handler
  const scrollToSection = (section: string) => {
    if (section === 'research') {
      setCurrentPage('research');
      return;
    }
    if (section === 'blog') {
      setCurrentPage('blog');
      return;
    }
    
    setCurrentPage('home');
    scroller.scrollTo(section, {
      duration: 800,
      smooth: true,
      offset: -64,
    });
    setActiveSection(section);
  };

  // Back to home handler
  const handleBackToHome = () => {
    setCurrentPage('home');
    setActiveSection('profile');
  };

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'research':
        return <Research onBack={handleBackToHome} language={language} />;
      case 'blog':
        return <Blog onBack={handleBackToHome} language={language} />;
      default:
        return (
          <>
            {/* Profile Section */}
            <ProfileSection
              language={language}
              content={content as any}
              scrollToSection={scrollToSection}
            />

            {/* Main Content Sections */}
            <main className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 gap-8">
                {/* Education Section */}
                <Element name="education">
                  <Education language={language} />
                </Element>

                {/* Courses Section */}
                <Element name="courses">
                  <Courses language={language} />
                </Element>

                {/* Experience Section */}
                <Element name="experience">
                  <Experience language={language} />
                </Element>

                {/* Certificates Section */}
                <CertificateSection
                  language={language}
                  content={content}
                  certificates={certificates}
                />

                {/* Skills Section */}
                <Element name="skills">
                  <Skill language={language} />
                </Element>

                {/* Family Information Section */}
                <Element name="family">
                  <Information language={language} age={age} />
                </Element>

                {/* Contact Section */}
                <Element name="contact">
                  <Contact language={language} />
                </Element>
              </div>
            </main>

            {/* Footer */}
            <Element name="footer">
              <Footer language={language} />
            </Element>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navigation 
        navigationItems={navigationItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
        onBackToHome={handleBackToHome}
      />

      {/* Render Current Page */}
      {renderCurrentPage()}

      {/* Floating Menu */}
      <FloatingMenu />
    </div>
  );
}

export default App;


import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { FileText } from './icons';
import CertificateSlider from './CertificateSlider';

interface CertificateSectionProps {
  language: 'en' | 'bn';
  content: any;
  certificates: any[];
}

const CertificateSection = ({ language, content, certificates }: CertificateSectionProps) => {
  return (
    <Element name="certificates">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
          <FileText />
          {content[language].certifications}
        </h2>
        <CertificateSlider
          certificates={certificates}
          language={language}
        />
      </motion.section>
    </Element>
  );
};

export default CertificateSection;

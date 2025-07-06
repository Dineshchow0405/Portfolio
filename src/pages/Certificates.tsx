import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Building } from 'lucide-react';
import Card from '../components/Card';

const Certificates = () => {
  const certificates = [
    {
      title: 'AWS Cloud Foundation',
      issuer: 'Amazon Web Services',
      date: 'Jan 2024',
      validUntil: 'Lifetime',
      credentialId: 'AWS-CLOUD-2024-013',
      description: 'Comprehensive certification covering AWS cloud foundations.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
      verifyUrl: 'https://drive.google.com/file/d/1WZb_ashfD29Hd-TsgSoOylV7HLBvVN0U/view?usp=sharing',
      logo: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Advanced',
      category: 'Cloud Computing'
    },
    {
      title: 'AI For Students',
      issuer: 'Next Wave',
      date: 'Jul 2024',
      validUntil: 'LifeTime',
      credentialId: 'NXT-AI-2024-002',
      description: 'Begineer-level certification for developing Generative AI model applications on Using Prolog.',
      skills: ['Prolog', 'Scripting', 'Prompting', 'NLP'],
      verifyUrl: 'https://drive.google.com/file/d/1m9PqGByB3r-IaEuOeHqSw3lUMQ00fUeb/view?usp=sharing',
      logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Advanced',
      category: 'AIML'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Amazon Web Services',
      date: 'Feb 2024',
      validUntil: 'Lifetime',
      credentialId: 'AWS-ML-2024-004',
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, and deep learning.',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
      verifyUrl: 'https://drive.google.com/file/d/14BberOficuwPK8BG-s2GOYgXxOpss8O3/view?usp=drive_link',
      logo: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Intermediate',
      category: 'Machine Learning'
    },
    {
      title: 'AI-ML Virtual Internship',
      issuer: 'EduSkills',
      date: 'Mar 2023',
      validUntil: 'LifeTime',
      credentialId: '9b45379641154fd475fa01ad1bd01b30',
      description: 'AIML Virtual Internship in the under of EduSkills was done with the help of AWS in learning through AI models.',
      skills: ['Machine Learning', 'CNN', 'NLP', 'Python'],
      verifyUrl: 'https://drive.google.com/file/d/1h2EjDVa-9mLNJUwlnM0sW3477DbtOYRX/view?usp=sharing',
      logo: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'AIML'
    },
    {
      title: 'AWS Academy Data Engineering',
      issuer: 'AWS Academy',
      date: 'Feb 2024',
      validUntil: 'LifeTime',
      credentialId: 'AWS-DATA-2024-005',
      description: 'A Begineer level Data Engineering Workshop in the under of AWS Academy.',
      skills: ['DataStorage', 'DataProcessing', 'WareHousing', 'DatStreaming'],
      verifyUrl: 'https://drive.google.com/file/d/1Xdd1FcsSc3HulfdRbhi-F1834CRizYUF/view?usp=sharing',
      logo: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
      level: 'Intermediate',
      category: 'Data Engineering'
    },
    {
      title: 'Artificial Intelligence',
      issuer: 'LearnWik Solutions Pvt. Ltd.',
      date: 'Jun 2023',
      validUntil: 'LifeTime',
      credentialId: 'LW01052',
      description: 'Comprehensive AI certification covering fundamental concepts and practical applications.',
      skills: ['AI', 'Python', 'Prolog', 'ML'],
      verifyUrl: 'https://drive.google.com/file/d/1vvNaZ2pcxvKPg9WBDLI34rOjXKDmQHOB/view?usp=sharing',
      logo: 'https://content3.jdmagicbox.com/v2/comp/bangalore/y7/080pxx80.xx80.230331182417.w7y7/catalogue/learnwik-solutions-pvt-ltd-bommanahalli-bangalore-education-consultants-up5ikgbbq1.jpg',
      level: 'Intermediate',
      category: 'AIML'
    },
    {
      title: 'Ethical Hacking & Cyber Security Workshop',
      issuer: 'Supraja Technologies',
      date: 'Oct 2024',
      validUntil: 'LifeTime',
      credentialId: 'CEH-SUP-2024-007',
      description: 'Comprehensive certification covering ethical hacking methodologies and cybersecurity practices.',
      skills: ['Penetration Testing', 'Network Security', 'Vulnerability Assessment', 'Cryptography'],
      verifyUrl: 'https://drive.google.com/file/d/1V0xDZEKGYkYUF1qcOeGN1ZVDYS_LZm7e/view?usp=sharing',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQF3H-o_kgtM7g/company-logo_200_200/company-logo_200_200/0/1630672249915?e=2147483647&v=beta&t=O_tM7qJTo1wQBSfxTiFk8ILQTvcwydLHgXhAuNuDT7A',
      level: 'Intermediate',
      category: 'Cybersecurity'
    },
    {
      title: 'AI Internship',
      issuer: 'LearnWik Solutions Pvt. Ltd.',
      date: 'Jun 2023',
      validUntil: 'Lifetime',
      credentialId: 'LW01052',
      description: 'An Internship done on AI under LearnWik Solutions during the period of April to June.',
      skills: ['AI', 'Prolog', 'Python', 'NumPy', 'Matplotlib'],
      verifyUrl: 'https://drive.google.com/file/d/1N0ngASScoKlsG1O0gOcAolsy7aXgLkvc/view?usp=sharing',
      logo: 'https://content3.jdmagicbox.com/v2/comp/bangalore/y7/080pxx80.xx80.230331182417.w7y7/catalogue/learnwik-solutions-pvt-ltd-bommanahalli-bangalore-education-consultants-up5ikgbbq1.jpg',
      level: 'Intermediate',
      category: 'AIML'
    },
    {
      title: 'Flutter Developer Intern',
      issuer: 'Pramukesh & Co',
      date: 'Jul 2025',
      validUntil: 'LifeTime',
      credentialId: 'FLT-DART-2025-009',
      description: 'Development of android app using Flutter and dart technologies during May-July.',
      skills: ['Dart', 'Flutter', 'UI/UX Design', 'Project Management'],
      verifyUrl: 'https://scrumalliance.org/verify',
      logo: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Flutter'
    },
    {
      title: 'National Voluntary Blood Donation',
      issuer: 'Government Blood Bank',
      date: 'Oct 2024',
      validUntil: 'LifeTime',
      credentialId: '54/WG/AP/1997/BB/R',
      description: 'A Blood Donation camp was held in our college, As a active social responcible person I have donated my blood for the needy people.',
      skills: ['Volunteerism', 'Health Awareness', 'Social Media', 'Interpersonal Skills'],
      verifyUrl: 'https://drive.google.com/file/d/11jQwW1bOgeDHZA3IRkCmSt5JFTa7DFiG/view?usp=sharing',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOXskexb5TbSMhRHOawU4wyGUxmvPpHpaNA&s',
      level: 'Intermediate',
      category: 'Social'
    },
    {
      title: 'Full Stack Web Development Bootcamp',
      issuer: 'SITE ACM Student Chapter',
      date: 'Mar 2024',
      validUntil: 'Lifetime',
      credentialId: 'SITE-ACM-2024-011',
      description: 'Intensive bootcamp covering full-stack web development with modern technologies.',
      skills: ['HTML/CSS', 'JavaScript', 'Node.js', 'Database Design'],
      verifyUrl: 'https://drive.google.com/file/d/1wa0sGONH84cmLHxPdeoqj_MOtRsyTCTf/view?usp=sharing',
      logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100',
      level: 'Professional',
      category: 'Full Stack Development'
    },
    {
      title: 'Flutter Development Workshop',
      issuer: 'Digitalex Solutions',
      date: 'Mar 2025',
      validUntil: 'Lifetime',
      credentialId: 'DIGITALEX-FLUTTER-2025-012',
      description: 'Fundamental certification covering user interface and user experience on App Development.',
      skills: ['Flutter', 'Dart', 'UI/UX Design', 'Json'],
      verifyUrl: 'https://drive.google.com/file/d/1x2zM-w7ocg5dnHMQh5SJPQCGN765fQOg/view?usp=sharing',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQESeQ4fDqj5XA/company-logo_200_200/company-logo_200_200/0/1673968664563?e=2147483647&v=beta&t=c7hB_rEI5S5wxQhiB6OiNo0IGX2IROTF4cDYhRwubVw',
      level: 'Professional',
      category: 'Flutter'
    }
  ];

  const categories = ['All', 'Cloud Computing', 'Machine Learning', 'AIML', 'Data Engineering', 'Flutter', 'Full Stack Development', 'Social', 'Cybersecurity'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCertificates = selectedCategory === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional': return 'text-purple-300 bg-purple-600/20 border-purple-400/30';
      case 'Advanced': return 'text-blue-300 bg-blue-600/20 border-blue-400/30';
      case 'Intermediate': return 'text-green-300 bg-green-600/20 border-green-400/30';
      default: return 'text-gray-300 bg-gray-600/20 border-gray-400/30';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications and completed courses
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center space-x-2 mb-3">
                <Building className="h-4 w-4 text-purple-400" />
                <span className="text-purple-400 font-medium text-sm">{cert.issuer}</span>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium border ${getLevelColor(cert.level)}`}>
                  {cert.level}
                </span>
                <span className="text-xs text-gray-400">
                  Valid until: {cert.validUntil}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {cert.skills.slice(0, 3).map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-600/20 border border-blue-400/30 rounded-full px-2 py-1 text-xs font-medium text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="text-xs text-gray-400 py-1">
                    +{cert.skills.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-xs text-gray-400">Verified</span>
                </div>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Verify</span>
                </a>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-xs text-gray-400">
                  Credential ID: {cert.credentialId}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Certification Summary
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-gray-300">Total Certificates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
                <div className="text-gray-300">Professional Level</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">7</div>
                <div className="text-gray-300">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">2025</div>
                <div className="text-gray-300">Latest Year</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
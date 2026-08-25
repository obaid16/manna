'use client';

export default function Certifications() {
  const certs = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      issuer: 'Nexcore Institute of Technology / Academic',
      date: '2024',
      code: 'CERT-AIML-01',
    },
    {
      title: 'User Interface & UX Design (Figma)',
      issuer: 'UI/UX Specialization',
      date: '2024',
      code: 'CERT-UIUX-02',
    },
    {
      title: 'Modern Web Development (React & Next.js)',
      issuer: 'Frontend Mastery',
      date: '2024',
      code: 'CERT-WEB-03',
    },
    {
      title: 'C Programming & Algorithmic Foundations',
      issuer: 'Computer Science Core',
      date: '2023',
      code: 'CERT-CS-04',
    },
    {
      title: 'Responsive Web Design & Tailwind CSS',
      issuer: 'Web Standards',
      date: '2024',
      code: 'CERT-WD-05',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0D1B2A] text-white border-t border-[#98B4C7]/15 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#98B4C7] uppercase">
              CREDENTIALS & COURSES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display mt-2">
              CERTIFICATIONS
            </h2>
          </div>
          <p className="text-xs text-[#98B4C7] mt-2 md:mt-0">
            Verified learning & technical qualifications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-[#98B4C7]/20 hover:border-[#98B4C7]/50 transition-all group"
            >
              <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-[#98B4C7] uppercase mb-3">
                <span>{cert.code}</span>
                <span>{cert.date}</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-[#98B4C7] transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-[#98B4C7]/80">
                {cert.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

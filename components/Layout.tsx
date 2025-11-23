import React, { useState } from 'react';
import type { ModalType } from '../types';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col transform transition-all duration-300 animate-fade-in-scale overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-5 border-b border-slate-700 bg-slate-800/50">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <div className="p-6 md:p-8 overflow-y-auto text-slate-300 leading-relaxed text-base space-y-4 custom-scrollbar">
          {children}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-scale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(30, 41, 59, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(71, 85, 105, 0.8);
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(100, 116, 139, 1);
        }
      `}</style>
    </div>
  );
};


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const navLinks: { label: string; modal: ModalType }[] = [
    { label: 'About', modal: 'about' },
    { label: 'Contact', modal: 'contact' },
    { label: 'Guide', modal: 'guide' },
    { label: 'Privacy Policy', modal: 'privacy' },
    { label: 'Terms of Service', modal: 'terms' },
    { label: 'DMCA', modal: 'dmca' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="galaxy-bg">
        <div className="stars"></div>
        <div className="nebula"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-6 px-4 border-b border-white/5 backdrop-blur-sm sticky top-0 z-40 bg-slate-900/40">
            <nav className="container mx-auto flex justify-center items-center flex-wrap gap-x-8 gap-y-3">
                {navLinks.map(link => (
                    <button key={link.label} onClick={() => openModal(link.modal)} className="text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium relative group px-2 py-1">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                ))}
            </nav>
        </header>

        <div className="flex-grow">
            {children}
        </div>

        <footer className="text-center py-10 px-4 border-t border-slate-800/50 bg-slate-900/60 mt-auto">
            <div className="container mx-auto">
                <p className="mb-4">
                    <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:text-purple-400 transition-colors inline-flex items-center gap-2" style={{ color: '#FFD700' }}>
                        <span>Powered by HSINI MOHAMED</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </p>
                <div className="flex justify-center items-center flex-wrap gap-4 text-slate-400 text-sm">
                    <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">doodax.com</a>
                    <span className="text-slate-600 hidden md:inline">|</span>
                    <a href="mailto:hsini.web@gmail.com" className="hover:text-purple-400 transition-colors">hsini.web@gmail.com</a>
                    <span className="text-slate-600 hidden md:inline">|</span>
                    <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
                </div>
                <p className="mt-6 text-slate-600 text-xs">
                    &copy; {new Date().getFullYear()} Robots.txt Generator Pro. All rights reserved.
                </p>
            </div>
        </footer>
      </div>

      {/* Extended Modal Content */}
      <Modal isOpen={activeModal === 'about'} onClose={closeModal} title="About Robots.txt Generator Pro">
        <div className="prose prose-invert prose-p:text-slate-300 max-w-none">
            <p>Welcome to <strong>Robots.txt Generator Pro</strong>, a premium SEO tool provided by <strong>Doodax</strong>. In the complex world of Technical SEO, managing how search engines interact with your website is paramount. We created this tool to simplify that process.</p>
            <p>Our mission is to provide webmasters, developers, and business owners with a reliable, client-side, and secure way to generate the Robots Exclusion Protocol file. Unlike other tools that might store your data or complicate the process, our generator runs entirely in your browser.</p>
            <p>We believe in clean code, fast performance, and empowering users with knowledge. That's why we've included extensive documentation alongside the tool itself.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'contact'} onClose={closeModal} title="Contact Support">
        <div className="prose prose-invert prose-p:text-slate-300 max-w-none">
            <p>We value your feedback and are here to assist with any questions regarding the Robots.txt Generator Pro tool.</p>
            <h4 className="text-white mt-4 mb-2 font-bold">Get in Touch</h4>
            <p>If you have found a bug, have a feature request, or simply want to say hello, please email us directly:</p>
            <p className="bg-slate-800 p-4 rounded-lg text-center font-mono text-purple-400 select-all">
                hsini.web@gmail.com
            </p>
            <p className="text-sm text-slate-500 mt-4">We aim to respond to all legitimate inquiries within 24-48 hours.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'guide'} onClose={closeModal} title="Quick Start Guide">
        <div className="space-y-4">
            <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">1. Select User-Agent</h4>
                <p>Enter <code>*</code> to target all bots (default), or specify a bot like <code>Googlebot</code> for targeted rules.</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">2. Define Directives</h4>
                <p>Use <strong>Allow</strong> to grant access and <strong>Disallow</strong> to block access. Paths should start with a forward slash (e.g., <code>/private/</code>).</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">3. Add Sitemap</h4>
                <p>Paste the full URL to your XML sitemap. This helps crawlers discover your pages faster.</p>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-bold text-white mb-2">4. Generate</h4>
                <p>Review the live preview, then click <strong>Generate & Download</strong> to save the file to your computer.</p>
            </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Privacy Policy">
        <div className="prose prose-invert prose-p:text-slate-300 max-w-none">
            <p className="text-sm text-slate-500 mb-4">Last Updated: October 27, 2023</p>
            <p>At <strong>Doodax</strong> (accessible from doodax.com), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Robots.txt Generator Pro and how we use it.</p>
            
            <h4 className="text-white font-bold mt-4">Zero Data Collection</h4>
            <p><strong>We do not collect any personal data.</strong> This tool operates entirely on the "client-side". When you enter your website directives or sitemap URLs, that data stays in your browser's memory. It is never transmitted to our servers or stored in any database.</p>

            <h4 className="text-white font-bold mt-4">Cookies</h4>
            <p>We do not use tracking cookies for this tool. However, third-party services (like hosting providers) may log standard request information (IP address, browser type) for security and operational purposes.</p>

            <h4 className="text-white font-bold mt-4">External Links</h4>
            <p>Our website may contain links to external sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms of every site you visit.</p>

            <h4 className="text-white font-bold mt-4">Contact</h4>
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <span className="text-purple-400">hsini.web@gmail.com</span>.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Terms of Service">
        <div className="prose prose-invert prose-p:text-slate-300 max-w-none">
            <p>By accessing this website, you agree to be bound by these website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.</p>
            
            <h4 className="text-white font-bold mt-4">Use License</h4>
            <p>Permission is granted to temporarily download the materials (generated files) on Doodax's website for personal or commercial, non-transitory viewing only. This is the grant of a license, not a transfer of title.</p>

            <h4 className="text-white font-bold mt-4">Disclaimer</h4>
            <p>The materials on Doodax's website are provided "as is". Doodax makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties. Furthermore, Doodax does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website.</p>
            
            <p><strong>Use at Your Own Risk:</strong> An incorrectly configured robots.txt file can de-index your website from search engines. You acknowledge that you are solely responsible for the content you generate and upload to your website.</p>

            <h4 className="text-white font-bold mt-4">Governing Law</h4>
            <p>Any claim related to Doodax's website shall be governed by the laws of the country of residence of the owner without regards to its conflict of law provisions.</p>
        </div>
      </Modal>

      <Modal isOpen={activeModal === 'dmca'} onClose={closeModal} title="DMCA Policy">
        <div className="prose prose-invert prose-p:text-slate-300 max-w-none">
             <p><strong>Doodax</strong> respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
             <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Agent" via email at <span className="text-purple-400">hsini.web@gmail.com</span>.</p>
             <p>You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing your copyright.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;
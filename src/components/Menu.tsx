"use client";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const handleNavigation = (href: string) => {
    onClose();
    window.location.href = href;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[600px] xl:w-[700px] bg-[rgb(10,10,10)] z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto scrollbar-hide ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        <nav className="min-h-full flex flex-col">
          {/* Menu Container with Border */}
          <div className="flex-1 flex flex-col border-l border-[rgb(51,51,51)]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 lg:px-12 py-6 border-b border-[rgb(88,88,88)]">
              {/* Menu Title */}
              <div className="flex items-center gap-2">
                <div className="relative w-2 h-2">
                  <div className="w-2 h-2 rounded-full bg-[rgb(255,73,37)]"></div>
                </div>
                <span className="text-sm font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                  MENU
                </span>
              </div>
            </div>

          {/* Body - Navigation Links */}
          <div className="flex-1 px-6 lg:px-12 py-12">
            <div className="space-y-0">
              {/* Home Link - Active */}
              <a
                href="#"
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Home
                  </h3>
                  <div className="w-2.5 h-2.5 rounded-full bg-[rgb(255,73,37)] opacity-100"></div>
                </div>
              </a>

              {/* Portfolio Link */}
              <a
                href="/portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/portfolio');
                }}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Portfolio
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </a>

              {/* Services Link */}
              <a
                href="#"
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Services
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </a>

              {/* About Link */}
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/about');
                }}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    About
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </a>

              {/* Contact Link */}
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/contact');
                }}
                className="group block py-6 border-b border-[rgb(88,88,88)] hover:border-[rgb(255,73,37)] transition-all duration-300"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[rgb(202,202,202)] group-hover:text-white transition-colors uppercase">
                    Contact
                  </h3>
                  <div className="h-px flex-1 ml-8 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 lg:px-12 py-8 space-y-8">
            {/* Email Section */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                (EMAIL)
              </p>
              <h3 className="text-2xl lg:text-3xl font-medium">
                <a
                  href="mailto:hello@nakula.com"
                  className="text-[rgb(255,73,37)] hover:text-[rgb(255,93,57)] transition-colors"
                  target="_blank"
                  rel="noopener"
                >
                  hello@nakula.com
                </a>
              </h3>
            </div>

            {/* Socials Section */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-[rgb(119,119,119)] uppercase tracking-wider">
                (SOCIALS)
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-3">
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-base lg:text-lg text-[rgb(202,202,202)] group-hover:text-white transition-colors">
                        X/Twitter
                      </p>
                      <div className="h-px flex-1 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-base lg:text-lg text-[rgb(202,202,202)] group-hover:text-white transition-colors">
                        Instagram
                      </p>
                      <div className="h-px flex-1 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-base lg:text-lg text-[rgb(202,202,202)] group-hover:text-white transition-colors">
                        LinkedIn
                      </p>
                      <div className="h-px flex-1 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noopener"
                    className="group block"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-base lg:text-lg text-[rgb(202,202,202)] group-hover:text-white transition-colors">
                        Behance
                      </p>
                      <div className="h-px flex-1 bg-[rgb(255,73,37)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Menu;


import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { label: "Website Development", href: "/website-development" },
    { label: "Social Media Management", href: "/#services" },
    { label: "SEO Optimization", href: "/#services" },
    { label: "Ads Management", href: "/#services" },
    { label: "Ebook Writing", href: "/#services" },
  ],
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Blog", href: "/blog" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Sribulancer", href: "https://www.sribu.com/id/browse-freelancer?search=krisanputih", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block" aria-label="Krisan Putih - Home">
              <Image
                src="/logo.png"
                alt="Krisan Putih"
                width={320}
                height={80}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm max-w-xs">
              Digital web development agency helping businesses grow through strategic planning and digital transformation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a href="https://www.instagram.com/krisanputih/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/septiani-ananda-putri/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Krisan Putih. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

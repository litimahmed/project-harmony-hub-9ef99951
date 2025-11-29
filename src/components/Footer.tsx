/**
 * @file Footer.tsx
 * @description This component renders the main footer for the application.
 * It includes the company logo, a brief description, social media links, and a sitemap.
 * The entire component is animated with Framer Motion for a smooth user experience.
 */

// Import necessary libraries and components.
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { useContactInfo } from "@/hooks/useContactInfo";
import { Link } from "react-router-dom";
import ToorriiLogo from "@/assets/toorrii-logo.png";


/**
 * @component Footer
 * @description The main footer component.
 */
const Footer = () => {
  // Hook to get the translation function.
  const { t } = useTranslation();
  const { data: contactInfo } = useContactInfo();
  
  // Pages for navigation
  const pages = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.aboutUs"), path: "/about-us" },
    { name: t("nav.contactUs"), path: "/contact-us" },
    { name: t("footer.privacyPolicy"), path: "/privacy-policy" },
    { name: t("footer.termsOfService"), path: "/terms-of-service" },
  ];

  // Social/contact links with icons
  const contactLinks = [
    { 
      icon: Mail, 
      href: contactInfo?.email ? `mailto:${contactInfo.email}` : "#", 
      label: "Email",
      value: contactInfo?.email 
    },
    { 
      icon: Phone, 
      href: contactInfo?.telephone ? `tel:${contactInfo.telephone}` : "#", 
      label: "Phone",
      value: contactInfo?.telephone 
    },
    { 
      icon: Globe, 
      href: contactInfo?.site_web || "#", 
      label: "Website",
      value: contactInfo?.site_web 
    },
    { 
      icon: Facebook, 
      href: contactInfo?.facebook || "#", 
      label: "Facebook",
      value: contactInfo?.facebook 
    },
    { 
      icon: Instagram, 
      href: contactInfo?.instagram || "#", 
      label: "Instagram",
      value: contactInfo?.instagram 
    },
    { 
      icon: Linkedin, 
      href: contactInfo?.linkedin || "#", 
      label: "LinkedIn",
      value: contactInfo?.linkedin 
    },
    { 
      icon: Twitter, 
      href: contactInfo?.x || "#", 
      label: "X (Twitter)",
      value: contactInfo?.x 
    },
  ].filter(link => link.value); // Only show links that have values
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo and description column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-6">
              <motion.div 
                className="flex items-center h-14"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src={ToorriiLogo} 
                  alt="Toorrii Logo" 
                  className="h-full w-auto object-contain scale-[1.8]"
                />
              </motion.div>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              {t("footer.description")}
              <br /><br />
              {contactInfo?.message_acceuil && (
                <span className="text-sm italic">{contactInfo.message_acceuil}</span>
              )}
            </p>
            {contactInfo?.horaires && (
              <div className="mt-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{t("footer.hours")}:</span> {contactInfo.horaires}
              </div>
            )}
          </motion.div>

          {/* Pages navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-6 text-lg">
              {t("footer.pages")}
            </h3>
            <ul className="space-y-3">
              {pages.map((page, index) => (
                <motion.li
                  key={page.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={page.path}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {page.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social links column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-foreground mb-6 text-lg">
              {t("footer.connect")}
            </h3>
            <div className="space-y-4">
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.icon === Globe || contact.icon === Facebook || contact.icon === Instagram || contact.icon === Linkedin || contact.icon === Twitter ? "_blank" : undefined}
                  rel={contact.icon === Globe || contact.icon === Facebook || contact.icon === Instagram || contact.icon === Linkedin || contact.icon === Twitter ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 bg-secondary/50 group-hover:bg-primary group-hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all flex-shrink-0">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm truncate">{contact.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section with copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 mt-12 text-center"
        >
          <motion.div
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span>© 2025 Toorrii. {t("footer.rights")}</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

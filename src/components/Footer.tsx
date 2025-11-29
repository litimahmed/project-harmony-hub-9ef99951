/**
 * @file Footer.tsx
 * @description This component renders the main footer for the application.
 * It includes the company logo, a brief description, social media links, and a sitemap.
 * The entire component is animated with Framer Motion for a smooth user experience.
 */

// Import necessary libraries and components.
import { motion } from "framer-motion";
import {
  Calendar,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

// An array of social media links to be displayed in the footer.
const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
];

/**
 * @component Footer
 * @description The main footer component.
 */
const Footer = () => {
  // Hook to get the translation function.
  const { t } = useTranslation();
  
  // An object containing the footer links, categorized for better organization.
  const footerLinks = {
    [t("footer.product")]: [
      t("footer.features"),
      t("footer.pricing"),
      t("footer.api"),
      t("footer.integrations"),
      t("footer.security")
    ],
    [t("footer.company")]: [
      t("footer.about"),
      t("footer.blog"),
      t("footer.careers"),
      t("footer.press"),
      t("footer.partners")
    ],
    [t("footer.resources")]: [
      t("footer.documentation"),
      t("footer.helpCenter"),
      t("footer.community"),
      t("footer.webinars"),
      t("footer.status")
    ],
    [t("footer.support")]: [
      t("footer.contactUs"),
      t("footer.faqs"),
      t("footer.training"),
      t("footer.updates"),
      t("footer.feedback")
    ],
  };
  
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Animated section for the logo and description. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Toorrii</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t("footer.description")}
            </p>
            {/* Animated social media links. */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Animated footer links, categorized and mapped from the footerLinks object. */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-foreground mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + linkIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        {/* Animated bottom section of the footer with copyright and legal links. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 mt-12 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span>© 2025 Toorrii. All rights reserved.</span>
          </motion.div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
              whileHover={{ y: -2 }}
            >
              {t("footer.privacyPolicy")}
            </motion.a>
            <motion.a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
              whileHover={{ y: -2 }}
            >
              {t("footer.termsOfService")}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

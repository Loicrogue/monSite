import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useResponsive from '../hooks/useResponsive';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      // équivalent strictement typé de "easeOut"
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ContactComponent: React.FC = () => {
  const { t } = useTranslation();
  const lang = window.location.pathname.split('/')[1] || 'fr';
  const { isMobile, isTablet } = useResponsive();
  const textSizeClass = isMobile || isTablet ? 'text-l' : 'text-xl';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        window.location.href = `/${lang}/contact-success`;
      } else {
        console.error('Erreur lors de la soumission du formulaire');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <motion.h2
        className={`mb-6 font-bold text-monSite text-center ${textSizeClass}`}
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {t('pages.contact.title')}
      </motion.h2>

      <motion.form
        name="contact"
        method="POST"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="hidden"
          name="redirect"
          value={`/${lang}/contact-success`}
        />

        {/* Honeypot anti-spam */}
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <motion.label className="flex flex-col gap-1 text-monSite" variants={itemVariants}>
          <span>{t('pages.contact.form.name')}</span>
          <input
            type="text"
            name="name"
            required
            className="p-2 border rounded"
          />
        </motion.label>

        <motion.label className="flex flex-col gap-1 text-monSite" variants={itemVariants}>
          <span>{t('pages.contact.form.email')}</span>
          <input
            type="email"
            name="email"
            required
            className="p-2 border rounded"
          />
        </motion.label>

        <motion.label className="flex flex-col gap-1 text-monSite" variants={itemVariants}>
          <span>{t('pages.contact.form.message')}</span>
          <textarea
            name="message"
            rows={5}
            required
            className="p-2 border rounded resize-none"
          />
        </motion.label>

        {/* reCAPTCHA Netlify */}
        <motion.div
          data-netlify-recaptcha="true"
          variants={itemVariants}
        />

        <motion.button
          type="submit"
          className="mt-4 p-2 cursor-pointer font-semibold text-monSite rounded border"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('pages.contact.form.send')}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactComponent;

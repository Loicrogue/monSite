import React from 'react';
import { useTranslation } from 'react-i18next';
import useResponsive from '../hooks/useResponsive';

const ContactComponent: React.FC = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet } = useResponsive();
  const textSizeClass = isMobile || isTablet ? 'text-l' : 'text-xl';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, String(value));
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
      .then(() => {
        alert(t('pages.contact.form.success', 'Message envoyé !'));
        form.reset();
      })
      .catch(() => {
        alert(t('pages.contact.form.error', 'Erreur lors de l’envoi.'));
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className={`mb-6 font-bold text-center ${textSizeClass}`}>
        {t('pages.contact.title')}
      </h2>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <label className="flex flex-col gap-1">
          <span>{t('pages.contact.form.name')}</span>
          <input type="text" name="name" required className="p-2 border rounded" />
        </label>

        <label className="flex flex-col gap-1">
          <span>{t('pages.contact.form.email')}</span>
          <input type="email" name="email" required className="p-2 border rounded" />
        </label>

        <label className="flex flex-col gap-1">
          <span>{t('pages.contact.form.message')}</span>
          <textarea name="message" rows={5} required className="p-2 border rounded resize-none" />
        </label>

        <div data-netlify-recaptcha="true"></div>

        <button type="submit" className="mt-4 p-2 font-semibold rounded border">
          {t('pages.contact.form.send')}
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;

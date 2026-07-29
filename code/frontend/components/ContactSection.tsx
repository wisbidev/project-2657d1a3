'use client';

import { useState, useCallback, FormEvent } from 'react';
import {
  contactConfig,
  validateName,
  validateEmail,
  validateMessage,
  generateMailtoUrl,
  type ContactFormData,
  type ContactFormState,
} from '@/lib/mock/contact-cta-section';

export default function ContactSection() {
  const [formState, setFormState] = useState<ContactFormState>({
    status: 'idle',
    errors: {},
  });
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [mailtoError, setMailtoError] = useState(false);

  const clearError = useCallback((field: keyof ContactFormData) => {
    setFormState((prev) => ({
      ...prev,
      errors: { ...prev.errors, [field]: undefined },
    }));
  }, []);

  const handleInputChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      clearError(field);
    },
    [clearError]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setMailtoError(false);

      // Validate all fields
      const errors = {
        name: validateName(formData.name),
        email: validateEmail(formData.email),
        message: validateMessage(formData.message),
      };

      const hasErrors = Object.values(errors).some(Boolean);

      if (hasErrors) {
        setFormState({
          status: 'idle',
          errors,
        });
        return;
      }

      // Start loading state
      setFormState({
        status: 'loading',
        errors: {},
        data: formData,
      });

      // Simulate API call delay
      await new Promise((resolve) =>
        setTimeout(resolve, contactConfig.loadingDelayMs)
      );

      // Generate mailto URL and trigger
      const mailtoUrl = generateMailtoUrl(formData);
      const mailtoLink = document.createElement('a');
      mailtoLink.href = mailtoUrl;
      mailtoLink.style.display = 'none';
      document.body.appendChild(mailtoLink);

      try {
        mailtoLink.click();
        setFormState({
          status: 'success',
          errors: {},
          data: formData,
        });
      } catch {
        setMailtoError(true);
        setFormState({
          status: 'error',
          errors: {},
          data: formData,
        });
      } finally {
        document.body.removeChild(mailtoLink);
      }
    },
    [formData]
  );

  const handleRetry = useCallback(() => {
    setFormState({
      status: 'idle',
      errors: {},
    });
    setMailtoError(false);
  }, []);

  const isLoading = formState.status === 'loading';
  const isSuccess = formState.status === 'success';
  const hasError = formState.status === 'error';

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title fade-in">Liên hệ</h2>
        <p className="section-sub fade-in">
          Bạn có ý tưởng? Hãy nói với chúng tôi — chúng tôi sẽ biến nó thành
          hiện thực.
        </p>

        {/* Default and Error states */}
        {(formState.status === 'idle' || hasError) && (
          <form
            className="contact-form"
            action={`mailto:${contactConfig.teamEmail}`}
            onSubmit={handleSubmit}
            noValidate
          >
            {/* Name field */}
            <div className="form-group">
              <label htmlFor="name">Họ tên</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nhập họ tên..."
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                autoComplete="name"
                aria-invalid={!!formState.errors.name}
                aria-describedby={formState.errors.name ? 'nameError' : undefined}
                className={formState.errors.name ? 'error' : ''}
              />
              <div
                id="nameError"
                className={`field-error ${formState.errors.name ? 'visible' : ''}`}
                role="alert"
              >
                {formState.errors.name}
              </div>
            </div>

            {/* Email field */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                autoComplete="email"
                aria-invalid={!!formState.errors.email}
                aria-describedby={formState.errors.email ? 'emailError' : undefined}
                className={formState.errors.email ? 'error' : ''}
              />
              <div
                id="emailError"
                className={`field-error ${formState.errors.email ? 'visible' : ''}`}
                role="alert"
              >
                {formState.errors.email}
              </div>
            </div>

            {/* Message field */}
            <div className="form-group">
              <label htmlFor="message">Nội dung</label>
              <textarea
                id="message"
                name="message"
                placeholder="Mô tả dự án của bạn... (tối thiểu 10 ký tự)"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                aria-invalid={!!formState.errors.message}
                aria-describedby={
                  formState.errors.message ? 'messageError' : undefined
                }
                className={formState.errors.message ? 'error' : ''}
              />
              <div
                id="messageError"
                className={`field-error ${formState.errors.message ? 'visible' : ''}`}
                role="alert"
              >
                {formState.errors.message}
              </div>
            </div>

            {/* Submit button with loading state */}
            <button
              type="submit"
              className={`btn-primary ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              <span className="btn-text">Gửi tin nhắn</span>
              <div className="spinner" aria-hidden="true" />
            </button>

            {/* Error state: mailto failure */}
            <div
              className={`form-error-message ${mailtoError ? 'visible' : ''}`}
              role="alert"
            >
              Không thể mở email. Vui lòng copy email của chúng tôi:{' '}
              <strong>{contactConfig.teamEmail}</strong>
              <br />
              <button
                type="button"
                onClick={handleRetry}
                style={{
                  marginTop: '8px',
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontSize: 'inherit',
                }}
              >
                Thử lại
              </button>
            </div>
          </form>
        )}

        {/* Success state */}
        <div
          className={`contact-form form-success ${isSuccess ? 'visible' : ''}`}
          role="status"
          aria-live="polite"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--success)"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l3 3 5-5" />
          </svg>
          <h3>Tin nhắn đã được gửi!</h3>
          <p>
            Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm
            nhất.
          </p>
        </div>
      </div>
    </section>
  );
}

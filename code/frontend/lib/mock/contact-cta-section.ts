/**
 * Mock data for Contact & CTA Section
 * Shape mirrors the API contract the backend must satisfy.
 * Replace this file with real API calls in the BE stage.
 */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmitResult {
  success: boolean;
  message: string;
  mailtoUrl?: string;
}

export interface ContactFormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
  data?: ContactFormData;
}

// Mock contact form configuration
export const contactConfig = {
  teamEmail: 'team@webagent.dev',
  minMessageLength: 10,
  maxNameLength: 100,
  maxMessageLength: 2000,
  loadingDelayMs: 1800,
};

// Mock success response
export const mockSubmitSuccess: ContactSubmitResult = {
  success: true,
  message: 'Tin nhắn đã được gửi!',
};

// Mock error response
export const mockSubmitError: ContactSubmitResult = {
  success: false,
  message: 'Không thể gửi tin nhắn. Vui lòng thử lại.',
};

// Generate mailto URL from form data
export function generateMailtoUrl(data: ContactFormData): string {
  const subject = encodeURIComponent(`Liên hệ từ ${data.name}`);
  const body = encodeURIComponent(
    `Tên: ${data.name}\nEmail: ${data.email}\n\nTin nhắn:\n${data.message}`
  );
  return `mailto:${contactConfig.teamEmail}?subject=${subject}&body=${body}`;
}

// Validation helpers
export function validateName(name: string): string | undefined {
  const trimmed = name.trim();
  if (!trimmed) {
    return 'Vui lòng nhập họ tên của bạn.';
  }
  if (trimmed.length > contactConfig.maxNameLength) {
    return 'Tên phải dưới 100 ký tự.';
  }
  return undefined;
}

export function validateEmail(email: string): string | undefined {
  const trimmed = email.trim();
  if (!trimmed) {
    return 'Vui lòng nhập email của bạn.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return 'Vui lòng nhập địa chỉ email hợp lệ.';
  }
  return undefined;
}

export function validateMessage(message: string): string | undefined {
  const trimmed = message.trim();
  if (!trimmed) {
    return 'Vui lòng nhập ít nhất 10 ký tự.';
  }
  if (trimmed.length < contactConfig.minMessageLength) {
    return 'Vui lòng nhập ít nhất 10 ký tự.';
  }
  if (trimmed.length > contactConfig.maxMessageLength) {
    return 'Tin nhắn phải dưới 2000 ký tự.';
  }
  return undefined;
}

export function validateForm(data: ContactFormData): ContactFormState['errors'] {
  return {
    name: validateName(data.name),
    email: validateEmail(data.email),
    message: validateMessage(data.message),
  };
}

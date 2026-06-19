import { apiClient } from './apiClient';

/**
 * Sends the contact form.
 * TODO(backend): replace the mock with:
 *   return apiClient.post('/contact', data);
 */
export async function sendContactForm(data) {
  // Mock implementation until the backend exists.
  // eslint-disable-next-line no-console
  console.log('[contactService] sendContactForm payload:', data);
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { ok: true };
}

// Keep apiClient referenced so the swap is a one-line change later.
export { apiClient };

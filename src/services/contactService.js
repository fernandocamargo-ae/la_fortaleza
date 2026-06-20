// Contact form delivery via Formspree (no backend required).
// Configure VITE_FORMSPREE_ENDPOINT in .env with your form endpoint
// (e.g. https://formspree.io/f/xxxxxxx). If it is not set, the call falls back
// to a mock so the UI keeps working during development.
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

/**
 * Sends the contact form to Formspree, which forwards it to the configured inbox.
 * @param {{ name: string, company?: string, email: string, subject: string, message: string }} data
 * @returns {Promise<{ ok: true }>}
 */
export async function sendContactForm(data) {
  if (!FORMSPREE_ENDPOINT) {
    // eslint-disable-next-line no-console
    console.warn('[contactService] VITE_FORMSPREE_ENDPOINT no configurado; usando mock (no se envía nada).');
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { ok: true };
  }

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      company: data.company,
      email: data.email, // Formspree uses this as the reply-to address
      subject: data.subject,
      message: data.message,
      _subject: `Nuevo contacto (${data.subject}) - ${data.name}`,
    }),
  });

  if (!res.ok) {
    let detail = '';
    try {
      const json = await res.json();
      detail = json?.errors?.map((e) => e.message).join(', ') ?? '';
    } catch {
      /* response had no JSON body */
    }
    throw new Error(`Formspree error ${res.status}${detail ? `: ${detail}` : ''}`);
  }

  return { ok: true };
}

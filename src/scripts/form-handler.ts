/**
 * Shared form submission handler
 * Initializes AJAX form submission with loading states
 *
 * Usage: Add data-form-handler attribute to form with JSON config:
 * data-form-handler='{"loadingText":"Sending...","successText":"Sent","defaultText":"Send"}'
 */

interface FormConfig {
  loadingText: string;
  successText: string;
  defaultText: string;
}

function initFormHandlers(): void {
  document.querySelectorAll<HTMLFormElement>('[data-form-handler]').forEach((form) => {
    const configAttr = form.getAttribute('data-form-handler');
    if (!configAttr) return;

    let config: FormConfig;
    try {
      config = JSON.parse(configAttr);
    } catch {
      console.warn('Invalid form handler config:', configAttr);
      return;
    }

    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const btnText = form.querySelector<HTMLSpanElement>('[data-btn-text]');
    const btnIcon = form.querySelector<SVGElement>('[data-btn-icon]');
    const spinner = form.querySelector<SVGElement>('[data-spinner]');
    const successMsg = form.querySelector<HTMLElement>('[data-success]');
    const errorMsg = form.querySelector<HTMLElement>('[data-error]');

    if (!submitBtn) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      successMsg?.classList.add('hidden');
      errorMsg?.classList.add('hidden');

      submitBtn.disabled = true;
      if (btnText) btnText.textContent = config.loadingText;
      btnIcon?.classList.add('hidden');
      spinner?.classList.remove('hidden');

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.reset();
          successMsg?.classList.remove('hidden');
          if (btnText) btnText.textContent = config.successText;
        } else {
          throw new Error('Form submission failed');
        }
      } catch {
        errorMsg?.classList.remove('hidden');
        if (btnText) btnText.textContent = config.defaultText;
        btnIcon?.classList.remove('hidden');
        spinner?.classList.add('hidden');
        submitBtn.disabled = false;
      }
    });
  });
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFormHandlers);
} else {
  initFormHandlers();
}

export { initFormHandlers };

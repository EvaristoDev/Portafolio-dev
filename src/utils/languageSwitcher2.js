// utils/languageSwitcher.js
import { signal } from '@preact/signals-core';

export const languagePreference = signal('es');

export function setLanguagePreference(language) {
  languagePreference.value = language;
}

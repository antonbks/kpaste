module.exports = {
  contextSeparator: '_',
  createOldCatalogs: true,
  defaultNamespace: 'translation',
  useKeysAsDefaultValue: true,
  indentation: 4,
  keepRemoved: false,
  keySeparator: '.',
  lineEnding: 'auto',
  locales: ['en',
    'fr',
    'de',
    'it',
    'es'],
  output: 'locales/$LOCALE/$NAMESPACE.json',
  sort: true,
};
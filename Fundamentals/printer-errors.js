function printerError(s) {
  const invalidValuesString = s.replace(/[a-m]/gi, '');
  const numberOfErrors = invalidValuesString.length;
  const stringLength = s.length;
  return `${numberOfErrors}/${stringLength}`;
}

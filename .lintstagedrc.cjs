module.exports = {
  '{src/**/,}*.{js,ts,tsx,vue}': ['eslint --fix'],
  '{src/**/,}*.{md,json,yml,html,css,scss,java,xml,feature}': ['prettier --write'],
};

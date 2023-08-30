module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [
      2,
      // 'never',
      "always", // example: feat: FKDEV-1 (#2)
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    'body-max-line-length': [2, 'always', 250],
    'footer-max-line-length': [2, 'always', 250]
  },
};

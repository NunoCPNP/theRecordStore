// module.exports = {
//   rules: {
//     'header-max-length': [2, 'always', 100],
//     'scope-empty': [2, 'never'],
//     'scope-case': [2, 'always', 'kebab-case'],
//     'subject-case': [2, 'always', 'sentence-case'],
//     'subject-full-stop': [2, 'never', '.'],
//     'type-case': [2, 'always', 'lower-case'],
//     'type-empty': [2, 'never'],
//     'type-enum': [2, 'always', ['chore', 'feat', 'fix']],
//   },
// }

module.exports = {
  extends: ['@commitlint/config-conventional'],
}

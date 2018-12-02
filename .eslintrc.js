module.exports = {
    "extends": "airbnb-base",
    "plugins": [
      "import"
    ],
    "rules": {
      // enable additional rules
      "indent": ["error", 4],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "no-console": "off",
      "import/newline-after-import": "off",
      "no-unused-vars": 0,
      "max-len": 0,
      // override default options for rules from base configurations
      "comma-dangle": ["error", "always"],
      "no-cond-assign": ["error", "always"],
    }
};

# eslint-plugin-ghost

Shared eslint configurations, useful plugins & custom rules.

Inside of lib/config you'll find a set of configs for different
environments + base.js.

Base.js effectively documents our code style. Please make sure any
rules you add come with an explanation!

## Basic setup
1. Make sure that `gstenv` is green. See our [Dev Environment](https://github.com/TryGhost/Team/blob/master/Engineering/Dev%20Environment.md) docs.
2. `git clone` this repo & `cd` into it as usual
3. Run `yarn install` to install dependencies.

## Testing

Run `yarn link` inside of me, and then run `yarn link eslint-plugin-ghost`
inside of the project you want to lint.

## Usage

- Inside of package.json, add this rule: `"lint": "eslint . --ext .js --cache"`
- Then, in your project root, create an `.eslintrc.js` file, and add the
following code:
```
module.exports = {
    plugins: ['ghost'],
    extends: [
        'plugin:ghost/[config]',
    ]
};
```
- Change `[config]` to be E.g. node, browser, test etc depending on what environment you are linting
- If you have a test folder, browser JS, etc, you can add multiple `.eslintrc.js` files, nesting them inside the folder they belong to.


## Publishing

 - `yarn ship`	 - `yarn ship`

# Copyright & License

Copyright (c) 2013-2021 Ghost Foundation - Released under the [MIT license](LICENSE). Ghost and the Ghost Logo are trademarks of Ghost Foundation Ltd. Please see our [trademark policy](https://ghost.org/trademark/) for info on acceptable usage.

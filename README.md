# random-large-data

## Installation
Using npm:
```bash
$ npm i random-large-data
```

In Node.js
```js
// Load the package
var rld = require('random-large-data');
```

## Why random-large-data? 
Because this is a super light weight package that will get you the necessary random large data you need for your current and future projects. With 0 dependencies, I promise you this is as fast and easy as it can get. ⚡️

## Requests 👀
If you have any requests please feel free to create a [New issue](https://github.com/jenesh/random-large-data/issues) and I will get to it in no time!

## Contribution 🙌
I'd be more than happy for any contribution to this package! Simply make your changes in a new branch and create a [Pull Request](https://github.com/jenesh/random-large-data/pulls)

## Currently Available Methods (more coming soon!) 👨‍💻

```js
// Returns a random whole number from 0 < num
randomNumber(num = 100)
> randomNumber(10)
> 5

// Returns an array of the given arrSize based on the min and max number
arrayNumGenerator(min = 0, max = 1, arrSize = 10)
> arrayNumGenerator(0, 100, 5)
> [ 29, 0, 52, 0, 96, 0 ]

// Returns an array of the given arrSize and the strSize
arrayStrGenerator(arrSize = 10, strSize = 5)
> arrayStrGenerator(5, 5)
> [ 'njplr', 'hkkbt', 'zfdup', 'fvnbp', 'khztm' ]
```

## Todo
- Update to TypeScript
- Add other data types
- Support different use cases/categories (Personal data, Business data)
- Add random chat data
- Add username and password generators
- Add common dialog and language
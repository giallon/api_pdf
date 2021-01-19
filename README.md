# API PDF

Basic API to print pdf from html with [Puppeteer](https://pptr.dev/).

Distribute pdf printing between multiple pages in an headless browser.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [Deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

[Docker](https://www.docker.com/) or [Node](https://nodejs.org/)

### Installing

Easy way:
```
docker-compose up
```

Or:
```
npm install
npm start
```

## Running the tests

```
npm test
```

## Deployment

Parameters (environment variables):
- `PORT`: port of the server (default: 3000)
- `NB_PAGES`: select the number of concurent pages (default: 3)

## Contributing

1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Run the test suite and check the output
4. Add tests for your feature or fix (please)
5. Commit your changes (git commit -am 'Add some feature')
6. Push to the branch (git push origin my-new-feature)
7. Create new Pull Request

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/giallon/api_pdf/tags).

## Authors

* **Giallon** - *Initial work* - [Github](https://github.com/giallon)
* **Vaidd4** - *Initial work* - [Github](https://github.com/vaidd4)

See also the list of [contributors](https://github.com/giallon/api_pdf/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# 2048

A fork of the Open Source [GitHub Repository](https://github.com/gabrielecirulli/2048), re-built for custom use and hosted [here](https://slade2048.netlify.app).

## Prerequisites

In order to run or develop the game locally, you will need the following dependencies installing:

1. [GNU Make](https://www.gnu.org/software/make/) (Note: Make may already be available. Try running `make --version` in the terminal to check)
1. [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm#installing-and-updating)

## Screenshot

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1175750/8614312/280e5dc2-26f1-11e5-9f1f-5891c3ca8b26.png" alt="Screenshot"/>
</p>

> This screenshot is fake, by the way.

## Getting Started

Before you get started with anything else, make sure you initialize the project using the following command from the root of the repository:

```shell
$ nvm install
$ nvm use
```

To run the game locally, simply run the following command from the terminal in the root of the repository:

```shell
$ make start
```

This will launch the game in the default browser. If you make any changes to the game code, you will need to refresh the page as hot reloading is not currently supported.

## Contributing

Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into `master`! Please make sure the game fully works before sending the PR, as that will help speed up the process.

You can find the same information in the [contributing guide](CONTRIBUTING.md).

## License

2048 is licensed under the [MIT license](LICENSE.txt).

## Author

[Samuel Slade](https://github.com/sladesamuel/) is the maintainer for this repository.

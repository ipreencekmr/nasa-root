## nasa-root

A Demo application build on top of One App framework provided by american express. It is using open source api from [NASA](https://api.nasa.gov/) and [FAKESTORE](https://fakestoreapi.com/) 


## Application Architecture

![NASA-MFA](https://github.com/ipreencekmr/nasa-root/assets/3636918/e6e2c313-a2cf-480f-a305-c5c6d654d802)

## Unit Test Coverage

<img width="634" alt="unit-test" src="https://github.com/ipreencekmr/nasa-root/assets/3636918/8001a540-57a7-4d85-b4b8-bd92be22d841">

## Lighthouse Report

<img width="711" alt="LighthouseReport" src="https://github.com/ipreencekmr/nasa-root/assets/3636918/61862938-10cb-4184-8db3-5e768c7bffe9">

## CICD Workflow

<img width="1466" alt="CICD-workflow" src="https://github.com/ipreencekmr/nasa-root/assets/3636918/adb554bd-d110-4a1a-a9bb-eeee4165f573">

## Child Modules

- [nasa-container](https://github.com/ipreencekmr/nasa-container)

- [nasa-header](https://github.com/ipreencekmr/nasa-header)

- [nasa-home](https://github.com/ipreencekmr/nasa-home)

- [nasa-auth](https://github.com/ipreencekmr/nasa-auth)

- [nasa-detail](https://github.com/ipreencekmr/nasa-detail)

- [nasa-about](https://github.com/ipreencekmr/nasa-about)

- [nasa-footer](https://github.com/ipreencekmr/nasa-footer)


## Prerequisite

- Node 16.x.x
- Docker

## Usage 

```bash
git clone https://github.com/ipreencekmr/nasa-root.git
cd nasa-root
npm install

//set environment variables
export NODE_ENV=development
export ONE_CLIENT_ROOT_MODULE_NAME=nasa-root
export HOLOCRON_MODULE_MAP_URL=https://module-map.vercel.app/module-map.json
export ONE_CONFIG_ENV=development

npm run build
npm run start

```

Your Local Application starts at 

[http://localhost:3000/en-GB/home](http://localhost:3000/en-GB/home)

## Deployment

- Modules are deployed on [Vercel](https://vercel.com/)
- CICD integration done with the help of Github Actions
- Domain name purchased from [GoDaddy](https://www.godaddy.com/en-in)
- Application deployed on AWS EC2 Instance
- Ready to Use Application [http://nasa.learn-coding.xyz:3000/en-GB/home](http://nasa.learn-coding.xyz:3000/en-GB/home)

## Available Scripts

`npm run test:lint`

`npm run test:unit`

`npm run test`

`npm run clean`

`npm run build`

`npm run build:watch`

`npm run start`

`npm run start:test`

`npm run generate:map`

`npm run deploy`

## Valuabel Documentations

- [One App](https://github.com/americanexpress/one-app#--) 

- [Husky](https://typicode.github.io/husky/getting-started.html)

- [Docker](https://www.docker.com/get-started/)

- [Commitlint](https://commitlint.js.org/#/)

- [ESLint](https://eslint.org/docs/latest/use/getting-started)

- [RTL](https://testing-library.com/docs/)

- [Jest](https://jestjs.io/docs/getting-started)

- [Node](https://nodejs.org/en/docs)

- [React](https://react.dev/learn)

- [Redux](https://redux.js.org/)

- [Vercel](https://vercel.com/docs)

- [AWS-EC2](https://docs.aws.amazon.com/ec2/index.html)

- [AWS-Route53](https://docs.aws.amazon.com/route53/)

- [Parrot Middleware](https://github.com/americanexpress/parrot#readme)

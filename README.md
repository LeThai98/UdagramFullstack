# UDAGRAM Project

## Description
UDAGRAM is a full-stack project to create a English Center website that help Fsofter register and learn English onine. Curently,  this website has main functions:
- Register Student
- Login/Log out
- Show all information about courses
- Register course on the table of courses
- Show registered courses

Link Github: https://github.com/LeThai98/UdagramFullstack\
Author: Le Hong Thai

## Technology
- Front-end:
    - Angular 18
    - NodeJS
    - Angular Material Framework
    - Bootstrap 5
    - TSLint
    - Jasmine and Karma
- Back-end:
    - NodeJS
    - Typescript
    - JWT token
- DB:
    - Postgres
- Pipeline:
    - CircleCI
- Cloud Services:
    - AWS RDS
    - AWS Elastic Beanstalk
    - AWS S3

## Dependencies
```
    - Node v18.20.4 (LTS) or more recent. 
    - Angular CLI v18.1.1
    - NPM v10.8.2, (LTS) or more recent, Yarn can work but was not tested for this project
    - AWS CLI v2, v1 can work but was not tested for this project
    - AWS EB CLI
    - Postgres Database to run locally

```

## Enviroment Variables
To run the project, we need config some Environment Variables in the created .env file in the udagram-api folder:

```
- POSTGRES_HOST       = <Database_IP_Address>
- POSTGRES_PORT       = <Database_Port>
- POSTGRES_USERNAME   = <Database_Username>
- POSTGRES_PASSWORD   = <Database_Password>
- POSTGRES_DB         = <Database_Name>
- JWT_SECRET          = <Any_PassPhrase>
- AWS_REGION          = <us-east-1b>
- AWS_PROFILE         = <Profile>
- AWS_BUCKET          = <Bucket_Name>
- AWS_ACCESS_KEY_ID     = <AWS_Access_key_id>
- AWS_SECRET_ACCESS_KEY = <AWS_secret_access_key>

```

## AWS Cloud Services
- DB:
    - RDS Host: 
    - Port: 5432
    - Database Name: udagram

- Back-end:
    - Platform: NodeJS 18 run on Linux
    - Elastic Beanstalk URL : 

- Front-end:
    -  S3 Endpoint URL: 

## Pipeline - Circle CI

## Project Setup


## Build, Run, Testing 


## Infrastructure
Refer to the Docs folder to get info:
- AWS Architecture Diagram
- Pipeline Architecture Diaram
- Screenshots

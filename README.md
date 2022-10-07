This project is an application build using [Node.js](https://nodejs.org/) and [NestJs](https://nestjs.com/) web app.

## Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/JolluSK/Food-Truck-as-a-Service-API.git
```
and install the dependencies
```
npm install
```

### Prerequisites
You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb and mongoose.

#### MongoDB
The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.

### Start the MongoDB server
First we need to create the `db` directory where the database files will live in. In your terminal navigate to the `root` of your system by doing `cd ..` until you reach the top directory. You can create the directory by running `sudo mkdir -p /data/db`. Now open a different tab in your terminal and run `mongod` to start the Mongo server.

### Configuration

Before start fill correct configurations in .env file

```env
# Node environment variables
NODE_ENV=
PORT=3000

# Mongodb Database environment variable.
DB_HOST=local
DB_PORT=27017
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=ftaas
MONGODB_URL=mongodb://localhost:27017/ftaas
```

### Run the Application

The simplest way to start this server is:

    npm start

### Project Structure

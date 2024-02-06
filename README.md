# BookingApp

### to run this App you need to create:

#### - a MongoDB account

#### - a cloudinary account for storing images

## To run the Backend:

1- change to the backend directory:

```
$ cd backend
```

2- install the packeges:

```
$ npm install
```

3- create a .env file in the (config) folder

4- set up environment variables in it like the example below

```
   // mongo DB  url   , take it from your mongodb account   , (version 2.2.12 or later)
   DB_STRING = // copy it  from mongoDB  , go to data base > click connect , click Drive > chose the version preferably (version 2.2.12)



CLOUD_NAME = // take it from cloudinary

API_KEY = // take it from cloudinary

API_SECRET = // take it from cloudinary
```

5 - run the server by entering the command below:

```
$ npm run dev
```

### Now back to the main file by the comman below:

```
$ cd..
```

## To run the Frontend:

1- change to the frontend directory:

```
$ cd backend
```

2- install the packeges :

```
 $ npm install
```

3- create a (.env) file the main frontend file

4- set up the local base url as an environment variable to be able to use it

```
REACT_APP_BASE_URI = http://localhost:8000
```

!!! it's important to have the REACT*APP* part before the variable name to be able to work with react

5- run the react app by running the command below:

```
$ npm start
```

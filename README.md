### Prerequisites ##
2. Install Node 

### Development envt setup ###

1. go to the root directory

2. install all the dependencies
> **npm install**

3. Run the project 
> **npm run start**

4. add a file name .babelrc inside root folder and write the below code snippet
		{
		  "presets": [ "env","react","stage-0" ],
		  "plugins": [ "react-hot-loader/babel","transform-object-rest-spread" ]
		}

5. open the application with localhost:3000 in the browser

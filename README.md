# micro-service

modelling nodejs applications behaving as microservice

## create docker and run through the docker image

Run the below commands on command-line at the root location of the respective application in sequence as below

#### build the docker image
1. `$ docker build -t <your username>/endpoint . `       // endpoint is the iamge name

check  if the image is created by command `$ docker images` and see as below example 

```
# Example
REPOSITORY                      TAG        ID              CREATED
node                            8          1934b0b038d1    5 days ago
<your username>/endpoint    latest     d64d3505b0d2    1 minute ago
```

#### run the image 
2. `$ docker run -p 49160:8080 -d <your username>/endpoint` // 49160 is the port for outside world to access the application endpoint. 8080 is the port number the application shall be running on the machine

3. Get container ID by command `$ docker ps`

4. Print app output `$ docker logs <container id>`

something like below shall be displayed
```
# Example
Running on http://localhost:8080
```

## Docker

Build image:

```bash
docker build -t summaview .


# To run the container 

docker run -p 3000:3000 summaview


#docker compose

// to Start
docker compose up --build

or 

docker compose up -d (For detached mode... you can still use the same terminal)

// to stop
docker compose down

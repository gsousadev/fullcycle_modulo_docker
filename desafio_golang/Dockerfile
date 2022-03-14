FROM golang:latest AS builder

WORKDIR /go/src

RUN mkdir fullcycle_rocks \ 
    && cd fullcycle_rocks \
    && go mod init gsousadev/fullcycle_rocks

COPY fullcycle_rocks/fullcyle_rocks.go /go/src/fullcycle_rocks/

ENTRYPOINT ["go", "run", "./fullcycle_rocks/fullcycle_rocks.go"]

#FROM golang:1.18rc1-alpine3.15 
#WORKDIR ~
#COPY --from="builder" /var/www/golang 
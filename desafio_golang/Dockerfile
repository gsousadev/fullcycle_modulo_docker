FROM golang:alpine AS builder

RUN apk update

WORKDIR $GOPATH/src/fullcycle_rocks

RUN go mod init

COPY . .

RUN go build -o /go/bin/fullcycle_rocks

FROM scratch

COPY --from=builder /go/bin/fullcycle_rocks /go/bin/fullcycle_rocks

ENTRYPOINT ["/go/bin/fullcycle_rocks"]

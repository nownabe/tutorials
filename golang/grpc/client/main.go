package main

import (
	"flag"
	pb "github.com/nownabe/tutorials/golang/grpc/proto"
	"golang.org/x/net/context"
	"google.golang.org/grpc"

	"log"
)

var (
	addrFlag = flag.String("addr", "localhost:5000", "server address host:port")
)

func main() {
	conn, err := grpc.Dial(*addrFlag, grpc.WithInsecure())

	if err != nil {
		log.Fatalf("Connection error: %v", err)
	}
	defer conn.Close()

	c := pb.NewGreeterClient(conn)

	resp, err := c.SayHello(context.Background(), &pb.HelloRequest{Name: "hogehoge"})
	if err != nil {
		log.Fatalf("RPC error: %v", err)
	}
	log.Printf("Greeting: %s", resp.Message)
}

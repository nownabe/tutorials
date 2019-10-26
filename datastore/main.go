package main

import (
	"fmt"
	"log"

	"cloud.google.com/go/datastore"
	"golang.org/x/net/context"
)

type Article struct {
	Title string
	URL   string
}

func main() {
	ctx := context.Background()

	projectID := "tutorial-c0761"

	client, err := datastore.NewClient(ctx, projectID)
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}

	article := Article{
		Title: "Hoge",
		URL:   "https://hogehoge.com",
	}

	//key := datastore.NameKey("Article", "name1", nil)
	key := datastore.IncompleteKey("Article", nil)

	hoge, err := client.Put(ctx, key, &article)
	if err != nil {
		log.Fatalf("Failed to save task: %v", err)
	}
	fmt.Println(hoge)

	fmt.Println("Saved", key, article)

	fmt.Printf("Saved %v: %v\n", key, article)
}

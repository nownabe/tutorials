package main

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/naoina/genmai"
	"os"
	"time"
)

type User struct {
	Id         int64  `db:"pk" column:"user_id"`
	Name       string `default:"me"`
	CreatedAt  *time.Time
	ScreenName string `db:"unique" size:"255"`
	Active     bool   `db:"-"`
}

func createTable(db *genmai.DB) {
	if err := db.CreateTable(&User{}); err != nil {
		panic(err)
	}
}

func main() {
	db, err := genmai.New(&genmai.MySQLDialect{}, "root:@tcp(127.0.0.1:3307)/test")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	db.SetLogOutput(os.Stdout)

	if err := db.CreateTable(&User{}); err != nil {
		panic(err)
	}
}

package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"github.com/k0kubun/pp"
)

func main() {
	db, err := sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/go_database_sql_tutorial")
	if err != nil {
		pp.Println(err)
		fmt.Println(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		pp.Println(err)
		fmt.Println(err)
	}

	// ----------

	/*
		var (
			id   int
			name string
		)

			rows, err := db.Query("select id, name from users where id = ?", 1)
			if err != nil {
				pp.Println(err)
				fmt.Println(err)
			}
			defer rows.Close()

			for rows.Next() {
				err := rows.Scan(&id, &name)
				if err != nil {
					pp.Println(err)
					fmt.Println(err)
				}
				fmt.Println(id, name)
			}

			err = rows.Err()
			if err != nil {
				pp.Println(err)
				fmt.Println(err)
			}
	*/

	// --------

	/*

		stmt, err := db.Prepare("select id, name from users where id = ?")
		if err != nil {
			pp.Println(err)
		}
		defer stmt.Close()

		rows, err := stmt.Query(1)
		if err != nil {
			pp.Println(err)
		}
		defer rows.Close()

		for rows.Next() {
			err := rows.Scan(&id, &name)
			if err != nil {
				pp.Println(err)
				fmt.Println(err)
			}
			fmt.Println(id, name)
		}

		err = rows.Err()
		if err != nil {
			pp.Println(err)
			fmt.Println(err)
		}

		// --------

		err = db.QueryRow("select name from users where id = ?", 1).Scan(&name)
		if err != nil {
			pp.Println(err)
		}
		fmt.Println(name)

	*/

	// --------

	/*
		stmt, err := db.Prepare("INSERT INTO users(name) VALUES(?)")
		if err != nil {
			pp.Println(err)
		}
		defer stmt.Close()

		res, err := stmt.Exec("Dolly")
		if err != nil {
			pp.Println(err)
		}

		lastId, err := res.LastInsertId()
		if err != nil {
			pp.Println(err)
		}

		rowCnt, err := res.RowsAffected()
		if err != nil {
			pp.Println(err)
		}

		fmt.Printf("ID = %d, affected = %d\n", lastId, rowCnt)

	*/

	// --------

	tx, err := db.Begin()
	if err != nil {
		fmt.Println(err)
	}
	defer tx.Rollback()

	stmt, err := tx.Prepare("INSERT INTO users(name) VALUES (?)")
	if err != nil {
		fmt.Println(err)
	}
	defer stmt.Close()

	for i := 0; i < 10; i++ {
		_, err = stmt.Exec(i)
		if err != nil {
			fmt.Println(err)
		}
	}
	err = tx.Commit()
	if err != nil {
		fmt.Println(err)
	}
}

package repository

import (
	"database/sql"
	"errors"
)

type JournalRepository struct {
	db *sql.DB
}

func NewJournalRepository(db *sql.DB) *JournalRepository {
	return &JournalRepository{db: db}
}

func (j *JournalRepository) FetchJournals() ([]Journal, error) {
	var sqlStatement string
	var journals []Journal

	sqlStatement = `SELECT id, user_id, isi, status, date_submit, created_at, updated_at FROM journals`

	rows, err := j.db.Query(sqlStatement)
	if err != nil {
		return nil, err
	}

	var journal Journal
	for rows.Next() {
		err := rows.Scan(
			&journal.ID,
			&journal.UserID,
			&journal.Isi,
			&journal.Status,
			&journal.DateSubmit,
			&journal.Created_at,
			&journal.Updated_at,
		)

		if err != nil {
			return nil, errors.New("No Available Journal")
		}
		journals = append(journals, journal)
	}

	return journals, err
}
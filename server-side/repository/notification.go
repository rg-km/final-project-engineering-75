package repository

import (
	"database/sql"
	"errors"
)

type NotificationRepository struct {
	db *sql.DB
}

func NewNotificationRepository(db *sql.DB) *NotificationRepository {
	return &NotificationRepository{db: db}
}

func (n *NotificationRepository) GetNotificationByUserID(id int64) (Notification, error) {
	var sqlStmt string
	var notification Notification

	sqlStmt = `SELECT id, user_id, message FROM notifications WHERE user_id = ?;`

	row := n.db.QueryRow(sqlStmt, id)
	err := row.Scan(
		&notification.ID,
		&notification.UserID,
		&notification.Message,
	)

	if err != nil {
		return notification, errors.New("No Available Notification")
	}

	return notification, nil
}

func (n *NotificationRepository) SendNotification(id int64) error {
	var sqlStmt string

	sqlStmt = `INSERT INTO notifications (id, user_id, message) VALUES (?, ?, ?);`

	_, err := n.db.Exec(sqlStmt, id)

	if err != nil {
		return err
	}

	return nil
}
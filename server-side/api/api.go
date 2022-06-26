package api

import (
	"fmt"
	"net/http"

	"final-project-engineering-75/server-side/repository"
)

type API struct {
	usersRepo       repository.UserRepository
	journalRepo     repository.JournalRepository
	notificationRepo repository.NotificationRepository
	mux             *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, journalRepo repository.JournalRepository, notificationRepo repository.NotificationRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo, journalRepo, notificationRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/journal/list", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.JournalList))))
	mux.Handle("/api/journal/detail", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.JournalDetailByID))))
	mux.Handle("/api/journal/create", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.JournalCreate))))
	mux.Handle("/api/journal/update", api.POST(api.AuthMiddleWare(http.HandlerFunc(api.JournalUpdate))))
	mux.Handle("/api/admin/dashboard", api.GET(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.getAdminDashboard)))))
	mux.Handle("/api/admin/journal/detail", api.POST(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.AdminGetDetailJournal)))))
	mux.Handle("/api/admin/journal/update", api.POST(api.AuthMiddleWare(api.AdminMiddleware(http.HandlerFunc(api.JournalUpdateStatus)))))
	mux.Handle("/api/account/profile", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.UserDetailbyID))))
	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}

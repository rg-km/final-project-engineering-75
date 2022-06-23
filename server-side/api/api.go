package api

import (
	"fmt"
	"net/http"

	"final-project-engineering-75/server-side/repository"
)

type API struct {
	usersRepo       repository.UserRepository
	journalRepo     repository.JournalRepository
	mux             *http.ServeMux
}

func NewAPI(usersRepo repository.UserRepository, journalRepo repository.JournalRepository) API {
	mux := http.NewServeMux()
	api := API{
		usersRepo, journalRepo, mux,
	}

	mux.Handle("/api/user/login", api.POST(http.HandlerFunc(api.login)))
	mux.Handle("/api/user/logout", api.POST(http.HandlerFunc(api.logout)))
	mux.Handle("/api/user/register", api.POST(http.HandlerFunc(api.register)))
	mux.Handle("/api/journal/list", api.GET(api.AuthMiddleWare(http.HandlerFunc(api.JournalList))))

	return api
}

func (api *API) Handler() *http.ServeMux {
	return api.mux
}

func (api *API) Start() {
	fmt.Println("starting web server at http://localhost:8080/")
	http.ListenAndServe(":8080", api.Handler())
}

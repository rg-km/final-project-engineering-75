package api

import (
	"encoding/json"
	"final-project-engineering-75/server-side/repository"
	"net/http"
	"strconv"
)

type AdminErrorResponse struct {
    Error string `json:"error"`
}

type AdminResponse struct {
    Creations []repository.Journal `json:"journals"`
}

func (api *API) getAdminDashboard(w http.ResponseWriter, req *http.Request) {
    api.AllowOrigin(w, req)

    encoder := json.NewEncoder(w)
    journals, err := api.journalRepo.FetchJournals()
    if err != nil {
        w.WriteHeader(http.StatusInternalServerError)
        encoder.Encode(AdminErrorResponse{Error: err.Error()})
        return
    }

    encoder.Encode(journals)

    return
}

func (api *API) AdminGetDetailJournal(w http.ResponseWriter, req *http.Request) {
    api.AllowOrigin(w, req)
    encoder := json.NewEncoder(w)

    id, err := strconv.ParseInt(req.URL.Query().Get("id"), 10, 64)
    if err != nil {
        w.WriteHeader(http.StatusBadRequest)
        encoder.Encode(AdminErrorResponse{Error: err.Error()})
        return
    }

    journal, err := api.journalRepo.GetJournalByID(id)
    if err != nil {
        w.WriteHeader(http.StatusInternalServerError)
        encoder.Encode(AdminErrorResponse{Error: err.Error()})
        return
    }

    encoder.Encode(journal)
}
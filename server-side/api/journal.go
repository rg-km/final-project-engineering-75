package api

import (
	"encoding/json"
	"net/http"
)

type JournalErrorResponse struct {
	Error string `json:"error"`
	Message string `json:"message"`
}

type Journal struct {
	ID     int64  `json:"id"`
	UserID int64  `json:"user_id"`
	Isi    string `json:"isi"`
	Status string `json:"status"`
	DateSubmit string `json:"date_submit"`
}

type JournalSuccessResponse struct {
	Journal []Journal `json:"journal"`
	Message string    `json:"message"`
	Data   interface{} `json:"data"`
}

type DashboardErrorResponse struct {
	Error string `json:"error"`
}

func (api *API) JournalList(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := JournalSuccessResponse{}
	response.Journal = make([]Journal, 0)

	journal, err := api.journalRepo.FetchJournals()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(DashboardErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, journal := range journal {
		response.Journal = append(response.Journal, Journal{
			UserID: journal.UserID,
			Isi:    journal.Isi,
			Status: journal.Status,
		})
	}

	encoder.Encode(response)
}
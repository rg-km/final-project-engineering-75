package api

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type User struct {
	Username string `json:"username"`
	Email	 string `json:"email"`
	Password string `json:"password"`
	Role	 string `json:"role"`
}

type LoginSuccessResponse struct {
	Token    string `json:"token"`
}

type RegisterSuccessResponse struct {
	Message  string `json:"message"`
}

type AuthErrorResponse struct {
	Error string `json:"error"`
}

// Jwt key yang akan dipakai untuk membuat signature
var jwtKey = []byte("key")

// Struct claim digunakan sebagai object yang akan di encode oleh jwt
// jwt.StandardClaims ditambahkan sebagai embedded type untuk provide standart claim yang biasanya ada pada JWT
type Claims struct {
	Username string
	Role     string
	jwt.StandardClaims
}

func (api *API) login(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	var user User
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	res, err := api.usersRepo.Login(user.Email, user.Password)

	w.Header().Set("Content-Type", "application/json")
	encoder := json.NewEncoder(w)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		encoder.Encode(AuthErrorResponse{Error: err.Error()})
		return
	}

	userRole, _ := api.usersRepo.FetchUserRole(*res)

	// Deklarasi expiry time untuk token jwt
	expirationTime := time.Now().Add(60 * time.Minute)

	// Buat claim menggunakan variable yang sudah didefinisikan diatas
	claims := &Claims{
		Username: *res,
		Role:     *userRole,
		StandardClaims: jwt.StandardClaims{
			// expiry time menggunakan time millisecond
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	// Buat jwt string dari token yang sudah dibuat menggunakan JWT key yang telah dideklarasikan
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		// return internal error ketika ada kesalahan ketika pembuatan JWT string
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Set token string kedalam cookie response
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
		Path:    "/",
	})

	json.NewEncoder(w).Encode(LoginSuccessResponse{Token: tokenString})
}

func (api *API) register(w http.ResponseWriter, req *http.Request) {
    api.AllowOrigin(w, req)
    var user User
	encoder := json.NewEncoder(w)
    err := json.NewDecoder(req.Body).Decode(&user)
    if err != nil {
        w.WriteHeader(http.StatusBadRequest)
        return
    }

    err = api.usersRepo.InsertUser(user.Username, user.Email, user.Password, user.Role)
    if err != nil {
        w.WriteHeader(http.StatusInternalServerError)
        return
    }

	registerResponse := RegisterSuccessResponse{
        Message: "success register",
	}

	encoder.Encode(registerResponse)
}
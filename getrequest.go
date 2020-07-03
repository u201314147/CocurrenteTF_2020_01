package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"

    "encoding/csv"
    "os"
)

type Json struct {
    ID              string  `json:"ID"`
    Fiebre    string `json:"Fiebre"`
    Tos    string `json:"Tos"`
      Fatiga    string `json:"Fatiga"`
    Disnea    string `json:"Disnea"`
      Anorexia    string `json:"Anorexia"`
    Mialgas    string `json:"Mialgas"`
     Perdida    string `json:"Perdida"`
    Rinitis    string `json:"Rinitis"`
      Estornudos    string `json:"Estornudos"`
    Diarrea    string `json:"Diarrea"`
      Cefalea    string `json:"Cefalea"`
    Prurito     string `json:"Prurito"`
}

func main() {
    fmt.Println("Starting the application...")
    
    // leyendo data del servidor
    data, err := http.Get("http://localhost:3000/gophers")
    if err != nil {
        fmt.Printf("The HTTP request failed with error %s\n", err)
    } else {
        data, _ := ioutil.ReadAll(data.Body)
        fmt.Println(string(data))
    }

    body, readErr := ioutil.ReadAll(data.Body)
    if readErr != nil {
 
    }
    // Unmarshal JSON data
    var d []Json
    err = json.Unmarshal([]byte(string(body)), &d)
    if err != nil {
        fmt.Println(err)
    }
    // Create a csv file
    f, err := os.Create("datasets/dataset_covid_positivos_minapi.csv")
    if err != nil {
        fmt.Println(err)
    }
    defer f.Close()
    // Write Unmarshaled json data to CSV file
    w := csv.NewWriter(f)
    for _, obj := range d {
        var record []string
        record = append(record, obj.ID)
        record = append(record, obj.Fiebre)
        record = append(record, obj.Tos)
         record = append(record, obj.Disnea)
        record = append(record, obj.Anorexia)
         record = append(record, obj.Mialgas)
        record = append(record, obj.Perdida)
         record = append(record, obj.Rinitis)
        record = append(record, obj.Estornudos)
         record = append(record, obj.Diarrea)
        record = append(record, obj.Cefalea)
         record = append(record, obj.Prurito)
        record = append(record, "9.0000")
        w.Write(record)
    }
    w.Flush()

     fmt.Println("Terminating the application...")
}



 
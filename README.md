
# PS 8 - 10.04.2022 Redux - https://redux.js.org/

Instalacja:

Redux - `npm install redux react-redux`

ReduxToolkit - `npm install @reduxjs/toolkit`

Redux Chrome Extension - https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

# Zadanie 1 - Instalacja / konfiguracja początkowa

Zainstaluj Redux'a / ReduxToolkit'a oraz dodatek do Chrome'a
Analizując przykład z dokumentacji https://redux.js.org/tutorials/quick-start#usage-summary wykonaj początkową konfigurację redux store'a. Na potrzebę zajęć pliki związane z reduxem bedziemy umieszczali w lokalizacji src/redux/...  Powinieneś zatem:

- utworzyć plik /src/redux/store.js który docelowo będzie tworzył store i umieszczał w nim kolekcje (reducery)
- w pliku src/index.js powinieneś "opakować" aplikację w < Provider > pochodzący z redux'a
-  utworzyć plik /src/redux/airportsSlice.js, który bedzie na ten moment ustawiał wartość domyślną  dla właściwości airports.list oraz posiadał będzie szablon do uzupełniania reducerów oraz exportów dla akcji które utworzymy w kolejnych zadaniach

Wynikiem tego zadania powinna być pusta tablica zapisana w Reduxie, którą bedzie można podejżeć za pomocą dodatku do Chrome'a

![image](https://user-images.githubusercontent.com/9209826/229309616-4cdbcf59-b84f-4a9a-856b-4d865786aaf4.png)


# Zadanie 2 - Ładowanie lotnisk z pliku i wyświetlenie w komponencie pobranych danych ze store'a

W ramach tego zadania:
- zamień pustą listę airports.list bezpośrednio na dane z pliku `src/common/consts/airports.js`, następnie sprawdź czy trafiły one do store'a w rozszerzeniu Chrome
- pobierz te dane w komponencie AirportsList i wyświetl jak na poprzednich zajęciach, aby tego dokonać:
	- musisz użyć hooka useSelector aby przypisać stan ze store'a do zmiennej w komponencie którą będziesz mógł potem użyć do wylistowania na ekranie - patrz przykład z  dokumentacji https://redux.js.org/tutorials/quick-start#use-redux-state-and-actions-in-react-components


# Zadanie 3 - Załadowanie lotnisk za pomocą przycisku "Załaduj lotniska"

W ramach tego zadania:
- ustaw z powrotem listę lotnisk na pustą tablicę
- W komponencie Header dodaj przycisk "Załaduj lotniska", który po kliknięciu wywoła akcję "loadAirports" (dispatch) utworzoną w reducerze, której zadaniem będzie dodanie lotnisk z pliku do store'a. Do tego zadania będziesz potrzebował użycia hooka useDispatch, którego przykład użycia masz tutaj - https://redux.js.org/tutorials/quick-start#use-redux-state-and-actions-in-react-components
- Dodaj również przycisk "Usuń lotniska", który będzie ustawiał w store listę lotnisk jako pustą tablicę

W rezultacuie tego zadania:
 - po zalogowaniu użytkownik powinien widzieć tekst "brak lotnisk do wyświetlenia"
 - po kliknięciu w przycisk "Załaduj lotniska" tekst powinien się zamienić na liste jak w poprzednim zadaniu
 - po kliknięciu na przycisk "Usuń lotniska" zobaczysz ponownie tekst "brak lotnisk do wyświetlenia"


# Zadanie 4 - Selected airport

W ramach tego zadania:
-  utwórz w store nowy stan "selectedAirport", który domyślnie będzie nullem
 - po kliknięciu na dowolne lotnisko, dodaj cały obiekt wybranego lotnika do store'a, nastepnie w komponencie AirportDetails pobierz szzegóły lotnika ze store'a zamiast z localStorage jak robiliśmy to na poprzednich zajęciach.
 -

# Zadanie 5 - Modyfikacja danych w store - usuwanie lotniska

W ramach tego zadania:
 - zmodyfikuj istniejący kod w taki sposób aby po kliknięciu w ikonę kosza, odpowiednie lotnisko zostało usuwane ze store'a, dzięki czemu po powrocie na listę lotnisk ap[likacja będzie funkcjonowała jak na poprzednich zajęciach

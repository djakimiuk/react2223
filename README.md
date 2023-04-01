
# PS 7 - 25.03.2023 ReactRouter c.d / biblioteki zewnętrzne

Docs:

ReactRouter - https://reactrouter.com/en/6.9.0/start/tutorial

Lodash - https://lodash.com/

MaterialUI - https://mui.com/getting-started/installation/


Instalacja MaterialUI (npm) - https://mui.com/getting-started/installation/ / `npm install @mui/material @emotion/react @emotion/styled`

Instalacja svg Icons do MaterialUI (npm) - https://mui.com/getting-started/installation/ / `npm install @mui/icons-material`

Instalacja lodash'a - `npm i --save lodash`


# Zadanie 1

Komponent AirportsList wyświetla informację na temat dostępnych lotnisk na podstawie danych pochodzących z pliku `src/common/consts/airports.js`.

W ramach dzisiejszych zadań będziemy między innymi modyfikowali te dane, aby mieć taką możliwość w ramach tego zadania:
-   zapisz dane z pliku `airports.js` w localStorage pod kluczem "airports", a następnie zmodyfikuj komponent AirportsList.js w taki sposób aby wykorzystywał dane z local.storage zamiast bezpośrednio danych z pliku.
- zapisanie danych do l.storage powinno się odbywać po zalogowaniu użytkownika, ale tuż przed przeniesiem go na kolejny widok
- pamiętaj o użyciu metod JSON.stringify() oraz JSON.parse() aby otrzymać oryginalny format danych

# Zadanie 2 - Biblioteka lodash - uniqueId

Każdy obiekt zawierający dane o lotnisku ma pustą wartość dla argumentu "id". Do kolejnego zadania będziemy potrzebowali unikatowych identyfikatorów dla każdego z lotnisk.

Zmodyfikuj dane lotnisk w local storage w taki sposób aby każde lotnisko posiadało unikatowe id.

Wykorzystaj do tego metodę `uniqueId` z biblioteki Lodash DOC: https://lodash.com/docs/4.17.15#uniqueId

Powinieneś zatem zaimportować metodę uniqueId w komponencie
`import { uniqueId } from  'lodash';`
następnie każde wywołanie `uniqueId()` zwróci unikatowe Id w kontekście całej aplikacji

Aby zmodyfikować istniejące lotniska użyj funkcj mapującej jak poniżej:
`airports.map((airport) => ({...airport, id:  uniqueId()}))`
Po dodaniu ID wyświetl je obok nazwy każdego lotniska w komponencie AirportsList


# Zadanie 3 - Dodanie podstrony - airport/details/

Zadanie polega na zmodyfikowaniu aktualnego routingu w następujący sposób:
1. Użytkownik po zalogowaniu powinien być przenoszony na adres /airport/list (aktualnie jest /dashboard)
2. Aplikacja powinna posiadać dodatkowy routing /airport/details/:id do wyświetlenia szczegółowych informacji o konkretnym lotnisku

Na obu stronach powinien wyświetlać się komponent:
-  <App / > w którym bedzie się znajdował tylko nagłówek (czyli komponent <Header / >
-  oraz zawartość pochodząca z konkretnego routingu, zatem komponent < AirportsList> lub < AirportDetails>

Aby wykonać to zadanie, będziesz musiał wskazać za pomocą komponentu < Outlet /> z react-routera miejsce w którym powinny się wyświetlić komponenty dzieci dla poszczególnego routingu

# Zadanie 4 - Nawigacja i uzupełnienie AirportDetails o dane lotniska

Po zrobieniu zadania 3 posiadasz adres /airport/details/:id, który odpowiada za wyświetlenie komponentu AirportDetails. W tym momencie adres wpisujemy ręcznie, zatem dodajmy funkcjonalność w której:

- po kliknięciu na dowolone lotnisko z listy użytkownik zostanie przeniesiony na /airoprt/details/:id gdzie id odpowiada id klikniętego lotniska.
- w komponencie AirportDetails odczytajmy jakie id otrzymaliśmy, posłuży Nam do tego poniższy hook

import { useParams } from  'react-router-dom';

- skoro mamy już informację o id wybranego lotniska, znajdźmy pasujące w localStorage i wyświetlmy o nim trochę informacji np.
```
<header  className={commonColumnsStyles.AppHeader}>
	<p>Airport Details</p>
	<span>Państwo: {airportDetails.country}</span>
	...
</header>
```

# Zadanie 5 - Arrow back - nawigacja (Material UI)

W ramach tego zadania :
-	użyjmy ikony ArrowBack dostarczonej przez zewnętrzną bibliotekę MaterialUI https://mui.com/components/material-icons/
-  wyświetlmy ją w komponencie AirportDetails
- na zdarzenie onClick podepnijmy "nawigację wsteczną", czyli odwzorujmy zachowanie kliknięcia na strzałkę w lewo dostępna w przeglądarce obok adresu url
- dostęp do takiej nawigacji dostarcza nam hook
`import {  useNavigate } from  'react-router-dom'` a dokładnie wywołanie metody `navigate(-1)`

# Zadanie 6 - Material UI - wykorzystanie zewnętrznych komponentów

Celem tego zadania jest "upiększenie" aplikacji bez wiedzy na temat CSS'a. Będziesz również musiał zwrócić uwagę na właściwości które otrzymują poszczególne komponenty z biblioteki MaterialUi i się do tego dostosować.
Zastąp zatem kilka komponentów których aktualnie używamy gotowymi z biblioteki MaterialUI
W komponencie LoginPage:
1) Zastąp kombinację < label > + < input > gotowym komponentem < TextField /> - https://mui.com/components/text-fields/
2) Zastąp przycisk < button > komponentem <Button / > - https://mui.com/components/buttons/#main-content
W komponencie Header:
1) Użyj również komponentu < Button / >
2) Uyj komponentu < Typography /> zamiast standardowego < p > - https://mui.com/components/typography/
W komponencie AirportsList:
1)  użyj komponentu < Stack spacing={2}> - do wyświetlania listy w kolumnie - https://mui.com/components/stack/#main-content
2) < span > zastąp np. komponentem < Paper /> - https://mui.com/components/paper/#main-content

# Zadanie 7 - Usuwanie lotniska
W ramach tego zadania:
1) Obok ikony ArrowBack w komponencie AirportDetails umieść nową ikonę kosza
2) kliknięcie na tą ikonę powinno wykonać dwie czynności:
-	na podstawie posiadanego id usunąć z local.storage powiązane lotnisko
-	przenieść użytkownika do adresu /airports/list

Usunięte lotnisko nie powinno znajdować się na liście, możesz usunąć więcej lotnisk aby sprawdzić działanie, poczym odświeżyć przeglądarkę / wylogować się aby załadowac listę na nowo


# Zadanie 8 - Usuwanie lotniska - confirmation popup
Usuwanie elementu nigdy nie powinno odbywać się za pośrednictwem pojedyńczej akcji bez potwierdzenia przez użytkownika. W ramach tego zadania wyświetl okno potwierdzające, które będzie posiadało:
1) tekst - "Czy na pewno chcesz usunąć to lotnisko:  Okecie  /  Poland" - nazwa i państwo jest wartością zmienną
2) Przycisk "Tak" który zamyka okno, usuwa lotnisko i przenosi użytkownika do airports/list
3) Przycisk "Nie", który zamyka okno bez dodatkowej akcji

Wykorzystaj do tego celu komponent Alert Dialog - https://mui.com/components/dialogs/#alerts

# Zadanie 9 - Informacja o usuniętym lotnisku na AirportsList

Po usunięciu lotniska i przeniesieniu na listę, użytkownik powinien zobaczyć  dodatkowo informację o treści "Lotnisko Okęcie / Polska" zostało usunięte. Użyj do tego komponentu Snackbar - https://mui.com/components/snackbars/

Poniższa informacja na temat przekazywania parametru poprzez hook useNavigate będzie zapewne pomocna
```javascript
	navigate('/airports/list', { state: { removedAirport: airport } });

```
Następnie aby odczytać wartość przekazywanego parametru w komponencie do którego zostałeś przeniesiony powinieneś użyć
```javascript
import { useLocation } from  'react-router-dom';

const  location = useLocation();

const removedAirp = location?.state?.removedAirport
```

# PS 2 - 28.11.2021 - Kompozycja / Cykle życia
Dokumentacja: https://pl.reactjs.org/docs/react-component.html#the-component-lifecycle

Aktualny szablon aplikacji posiada 3 główne komponenty:
- Header - nagłówek
- Left Column - lewa kolumna, będziemy tutaj zajmować się komponentami klasowymi
- Right Coumn - prawa kolumna, alternatywa dla lewej, lecz utrzymywana w komponencie funkcyjnym

## Zadanie 1 - przekazywanie właściwości (props) cd.

  Przekaż komponentom LeftColumn oraz RightColumn wyświetlany text jako właściwość zamiast podawania jej wewnątrz komponentu jak jest to robione teraz.
  Wymagania:
  - przekazywane teksty powinny być najpierw zdefiniowane w zmiennych komponentu App
    ```
    const leftColumnText = '...'
    const rightColumnText = '...'
    ```
  - powinny zostać przekazane jako właściwość (props) o nazwie "text"
  - Oba komponenty tj. LeftColumn oraz RightColumn powinny mieć zdefiniowaną domyślną wartość dla właściwości "text", niech tą wartością będzie "Missing text from props". Wartość domyślna będzie wyświetlana, gdy użytkownik nie poda do komponentu właściwości "text".

## Zadanie 2 - stan komponentu - Licznik

  Celem tego zadania jest utworzenie licznika który będzie miał stan początkowy 0 i jego wartość będzie się zwiększać o 1 co sekundę. Licznik powinien zapisywać aktualną wartość w stanie komponentu App o nazwie "timerValue", zatem powinieneś:
  - komponent App jest funkcyjny zatem do operowania na stanie użyjemy hooka useState https://reactjs.org/docs/hooks-state.html
  - pamiętaj o zaimportowaniu reacta i hooka useState na górze komponentu
  - utwórz stan z wartością początkową 0 za pomocą hooka
  - napisz funkcję setTimeout która co sekundę będzie zwiększać wartość stanu o 1
  ```
  setTimeout(() => {
  ...
  }, 1000)
  ```
  - stan "timerValue" przekaż jako właściwość do komponentu Header i wyświetl tą wartość zamiast tekstu "Missing clock :("

## Zadanie 3 - cykle życia - Konstruktor - Left column count from 100

  Lewa kolumna jest komponentem klasowym, zatem jedną z metod cyklu życia jest Kontruktor. To właśnie tam definiujemy wartości początkowe dla stanów. Komponent LeftColumn będzie pokazywał zawsze wartość o 100 większą od liczby w Headerze, aby to uczynić wykorzystajmy stan który będzie miał wartość początkową 100 a komponent będzie sumował tą wartość z wartością głównego licznika. Zatem:
  - komponent LeftColumn będzie potrzebował wartości "timerValue" z glównego licznika, przekaż ją zatem z komponentu rodzica (App).
  - utwórzmy stan "initialLeftCounterValue" o wartości 100, potrzebujmy w tym celu użyć konstruktora, przykład poniżej

  ```
    constructor(props) {
        super(props);
        this.state = {
            ...
        };
    }
```
  - wyświetl wartość utworzonego stanu  w paragrafie <p> ponizej napisu "Left column" i sprawdź rezultat na ekranie (powinieneś zobaczyć 100)
  - zmodyfikuj utworzony paragraf w taki sposób aby zamiast wartości 100 wyświetlał (this.state.initialLeftCounterValue + this.props.timerValue) (jeżeli odlicza od 100 do góry wygrałeś !!!). Komponent LeftColumn co sekundę dostaje nową wartość w propsie timerValue która jest elementem wyświetlanym, zatem komponent LeftColumn jest przerenderowywany.
  - aby było wiadomo co robi lewa kolumna zmieńmy jej tekst z "Left column" na "Left column count from 100", przy czym:
      - "Left column" jest tekstem z propsa
      - "count from" - będzie po prostu wpisanym na sztywno tekstem
      - 100 - jest naszą wartością this.state.initialLeftCounterValue
  - połączenie tych 3 wartości możemy zrobić bezpośrednio w JSX za pomocą
   ```
  <p> {`${this.props.text} count from ${this.state.counter}`} </p>
  ```

  ## Zadanie 4 - cykle życia (funkcyjne) - Right column count from 5000

  Wykonajmy dla porównania bardzo podobne zadanie na komponencie funkcyjnym (rightColumn), przypominam, że korzystałeś juz z hooka useState w komponencie App. W ramach tego zadania powinieneś:
  - przekazać właściwość timera z komponentu App do RightColumn
  - utworzyć domyślny stan initialRightCounterValue o wartości 5000
  - zmodyfikować funkcję return w taki sposób aby wyświetlała tekst oraz wartość adekwatnie do kolumny lewej

  ## Zadanie 5 - cykle życia - shouldComponentUpdate - Left column count from 100 **only even numbers**

  Metoda shouldComponentUpdate pozwala na zablokowanie przerenderowania komponentu w określonych warunkach. Nie jest to co prawda rekomendowane działanie, ponieważ komponent powinien się przerenderowywać zawsze przy zmianie właściwości (bardziej dosadny przykład będzie na jednych z kolejnyc zajęć), ale dla celów zapoznawczych skorzystajmy z tej metody cyklu życia.

  Dodajmy zatem do komponentu LeftColumn metodę shouldComponentUpdate która wykona rerender komponentu tylko jeżeli nowa wartość przychodząca  licznika będzie parzysta

  Aby sprawdzić czy liczba jest parzysta sprawdzamy jej resztę z dzielenia (modulo) / 2 np.

  ```
  100 % 2 === 0 // true
  101 % 2 === 0 // false
  ```

  wiedząc zatem jak sprawdzić parzystość shouldComponentUpdate do komponentu (pamiętaj, że parametr nextProps zawiera właściwości "z przyszłości" czyli te które mają zostać wyświetlone a nie aktualne), szablon poniżej

  ```
    shouldComponentUpdate(nextProps, nextState) {
      if (...) {
        return true
      }
      return false
    }
  ```

 ## Zadanie 6 - cykle życia - shouldComponentUpdate - Left column count from 100 only even numbers – alternative

Skoro nie powinniśmy używać metody shouldComponentUpdate do blokowania przerenderowania komponentu to zastąpmy to rozwiązanie prawidłowym rozwiązując problem parzystego licznika. Rozwiązanie okazuje się bardzo proste, wystarczy odejmować od liczby nieparzystej 1 tuż przed wyrenderowaniem, a w przypadku gdy timer jest parzysty wyświetlać jego wartość normalnie (rozwiązanie zostało "przemycone" na jednym se slajdów wykładu, znajdź i skorzystaj - jeden ze slajdów dotyczących metody render() w cyklu życia).

 ## Zadanie 7 – renderowanie warunkowe
Zmodyfikuj metody render w komponentach LeftColumn oraz RightColumn w taki sposób aby:
- lewa kolumna wyświetlała logo tylko gdy wartość głównego licznika jest parzysta
- prawa kolumna wyświetlała logo tylko gdy wartość głównego licznika jest nieparzysta

 ## Zadanie 8 – renderowanie warunkowe - useEffect Hook - RightColumn

 Hook useEffect pełni funkcję 3 metod z komponentu klasowego: componentDidMount / componentDidUpdate / componentWillUnmount. Wykorzystajmy te 3 cykle życia w komponencie RightColumn aby uzyskać następujący efekt.
 - w momencie wyrenderowania wyświetl w konsoli "right column" - console.log('right column')
 - w momencie przerenderowania oraz parzystego licznika ustaw document.title = ":)"
 - w momencie przerenderowania oraz nieparzystego licznika ustaw document.title = ":("
 - w momencie odmontowania komponentu ustaw document.title = " ^^__^^ "

 Do uzyskania powyższych wymagań będziesz potrzebował dwóch użyć useEffect

```
useEffect(() => {
  // ... aktualizacja
  return () => {
  // ... odmontowywanie
  };
},[props.timerValue]);

useEffect(() => {
  // ... montowanie (tylko 1 raz)
}, []);
```

 Aby odmontować komponeent RightColumn dodaj warunek który będzie wyświetlał RightColumn tylko gdy licznik < 20
   ```
   {timerValue < 20 && <RightColumn timerValue={timerValue} text={rightColumnText} />}
   ```

## Zadanie 9
Wykonaj to samo co w zadaniu 7 dla komponentu LeftColumn, użyj zatem 3 metod cyklu życia:
- componentDidMound
- componentDidUpdate
- componentWillUnmount
w komponencie klasowym.

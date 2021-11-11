# PS 3 - 10.12.2022 Zdarzenia (events) / formularze

Dokumentacja
Obsługa zdarzeń (events handling): https://pl.reactjs.org/docs/handling-events.html
Zdarzenia syntetyczne (Syntetic events): https://pl.reactjs.org/docs/events.html#gatsby-focus-wrapper

# Zadanie 1 - event onClick

Komponent LeftColumn powinien:

- wyświetlać przycisk < button > z tekstem - Increase by 1
  ```
  <button onClick={this.handleIncreaseCounter}> INCREASE BY 1 </button>
  ```
- paragraf < p > który będzie wyświetlał wartość stanu counter"
- wciśnięcie przycisku powinno wyzwalać metodę "handleIncreaseCounter" która będzie zwiększała wartość licznika o 1,

# Zadanie 2 - event onContextMenu (kliknięcie prawym przyciskiem myszy) / blokowanie domyślnych zachowań przeglądarki

Zmodyfikuj komponent LeftColumn w taki sposób aby klikanie lewym przyciskiem myszy zwiększało licznik, zaś klikanie prawym zmniejszało jego wartość. Za kliknięcie prawym przyciskiem myszy odpowiada zdarzenie "onContextMenu", aby wykonać to zadanie będziesz musiał zablokować domyślne zachowanie przeglądarki (otwieranie menu), poprzez użycie metody e.preventDefault() przed modyfikowaniem stanu.
Zmień tekst przycisku na "Left click + 1 / Right click -1" i sprzwdź czy działa zgodnie ze swoją treścią.

# Zadanie 3 - event onDoubleClick / przekazanie zdrzenia do komponentu rodzica

Komponent Right Column powinien wyświetlać przycisk z tekstem "Double click should reset a timer", który jak wskazuje nazwa powinien zerować licznik w komponencie Header po podwójnym kliknięciu (zdarzenie - onDoubleClick).

Zatem:

- Komponent RightColumn powinien wyświetlać przycisk który będzie obsługiwał zdarzenie onDoubleClick

```
< button onDoubleClick={handleDoubleClick} > {buttonText} </ button >
```

metoda "handleDoubleClick" powinna przekazywać informację dla komponentu rodzica poprzez wywołanie zwrotne np.

```
  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  }
```

w takim wypadku wywołanie komponentu < RightColumn > powinno zawierać właściwość "onDoubleButtonClick"

```
<RightColumn onDoubleButtonClick={resetTimer} />
```

która będzie wywołaniem zwrotnym (będzie aktytować) metodę wewnętrzną "resetTimer" komponentu < App >

```
  const resetTimer = () => {
    setTimerValue(0);
  };
```

która ustawi stan "timerValue" na 0

# Zadanie 4 - modyfikowanie lcznikiem z komponentu dziecka

W komponencie RightColumn dodajmy 2 elementy:

- przycick z tekstem "Set value from input to timer"
- input type='number'

Zadanie polega na tym aby po wpisaniu wartości liczbowej do inputa i kliknięciu przycisku, wartość licznika zaczęła odliczać od podanej wartości. Np. po wpisaniu 200, licznik zmieni swoją wartość na 200 i będzie liczył dalej.

Zadanie jest podobne do poprzedniego, z tą różnicą, że do komponentu rodzica musimy przekazać dodawkowo wartość.

Uwaga: Zwróć uwage na tym zmiennej którą będziesz przekazywał

# Zadanie 5 - cykle życia - komponent klasowy / if guard render

Celem tego zadania jest zrozumienie i przetestowanie działania metod cyklu życia w komponencie klasowym (Left Column) oraz użycie wzorca live guard w celu porównania jego działania z renderowaniem warunkowym.

- wewnątrz komponetu Left Column utwórz metody "componentDidMount" / "componentWillUnmount" / "componentDidUpdate" a wewnątrz ich umieść console.log'i adekwatne do użytego miejsca np. "console.log('componentDidMount') / console.log('componentWillUnmount') / console.log('componentDidUpdate'), posłużą one do monitorowania zachowania komponentu.
- komponent Left Column powinien renderować zawartość tylko wtedy gdy licznik jest mniejszy od 500, zmodyfikuj zatem metodę render w sposób jak poniżej
  ```
  render() {
    const { currentTimerValue } = this.props;
    const columnShouldBeHidden = currentTimerValue > 500;
  if (columnShouldBeHidden) {
      return null;
  }
  return ... <-- w tym przypadku komponent powinien zachowywac się jak poprzednio
  ```
  następnie ustaw licznik na 495, odczekaj 5 sekund i zaobserwuj zachowanie komponentu (zwróć uwagi na to co się dzieje z metodami cyklu życia)
- jak zapewne zauważyłeś po ustawieniu liczninka na 500 komponent przestał renderować swoją zawatość ale wciąć loguje metodę "componentDidUpdate". Wynika to z faktu, że komponent nie został odmontowany, jedynie przestał wyświetlać na ekranie swoją zawartość (tak działa umowny wzorzec "if guard").
- aby prawidłowo odmontować komponent użyjmy renderowania warunkowego dla takiego samego przypadku, w tym celu w miejscu renderowania komponentu (App.js) dodajmy warunek renderowania
  ```
  { timerValue < 500 && <LeftColumn ... />
  ```
- sprawdź jak w takim przypadku zachowuje się komponent - powinien odmontować się całkowicie gdy licznik wybije 500

# Zadanie 6 - formularze - https://pl.reactjs.org/docs/forms.html#gatsby-focus-wrapper

- Do wykonania tego zadania będziemy potrzebowali 3 nowych stanów w komponencie Left Column (name, zodiac, messageText), dodaj je w konstruktorze i nadaj im domyślną wartość "" (pusty string)
- wartość stanu "messageText" powinna być wyświetlana w komponencie, zatem dodaj odpowieni paragraf w metodzie render
  ```
  <p>{this.state.messageText}</p>
  ```
- Komponent LeftColumn powinien wyświetlać również formularz który będzie zawierał 2 pola tekstowe tj. Imie / Znak zodiaku (), pseudokod poniżej
  ```
         <form onSubmit={this.handleSubmit}>
           <label>
             Imię:
             <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
           </label>
           <label>
             Znak zodiaku:
             <input type="text" name="zodiac" value={this.state.zodiac} onChange={this.handleChange} />
           </label>
           <input type="submit" value="Wyślij" />
         </form>
  ```
- metoda **handleChange** będzie odpowiadać za aktualizacje odpowiedniego stanu po wpisaniu wartości w powiązany input
- metoda **handleSubmit** będzie wywoływana po wciśnięciu przycisku "Wyślij" i powinna modyfikować stan "messageText" tak aby jego wartość wyświetlała tekst "Cześć [wpisane w formularzu imie], twój znak zodiaku to: [wpisany w formularzu znak zodiaku].
  **!!!Pamiętaj** o zablokowaniu domyślnego zdarzenia przeglądarki po wysłaniu formularza poprzez użycie
  ```
  e.preventDefault()
  ```

# Zadanie 7 - formularze cd.

- Utwórz taki sam formularz w komponencie funkcyjnym Right Column i odwzoruj jego zachowanie

# Zadanie 8 - kompozycja / reużywalność

Komponenty Left oraz Right column używają dokładnie tego samego formularza. Jest to świetny przypadek, aby wydzielić kod formularza do oddzielnego komponentu i użyć go w obu komponentach.

- Utwórz zatem nowy komponent "Form" (src/components/Form/Form.js)
- Skopiuj zawartość komponentu LeftColumn.js do nowo utworzonego pliku i pozostaw tyko kod odpowiedzialny za formularz (powiązane stany / metody / formularz wewnątrz funkcji "return")
- komponent Form musi posiadać 2 stany (name, zodiac), a po wciśnięciu przycisku "Wyślij", powinien przekazywać do rodzica treść wiadomości do wyświetlenia, zatem funkcja handleSubmit może wyglądać jak poniżej

  ```
  const handleSubmit = (event) => {
   event.preventDefault();
   const message = `Cześć ${name}, twój znak zodiaku to: ${zodiac}`;
   props.sendMessageToParentComponent(message)
  }
  ```

  a wywołanie komponentu <Form> wewnątrz komponentów Left oraz Right może wyglądać tak:

  ```
  <Form sendMessageToParentComponent={this.setMessageAfterSubmitChildComponentForm} />
  ```

  przy czym funkcja "setMessageAfterSubmitChildComponentForm" będzie ustawiała stan "messageText" dla komponentu Left lub Right Column, co spowoduje wyświetlenie tekstu przekazanego z komponentu "dziecka" czyli komponentu <Form>

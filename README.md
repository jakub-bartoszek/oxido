# Aplikacja do Generowania Artykułów HTML z OpenAI API

## Opis

Aplikacja pozwala na konwersję artykułu w formie tekstowej do kodu HTML przy pomocy OpenAI API. Aplikacja wykonuje następujące kroki:

1. Odczytuje zawartość pliku tekstowego (`artykul.txt`).
2. Przesyła artykuł do modelu OpenAI w celu wygenerowania odpowiedniego kodu HTML.
3. Zapisuje otrzymany kod HTML w pliku `artykul.html`.
4. (Opcjonalnie) Umożliwia podgląd artykułu w formacie HTML w przeglądarce, za pomocą szablonu i prostego edytora.

## Funkcje

- Przesyła artykuł do OpenAI API, które generuje kod HTML.
- Kod HTML jest strukturalnie poprawny i zawiera odpowiednie tagi `<img>` z miejscami na grafikę.
- Do każdej grafiki generowany jest podpis w tagu `<figcaption>`.
- Aplikacja działa na Node.js przy użyciu Express.js.

## Wymagania

- **Node.js** w wersji 16 lub wyższej.
- **npm** lub **yarn** do zarządzania zależnościami.
- **Klucz API z OpenAI** (wymagany do komunikacji z API).

## Instalacja

1. **Zainstaluj Node.js i npm**:  
   Jeśli nie masz zainstalowanego Node.js i npm, możesz je pobrać i zainstalować ze strony [https://nodejs.org](https://nodejs.org).

2. **Skopiuj repozytorium**:  
   Skopiuj repozytorium na swoje lokalne środowisko:

   ```bash
   git clone https://github.com/jakub-bartoszek/oxido
   cd oxido
   ```

3. **Zainstaluj zależności**:  
   Zainstaluj wymagane pakiety przy użyciu npm:

   ```bash
   npm install
   ```

4. **Skonfiguruj klucz API**:  
   Stwórz plik `.env` w głównym katalogu projektu i dodaj swój klucz API z OpenAI:
   ```bash
   OPENAI_API_KEY=your_api_key_here
   ```

## Uruchomienie aplikacji

1. **Uruchom serwer**:  
   Aby uruchomić aplikację, wykonaj poniższą komendę:

   ```bash
   npm start
   ```

2. **Dostęp do aplikacji**:  
   Po uruchomieniu serwera, aplikacja będzie dostępna pod adresem:

   ```
   http://localhost:3000/generate.html
   ```

   Po wejściu na ten adres, serwer wygeneruje plik `artykul.html`, który będzie zawierał odpowiednio przekształcony artykuł w formie HTML.

## Struktura Katalogów

- `public/`: Katalog zawierający pliki wejściowe (`artykul.txt`) oraz pliki wyjściowe (`artykul.html`).
- `index.js`: Główny plik aplikacji, który uruchamia serwer i łączy się z OpenAI API.
- `szablon.html`: Szablon do podglądu artykułu HTML w przeglądarce.
- `podglad.html`: Przykładowy podgląd artykułu HTML.

## Wskazówki

- **Plik `artykul.txt`**: Upewnij się, że plik tekstowy zawiera artykuł do konwersji na HTML. Warto dodać tam tytuł, nagłówki, akapity i inne elementy, które chcesz, aby zostały uwzględnione w wygenerowanym HTML.
- **Generowanie HTML**: Jeśli chcesz, aby artykuł zawierał miejsca na obrazy, możesz dodać w treści artykułu oznaczenia, które sugerują, gdzie mają zostać umieszczone grafiki.

## Dodatkowe Funkcje

Aplikacja posiada także szablon HTML (`szablon.html`), który umożliwia podgląd wygenerowanego artykułu. Możesz wprowadzić kod HTML do sekcji `<textarea>`, a po kliknięciu przycisku "Podgląd" zobaczysz artykuł w pełnej formie.

## Przykładowe Pliki

- `artykul.txt`: Artykuł, który chcesz przekształcić na HTML.
- `artykul.html`: Wygenerowany kod HTML artykułu (zapisany przez aplikację).
- `szablon.html`: Prosty szablon, który umożliwia podgląd artykułu w przeglądarce.

## Licencja

Projekt jest dostępny na licencji MIT. Możesz go dowolnie używać i modyfikować zgodnie z warunkami tej licencji.

## Kontakt

W razie pytań lub sugestii, proszę o kontakt na adres e-mail: [jakub.bartoszek.dev@gmail.com](mailto:jakub.bartoszek.dev@gmail.com).

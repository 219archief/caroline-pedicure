# Caroline Pedicure

Een warme, persoonlijke website voor de pedicurepraktijk aan huis van Caroline in Nijmegen. Statische HTML, CSS en JavaScript, zonder installatie of buildstap.

## Lokaal bekijken

Open `index.html` in je browser, of start vanuit deze map:

```sh
python3 -m http.server 4173
```

Ga naar <http://localhost:4173>.

## Bestanden

- `index.html`: inhoud, metadata en LocalBusiness-gegevens.
- `style.css`: vormgeving voor mobiel en desktop.
- `app.js`: menu, behandelingskeuze, e-mailformulier en privacyvenster.
- `assets/`: lokale afbeeldingen en lettertypen.
- `robots.txt` en `sitemap.xml`: voorbereid voor het definitieve domein.

## Contactformulier

Het formulier opent een ingevulde e-mail in het e-mailprogramma van de bezoeker. Het verstuurt geen berichten vanaf een server. Bellen, WhatsApp en direct mailen zijn ook beschikbaar. Er worden geen formuliergegevens lokaal opgeslagen.

## Publiceren

Alle bestanden kunnen rechtstreeks op statische hosting worden geplaatst. Er is geen backend en er zijn geen API-sleutels nodig.

De voorbeeldversie bevat `noindex,follow`. Verander dit pas naar `index,follow` wanneer deze versie de definitieve website vervangt. Controleer dan ook de canonical URL, social metadata, LocalBusiness-URL en sitemap; deze verwijzen nu naar `https://carolinepedicure.nl/`.

## Bedrijfsgegevens

De teksten noemen geen onbevestigde openingstijden, behandeltijden, opleidingen of reviews. Bevestig eventuele aanvullende gegevens en tarieven voordat je ze toevoegt.

De afbeeldingen en het logo zijn afkomstig van de oorspronkelijke Caroline Pedicure-website. Er wordt geen open-sourcelicentie op deze bestanden toegepast.

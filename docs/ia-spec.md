<!-- ABOUTME: Information architecture spec for Bucks County CuriARTsity, derived from an audit of umbrelladecor.com. -->
<!-- ABOUTME: Hand-off document for a designer: site map, page-by-page structure, content model, and channel-parity rules. -->

# Information Architecture Spec
## Bucks County CuriARTsity

Prepared 6 August 2026. Reference site audited: `https://www.umbrelladecor.com` (Umbrella Antiques & Modern, Hopewell NJ).

---

## 1. Purpose

Visual design of bccuriartsity.com is settled and is not in scope. What is in scope is **structure**: what pages exist, what lives on each one, what order things appear in, and how a visitor moves between them.

The organizing problem this spec solves: **the shop sells in two places at once.** There is a physical space inside Darberry's Antiques in Lambertville, and there is a Chairish storefront. Most small-dealer sites pick one and demote the other. Usually the website becomes a brochure for the physical shop with a marketplace link buried in the footer, or the reverse: an online catalog with an address hidden on a contact page.

Neither is right here. Both channels are real revenue. The IA has to treat them as **peers**, and it has to do so structurally, not just by saying so in copy.

Umbrella was audited because it is the closest working example of that peer treatment in this exact business (antiques dealer, physical showroom, listings on 1stDibs and Chairish, owner is also an artist). Sections 2 and 3 record what it does. Sections 4 onward are the proposed structure for CuriARTsity, which borrows the good parts and fixes the weak ones.

---

## 2. Audit: how Umbrella is structured

### 2.1 Site map as built

Primary navigation, five items, no dropdowns:

- `HOME` → `/`
- `ABOUT US` → `/about-umbrelladecor`
- `SHOP INVENTORY` → `/shopinventory`
- `NEWS` → `/news`
- `CONTACT` → `/contact`

Off-site destinations, reachable only as small icons in the header and footer strip:

- 1stDibs dealer storefront (`umbrella.1stdibs.com`)
- Chairish shop (`chairish.com/shop/ejix4s`)
- Instagram
- Facebook

Blog posts live at `/single-post/<slug>`. There are also orphaned pages in the sitemap not reachable from navigation (`/farmtables`, `/midcentury`, `/furnishings`, `/accessories-lighting`, `/shop-now`, `/book-online`, plus a set of `fay-*` pages for the owner's art practice). Those are leftovers. Ignore them as precedent, but note them as a warning in section 8.

### 2.2 The persistent frame

This is the single most important thing the site does, and it is the reason it reads as store-and-online-equal.

A band appears at the top of **every** page, and the same band repeats at the bottom of every page:

- Logo
- `2 Somerset Street, 2nd Floor / Hopewell, New Jersey 08525`
- `609-466-2800 • sales@umbrelladecor.com`
- `Open Wednesday-Sunday / 11:00 am to 5:00 pm`
- A row of four 33×33 icons: 1stDibs, Chairish, Instagram, Facebook

Street address, hours, phone, and the two marketplaces sit **in the same band, at the same size, in one glance.** No scrolling required, no page to click into. A visitor cannot form the impression that this is "a website with a shop attached" or "a shop with a website attached." Both are simply present, always.

### 2.3 Page by page

**Home.** A splash. Logo, address, hours, icon row, navigation, and a large image. No featured pieces, no headline, no call to action, no reason to scroll. Documented here because it is the site's clearest weakness. Do not copy it.

**About** (`/about-umbrelladecor`). Roughly 120 words. Founded 16 years ago by two sisters-in-law, one a former television producer turned exhibiting artist, one a retired special education teacher, both empty nesters wanting a creative challenge. Collecting turned into selling, they recruited dealers they respected, and the shop opened. Short, first-person in feel, specific, no mission statement. It works because it is a story about people.

**Shop Inventory** (`/shopinventory`). The structural centerpiece, and the page worth studying closely.

It is named like a store and behaves like an **editorial feature.** There is no cart, no price, no filtering, no search. What it contains:

1. A large vignette photograph at the top: a full room scene, not a cutout product shot, with a long descriptive caption naming individual pieces in it (John Stuart teak armchairs, a Knoll Calcutta marble tulip table, a 19th-century mahogany roll-top desk, a 1970s metal and nail wall sculpture). The caption ends by placing the shop geographically: "in Hopewell, New Jersey, offering one of the most distinctive selections near Princeton and Lambertville."
2. A one-sentence positioning line about the curated mix and the dealer network.
3. Three category blocks in fixed order, each with a prose paragraph followed by two featured pieces:
   - **Antiques.** Paragraph is about *sourcing*, not product: the dealers' guarded sources in mainline Philadelphia, North Jersey, Connecticut, New York suburbs, Nantucket, Maine, and one dealer who imports from small towns in France. Ends on "you never know what you'll find at our shop."
   - **Midcentury Modern.** About a third of the collection. Names designers (Milo Baughman, Eames, Vladimir Kagan, Adrian Pearsall) and notes contemporary pieces at secondary-market prices.
   - **Accessories, Lighting & Art.** Ranges from classical to ultra-modern. Names lighting brands, mentions salvage from the original Plaza Hotel, and folds in the founder's own paintings and assemblages as a permanent part of the showroom.
4. Each featured piece is a photo, a full descriptive title ("Elegant Dutch Rococo Walnut Commode", "Set of 8 Italian Post Modern White Leather Dining Chairs by Cattelan Italia"), and a `More info` link that goes **off-site to the 1stDibs listing.**

So the division of labor is explicit: the website carries voice, curation, provenance, and the argument for visiting. The marketplace carries price, availability, and the transaction. Six pieces total, refreshed periodically. Nobody is maintaining an inventory system.

**News** (`/news`). A second large captioned vignette, then a short list of posts. Both current posts are about the founder's art practice at outside venues (joining The People's Store in Lambertville, a Makers Alley fall exhibition). The blog is functioning as an events-and-appearances feed, not as content marketing.

**Contact** (`/contact`). Four things stacked: an invitation to ask about price on any inventory, a consignment intake instruction ("send photos to sales@ for consideration"), the full name-address-phone-hours block, an embedded Google map, and a four-field form (first name, last name, email, message).

That consignment line is doing quiet business development on the page most people only visit to find the address.

---

## 3. What to take and what to reject

**Take:**

1. The persistent top-and-bottom band carrying address, hours, contact, and channel links together. This is the parity mechanism.
2. A shop page that is editorial rather than transactional, with the marketplace handling price and checkout.
3. Category blocks that lead with a paragraph about *how pieces are found*, not about the pieces themselves. Sourcing is the differentiator and it is what a chain retailer cannot say.
4. Full descriptive titles on pieces. "Elegant Dutch Rococo Walnut Commode" is both better copy and better search bait than "Commode".
5. Room-scene vignette photography with captions that name what is in the frame. One photograph does the work of six product shots and it sells the experience of walking through the space.
6. Geographic anchoring in body copy. Umbrella names Princeton and Lambertville repeatedly. CuriARTsity is *in* Lambertville and should name New Hope, Doylestown, Princeton, and Bucks County the same way.
7. A short, specific, first-person origin story with real biography in it.
8. A consignment or intake ask placed on the contact page.

**Reject:**

1. **The empty homepage.** Umbrella's front page gives a visitor nothing to do and nothing to look at beyond a logo. Ours has to feature actual pieces and offer a clear next step.
2. **Unlabeled marketplace icons.** A 33×33 Chairish logo means nothing to someone who has never used Chairish, and that is most local walk-in customers. Channel links get words.
3. **One-way outbound links.** `More info` sends a visitor to 1stDibs and the journey ends. Ours should make the return trip obvious and should not send someone off-site until the site has done its own selling.
4. **Silence about where a piece actually is.** Nothing on Umbrella tells you whether a featured piece is on the showroom floor, only online, or already gone. That ambiguity is the single biggest gap for a two-channel business and section 6 addresses it directly.
5. **Orphan pages.** Six or more pages exist in their sitemap with no route from navigation. Every page in our structure must be reachable from the primary navigation or from a page that is.

---

## 4. Proposed site map

The current site is one page with anchor navigation plus a detail page per gallery piece. This proposal keeps that shape, because it suits a shop of this size and it keeps editing simple, and it adds one page.

**Primary navigation** (five items, matching the existing anchor pattern):

- `Home` → `/#home`
- `About` → `/#about`
- `Gallery` → `/#gallery`
- `Visit` → `/visit/`
- `Shop on Chairish` → external, labeled, opens in a new tab

**Pages:**

1. `/` — the single page, with sections in the order given in section 5.
2. `/gallery/<slug>/` — one page per piece. Already exists.
3. `/visit/` — new. Everything about coming to the physical space, described in section 5.7.

**The fifth nav item is the parity statement.** Umbrella puts its marketplaces in an icon strip. We put Chairish in the primary navigation, spelled out, sitting at the same level as Visit. A visitor reads the two ways to buy in the same line of the same menu. Designer note: give the external item a small outbound-link marker so nobody is surprised to leave the site, but do not shrink it or grey it out relative to its neighbors.

---

## 5. Page and section specification

### 5.0 The persistent frame

Two elements repeat on every page, including gallery detail pages.

**Utility bar**, above or within the sticky header:

- Left: `Inside Darberry's Antiques · 80 Lambert Ln, Lambertville NJ`
- Center or right: today's hours, rendered as `Open today 11–5` or `Closed today · Open Friday 11–4`. If a live day calculation is not practical, fall back to the full week in the header on desktop and to `Open Fri–Mon` on mobile.
- Right: phone, linked as a tel: link.

**Footer band.** The existing dark "Find Me In Person" block stays and gains a sibling. Two columns of equal width and equal typographic weight:

- **Find Me In Person** — address including "inside Darberry's Antiques", full hours, phone, email, and the three map links already in the data (Apple, Google, Waze).
- **Find Me Online** — the Chairish storefront with a sentence saying what it is ("Browse and buy pieces shipped anywhere in the country"), Instagram, and email inquiry.

Stacked on mobile with In Person first, since a phone in Lambertville is more likely to be someone standing outside looking for the door.

### 5.1 Hero (`#home`)

- One vignette photograph of the actual space. A room scene, not an isolated object on white.
- Headline in the established first-person voice.
- One or two supporting sentences that name both channels in the same breath. Something in the shape of: *A booth full of art and oddities inside Darberry's Antiques in Lambertville, and a Chairish shop that ships anywhere.*
- Two calls to action, side by side, visually equal: `Plan a visit` (to `/visit/`) and `Shop on Chairish` (external).

Equal weight on those two buttons is a hard requirement, not a preference. If one is a filled button and the other is a text link, the structure has already picked a favorite.

### 5.2 Two doors

A short band immediately under the hero, two panels side by side, stacked on mobile.

- **In the shop.** What the physical visit is good for: pieces too large or too fragile to ship well, the discovery of walking the aisles, seeing scale and condition in person, the rest of what Darberry's holds.
- **On Chairish.** What the online channel is good for: browsing from anywhere, current prices, offers, shipping, and the fact that it is the same curation and the same person behind it.

This band is the whole thesis of the site in about eighty words. It runs high on the page for that reason.

### 5.3 Featured pieces (`#gallery`)

- Section label and heading as they exist now.
- Six to nine pieces in the grid, reverse chronological.
- **Every tile carries an availability badge.** See section 6.
- Each tile links to its detail page, not directly to Chairish. Off-site links happen at the detail level, after the piece has been described properly.
- A closing link under the grid to the Chairish storefront, worded as "See everything currently listed" rather than as a duplicate of the nav item.

### 5.4 Gallery detail page (`/gallery/<slug>/`)

Order of content:

1. Image, with additional images if present.
2. Full descriptive title.
3. Availability badge, high on the page, above the fold.
4. Medium, year, dimensions.
5. The story: where it came from, what makes it odd or good, what it would suit. This is the part a marketplace listing does badly and the part that justifies the page existing.
6. Action, which varies by availability:
   - **On Chairish**: `View on Chairish` with price context, plus a secondary `Or come see it in the shop`.
   - **In the shop only**: `Ask about this piece` (email or form, prefilled with the title) plus `Get directions`.
   - **Both**: both actions, equal weight.
   - **Sold**: a plain statement that it sold, plus a link back to the gallery and to Chairish for what is current.
7. Back link to `/#gallery`, which already exists.

### 5.5 About (`#about`)

Keep the first-person "Why I Do This" voice. Structure it as Umbrella's about is structured: a real story about a real person, roughly 150 to 250 words, specific rather than aspirational. Add one sentence about how pieces are sourced, because sourcing is the differentiator identified in section 3.

Include a photograph of the owner or of the owner working. Umbrella's about page has no face on it and is weaker for it.

### 5.6 Visit block on the homepage

A condensed version of the Visit page: address, hours, one photograph of the storefront or the entrance, and a link through to `/visit/`. Do not duplicate the whole page here.

### 5.7 Visit page (`/visit/`)

New page. It exists because "inside Darberry's Antiques" is a complication that a line of address text does not resolve, and because a first-time visitor's anxiety is entirely logistical.

- Full address and the "inside Darberry's Antiques" relationship explained in a sentence.
- Full hours, and a clear statement if the booth hours differ from the building's hours.
- Embedded map, plus the three existing map links.
- Photograph of the building exterior, and a photograph of the booth itself, so a visitor recognizes both when they arrive.
- Parking, and any note about entering from the correct side or floor.
- A sentence on what else is in the building, since it is a reason to make the trip.
- Contact, for anyone who wants to check whether a specific piece is still on the floor before driving.

### 5.8 Contact and footer band

Already exists as the dark band. Additions:

- The consignment or intake ask, if that is a line of business: "I look at pieces for consignment. Send photos."
- The inquiry invitation, in the same spirit as Umbrella's: any piece, any question, ask.
- The Find Me Online column described in 5.0.

---

## 6. Availability: the piece of structure Umbrella is missing

Every piece shown anywhere on the site must declare where a person can get it. Four states, one of which is always true:

- **In the shop** — on the floor at Lambertville, not listed online.
- **On Chairish** — listed online, ships.
- **In the shop and on Chairish** — both.
- **Sold** — gone. Already supported by the existing `sold` flag.

Design requirements:

- The badge is legible at gallery-tile size, not only on the detail page.
- The two live channels are visually distinct from each other but of equal prominence. Do not style Chairish as a promotion badge and the shop as a plain label, or the reverse.
- Sold reads as neutral history, not as failure. Sold pieces are proof of taste and are worth keeping visible.

Content model addition, for whoever implements this. Current gallery front matter carries `title`, `date`, `medium`, `year`, `image`, `sold`. Add:

- `availability`: one of `shop`, `chairish`, `both`, `sold`
- `chairishUrl`: the listing URL, required when availability includes Chairish
- `dimensions`: string
- `story`: the body of the markdown file, which is where the long description belongs

`sold` and `availability: sold` are the same fact written twice. Pick one and retire the other during implementation.

---

## 7. Parity rules

These are testable. A reviewer should be able to check each one by looking.

1. Wherever one channel appears, the other appears, at equal visual weight, within the same band or section.
2. Neither channel is described as primary, real, main, or full. The shop is not "also on Chairish" and Chairish is not "an online extension of the shop."
3. Every piece shown anywhere on the site declares its availability.
4. Channel links carry words, never a bare icon. "Shop on Chairish", not a logo tile.
5. Outbound links open in a new tab and are marked as leaving the site.
6. Address and hours are reachable without scrolling on every page.
7. On mobile, the stacking order never places both of one channel's elements above both of the other's within the same band.

---

## 8. Constraints and notes for the designer

- **Visual design is fixed.** Palette (forest green, deep charcoal, warm cream, taupe), typefaces (Crimson Text for headings, Jost for body), and the existing component styling are settled. This spec asks for structure, order, and new components consistent with what exists. It does not ask for a restyle.
- **Mobile first.** The build has a single breakpoint at 769px and the base layer is the mobile layout. Every new section needs its mobile behavior specified, not inferred. Two-column bands in particular: state which column comes first when stacked.
- **Voice is first person.** "I hunt for pieces", "Find Me In Person". The shop is a person, not a "we". Umbrella's copy slides between the two and it costs them warmth.
- **Address and hours have one source.** They are stored once and rendered everywhere from that source. Design can repeat them freely without creating a maintenance burden, but do not introduce variant phrasings that imply different facts.
- **Every page must be reachable from navigation.** Umbrella's sitemap contains at least six pages with no path to them from the menu. That is what happens without this rule.
- **Keep the inventory burden low.** The featured set is six to nine pieces refreshed periodically, not a catalog. The site is not becoming a store, and nothing in this spec should imply building one.

---

## 9. Open questions

1. Do the booth's hours match Darberry's building hours exactly? If they diverge, the Visit page needs to say so explicitly and the header's "open today" logic needs to reflect the booth, not the building.
2. Is consignment or buying from the public an active line of business? If yes it earns a place on the contact block; if no, leave it out rather than inviting mail that goes unanswered.
3. Is there a second marketplace now or planned? The structure holds for two channels. A third needs the "Find Me Online" column and the availability states revisited before it is added.
4. Are there photographs of the storefront, the entrance, and the booth itself? The Visit page depends on them and they are the hardest assets to fake.

---

## 10. Acceptance criteria

The structure is delivered when all of the following are true:

- The primary navigation contains a spelled-out link to the Chairish storefront, at the same level and weight as the other items.
- The hero offers two calls to action, one per channel, at equal visual weight, on desktop and on mobile.
- A "two doors" band appears above the fold on desktop and within the first scroll on mobile.
- Every gallery tile and every detail page shows an availability state.
- The footer band carries both a Find Me In Person column and a Find Me Online column, of equal width and weight.
- A `/visit/` page exists, is linked from the primary navigation, and answers address, hours, parking, and what the building is.
- Address and hours are visible without scrolling on every page at both mobile and desktop widths.
- No page in the built site is unreachable from the primary navigation.

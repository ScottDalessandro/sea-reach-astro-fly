# Sea Reach Beach House — Aura.build Prompt

*Ready-to-paste prompt for generating the Sea Reach landing page in aura.build*
*Last updated: February 2026*

---

## How to Use

1. Go to [aura.build](https://aura.build)
2. Start a new project
3. Copy everything between the `---START PROMPT---` and `---END PROMPT---` markers below
4. Paste it into aura.build's prompt input
5. Generate the page

### After Generation — What to Customize

- **Logo:** Replace the text logo with the actual Sea Reach logo image (`src/assets/logos/sea-reach-logo-light.png`)
- **Images:** Replace placeholder image areas with actual photos (filenames noted in each section)
- **Booking link:** CTAs use `mailto:sdaless22@gmail.com` — replace with a booking form if added later
- **Map:** Replace the map placeholder with an embedded Google Map for 106 Atlantic Ave, Point Pleasant Beach, NJ 08742
- **VRBO/Airbnb links:** Add actual listing URLs (VRBO #2823698, Airbnb #8605514)
- **Analytics:** Add tracking pixels/scripts after generation
- **Favicon:** Use the existing `favicon.svg`

---

## The Prompt

---START PROMPT---

Create a completely fresh, experience-led single-page website for a premium beach house vacation rental called **Sea Reach Beach House** in Point Pleasant Beach, NJ.

**Important:** This is a brand-new design — do not reference or recreate any existing website. Design this from scratch as a modern, warm, editorial-style landing page that feels like a premium hospitality brand. Think Airbnb Luxe meets a boutique hotel site — elevated, warm, and inviting.

**Tone:** Write like someone who loves this place sharing it with you — not a salesperson doing math for you. Sensory language. Let photos do heavy lifting. The page should feel like opening a beautiful magazine spread about your next vacation. Pricing lives in ONE section (Book Direct), nowhere else.

---

### GLOBAL DESIGN SYSTEM

The color palette is derived from the Sea Reach logo, which features a sunset beach scene: deep navy line art, a coral-to-peach sunset sky, and warm sandy gold tones.

**Colors:**

- Navy (primary text, headings, dark backgrounds): `#1b2e50`
- Coral (primary accent, CTAs, highlights): `#e8837e`
- Peach (warm accent, gradients, hover states): `#f0a07a`
- Sandy Gold (secondary accent, badges, highlights): `#e8c86a`
- Warm White (page background): `#fdf9f6`
- Light Sand (alternating section backgrounds): `#faf5ef`
- Body text: `#4a4a4a`
- Muted text: `#7a7a7a`
- Success green (savings callouts in Book Direct section only): `#3a9e6e`
- Card backgrounds: `#ffffff`
- Card shadows: `0 4px 24px rgba(27, 46, 80, 0.06)`

**Gradient (used for hero overlays, accent bars):**

- Sunset gradient: `linear-gradient(135deg, #e8837e, #f0a07a, #e8c86a)`
- Navy overlay: `linear-gradient(to bottom, rgba(27, 46, 80, 0.4), rgba(27, 46, 80, 0.7))`

**Typography:**

- Headings font: DM Serif Display, Georgia, serif
- Body font: DM Sans, Inter, system-ui, sans-serif
- H1: 4rem / 400 weight / line-height 1.1 / color `#1b2e50` / letter-spacing -0.02em
- H2: 2.75rem / 400 weight / line-height 1.15 / color `#1b2e50`
- H3: 1.5rem / 500 weight / color `#1b2e50` / font-family DM Sans
- Body: 1.1rem / 400 weight / line-height 1.75 / color `#4a4a4a`
- Subheadlines: 1.2rem / 400 weight / color `#7a7a7a` / font-family DM Sans
- Small/fine print: 0.875rem / color `#7a7a7a`

**Cards:**

- Background: `#ffffff`
- Border-radius: 20px
- Box-shadow: `0 4px 24px rgba(27, 46, 80, 0.06)`
- Padding: 32px
- Border: 1px solid `rgba(27, 46, 80, 0.06)`
- Hover: translateY(-6px), shadow increases to `0 12px 40px rgba(27, 46, 80, 0.1)`, transition 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)

**Buttons (Primary CTA):**

- Background: `#e8837e`
- Color: white
- Border-radius: 12px
- Padding: 16px 36px
- Font: DM Sans, 1.05rem, font-weight 600
- Hover: background shifts to `#d6706b`, translateY(-2px), shadow `0 8px 24px rgba(232, 131, 126, 0.35)`
- Active: translateY(0)

**Buttons (Secondary CTA):**

- Background: transparent
- Border: 2px solid `#1b2e50`
- Color: `#1b2e50`
- Same border-radius and padding as primary
- Hover: background `#1b2e50`, color white

**Section Spacing:**

- Desktop: 120px vertical padding per section
- Tablet: 80px
- Mobile: 60px
- Max content width: 1140px, centered with 24px horizontal padding

**Section Backgrounds:** Alternate between warm white (`#fdf9f6`) and light sand (`#faf5ef`).

**Responsive Breakpoints:**

- Desktop: 1140px+
- Tablet: 768px-1139px
- Mobile: below 768px
- Small mobile: below 480px

**Animations:**

- Elements fade in + slide up on scroll (IntersectionObserver, 30px translate, 0.7s ease-out, staggered 100ms between siblings)
- Cards have smooth lift on hover
- Smooth scroll for all anchor links
- No flashy or distracting animations — keep it editorial and calm

---

### SECTION 1: NAVIGATION

**Layout:** Fixed top, full-width. Transparent initially over the hero, transitions to white background (`#fdf9f6`) with a subtle bottom border (`1px solid rgba(27, 46, 80, 0.08)`) on scroll past 80px. Logo on the left, nav links center-right, CTA button far right. On mobile: hamburger menu.

**Content:**

- Logo area: Image placeholder labeled "sea-reach-logo" (will be replaced with `sea-reach-logo-light.png`). Size: approximately 120px wide. Below the logo or next to it, do NOT add any text — the logo already includes the name.
- Nav links (DM Sans, 0.95rem, font-weight 500, color `#1b2e50`, letter-spacing 0.02em): The House | Our Story | Five Zones | What's Included | The Neighborhood | FAQ
- CTA button (coral primary style, smaller padding 12px 28px): **Book Now**

**Mobile behavior:** Links collapse into a hamburger icon (three lines, navy). Tap opens a full-screen overlay with warm white background, links stacked centered vertically, generous spacing (48px between items). Close button (X) in top right.

**Scroll behavior:** Transition from transparent to solid background is smooth (0.3s ease). When solid, add a very subtle box-shadow.

---

### SECTION 2: HERO

**Layout:** Full viewport height (100vh minimum, max 900px). Background image with navy gradient overlay (linear-gradient(to bottom, rgba(27, 46, 80, 0.3), rgba(27, 46, 80, 0.65))). Content vertically centered, left-aligned on desktop (max-width 680px, with left padding matching the container). On mobile, centered.

**Background image placeholder:** Label "hero-image" (will be replaced with `beckett-beach-sand.webp`). Should cover the full section.

**Content (all text white):**

Small eyebrow text above headline (DM Sans, 0.85rem, font-weight 600, letter-spacing 0.15em, uppercase, color `#e8c86a`):
POINT PLEASANT BEACH, NJ

Headline (H1, white, serif):
**Where Sandy Feet and Slow Mornings Are the Only Plans You'll Need**

Subheadline (DM Sans, 1.2rem, white, opacity 0.9, max-width 540px, line-height 1.7):
A 4-bedroom beach house 1.5 blocks from Point Pleasant Beach — with everything you need for the week already waiting for you.

**Buttons (below subheadline, 16px gap):**

- Primary (coral background, white text): **Book Your Week** → #contact
- Secondary (white border, white text, transparent bg): **See What a Week Looks Like** → #week

**Hero Stats Bar:** Positioned at the bottom of the hero section, full-width. A horizontal strip with a frosted glass effect (backdrop-filter: blur(16px), background: rgba(27, 46, 80, 0.5), border-top: 1px solid rgba(255,255,255,0.1)). Four stats in a row, evenly spaced.

| Stat Label | Value |
| --- | --- |
| Walk to Beach | 4 min |
| Bedrooms | 4 |
| Guest Rating | 5.0 |
| Parking | 6 cars |

Each stat: value on top (1.75rem, bold, white), label below (0.8rem, uppercase, white, opacity 0.7, letter-spacing 0.1em).

**Responsive:** On mobile, hero content centers. Stats become a 2x2 grid. Buttons stack vertically. H1 drops to 2.5rem.

---

### SECTION 3: A WEEK AT SEA REACH

**id:** week

**Layout:** Light sand background (`#faf5ef`). This is a narrative section — no cards, no grids, no bullet points. Full-width with centered content. Max-width 760px for the text block, generous vertical padding (140px desktop). A large atmospheric photo either as a full-width background with text overlay, or as a side-by-side layout (55% text, 45% image).

Eyebrow (centered, coral):
YOUR WEEK

Headline (H2, centered, serif):
**A Week at Sea Reach**

**Body text (DM Sans, 1.15rem, line-height 1.85, color `#4a4a4a`):**

You pull into the driveway on Saturday and start unloading the car. The kids are already arguing about who gets the bunk room. You open the front door, drop the cooler in the kitchen, and notice the beach badges sitting on the counter — eight of them, ready to go. The chairs and umbrellas are in the garage. You haven't been here five minutes, and tomorrow is already handled.

By Sunday morning, you've found your rhythm. Coffee on the wraparound porch while the house is still quiet. The beach is a four-minute walk, and you're learning to take it slow — flip-flops, towels over shoulders, no rush. The kids sprint ahead. You let them.

The afternoons take care of themselves. Someone fires up the grill. The ping pong table in the garage becomes the most popular spot in the house. By evening, everyone ends up around the fire pit — sandy, sunburned, happy. The kind of tired that comes from a day with absolutely nothing on the schedule.

By Wednesday, you realize you haven't moved the car. You don't need to. The boardwalk is a short walk. The beach is right there. The house has everything. Somewhere around Thursday, someone says it — *"Can we just come back every year?"*

**Styling notes:** This text should feel literary and inviting. Slightly larger than normal body text. Generous line-height. The italic quote at the end should be styled distinctly — perhaps in DM Serif Display, larger font-size (1.35rem), coral color, centered, with extra top margin as a standalone pull-quote.

CTA: **Meet the Family Behind Sea Reach** → #story

**Image placeholder:** "evening-scene" (will be `outdoor-seats-fire-pit.jpg` or `porch-desk.jpg`). If side-by-side layout, image on right with rounded-20px corners.

**Responsive:** Single column on mobile. Image on top if side-by-side layout. Text stacks naturally.

---

### SECTION 4: OUR STORY

**id:** story

**Layout:** A warm, distinct section. Background: warm white (`#fdf9f6`) with a very subtle paper-like texture or grain overlay (CSS noise). Two-column: text left (55%), images right (45%).

Eyebrow (coral):
OUR FAMILY

Headline (H2, serif):
**Three Generations of Jersey Shore Summers**

Subheadline:
The D'Alessandro family has been making shore memories since before the boardwalk had arcades.

**Body text:**

The Jersey Shore has been the place we call home in the summer for generations.

My grandparents had a beach house just down the shore since my mother was little — five kids crammed into three bedrooms for two months with zero A/C, loving every minute of it.

My dad ran stands on Jenkinson's boardwalk in college. That's where he first met my mom. My sister and I grew up in that same beach house, squeezing in with all our cousins, sandy feet and all. We'd fish with my grandfather, paint seashells with my grandmother, and stay on the beach until someone rang the dinner bell.

Our summers were filled with sea glass, sandcastles, and sun-kissed memories.

So it's only fitting that we continue the tradition with our own beach house. (Don't worry — this one has A/C.)

We hope your days here are just as memorable as ours, and that you'll come back each summer to make more.

**Signature:** — The D'Alessandro Family (in an italic serif style, slightly larger)

CTA: **Explore the House** → #zones

**Right column:** Two stacked images with rounded-20px corners and subtle shadows. Top image placeholder: "family-photo" (will be `family-photo.png`). Bottom image placeholder: "shore-lifestyle" (will be `lastwave-scott-casey.webp`). Small gap (16px) between them.

**Responsive:** Single column on mobile — images on top, story below.

---

### SECTION 5: FIVE ZONES

**id:** zones

**Layout:** Light sand background. Full-width section.

Eyebrow (centered, coral):
ROOM FOR EVERYONE

Headline (H2, centered, serif):
**Five Places to Be. One House to Love.**

Subheadline (centered):
Every family beach rental makes the same promise — "plenty of space." Sea Reach actually delivers. Five distinct zones, each with its own personality, so every age group finds their spot.

**Zone Cards:** Masonry-style grid on desktop — 3 columns, first row has 3 cards, second row has 2 cards centered. Each card has a top image area (16:10 aspect ratio, rounded top corners) and text content below (within the card).

**Zone 1 — The Wraparound Porch**
Image placeholder: "porch" (will be `porch-desk.jpg`)
Description: Morning coffee before anyone else is awake. Evening reading with the sound of the neighborhood settling down. Temperature-controlled, enclosed, and the quietest seat in the house — until the kids find you.

**Zone 2 — Open Living + Kitchen + Dining**
Image placeholder: "living-kitchen" (will be `living-room-wide.jpg`)
Description: The hub. Hardwood floors, gourmet kitchen with granite counters, and a dining table that seats all eight. This is where everyone ends up at the end of the day — and the beginning, too.

**Zone 3 — The Garage Lounge**
Image placeholder: "garage-lounge" (will be `garage-gameroom.jpg`)
Description: The secret weapon. Ping pong, TV, and a full hangout space that becomes the most popular room in the house. Perfect for sandy kids, teens who want their own world, or a rainy-afternoon refuge.

**Zone 4 — Fire Pit & Outdoor Dining**
Image placeholder: "fire-pit-outdoor" (will be `outdoor-seats-fire-pit.jpg`)
Description: Where the best conversations happen. Gas fire pit with seating, Weber grill, and private outdoor dining. By night three, this becomes the family ritual — dinner outside, fire after, kids catching fireflies.

**Zone 5 — The Backyard**
Image placeholder: "backyard" (will be `house-backyard.jpg`)
Description: Slip-n-slide territory. Space for kids to run, outdoor shower to rinse off the sand, and the kind of breathing room that makes the house feel twice as big.

**Body text (centered, below cards, max-width 700px):**
Most 4-bedroom rentals have a living room and a deck. Sea Reach has five spaces for different moods, different times of day, and different people. Two families sharing? Kids in the garage, adults by the fire. Everyone's happy.

CTA: **See the Bedrooms** → #bedrooms

**Responsive:** 2 columns on tablet, single stacked column on mobile.

---

### SECTION 6: WHAT'S INCLUDED

**id:** included

**Layout:** Warm white background. Two-column layout: categorized list on left (60%), photo on right (40%) with rounded-20px corners and subtle shadow. Clean and airy — no price table, no comparison grid.

Eyebrow (coral):
IT'S ALL HERE

Headline (H2, serif):
**Everything's Here. Everything's Ready.**

Subheadline:
The things that make Sea Reach different aren't dramatic — they're the small stuff that other rentals leave off the list. When you arrive, all of it is waiting for you.

**Included Items (styled as three category groups with subtle coral headers):**

**On the Beach**
- 8 adult beach badges — no morning lines at the badge booth
- 8 beach chairs — already in the garage, grab and go
- 4 beach umbrellas — shade for the whole crew

**In the House**
- Full gourmet kitchen — granite counters, everything you need to cook for eight
- Pillows, quilts, and fresh bed sheets in every room
- Central A/C throughout
- Xfinity TV and WiFi (indoor and outdoor)
- 2 dedicated office spaces for anyone who needs to work
- Private outdoor shower — rinse off the sand before you come inside

**Outside**
- Gas fire pit with seating
- Weber grill
- Outdoor dining area
- 6-car private driveway — no parking meters, no hunting for spots
- Ping pong table and game room in the garage

**Styling:** Each category header in DM Sans, font-weight 600, color `#e8837e`, uppercase, letter-spacing 0.1em, 0.85rem. List items with small coral check-circle icons. Clean spacing between items (12px). Each category separated by 32px.

Body text below list:
We've spent years thinking about what makes a beach week feel effortless — and then making sure it's all here when you arrive. No errands on day one. No scrambling to rent chairs or track down badges. Just show up, settle in, and start your vacation.

CTA: **See the Bedrooms** → #bedrooms

**Right column:** Image placeholder "included-photo" (will be `garage-gameroom.jpg`). Full height of text, object-fit cover, rounded corners.

**Responsive:** Single column on mobile — image on top (16:9, max-height 400px), list below.

---

### SECTION 7: BEDROOMS

**id:** bedrooms

**Layout:** Light sand background. 4 bedroom cards in a 2x2 grid with 24px gap.

Headline (H2, centered, serif):
**Four Bedrooms. Real Beds. Everybody's Comfortable.**

Subheadline (centered):
Room for one family or two. Every bedroom has its own personality — and actual beds, not air mattresses.

**Cards:** Each has a photo area (4:3 aspect ratio, rounded top corners), then room name (H3), bed type + capacity as a small coral-colored tag, and a one-line description.

**Card 1 — Master Bedroom**
Image: "master-bedroom" (will be `master-bedroom-1.jpg`)
Tag: Queen bed | Sleeps 2
Description: Vaulted ceiling with compass decor. The room parents claim first.

**Card 2 — Queen Bedroom**
Image: "queen-bedroom" (will be `bedroom-surf.jpg`)
Tag: Queen bed | Sleeps 2
Description: Coastal-themed decor. Second-best room in the house — still really good.

**Card 3 — Third Bedroom**
Image: "third-bedroom" (will be `bedroom-3.jpeg`)
Tag: Full bed | Sleeps 2
Description: Beach-themed touches. Cozy, quiet, straight shot to the bathroom.

**Card 4 — Bunk Room**
Image: "bunk-room" (will be `bedroom-bunk.jpeg`)
Tag: Twin bunks | Sleeps 2
Description: The kids' room. They'll love it. You'll love that they're in their own space.

**Below grid, centered:**
All bedrooms include pillows, quilts, and fresh sheets. 2 full bathrooms. Central A/C throughout.

**Responsive:** 2x2 on desktop/tablet, single column on mobile.

---

### SECTION 8: TESTIMONIALS

**Layout:** Warm white background.

Eyebrow (centered, coral):
GUEST REVIEWS

Headline (H2, centered, serif):
**Don't Take Our Word for It**

Subheadline (centered):
5.0 stars on VRBO and Airbnb. Here's what families say after their week at Sea Reach.

**3 testimonial cards in a row on desktop.** Each card: white background, 20px border-radius. A large decorative open-quote character in the top-left corner (serif, 5rem, color `#e8837e`, opacity 0.15). Five small gold star icons at the top. Quote text in italic. Bold attribution below. A highlighted pull-quote at the bottom set in a light sand-colored pill/badge with coral text.

**Card 1:**
Quote: "Sea Reach was the best vacation our family has ever taken. The location is literally a couple of blocks to the beach, and having the beach badges and chairs included saved us a fortune. The kids lived in the garage playing ping pong — we barely saw them! The fire pit at night was our favorite part. We're already booked for next summer."
Attribution: **— Samantha & Ashton Schneider**
Pull-quote: "The fire pit at night was our favorite part."

**Card 2:**
Quote: "We've rented in Point Pleasant for years and Sea Reach is hands-down the best house we've stayed in. It's spotless, the kitchen has everything you need, and the outdoor space is incredible. Six cars in the driveway — game changer when you have family visiting. Scott was responsive and made everything easy. Highly, highly recommend."
Attribution: **— Dave & Hanna Clary**
Pull-quote: "Six cars in the driveway — game changer."

**Card 3:**
Quote: "We travel with another family every summer and finding a rental that works for 8 people is always the hardest part. Sea Reach solved it. Between the porch, the living room, the garage, and the fire pit, we never felt crowded. The walk to the beach is nothing. We've found our forever rental."
Attribution: **— The McDonnell Family**
Pull-quote: "We've found our forever rental."

**Responsive:** Stacked single column on mobile with 24px gap.

---

### SECTION 9: THE NEIGHBORHOOD

**id:** neighborhood

**Layout:** Light sand background. Two-column: map left (50%), walking list right (50%).

Eyebrow (centered, coral, full-width above columns):
THE NEIGHBORHOOD

Headline (H2, centered, serif, full-width):
**A Boardwalk Town — and You're Right in the Middle of It**

Subheadline (centered):
106 Atlantic Avenue, Point Pleasant Beach, NJ. Most families who stay here don't move their car from Saturday to Saturday — and not because there's nothing to do.

**Left Column — Map:**
Placeholder for embedded Google Map centered on 106 Atlantic Ave, Point Pleasant Beach, NJ 08742. Rounded-20px corners, subtle shadow, 1px border `rgba(27, 46, 80, 0.08)`.

**Right Column — Walking Distances:**

Styled as a vertical list. Each row: a walking-person icon (navy), destination name (bold, navy), walk time in a small coral pill badge, and a short description (muted text) below.

| Destination | Time | Note |
| --- | --- | --- |
| Point Pleasant Beach | 4 min | The beach. Your badges work here. |
| Jenkinson's Mini Golf | 5 min | 18 holes, family-friendly, open late |
| Jenkinson's Arcade & Food Shack | 6 min | Games, pizza, ice cream, fried everything |
| Jenkinson's Rides | 8 min | Boardwalk rides for all ages |
| Tiki Bar | 11 min | Live music, drinks, ocean views |
| Downtown Dining | 15 min | Restaurants, bars, shops along Arnold Ave |

**Body text (full-width below both columns):**
Point Pleasant Beach is one of those places where the boardwalk still feels like the boardwalk — the kind with skee-ball and funnel cake and rides your kids will beg to go back to. Sea Reach sits right in the center of it all, 1.5 blocks from the sand and a short walk from everything else. The 6-car driveway is there if you need it, but the real luxury is not needing it.

**Photo row below:** 5 small thumbnails of local attractions in a horizontal row, each rounded-12px with a subtle shadow. On hover, slight scale-up (1.05).
Placeholders: "boardwalk-1" (`jenkinsons-big-chair-kids.webp`), "mini-golf" (`mini-golf-2.webp`), "arcade" (`arcade.webp`), "boardwalk-2" (`train-boardwalk.webp`), "boardwalk-swings" (`swings-boardwalk.png`)

CTA: **Book Your Week** → #contact

**Responsive:** Single column on mobile — map on top, distances below. Thumbnails become a horizontally scrollable strip.

---

### SECTION 10: BOOK DIRECT

**id:** book-direct

**Layout:** Warm white background. This is the ONLY pricing section on the page — give it visual weight but keep it confident, not aggressive.

Eyebrow (centered, coral):
BOOK SMART

Headline (H2, centered, serif):
**Same House. Same Week. $2,425 Less.**

Subheadline (centered):
Sea Reach is listed on VRBO and Airbnb — but the families who've been here before know to book direct. Here's why.

**Comparison Layout:** 3-column grid on desktop (card | divider | card). Max-width 960px, centered.

**Left Card — Platform Booking:**
Card with a `1px solid #e0e0e0` border. Subtle gray header bar.

| Line Item | Amount |
| --- | --- |
| Base Rate | $6,500 |
| Platform Fees + Taxes | ~$2,425 |
| **Total** | **~$8,925/week** |

Total displayed large (2.5rem, bold, navy) with a coral strikethrough line through it.

**Center Divider:**
Vertical on desktop, horizontal on mobile. Contains a circle with "VS" in navy, and below it a pill badge: "Save $2,425" in `#3a9e6e` background, white text, subtle pulse animation (scale 1.0 to 1.03, 2s infinite).

**Right Card — Book Direct:**
Card with a `2px solid #e8837e` border and a very subtle warm tint background (`rgba(232, 131, 126, 0.03)`).
A "BEST VALUE" pill badge above the card (absolute positioned, background `#e8837e`, white text, rounded-full, font-size 0.8rem, uppercase, letter-spacing 0.1em).

| Line Item | Amount |
| --- | --- |
| Weekly Rate | $6,500 |
| Platform Fees | $0 (in `#3a9e6e`) |
| Service Charges | $0 (in `#3a9e6e`) |
| **Total** | **$6,500/week** |

Total displayed large (2.5rem, bold, color `#3a9e6e`).
Below: "Security deposit: $1,000 (fully refundable)" in small muted text.

**"What $2,425 Buys" subsection (below comparison, centered):**

H3 (DM Sans): What could you do with $2,425?

Four small icon cards in a row (sandy gold icon, navy text):

1. A week of family dinners at the shore
2. Surf lessons for every kid
3. Two full days of boardwalk rides and games
4. A nice bottle of wine every single night

**Why Book Direct — 4 benefit cards in a row (below):**

Each card has a small coral circle icon at top.

Card 1: **Best Price Guaranteed** — Same house, same dates — without the platform markup.
Card 2: **Talk to the Owner** — Direct line to Scott. Real answers, local tips.
Card 3: **Instant Confirmation** — No "host approval" wait. You book, you're in.
Card 4: **Flexible Communication** — Text, email, or call. Whatever works.

**CTA (centered):**
Primary (large, coral): **Book Direct — Save $2,425** → mailto:sdaless22@gmail.com
Secondary (navy outline): **Have Questions? Contact the Owner** → mailto:sdaless22@gmail.com

Fine print: *Security deposit of $1,000 is fully refundable after your stay. Weekly rentals, Saturday to Saturday, June through September.*

**Responsive:** Comparison cards stack on mobile. "What $2,425 buys" becomes 2x2, then stacked. Benefit cards become 2x2 on tablet, stacked on mobile.

---

### SECTION 11: FAQ

**id:** faq

**Layout:** Light sand background. Centered headline, then accordion. Max-width 760px, centered.

Headline (H2, centered, serif):
**Questions? We've Got Answers.**

Subheadline (centered):
Everything you need to know before you book.

**Accordion Items:**

Each question: DM Sans, 1.1rem, font-weight 600, color `#1b2e50`, padding 20px 0, bottom border `1px solid rgba(27, 46, 80, 0.08)`. A small "+" icon on the right that rotates to "x" when expanded (coral colored, 0.3s transition). Answer text: body style, with 16px top padding when expanded. Smooth height animation (0.3s ease).

First item open by default. Only one open at a time.

**Q: How do I book, and what's required?**
A: Email us at sdaless22@gmail.com with your preferred dates. We'll confirm availability and send you details. A $1,000 security deposit (fully refundable) is required to hold your week. No platform fees, no service charges, no hidden costs.

**Q: What's included in the weekly rate?**
A: Everything you need for a full beach week. Beach badges, chairs, umbrellas, full kitchen, grill, fire pit, ping pong, WiFi (indoor and outdoor), TV, A/C, outdoor shower, and a 6-car driveway. See the What's Included section above for the full list.

**Q: How far is the beach?**
A: 1.5 blocks. A 4-minute walk. You'll pass one street and you're on the sand. Jenkinson's boardwalk is 5-8 minutes on foot.

**Q: Is the security deposit actually refundable?**
A: Yes, 100%. The deposit is returned in full after your stay, assuming no property damage. It's a standard precaution, not a hidden fee.

**Q: What are the check-in and check-out times?**
A: Rentals run Saturday to Saturday, June through September. We'll provide specific check-in/check-out details when you book.

**Q: Is the house good for two families sharing?**
A: Absolutely — it's one of our most common booking types. Four bedrooms plus five distinct hangout zones mean two families can share without feeling cramped. The garage lounge and fire pit give you natural separation when you want it.

**Q: Why is it cheaper to book direct?**
A: Platforms like VRBO and Airbnb add service fees, platform fees, and additional taxes on top of the rental rate. When you book direct, those go away. Same house, same owner, same experience. See the Book Direct section above for the exact breakdown.

**Q: What's the cancellation policy?**
A: Contact us directly. We're a family, not a corporation — we'll work with you on a case-by-case basis if plans change.

---

### SECTION 12: FINAL CTA

**id:** contact

**Layout:** Full-width background image with navy gradient overlay (linear-gradient(to bottom, rgba(27, 46, 80, 0.55), rgba(27, 46, 80, 0.75))). Content centered. All text white.

Background image placeholder: "evening-fire-pit" (will be `outdoor-seats-fire-pit.jpg`).

Headline (H2, serif, white, centered):
**Your Family's Best Week Starts Here**

Body text (white, centered, max-width 680px, 1.15rem):
Four bedrooms, five zones, and everything you need for the week — 1.5 blocks from Point Pleasant Beach. A shore family's beach house, not a rental portfolio.

Come see why families call it their forever rental.

**Buttons (centered):**

- Primary (coral, large padding 18px 44px): **Book Your Week** → mailto:sdaless22@gmail.com
- Secondary (white border, white text): **View on VRBO** → #
- Secondary (white border, white text): **View on Airbnb** → #

Fine print (white, opacity 0.7, 0.85rem):
*Weekly rentals, Saturday to Saturday, June through September. Email sdaless22@gmail.com for availability.*

---

### SECTION 13: FOOTER

**Layout:** Background `#1b2e50` (navy). White text. Three columns on desktop, stacked on mobile. 60px vertical padding.

**Column 1 — Brand:**
Image placeholder: "footer-logo" (will be `sea-reach-logo-light.png`, sized ~100px wide — the logo is designed for light backgrounds, so it may need a light/inverted version or just the text treatment).

106 Atlantic Avenue
Point Pleasant Beach, NJ 08742

Small text (white, opacity 0.6): A shore family's beach house. Est. 2022.

**Column 2 — Quick Links (white, opacity 0.8, hover: opacity 1):**
The House | Our Story | Five Zones | What's Included | Book Direct | FAQ | Contact

**Column 3 — Contact:**
Email: sdaless22@gmail.com
VRBO: Property #2823698
Airbnb: Room #8605514

**Bottom bar:** Full-width, slightly darker (`rgba(0,0,0,0.15)`), 16px vertical padding.
Text: Copyright 2026 Sea Reach Beach House. All rights reserved.

---

### ADDITIONAL REQUIREMENTS

1. **Smooth scrolling:** All anchor links smooth-scroll to targets with offset for fixed nav height.
2. **Mobile-first:** Design works perfectly at 375px and scales up elegantly.
3. **Performance:** Lazy-load all images below the fold. Use modern image formats.
4. **Accessibility:** All images need descriptive alt text. Color contrast meets WCAG AA. FAQ accordion is keyboard-navigable (Enter/Space to toggle, arrow keys between items). Focus states visible.
5. **No framework dependencies:** Pure HTML + CSS + vanilla JavaScript.
6. **Single file preferred:** One HTML file with embedded CSS and JS.
7. **Google Fonts:** Include DM Serif Display (400) and DM Sans (400, 500, 600, 700) from Google Fonts.
8. **Overall feel:** Warm, editorial, premium. Think sunset over the shore — not clinical or corporate. The page should feel like someone who loves this place is sharing it with you. Emotion first, details second.

---END PROMPT---

---

## Quick Reference: Image Replacements After Generation

| Placeholder Label | Replace With | Section |
| --- | --- | --- |
| sea-reach-logo | `src/assets/logos/sea-reach-logo-light.png` | Nav |
| hero-image | `beckett-beach-sand.webp` | Hero background |
| evening-scene | `outdoor-seats-fire-pit.jpg` or `porch-desk.jpg` | A Week at Sea Reach |
| family-photo | `family-photo.png` | Our Story |
| shore-lifestyle | `lastwave-scott-casey.webp` | Our Story |
| porch | `porch-desk.jpg` | Zone 1 card |
| living-kitchen | `living-room-wide.jpg` | Zone 2 card |
| garage-lounge | `garage-gameroom.jpg` | Zone 3 card |
| fire-pit-outdoor | `outdoor-seats-fire-pit.jpg` | Zone 4 card |
| backyard | `house-backyard.jpg` | Zone 5 card |
| included-photo | `garage-gameroom.jpg` | What's Included |
| master-bedroom | `master-bedroom-1.jpg` | Bedroom card 1 |
| queen-bedroom | `bedroom-surf.jpg` | Bedroom card 2 |
| third-bedroom | `bedroom-3.jpeg` | Bedroom card 3 |
| bunk-room | `bedroom-bunk.jpeg` | Bedroom card 4 |
| map | Google Maps embed | The Neighborhood |
| boardwalk-1 | `jenkinsons-big-chair-kids.webp` | Neighborhood thumbnails |
| mini-golf | `mini-golf-2.webp` | Neighborhood thumbnails |
| arcade | `arcade.webp` | Neighborhood thumbnails |
| boardwalk-2 | `train-boardwalk.webp` | Neighborhood thumbnails |
| boardwalk-swings | `swings-boardwalk.png` | Neighborhood thumbnails |
| evening-fire-pit | `outdoor-seats-fire-pit.jpg` | Final CTA background |
| footer-logo | `src/assets/logos/sea-reach-logo-light.png` | Footer |

## Post-Generation Checklist

- [ ] Replace all image placeholders with actual photos
- [ ] Insert actual Sea Reach logo in nav and footer
- [ ] Add real VRBO listing URL (Property #2823698)
- [ ] Add real Airbnb listing URL (Room #8605514)
- [ ] Embed Google Maps for 106 Atlantic Ave, Point Pleasant Beach, NJ 08742
- [ ] Test all anchor links scroll to correct sections
- [ ] Test responsive at 375px, 768px, 1140px
- [ ] Verify email links go to sdaless22@gmail.com
- [ ] Add favicon (`favicon.svg`)
- [ ] Add meta tags (title, description, OG image)
- [ ] Test FAQ accordion on mobile + keyboard
- [ ] Check that DM Serif Display and DM Sans load correctly
- [ ] Verify footer logo works on dark background (may need light/inverted version)
- [ ] Run Lighthouse audit (aim for 90+ on all scores)

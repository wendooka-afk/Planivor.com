\# PRD — Planivore MVP

Version: 1.0

Date: April 2026

Brand: Planivore

Product: Chore Chart Generator for Kids

Build target: Claude Code

Status: MVP Draft



\## 1. Product summary



Planivore is a lightweight web app that helps parents and caregivers create printable chore charts and reward charts for kids in under 60 seconds.



The MVP focuses on one core job:

Create a personalized weekly chore chart for one child, preview it instantly, and download it as a printable PDF.



The product will later expand into reward charts, routine charts, habit trackers, and planners, but V1 stays tightly focused on kids chore charts.



\## 2. Core problem



Parents want a simple way to organize chores for children without:

\- designing in Canva

\- editing complicated templates

\- signing up

\- wasting time formatting PDFs



Existing options prove the demand, but many are either:

\- generic template libraries

\- too manual to customize

\- too broad

\- not optimized for instant generation



\## 3. Core value proposition



Create a personalized printable chore chart for kids in under a minute.



\## 4. Target user



\### Primary user

\- Parents of children aged 4–10

\- Mostly mothers, but not exclusively

\- English-speaking audience first

\- US/UK/CA/AU traffic target



\### Secondary user

\- Teachers

\- Homeschool parents

\- Caregivers



\## 5. MVP scope



\### In scope

\- One-child weekly chore chart generator

\- Reward mode toggle

\- Live preview

\- PDF download

\- Print-friendly layout

\- Mobile-friendly UI

\- A4 and US Letter support

\- 4–6 visual themes

\- Suggested chores by age

\- Basic landing page

\- SEO content sections on core page

\- No login required



\### Out of scope

\- User accounts

\- Save to cloud

\- Multi-child charts

\- Collaboration

\- AI-generated templates

\- Drag-and-drop editor

\- Advanced design controls

\- Paid plans

\- Backend database



\## 6. User stories



\### Parent user stories

\- As a parent, I want to enter my child’s name so the chart feels personal.

\- As a parent, I want to choose tasks quickly so I don’t start from scratch.

\- As a parent, I want age-based task suggestions so I know what is appropriate.

\- As a parent, I want a visual preview before downloading.

\- As a parent, I want to print the chart at home in a clean format.

\- As a parent, I want a reward goal option to motivate my child.

\- As a parent, I want the tool to work without creating an account.



\### Teacher/caregiver stories

\- As a teacher, I want a simple reward chart version for classroom behavior.

\- As a caregiver, I want colorful but readable templates that kids enjoy.



\## 7. Main workflow



1\. User lands on homepage or generator page

2\. User clicks "Create my chart"

3\. User enters child name

4\. User selects age range

5\. User chooses chart type:

&#x20;  - Weekly chore chart

&#x20;  - Reward chart

6\. User picks chores from suggestions or writes custom chores

7\. User chooses theme

8\. User sees live preview update instantly

9\. User downloads PDF or prints directly



\## 8. Core features



\### 8.1 Generator form

Fields:

\- Child name

\- Age group:

&#x20; - 2–3

&#x20; - 4–5

&#x20; - 6–7

&#x20; - 8–10

\- Chart type:

&#x20; - Chore chart

&#x20; - Reward chart

\- Up to 7 tasks

\- Reward goal:

&#x20; - optional

&#x20; - example: 5 stars = reward

\- Theme

\- Paper format:

&#x20; - A4

&#x20; - US Letter



\### 8.2 Chore suggestions by age

Pre-filled suggestions based on age.



Example starter suggestions:

\- Ages 2–3: pick up toys, put clothes in hamper, wipe small spills

\- Ages 4–5: make bed, brush teeth, set table

\- Ages 6–7: vacuum small area, load dishwasher, fold clothes

\- Ages 8–10: take out trash, organize room, feed pet



\### 8.3 Themes

MVP themes:

\- Rainbow

\- Dinosaurs

\- Space

\- Animals

\- Minimal pastel

\- Neutral clean



\### 8.4 Chart layouts

MVP supports:

\- Weekly grid with 7 columns for days

\- Rows for tasks

\- Checkboxes or stars

\- Child name header

\- Reward footer section



\### 8.5 Output

\- Live preview

\- Download as PDF

\- Print button

\- Reset button



\## 9. Functional requirements



\### FR1

The app must generate a chart preview instantly when the user edits fields.



\### FR2

The app must support a maximum of 7 task rows in V1.



\### FR3

The app must produce a print-friendly PDF from the on-screen preview.



\### FR4

The app must work fully client-side with no required backend.



\### FR5

The app must support A4 and US Letter layouts.



\### FR6

The app must be usable on mobile and desktop.



\### FR7

The app must provide at least 4 starter themes.



\### FR8

The app must provide age-based task suggestions.



\### FR9

The app must include a reward section when reward mode is enabled.



\### FR10

The app must include basic accessibility:

\- labels

\- keyboard navigable fields

\- readable contrast

\- accessible buttons



\## 10. Non-functional requirements



\- Fast initial load

\- No login friction

\- Works on modern browsers

\- Clean printable layout

\- Mobile-first responsive UI

\- SEO-friendly HTML structure

\- Core Web Vitals-conscious

\- Simple and stable codebase



\## 11. Suggested tech stack



\### Front-end

\- Next.js or React

\- Tailwind CSS

\- shadcn/ui optional

\- html2canvas + jsPDF OR pdf-lib

\- local JSON for themes and chore suggestions



\### No backend in V1

Everything should work client-side.



\## 12. Information architecture



\### Main pages

\- /

\- /chore-chart-generator

\- /reward-chart-generator

\- /chores-for-kids-by-age

\- /free-printable-chore-chart-for-kids

\- /weekly-chore-chart-template



\### Homepage purpose

\- Explain what Planivore does

\- Push users to the generator

\- Capture SEO intent

\- Show examples

\- Answer FAQs



\## 13. Homepage structure



\### Hero

H1: Free Chore Chart Generator for Kids

Subhead: Create a personalized printable chore chart in under a minute.

CTA: Create my chart



\### Sections

\- How it works

\- Example templates

\- Why parents use chore charts

\- Age-based chore ideas

\- Printable formats

\- FAQ

\- Internal links to support pages



\## 14. SEO strategy for MVP



\### Main target page

/chore-chart-generator



\### Supporting pages

\- free printable chore chart for kids

\- chores for kids by age

\- reward chart for kids printable

\- weekly chore chart template

\- morning and evening routine chart for kids (phase 2)



\### Content principles

\- Original copy, not filler

\- Short, useful explanations

\- FAQ schema

\- Internal links between pages

\- Strong H1/H2 structure

\- Fast page speed



\## 15. Pinterest strategy for MVP



Initial plan:

\- Create 15–20 manual pins

\- One pin family per page

\- Emphasize:

&#x20; - printable

&#x20; - free

&#x20; - kids

&#x20; - weekly

&#x20; - reward

&#x20; - by age



No bulk automation in week 1.



\## 16. Metrics to track



\### Product metrics

\- Generator page visits

\- Start rate

\- PDF download rate

\- Print clicks

\- Theme usage

\- Age group usage



\### SEO metrics

\- Impressions

\- CTR

\- Indexed pages

\- Top queries

\- Organic landing pages



\### Validation metrics

\- % of users who generate a chart

\- % of users who download PDF

\- traffic to generator vs blog pages



\## 17. Success criteria for MVP



The MVP is validated if within the first 60–90 days:

\- pages are indexed

\- generator gets real usage

\- at least one cluster starts earning impressions

\- users actually download charts

\- organic traffic starts growing on long-tail keywords



\## 18. Design direction



Planivore should feel:

\- playful but not childish

\- friendly for parents

\- clean and printable

\- visually warm

\- lightweight and focused



Design principles:

\- simple layout

\- low friction

\- soft colors

\- easy preview

\- obvious CTA

\- no visual clutter



\## 19. Risks



\### Risk 1

Too broad too early.

Mitigation: stay focused on one-child weekly chore chart first.



\### Risk 2

Looks like every free printable site.

Mitigation: prioritize instant generation and clear personalization.



\### Risk 3

PDF export becomes messy.

Mitigation: design the preview component specifically for export from day one.



\### Risk 4

Traffic but no generation.

Mitigation: strengthen CTA placement and simplify form.



\## 20. V1 build checklist



\- Brand header with Planivore

\- Homepage

\- Generator page

\- Age-based task suggestion logic

\- 4–6 themes

\- Live preview component

\- PDF export

\- Print mode

\- Mobile responsive layout

\- FAQ section

\- SEO metadata

\- Internal links

\- Analytics events



\## 21. Phase 2 ideas



Only after validation:

\- reward chart generator standalone

\- morning routine chart

\- evening routine chart

\- multi-child family chart

\- habit tracker for kids

\- editable icon-based picture chore cards

\- save/share links

\- premium print packs


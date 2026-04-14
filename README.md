# 🦷 The Family Dental Care — Website

**A sleek, modern, fully-responsive multi-page website for a premium dental clinic in Gurgaon, Haryana.**

---

## 🌐 Live Pages & Navigation

| Page | URL | Description |
|------|-----|-------------|
| Home | `index.html` | Hero, highlights, about preview, services, testimonials, CTA |
| About Us | `about.html` | Clinic story, philosophy, meet the dentists, why choose us |
| How It Works | `how-it-works.html` | 6-step patient journey, what to expect, FAQ accordion |
| Book Appointment | `booking.html` | Interactive booking form with time slots, confirmation UI |
| Contact | `contact.html` | Contact form, map, timings, quick contact, emergency note |

---

## ✅ Completed Features

### Design & UI
- ✅ Clean, premium healthcare aesthetic — white + teal + soft blue palette
- ✅ Playfair Display (headings) + Inter (body) typography
- ✅ Sticky navbar with scroll effect (transparent → white)
- ✅ Smooth scroll & scroll-reveal animations (`data-reveal`)
- ✅ Hover effects on all cards, buttons, nav links
- ✅ Mobile-first responsive layout (breakpoints at 640px, 900px, 1024px)
- ✅ Hamburger menu for mobile with slide-out navigation panel
- ✅ Floating "Book Now" button + WhatsApp floating button
- ✅ Consistent footer with all contact info and quick links

### Home Page (`index.html`)
- ✅ Hero section: "Your Smile, Our Priority" headline, CTA buttons
- ✅ 4 highlight cards (Family, Patient-centric, Technology, Comfort)
- ✅ About preview with image collage and experience badge
- ✅ 6-service grid with hover effects
- ✅ 3 testimonial cards with star ratings
- ✅ Stats counter animation (2000+ patients, 10+ years, etc.)
- ✅ CTA section with gradient background

### About Us (`about.html`)
- ✅ Opening story with "A healthy smile is a reflection of a happy life"
- ✅ Philosophy section with core values grid (Trust, Compassion, Excellence, Education)
- ✅ Dr. Rishikesh Mishra profile card (placeholder note for photo + full profile)
- ✅ Dr. Khushboo Pandey profile card (placeholder note for photo + full profile)
- ✅ "Why Choose Us" section with 6 feature cards
- 🟡 **Placeholder sections marked** for clinic owner to fill with:
  - Full "About Us" narrative
  - Full philosophy statement
  - Doctor professional photos and detailed bios

### How It Works (`how-it-works.html`)
- ✅ Full 6-step patient journey with detailed cards:
  1. Initial Consultation
  2. Personalised Treatment Plan
  3. The Procedure
  4. Post-Procedure Aftercare
  5. Follow-Up Review
  6. Ongoing Maintenance
- ✅ Each step has 4 bullet-point details
- ✅ "What to Expect on Your First Visit" section
- ✅ FAQ accordion (6 questions, JS-powered)

### Book Appointment (`booking.html`)
- ✅ Full booking form: Name, Email, Phone, Service, Date, Dentist preference, Time Slot, Message
- ✅ Service selector chips (9 treatment options)
- ✅ Interactive time slots grid (10:00 AM – 8:30 PM) with unavailable slots
- ✅ Client-side form validation
- ✅ Confirmation box with booking summary (name, date, time, service)
- ✅ Data saved to `appointments` table via REST API
- ✅ WhatsApp link for post-booking follow-up

### Contact (`contact.html`)
- ✅ Contact form with subject selector, saved to `contact_messages` table
- ✅ Phone: +91 9319938893
- ✅ Email: thefamilydentalcaree@gmail.com
- ✅ Address: W-2/1, Basement Floor, W Block, Sector 24 DLF Phase 3, Gurgaon, Haryana 122022
- ✅ Landmark: Near Sai Baba Mandir
- ✅ Embedded Google Map (coordinates: 28.494972, 77.1028164)
- ✅ Clinic timings: 10:00 AM – 8:30 PM, 7 days a week
- ✅ "Get Directions" button linking to Google Maps
- ✅ Emergency contact section

---

## 🟡 Placeholder Sections (Action Required by Clinic Owner)

| Location | What's Needed |
|----------|---------------|
| `about.html` | Full clinic background / story narrative |
| `about.html` | Complete philosophy statement |
| `about.html` | Dr. Rishikesh Mishra — full bio, qualifications, photo |
| `about.html` | Dr. Khushboo Pandey — full bio, qualifications, photo |
| `index.html` | Replace with actual clinic images when available |
| All pages | Real social media profile URLs (Facebook, Instagram) |

---

## 💾 Data Models

### `appointments` table
| Field | Type | Description |
|-------|------|-------------|
| id | text | Auto-generated UUID |
| name | text | Patient full name |
| email | text | Patient email |
| phone | text | Patient phone |
| date | text | Preferred date |
| time | text | Selected time slot |
| service | text | Selected treatment |
| dentist | text | Preferred dentist |
| message | rich_text | Concern / notes |
| status | text | pending / confirmed / completed / cancelled |

### `contact_messages` table
| Field | Type | Description |
|-------|------|-------------|
| id | text | Auto-generated UUID |
| name | text | Sender full name |
| email | text | Sender email |
| phone | text | Sender phone |
| subject | text | Message topic |
| message | rich_text | Message content |
| status | text | new / read / replied |

---

## 📦 Tech Stack

- **HTML5** — Semantic markup, ARIA accessibility
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — Scroll reveal, FAQ accordion, form handling, counters
- **Font Awesome 6.5** — Icons (CDN)
- **Google Fonts** — Playfair Display + Inter
- **REST Table API** — For appointment & contact form submissions

---

## 🚀 Deployment

To make the website live, go to the **Publish tab** and click publish. The site will be deployed with a shareable URL.

---

## 📋 Recommended Next Steps

1. **Add real doctor photos** to About Us page
2. **Fill in full clinic story** and philosophy text
3. **Update social media links** (Facebook, Instagram)
4. **Add Google Analytics** or similar tracking code
5. **Connect a real email notification** service for appointment alerts
6. **Add more services** or testimonials as needed
7. **Create a patient portal** or admin dashboard to view bookings

---

## 📞 Clinic Information

- **Name:** The Family Dental Care
- **Phone:** +91 9319938893
- **Email:** thefamilydentalcaree@gmail.com
- **Address:** W-2/1, Basement Floor, W Block, Sector 24 DLF Phase 3, Gurgaon, Haryana 122022
- **Landmark:** Near Sai Baba Mandir
- **Timings:** 10:00 AM – 8:30 PM (Mon–Sun)
- **Coordinates:** 28.494972, 77.1028164

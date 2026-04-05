PRODUCT REQUIREMENTS DOCUMENT
NurseConnect — Home Nursing Service Platform


Version 1.0  |  April 2025  |  CONFIDENTIAL

Prepared for: Product & Engineering Team
Roles Covered: Patient (User) | Nurse (Perawat)

1. Executive Summary


1.1 Value Proposition
NurseConnect is an AI-powered home nursing marketplace that connects patients needing professional nursing care with verified, licensed nurses. The platform eliminates friction in care discovery, booking, payment, and real-time visit management — bringing hospital-quality nursing directly to the patient's home.

For Patients: Find the right nurse in minutes using AI recommendations or manual search, book medical or non-medical services (live-in or live-out), pay securely, and track care in real time.
For Nurses: Access a steady pipeline of verified patients, manage bookings through a smart inbox, navigate to visits with in-app maps, record clinical notes, and update appointment statuses — all from one mobile-first app.

1.2 Key Highlights
    • Dual-role platform: dedicated flows for Patients and Nurses with role-based dashboards
    • AI-powered nurse recommendation engine trained on patient needs, care history, and nurse profiles
    • Real-time appointment lifecycle management: PENDING → ONGOING → COMPLETED
    • Payment verification gate: nurses cannot proceed to a visit without confirmed patient payment
    • In-app chat between nurse and patient before and during visit
    • Support for 4 service combinations: Medical Live-in, Medical Live-out, Non-Medical Live-in, Non-Medical Live-out
    • Clinical notes module for nurses to record actions and patient data during visits

1.3 Top-Line Targets
Metric	6-Month Target	12-Month Target	24-Month Target
Registered Patients	5,000	25,000	100,000
Registered Nurses	500	2,500	10,000
Monthly Completed Visits	1,000	8,000	40,000
Nurse Utilization Rate	40%	65%	80%
Patient Retention (30-day)	35%	55%	70%
Avg. Booking-to-Confirmation Time	< 30 min	< 15 min	< 10 min
Gross Merchandise Value (GMV)	IDR 500M/mo	IDR 4B/mo	IDR 20B/mo
Platform NPS	≥ 45	≥ 60	≥ 70

2. Problem Statement


2.1 Market Context
Indonesia's home healthcare market is projected to reach IDR 8.5 Trillion by 2027, growing at 14% CAGR driven by an aging population, post-hospitalization care demand, and increasing middle-class health awareness. Yet the sector remains fragmented, analog, and trust-deficient.

2.2 Five Core Problems

#	Problem	Affected Role	Impact Rating	Current Workaround
P-01	Discovery Friction: Patients cannot easily find qualified, available nurses near them. No centralized verified directory exists.	Patient	CRITICAL (5/5)	Word of mouth, Facebook groups, hospital referrals
P-02	Trust & Credential Verification: Patients have no way to verify nurse licenses, experience, or background before booking.	Patient	HIGH (4/5)	Relies on agency reputation or personal network
P-03	Payment Uncertainty: Nurses travel to patients without confirmed payment, leading to wasted trips and revenue loss.	Nurse	HIGH (4/5)	Manual bank transfer screenshots, cash on arrival
P-04	Operational Visibility: Nurses manage bookings via WhatsApp with no structured inbox, filtering, or status tracking, causing missed appointments.	Nurse	HIGH (4/5)	WhatsApp group coordination with agency admin
P-05	Clinical Documentation: Nurses lack a digital tool for recording actions, medication notes, and patient data during visits, creating compliance and continuity-of-care risks.	Nurse	MEDIUM (3/5)	Paper-based forms; photos on personal phones

2.3 Market Opportunity
    • Total Addressable Market (TAM): IDR 8.5T home healthcare market (Indonesia, 2027)
    • Serviceable Addressable Market (SAM): IDR 2.1T — professional home nursing services in urban Java
    • Serviceable Obtainable Market (SOM, Year 3): IDR 420B — 20% SAM penetration with NurseConnect

3. Target Audience & Personas


3.1 Persona 1 — Patient: Dewi Rahayu
Attribute	Detail
Name	Dewi Rahayu
Age / Location	42 years old, Surabaya, East Java
Role	Working professional, primary caregiver for elderly mother
Pain Points	Cannot stay home full-time; worried about mother's post-stroke care quality; no trusted nurse network
Goals	Find verified, experienced nurse for daily live-out medical visits; see real-time status of mother's care
Digital Literacy	High — uses Gojek, Tokopedia, mobile banking daily
Budget Sensitivity	Medium — willing to pay premium for verified quality
Key Feature Needs	AI recommendation, payment security, live visit tracking, in-app chat

3.2 Persona 2 — Patient: Budi Santoso
Attribute	Detail
Name	Budi Santoso
Age / Location	68 years old, Jakarta Selatan
Role	Retired; recovering from knee surgery
Pain Points	Needs live-in non-medical companion nurse; family abroad; difficulty navigating apps
Goals	Book reliable live-in nurse for 2 weeks; simple UI; family member to monitor remotely
Digital Literacy	Low — prefers simple interfaces, large text, minimal steps
Budget Sensitivity	Low — pension income; quality over cost
Key Feature Needs	Simple nurse search by name, clear pricing, live-in service type, family visibility

3.3 Persona 3 — Nurse: Sari Puspita
Attribute	Detail
Name	Sari Puspita
Age / Location	29 years old, Bandung, West Java
Role	Registered Nurse, 4 years experience in home care
Pain Points	Inconsistent booking flow from agency; patients who haven't paid; no clinical note system; wasted travel to unpaid visits
Goals	Manage bookings efficiently; know patient payment status before travel; log clinical notes digitally; track earnings
Digital Literacy	High — active smartphone user
Key Feature Needs	Smart inbox with filters, payment verification gate, in-app navigation, clinical notes, appointment status control

3.4 Persona 4 — Nurse: Andi Firmansyah
Attribute	Detail
Name	Andi Firmansyah
Age / Location	35 years old, Medan, North Sumatra
Role	Senior Nurse Coordinator, manages part-time independent home visits
Pain Points	Scheduling conflicts, difficulty distinguishing visit types (medical vs. non-medical, live-in vs. live-out)
Goals	Filter and prioritize bookings by date and service type; chat with patients pre-visit; mark completion efficiently
Digital Literacy	Medium — uses apps but not always comfortable with new UIs
Key Feature Needs	Inbox filtering (date/service/visit type), patient detail view, ONGOING/COMPLETED status updates

4. User (Patient) Stories


ID	Priority	As a Patient, I want to...	So that...	Acceptance Criteria
US-01	P0	Search for a nurse by name	I can find a specific nurse I trust or was referred to	Name search returns matching nurse profiles; partial match supported
US-02	P0	Browse AI-recommended nurses	I can find the best match without knowing specific names	AI ranks nurses by availability, specialty match, proximity, and rating
US-03	P0	View a nurse's full profile	I can verify credentials, experience, and read reviews before booking	Profile shows: name, photo, license number, specialties, years of experience, ratings, reviews
US-04	P0	Filter nurses by years of experience	I can narrow results to nurses meeting my care needs	Filter applies; results re-rank accordingly
US-05	P0	Select a nurse's available schedule	I can book a time that works for both of us	Calendar shows available slots; unavailable slots are greyed out
US-06	P0	Choose between Medical and Non-Medical service	I can get the right type of care	Service type selection is mandatory before booking; gates irrelevant nurse types
US-07	P0	Choose between Live-in and Live-out visit	I can specify how the nurse will attend	Visit type affects displayed pricing; both options available for medical and non-medical
US-08	P0	See the exact price before paying	I don't face surprise charges	Price displayed based on service type + visit type + duration before payment screen
US-09	P0	Pay securely in-app	My payment is confirmed and the nurse is notified	Payment gateway integration; confirmation receipt generated; nurse's payment gate unlocked
US-10	P0	Wait for a confirmed appointment schedule	I know when the nurse will arrive	Post-payment screen shows confirmed date/time; push notification sent
US-11	P1	Chat with my nurse before the visit	I can discuss care needs and provide address details	In-app chat available after booking confirmation; message history persisted
US-12	P1	Receive a notification when the nurse is on the way	I can prepare for the visit	Push notification triggered when nurse updates status to ONGOING
US-13	P1	View appointment history	I can track past and upcoming visits	Appointment list shows status: PENDING, ONGOING, COMPLETED with timestamps
US-14	P1	Re-book a previous nurse	I can get consistent care from someone I trust	One-tap re-book from appointment history
US-15	P1	Rate and review my nurse after a visit	Future patients can make informed decisions	Rating prompt appears after status = COMPLETED; 1-5 stars + text review
US-16	P2	Cancel a booking before confirmation	I can change plans without penalty	Cancellation policy displayed; refund initiated if payment made
US-17	P2	View nurse location on a map during the visit	I know exactly when the nurse will arrive	Live map shows nurse's real-time location when status = ONGOING
US-18	P2	Add a family member to monitor my bookings	My family can track care on my behalf	Family account linkage; read-only access to appointment status and notes
US-19	P2	Receive invoice/receipt after payment	I can record expenses for insurance/reimbursement	PDF receipt downloadable; emailed post-payment
US-20	P2	Save preferred nurses to a favorites list	I can quickly re-book them later	Favorites list persisted in profile; sorted by last booked date

5. Nurse Stories


ID	Priority	As a Nurse, I want to...	So that...	Acceptance Criteria
NS-01	P0	View my inbox of patient bookings	I can see all pending service requests	Inbox loads all assigned bookings; filterable by date, service type, and visit type
NS-02	P0	Filter bookings by date/time	I can plan my schedule efficiently	Date-range filter applied; results sorted chronologically
NS-03	P0	Filter bookings by service type (medical/non-medical)	I can focus on relevant care types	Toggle filter; immediate re-render of booking list
NS-04	P0	Filter bookings by visit type (live-in/live-out)	I can distinguish short vs. extended engagements	Filter works independently and in combination with other filters
NS-05	P0	Select a specific booking to serve	I can choose which patient to attend	Selecting a booking shows full patient and service detail page
NS-06	P0	See whether a patient has paid before I travel	I don't waste time on unpaid visits	Payment status badge visible on booking card; unpaid bookings show warning banner
NS-07	P0	See the message 'Patient has not paid' if payment is pending	I have clear information before committing to travel	System displays yellow warning card with payment status; blocks ONGOING transition
NS-08	P0	Chat with the patient about visit details	I can confirm address, allergies, and care requirements	In-app chat opened from booking detail; read receipts shown
NS-09	P0	Start navigation to the patient's location	I can travel efficiently without leaving the app	In-app map or deep-link to navigation app; patient address auto-populated
NS-10	P0	Arrive at the patient's location	I confirm my physical presence	Location can be marked as 'Arrived'; timestamp recorded
NS-11	P0	Record clinical actions and patient data during the visit	I maintain professional documentation	Notes module: free text, structured vitals entry, photo attachment; saved in real time
NS-12	P0	Update appointment status to ONGOING	The system and patient know the visit has started	ONGOING button enabled only if payment = PAID; timestamp logged; patient notified
NS-13	P0	Update appointment status to COMPLETED	The system reflects the end of the visit	COMPLETED button active when status = ONGOING; confirmation dialog; patient notified
NS-14	P1	View patient medical history for a booking	I can prepare appropriate care	Patient history visible in booking detail (if patient has granted consent)
NS-15	P1	Receive push notifications for new bookings	I don't miss patient requests	Push notification on new booking assigned; deep links to booking detail
NS-16	P1	Accept or decline a booking request	I can manage my workload	Accept/Decline buttons on booking detail; declined bookings re-enter matching pool
NS-17	P1	View my earnings summary	I can track income per visit and per period	Earnings dashboard: total visits, total earned, pending payment, breakdown by service type
NS-18	P1	Update my available schedule	Patients only see me when I am available	Calendar interface; blocked dates/times; changes propagate to patient search results in real time
NS-19	P2	View my performance metrics	I can improve my rating and acceptance rate	Metrics: avg. rating, total visits, completion rate, response rate; visible in my profile
NS-20	P2	Upload/renew my nursing license document	My profile remains verified and trustworthy	Document upload with expiry date; admin verification flow; profile badge updated on approval

6. Functional Requirements


6.1 Authentication & Authorization
ID	Requirement	Priority
FR-A01	Email/phone + OTP registration for both Patient and Nurse roles	P0
FR-A02	JWT-based authentication with refresh token rotation (15min access, 7d refresh)	P0
FR-A03	Role-based access control (RBAC): Patient, Nurse, Admin roles	P0
FR-A04	Nurse profile requires admin verification before appearing in search	P0
FR-A05	Google OAuth SSO for patients	P1
FR-A06	Biometric authentication (Face ID / Fingerprint) for mobile apps	P1

6.2 Patient Booking Flow
ID	Requirement	Priority
FR-B01	Patient selects search mode: By Name or AI Recommendation	P0
FR-B02	By Name: text search with autocomplete filtered by nurse name	P0
FR-B03	By AI: system ranks nurses using ML model (specialty, proximity, rating, availability)	P0
FR-B04	Patient views nurse profile and selects preferred schedule slot	P0
FR-B05	If selected schedule matches nurse availability: proceed to service selection	P0
FR-B06	If no suitable schedule: loop back with nudge to try different date or AI mode	P0
FR-B07	Patient selects service type: Medical or Non-Medical	P0
FR-B08	Patient selects visit type: Live-in or Live-out	P0
FR-B09	System displays final price based on service + visit type + duration	P0
FR-B10	Patient completes in-app payment; receipt generated; appointment status = PENDING	P0
FR-B11	Nurse is notified of new confirmed booking	P0

6.3 Nurse Visit Flow
ID	Requirement	Priority
FR-C01	Nurse inbox shows all assigned bookings with payment status badge	P0
FR-C02	Nurse applies filters: date range, service type, visit type	P0
FR-C03	Nurse selects booking; system checks payment status	P0
FR-C04	If UNPAID: display warning; ONGOING transition blocked	P0
FR-C05	If PAID: allow nurse to chat with patient and initiate navigation	P0
FR-C06	Nurse marks status = ONGOING; patient receives push notification	P0
FR-C07	Nurse records clinical notes during visit (vitals, actions, medications, free text)	P0
FR-C08	Nurse marks status = COMPLETED; appointment closed; rating prompt sent to patient	P0
FR-C09	System logs timestamps for each status transition	P0

6.4 In-App Messaging
ID	Requirement	Priority
FR-D01	Real-time chat between patient and nurse available after booking confirmation	P0
FR-D02	Message persistence: full history stored per appointment	P0
FR-D03	Read receipts and unread message badge count	P1
FR-D04	Attachment support: images, documents (max 5MB per file)	P1
FR-D05	Push notification for new messages when app is backgrounded	P0

6.5 Payment Module
ID	Requirement	Priority
FR-E01	Integration with Midtrans payment gateway (credit card, bank transfer, GoPay, OVO, DANA)	P0
FR-E02	Payment status transitions: PENDING_PAYMENT → PAID → DISBURSED	P0
FR-E03	Nurse cannot transition appointment to ONGOING if payment_status != PAID	P0
FR-E04	Auto-disbursement to nurse wallet 24h after COMPLETED status	P1
FR-E05	Platform fee deduction (configurable): default 15% of service price	P0
FR-E06	Refund flow for cancelled appointments before nurse departure	P1
FR-E07	Invoice PDF generated and emailed post-payment	P1

6.6 AI Recommendation Engine
ID	Requirement	Priority
FR-F01	ML model ranks available nurses for a given patient request	P0
FR-F02	Input features: patient location, requested service type, requested visit type, date/time, nurse rating, nurse completion rate, nurse experience years	P0
FR-F03	Model retrains weekly on booking and completion data	P1
FR-F04	Cold-start handling: new patients default to proximity + rating ranking	P0
FR-F05	Explanation card: 'Recommended because: high rating + 5 min away + 4 yrs experience'	P2

7. API Specification


Base URL: https://api.nurseconnect.id/v1
Auth: All endpoints (except /auth/*) require Authorization: Bearer <JWT>

7.1 Authentication Endpoints
Method	Endpoint	Description	Request Body (Key Fields)	Response
POST	/auth/register	Register new user (patient or nurse)	email, phone, password, role (PATIENT|NURSE), full_name	201: {user_id, token, refresh_token}
POST	/auth/login	Login with credentials	email|phone, password	200: {access_token, refresh_token, expires_in}
POST	/auth/otp/send	Send OTP to phone	phone	200: {otp_ref}
POST	/auth/otp/verify	Verify OTP code	phone, otp_code, otp_ref	200: {verified: true}
POST	/auth/refresh	Refresh access token	refresh_token	200: {access_token, expires_in}
POST	/auth/logout	Invalidate refresh token	refresh_token	200: {success}
POST	/auth/google	Google OAuth login	id_token	200: {access_token, is_new_user}

7.2 Nurse Endpoints
Method	Endpoint	Description	Key Params	Response
GET	/nurses	List nurses (AI or Name search)	?mode=ai|name, query, service_type, visit_type, date	200: {nurses: [...], total}
GET	/nurses/:id	Get nurse profile	nurse_id in path	200: {nurse profile object}
GET	/nurses/:id/availability	Get available schedule slots	?from_date, to_date	200: {slots: [...]}
PUT	/nurses/me/profile	Update nurse profile (self)	bio, specialties, experience_years	200: {updated nurse}
PUT	/nurses/me/availability	Set availability calendar	{dates: [...], blocked: [...]}	200: {calendar}
POST	/nurses/me/documents	Upload license/credential document	multipart: file, doc_type, expiry_date	201: {doc_id, status: PENDING_REVIEW}
GET	/nurses/me/inbox	Nurse booking inbox	?status, service_type, visit_type, from_date, to_date	200: {bookings: [...]}
GET	/nurses/me/earnings	Nurse earnings summary	?period (week|month|year)	200: {total, breakdown: [...]}

7.3 Appointment Endpoints
Method	Endpoint	Description	Key Body/Params	Response
POST	/appointments	Create booking (patient)	nurse_id, service_type, visit_type, scheduled_at, patient_address	201: {appointment_id, status: PENDING_PAYMENT}
GET	/appointments	List appointments for current user	?status, role	200: {appointments: [...]}
GET	/appointments/:id	Get appointment detail	-	200: {appointment object with payment_status}
PATCH	/appointments/:id/status	Update appointment status (nurse)	status: ONGOING|COMPLETED	200: {updated appointment}
POST	/appointments/:id/cancel	Cancel appointment	reason	200: {refund_status}
POST	/appointments/:id/review	Submit rating/review (patient)	rating (1-5), comment	201: {review_id}

7.4 Payment Endpoints
Method	Endpoint	Description	Key Fields	Response
POST	/payments/initiate	Create payment transaction	appointment_id, payment_method	200: {payment_token, redirect_url, midtrans_snap_token}
POST	/payments/webhook	Midtrans payment callback (server-side only)	transaction_status, order_id, signature	200: {received}
GET	/payments/:appointment_id	Get payment status	appointment_id in path	200: {status: PENDING|PAID|REFUNDED, amount, paid_at}
POST	/payments/refund	Request refund	appointment_id, reason	200: {refund_id, estimated_days}

7.5 Messaging Endpoints
Method	Endpoint	Description	Key Fields	Response
GET	/messages/:appointment_id	Get chat history for appointment	appointment_id, ?page, limit	200: {messages: [...], has_more}
POST	/messages/:appointment_id	Send a message	content, type (text|image|file), attachment_url	201: {message_id, sent_at}
WS	/ws/chat/:appointment_id	WebSocket channel for real-time chat	JWT auth via query param	Event: {type: 'message', data: {...}}

7.6 Clinical Notes Endpoints
Method	Endpoint	Description	Key Fields	Response
POST	/appointments/:id/notes	Create clinical note during visit	type (vitals|action|medication|free_text), content, recorded_at	201: {note_id}
GET	/appointments/:id/notes	Get all notes for an appointment	appointment_id	200: {notes: [...]}
PUT	/appointments/:id/notes/:note_id	Update a note	content	200: {updated note}

8. Database Design


Database: PostgreSQL 15 (primary), Redis 7 (cache/sessions/pubsub), MongoDB (clinical notes/unstructured data)

8.1 Entity Relationship Overview
    • Users (1) → (1) NurseProfiles | PatientProfiles
    • NurseProfiles (1) → (N) Appointments
    • PatientProfiles (1) → (N) Appointments
    • Appointments (1) → (1) Payments
    • Appointments (1) → (N) Messages
    • Appointments (1) → (N) ClinicalNotes
    • NurseProfiles (1) → (N) CredentialDocuments
    • NurseProfiles (1) → (N) Availability
    • PatientProfiles (1) → (N) Reviews → (1) NurseProfiles

8.2 Core Tables
users
Column	Type	Constraints	Description
id	UUID	PK, DEFAULT gen_random_uuid()	Primary key
email	VARCHAR(255)	UNIQUE, NOT NULL	Email address
phone	VARCHAR(20)	UNIQUE, NOT NULL	Indonesian phone number
password_hash	VARCHAR(255)	NOT NULL	Bcrypt hashed password
role	ENUM('PATIENT','NURSE','ADMIN')	NOT NULL	User role
is_verified	BOOLEAN	DEFAULT false	Phone/email verified
is_active	BOOLEAN	DEFAULT true	Account active
firebase_uid	VARCHAR(128)	UNIQUE, NULLABLE	For push notification
created_at	TIMESTAMPTZ	DEFAULT now()	Row creation time
updated_at	TIMESTAMPTZ	DEFAULT now()	Last update time

nurse_profiles
Column	Type	Constraints	Description
id	UUID	PK	Primary key
user_id	UUID	FK → users.id, UNIQUE	Owning user
full_name	VARCHAR(255)	NOT NULL	Display name
bio	TEXT	NULLABLE	Professional bio
experience_years	INT	NOT NULL, DEFAULT 0	Years of experience
license_number	VARCHAR(100)	NOT NULL	STR/SIP number
specialties	TEXT[]	DEFAULT '{}'	Array of specialty tags
photo_url	VARCHAR(500)	NULLABLE	Profile photo CDN URL
rating	DECIMAL(3,2)	DEFAULT 0.00	Average rating (0-5)
total_reviews	INT	DEFAULT 0	Cached review count
total_visits	INT	DEFAULT 0	Completed visit count
completion_rate	DECIMAL(5,2)	DEFAULT 0.00	% of accepted jobs completed
is_approved	BOOLEAN	DEFAULT false	Admin approval status
location_lat	DECIMAL(10,8)	NULLABLE	Home base latitude
location_lng	DECIMAL(11,8)	NULLABLE	Home base longitude
created_at	TIMESTAMPTZ	DEFAULT now()	

patient_profiles
Column	Type	Constraints	Description
id	UUID	PK	Primary key
user_id	UUID	FK → users.id, UNIQUE	Owning user
full_name	VARCHAR(255)	NOT NULL	Display name
date_of_birth	DATE	NULLABLE	Patient DOB
gender	ENUM('M','F','OTHER')	NULLABLE	Gender
address	TEXT	NULLABLE	Primary address
address_lat	DECIMAL(10,8)	NULLABLE	Geocoded latitude
address_lng	DECIMAL(11,8)	NULLABLE	Geocoded longitude
medical_notes	TEXT	NULLABLE	General medical background
emergency_contact_name	VARCHAR(255)	NULLABLE	Emergency contact
emergency_contact_phone	VARCHAR(20)	NULLABLE	Emergency phone
created_at	TIMESTAMPTZ	DEFAULT now()	

appointments
Column	Type	Constraints	Description
id	UUID	PK	Primary key
patient_id	UUID	FK → patient_profiles.id, NOT NULL	Patient
nurse_id	UUID	FK → nurse_profiles.id, NOT NULL	Nurse
service_type	ENUM('MEDICAL','NON_MEDICAL')	NOT NULL	Service category
visit_type	ENUM('LIVE_IN','LIVE_OUT')	NOT NULL	Visit modality
status	ENUM('PENDING_PAYMENT','PENDING','ONGOING','COMPLETED','CANCELLED')	NOT NULL	Lifecycle status
payment_status	ENUM('UNPAID','PAID','REFUNDED')	DEFAULT 'UNPAID'	Payment state
scheduled_at	TIMESTAMPTZ	NOT NULL	Planned visit start
duration_hours	INT	NOT NULL, DEFAULT 8	Planned duration
patient_address	TEXT	NOT NULL	Visit address
patient_lat	DECIMAL(10,8)	NULLABLE	Visit latitude
patient_lng	DECIMAL(11,8)	NULLABLE	Visit longitude
base_price	DECIMAL(15,2)	NOT NULL	Gross service price (IDR)
platform_fee	DECIMAL(15,2)	NOT NULL	Platform commission
nurse_payout	DECIMAL(15,2)	NOT NULL	Nurse earnings net
started_at	TIMESTAMPTZ	NULLABLE	ONGOING status timestamp
completed_at	TIMESTAMPTZ	NULLABLE	COMPLETED status timestamp
cancelled_at	TIMESTAMPTZ	NULLABLE	Cancellation timestamp
cancellation_reason	TEXT	NULLABLE	Reason for cancellation
created_at	TIMESTAMPTZ	DEFAULT now()	

payments
Column	Type	Constraints	Description
id	UUID	PK	Primary key
appointment_id	UUID	FK → appointments.id, UNIQUE	Associated booking
midtrans_order_id	VARCHAR(100)	UNIQUE, NOT NULL	Midtrans reference
midtrans_transaction_id	VARCHAR(100)	NULLABLE	Midtrans TX ID
amount	DECIMAL(15,2)	NOT NULL	Total charged (IDR)
payment_method	VARCHAR(50)	NULLABLE	gopay, bca_va, etc.
status	ENUM('PENDING','SUCCESS','FAILED','REFUNDED')	NOT NULL	Payment status
paid_at	TIMESTAMPTZ	NULLABLE	Successful payment time
refunded_at	TIMESTAMPTZ	NULLABLE	Refund completion time
snap_token	VARCHAR(255)	NULLABLE	Midtrans Snap token
created_at	TIMESTAMPTZ	DEFAULT now()	

messages
Column	Type	Constraints	Description
id	UUID	PK	Primary key
appointment_id	UUID	FK → appointments.id, NOT NULL	Chat context
sender_id	UUID	FK → users.id, NOT NULL	Message author
content	TEXT	NULLABLE	Text content
type	ENUM('TEXT','IMAGE','FILE')	DEFAULT 'TEXT'	Message type
attachment_url	VARCHAR(500)	NULLABLE	CDN URL for files
is_read	BOOLEAN	DEFAULT false	Read receipt
sent_at	TIMESTAMPTZ	DEFAULT now()	

nurse_availability
Column	Type	Constraints	Description
id	UUID	PK	
nurse_id	UUID	FK → nurse_profiles.id, NOT NULL	
date	DATE	NOT NULL	Availability date
start_time	TIME	NOT NULL	Available from
end_time	TIME	NOT NULL	Available until
is_blocked	BOOLEAN	DEFAULT false	Manual block
UNIQUE	(nurse_id, date, start_time)	Composite unique	No duplicate slots

credential_documents (nurse)
Column	Type	Constraints	Description
id	UUID	PK	
nurse_id	UUID	FK → nurse_profiles.id, NOT NULL	
doc_type	ENUM('STR','SIP','KTP','IJAZAH','OTHER')	NOT NULL	Document type
file_url	VARCHAR(500)	NOT NULL	CDN URL
expiry_date	DATE	NULLABLE	License expiry
status	ENUM('PENDING_REVIEW','APPROVED','REJECTED')	DEFAULT 'PENDING_REVIEW'	Admin review status
reviewed_by	UUID	FK → users.id (admin), NULLABLE	Reviewer
reviewed_at	TIMESTAMPTZ	NULLABLE	Review timestamp

reviews
Column	Type	Constraints	Description
id	UUID	PK	
appointment_id	UUID	FK → appointments.id, UNIQUE, NOT NULL	One review per appointment
patient_id	UUID	FK → patient_profiles.id, NOT NULL	Reviewer
nurse_id	UUID	FK → nurse_profiles.id, NOT NULL	Reviewee
rating	SMALLINT	NOT NULL, CHECK (1-5)	Star rating
comment	TEXT	NULLABLE	Written review
created_at	TIMESTAMPTZ	DEFAULT now()	

clinical_notes (MongoDB Collection)
Stored in MongoDB for flexible schema and fast write performance during active visits.
Field	Type	Description
_id	ObjectId	Primary key
appointment_id	String (UUID)	Reference to PostgreSQL appointment
nurse_id	String (UUID)	Author nurse
type	String (vitals|action|medication|free_text)	Note category
content	Object / String	Structured vitals (bp, hr, temp, spo2) or free text
attachments	Array<{url, type}>	Photo or document URLs
recorded_at	ISODate	Timestamp of observation
created_at	ISODate	Document creation timestamp

9. System Design & Flow Diagrams


9.1 High-Level Architecture
Layer	Technology	Responsibility
Client — Web	Next.js 14 (App Router)	Patient & Nurse web interface; SSR for SEO; RSC for performance
API Gateway	Nginx + NestJS Guard	Rate limiting, JWT validation, request
Application Server	NestJS (TypeScript)	Business logic, REST API
AI Service	NEST JS GEMINI API KEY inference endpoint
Primary Database	SUPABASE	Relational data: users, appointments, payments, reviews
Cache / PubSub	Redis 7 (ElastiCache)	Session store, JWT blocklist, chat pub/sub, API response cache
File Storage	SUPABASE
Payment Gateway	Midtrans	Indonesian payment methods (GoPay, OVO, VA, Card)
Push Notifications	Cross-platform push to patient and nurse devices
Maps / Geocoding	Google Maps Platform	Address geocoding, distance matrix, in-app nurse navigation
Email	AWS SES	Invoices, OTP emails, system notifications
SMS / OTP	Twilio / Vonage	Phone verification OTP delivery
Monitoring	Datadog + Sentry	APM, error tracking, uptime monitoring
CI/CD	GitHub Actions)	Automated test and deployment pipeline

9.2 Patient Booking System Flow
Step	Actor	System Action	State Change
1	Patient	Selects 'By Name' or 'AI Recommendation'	—
2a	System (By Name)	Queries nurse search index by name via Elasticsearch	—
2b	System (AI)	Calls AI Service /recommend endpoint; returns ranked nurse list	—
3	Patient	Selects nurse; views profile and available schedule	—
4	System	Validates slot availability (no conflict in nurse_availability)	—
4a — No suitable slot	System	Returns 'No availability' message; patient loops back to step 1	Loop
5	Patient	Selects service type (Medical/Non-Medical) + visit type (Live-in/Live-out)	—
6	System	Calculates price from pricing_rules table	—
7	Patient	Initiates payment; Midtrans Snap opens	—
8	Midtrans	Processes payment; sends webhook to /payments/webhook	—
9	System	Verifies webhook signature; updates payment.status = SUCCESS	payment_status = PAID
10	System	Updates appointment.status = PENDING; sends FCM to nurse	appointment created
11	Nurse	Receives push notification; views booking in inbox	—

9.3 Nurse Visit Execution Flow
Step	Actor	System Action	State Change
1	Nurse	Opens inbox; applies filters (date, service, visit type)	—
2	Nurse	Selects booking card	—
3	System	Checks appointment.payment_status	—
3a — UNPAID	System	Displays yellow warning banner; blocks ONGOING transition	Blocked
3b — PAID	System	Unlocks full booking detail; enables chat and navigation	Unlocked
4	Nurse	Chats with patient; confirms address and care requirements	—
5	Nurse	Taps 'Start Navigation'; app deep-links to Google Maps with patient_lat/lng	—
6	Nurse	Arrives at patient location; taps 'Start Visit'	status = ONGOING
7	System	Updates appointment.started_at; sends FCM to patient: 'Your nurse has arrived'	—
8	Nurse	Records clinical notes (vitals, actions, medications) throughout visit	Notes saved to MongoDB
9	Nurse	Taps 'Complete Visit'; confirmation dialog shown	—
10	System	Updates appointment.status = COMPLETED, completed_at = now()	status = COMPLETED
11	System	Sends FCM to patient: 'Visit completed'; triggers review prompt	—
12	System	Schedules nurse payout disbursement (T+1 day)	—

9.4 Real-Time Chat Architecture
    • WebSocket server implemented in NestJS using @nestjs/websockets + socket.io
    • Each appointment_id creates a dedicated chat room: socket.join(`chat:${appointmentId}`)
    • Messages published to Redis pub/sub channel for horizontal scalability across NestJS instances
    • Message persistence: saved to PostgreSQL messages table on every send
    • Unread count cached in Redis; invalidated on read acknowledgment
    • Push notification triggered via FCM when recipient is offline (WebSocket not connected)

9.5 AI Recommendation Architecture
    • Offline training: collaborative filtering + feature-based ranking using Python (scikit-learn/LightGBM)
    • Features: patient_service_type, patient_visit_type, patient_lat/lng, nurse experience, nurse rating, nurse completion_rate, distance_km, availability_match_score
    • Model served via FastAPI endpoint: POST /recommend {patient_request} → {ranked_nurse_ids}
    • Results cached in Redis per (service_type, visit_type, patient_geohash_6) for 10 minutes
    • Weekly batch retraining via scheduled AWS Lambda; model artifact stored in S3

10. Third-Party Integrations


Integration	Provider	Purpose	Key Config	Fallback
Payment Gateway	Midtrans	Primary payment processing (credit card, virtual account, e-wallet)	Snap.js + server-side webhook; HMAC-SHA512 signature validation	Manual bank transfer with admin confirmation
Push Notifications	Firebase Cloud Messaging (FCM)	Cross-platform push to iOS, Android, web	Service account key; topic-based and token-based sends	In-app polling fallback; email notification
Maps & Geocoding	Google Maps Platform	Nurse navigation, address geocoding, distance matrix for AI features	Maps JS API (web), Maps SDK (mobile), Geocoding API, Distance Matrix API	OpenStreetMap / Nominatim as fallback
SMS / OTP	Twilio (primary) / Vonage (backup)	Phone verification OTP delivery	Indonesian phone number formatting (+62); OTP TTL = 5 min	WhatsApp OTP via Twilio WhatsApp API
Email	AWS SES	Invoices, welcome emails, OTP email, system alerts	DKIM + SPF configured; bounce/complaint handling	SendGrid as backup SMTP
File Storage	AWS S3 + CloudFront	Profile photos, credential docs, message attachments, invoice PDFs	Bucket policies: private by default; pre-signed URLs for uploads; CloudFront for CDN delivery	Cloudflare R2 as secondary
AI / ML Serving	FastAPI (self-hosted on AWS ECS)	Nurse recommendation inference endpoint	REST API; Docker container; auto-scaling policy: CPU > 70%	Rule-based fallback: proximity + rating sort
Google OAuth	Google Identity	Social login for patients	OAuth 2.0; id_token validation via Google's tokeninfo endpoint	Email/password auth always available
Monitoring	Datadog	APM, infrastructure metrics, log aggregation	APM tracer in NestJS; custom dashboards for booking funnel	CloudWatch as baseline
Error Tracking	Sentry	Frontend and backend exception capture	DSN configured in Next.js + NestJS; PII scrubbing enabled	Manual log review

11. Frontend Specification


Technology: Next.js 14 (App Router, RSC), TypeScript, Tailwind CSS, shadcn/ui, Zustand (state), React Query (server state), Socket.io-client (real-time)

11.1 Patient-Side Pages & Components
Route / Page	Key Components	State / Data
/	HeroSection, ServiceTypeCards, HowItWorks, TestimonialsCarousel	Static; no auth required
/auth/register	RegisterForm (role selector, email, phone, OTP), PasswordStrengthMeter	form state, OTP timer
/auth/login	LoginForm, GoogleOAuthButton, ForgotPasswordLink	form state
/search	NurseSearchBar, SearchModeToggle (Name|AI), NurseCard[], FilterSidebar, PaginationControls	React Query: /nurses?mode=...
/nurses/[id]	NurseProfileHeader (photo, name, rating, experience), SpecialtyTags, ReviewList, AvailabilityCalendar, BookingCTA	React Query: /nurses/:id
/booking/[nurse_id]	ServiceTypeSelector, VisitTypeSelector, SchedulePicker, PriceSummaryCard, BookNowButton	Zustand: bookingDraft state
/payment/[appointment_id]	MidtransSnapWrapper, PaymentMethodList, PriceSummary, ProcessingOverlay	React Query: /payments/initiate
/appointments	AppointmentListTabs (PENDING|ONGOING|COMPLETED|CANCELLED), AppointmentCard, FilterDropdowns	React Query: /appointments
/appointments/[id]	AppointmentStatusBadge, NurseInfo, ServiceSummary, ChatWindow, NurseLocationMap, ClinicalNoteViewer (if COMPLETED)	React Query + WebSocket
/profile	PatientProfileForm, AddressManager, EmergencyContactForm, FavoriteNurseList	React Query: /patients/me

11.2 Nurse-Side Pages & Components
Route / Page	Key Components	State / Data
/nurse/dashboard	StatsSummary (visits, earnings, rating), UpcomingVisitCard[], NotificationBell	React Query: /nurses/me/earnings
/nurse/inbox	BookingInbox (sortable, filterable list), BookingCard (with PaymentStatusBadge), InboxFilterBar (date, service_type, visit_type)	React Query: /nurses/me/inbox
/nurse/appointments/[id]	PatientInfoCard, PaymentStatusGate (warning if UNPAID), ServiceDetail, ChatWindow, NavigationButton, StatusControlPanel (ONGOING|COMPLETED buttons), ClinicalNotesEditor	React Query + WebSocket
/nurse/notes/[appointment_id]	VitalsForm (BP, HR, Temp, SpO2), ActionLog, MedicationEntry, FreeTextArea, AttachmentUploader, NoteSaveIndicator	Zustand: noteDraft + React Query mutations
/nurse/availability	AvailabilityCalendar (week/month view), BlockDateModal, RecurringScheduleEditor	React Query: /nurses/me/availability
/nurse/profile	NurseProfileForm, CredentialDocumentUploader, LicenseStatusBadge, SpecialtyTagSelector	React Query: /nurses/me/profile
/nurse/earnings	EarningsSummaryCard, EarningsChart (bar by week/month), TransactionTable, ExportCSVButton	React Query: /nurses/me/earnings

11.3 Shared Components
Component	Description	Used In
ChatWindow	Real-time WebSocket chat; message list with read receipts; input bar with attachment support	Patient /appointments/[id] + Nurse /appointments/[id]
PaymentStatusBadge	Color-coded pill: UNPAID (red), PAID (green), REFUNDED (amber)	Nurse inbox, appointment detail
AppointmentStatusBadge	PENDING (gray), ONGOING (blue), COMPLETED (green), CANCELLED (red)	All appointment views
NotificationBell	Unread count badge; dropdown with recent notifications; mark all read	Top nav (both roles)
NurseCard	Photo, name, rating stars, experience, service tags, Book button	Search results
AvailabilityCalendar	Month/week view; available slots in green; booked in gray; blocked in red	Nurse profile (patient view), Nurse availability management
PriceSummaryCard	Shows: base price, platform fee line, total; dynamic based on service+visit type selection	Booking flow
OTPInput	6-digit OTP entry with auto-advance focus; timer countdown; resend link	Auth flows
DocumentUploader	Drag-and-drop + camera capture; file type validation; upload progress; CDN URL returned	Nurse credential upload
GlobalSearchBar	Nurse name search with debounced autocomplete; displays top 5 suggestions	Nav header

12. Technical Architecture


12.1 Frontend — Next.js 14
Concern	Approach / Library
Framework	Next.js 14 with App Router; React Server Components for data-heavy pages
Language	TypeScript 5 (strict mode)
Styling	Tailwind CSS 3 + shadcn/ui component library
State Management	Zustand for local UI state (booking draft, note draft); React Query (TanStack Query) for server state
Forms	React Hook Form + Zod validation schemas
Real-time	socket.io-client; connection scoped per appointment chat room
Maps	@react-google-maps/api for patient location display and nurse navigation
Payments	Midtrans Snap.js loaded dynamically on payment page
Auth	next-auth with custom NestJS credential provider + JWT strategy
i18n	next-intl; Indonesian (id-ID) primary, English (en-US) secondary
Testing	Jest + React Testing Library (unit); Playwright (E2E); MSW for API mocking
Performance	Image optimization via next/image; route prefetching; ISR for static nurse profiles
Deployment	Vercel (primary) with edge functions; custom domain + SSL

12.2 Backend — NestJS
Concern	Approach / Library
Framework	NestJS 10 with modular architecture (feature modules: auth, nurses, patients, appointments, payments, messages, notes, admin)
Language	TypeScript 5 (strict mode)
ORM	TypeORM with PostgreSQL; migrations tracked in /migrations
Validation	class-validator + class-transformer on all DTOs
Auth	@nestjs/jwt + @nestjs/passport; JWT access token (15min) + refresh token (7d) in httpOnly cookie
WebSocket	@nestjs/websockets + socket.io; Redis adapter (@socket.io/redis-adapter) for multi-instance pub/sub
Caching	@nestjs/cache-manager + ioredis; cache search results and AI recommendations
File Upload	Multer middleware; files streamed directly to S3 via @aws-sdk/client-s3
Payment Webhook	Raw body parser preserved for Midtrans HMAC signature validation
Rate Limiting	@nestjs/throttler: 100 req/min per IP on public endpoints; 10 req/min on auth endpoints
Queue	BullMQ + Redis for async jobs: payout disbursement, invoice PDF generation, email delivery, AI model calls
Logging	Winston + Datadog transport; structured JSON logs; request ID correlation
Testing	Jest (unit); Supertest (integration); factory-boy pattern for test data
Deployment	Docker + AWS ECS Fargate; 3 tasks minimum; auto-scaling on CPU/memory; blue-green deployment via CodeDeploy
API Docs	@nestjs/swagger; OpenAPI 3.0 spec auto-generated at /api/docs

12.3 Infrastructure Overview
Component	Service	Sizing (Initial)
NestJS API	AWS ECS Fargate	2 vCPU, 4GB RAM; min 3 tasks, max 10 tasks
PostgreSQL	AWS RDS (Multi-AZ)	db.t3.medium; automated backups 7 days; read replica for reporting
Redis	AWS ElastiCache (cluster)	cache.t3.medium; 2 nodes; maxmemory-policy = allkeys-lru
MongoDB	MongoDB Atlas (M30 cluster)	512GB storage; auto-scaling; 3-node replica set
AI Service	AWS ECS Fargate (separate service)	4 vCPU, 8GB RAM; min 1, max 5 tasks; GPU optional in v2
File Storage	AWS S3 (private bucket) + CloudFront	S3 Standard; lifecycle rule: move to IA after 90 days
CDN	CloudFront	Edge locations in Jakarta, Singapore, Kuala Lumpur
DNS / SSL	Route 53 + ACM	Wildcard SSL; health checks on API load balancer
Load Balancer	AWS ALB	HTTPS only; sticky sessions for WebSocket; access logs to S3
Secrets	AWS Secrets Manager	DB passwords, API keys, JWT secrets; rotation enabled

13. Data Model — Full Schema


Complete TypeORM entity decorators for NestJS. PostgreSQL enums, indexes, and foreign keys are defined here.

Entity	Table Name	Key Indexes	Notes
User	users	idx_users_email (unique), idx_users_phone (unique), idx_users_role	Core auth entity; password never returned in API responses
NurseProfile	nurse_profiles	idx_nurse_user_id (unique), idx_nurse_location (GIST on point(lng,lat)), idx_nurse_approved, idx_nurse_rating	PostGIS extension for proximity search; is_approved = false prevents search listing
PatientProfile	patient_profiles	idx_patient_user_id (unique)	linked 1:1 to users
Appointment	appointments	idx_appt_patient_id, idx_appt_nurse_id, idx_appt_status, idx_appt_scheduled_at, idx_appt_payment_status (partial: status != CANCELLED)	Composite index on (nurse_id, status) for nurse inbox queries
Payment	payments	idx_payment_appointment_id (unique), idx_payment_midtrans_order_id (unique), idx_payment_status	Webhook idempotency checked via midtrans_order_id
Message	messages	idx_msg_appointment_id, idx_msg_sender_id, idx_msg_sent_at (DESC)	Paginated by sent_at DESC; 50 messages per page default
NurseAvailability	nurse_availability	idx_avail_nurse_id, idx_avail_date, unique(nurse_id, date, start_time)	Queried for availability calendar and slot conflict detection
CredentialDocument	credential_documents	idx_cred_nurse_id, idx_cred_status	Admin review queue filtered by status = PENDING_REVIEW
Review	reviews	idx_review_nurse_id, idx_review_patient_id, unique(appointment_id)	One review per appointment; triggers nurse rating recalculation
PricingRule	pricing_rules	unique(service_type, visit_type, duration_category)	Admin-managed pricing table; referenced at booking creation

13.1 Pricing Rules Table
Service Type	Visit Type	Duration	Base Price (IDR)
MEDICAL	LIVE_OUT	Per visit (8h)	Rp 350,000
MEDICAL	LIVE_IN	12h shift	Rp 550,000
MEDICAL	LIVE_IN	24h shift	Rp 900,000
NON_MEDICAL	LIVE_OUT	Per visit (8h)	Rp 250,000
NON_MEDICAL	LIVE_IN	12h shift	Rp 400,000
NON_MEDICAL	LIVE_IN	24h shift	Rp 650,000
Note: All prices are configurable by Admin. Platform fee = 15% deducted from base price. Nurse payout = base_price × 0.85.

14. Roadmap & Milestones


Phase	Name	Duration	Key Deliverables	Status
P1	Foundation — Infrastructure Setup	Weeks 1-2	AWS account structure, ECS clusters, RDS, Redis, S3, GitHub Actions pipeline, dev/staging/prod environments	Planned
P2	Foundation — Auth & User Management	Weeks 2-4	Registration, OTP, JWT auth, RBAC, Google OAuth, user profile CRUD	Planned
P3	Foundation — Nurse Profile & Verification	Weeks 4-6	Nurse profile, credential upload, admin approval workflow, availability calendar	Planned
P4	Core — Patient Search (By Name)	Weeks 6-8	Name search API, nurse list UI, nurse profile page, basic filtering	Planned
P5	Core — Patient Booking Flow	Weeks 8-10	Service/visit type selection, schedule picker, price calculation, booking creation	Planned
P6	Core — Payment Integration	Weeks 10-12	Midtrans Snap integration, webhook handler, payment status gates, receipt generation	Planned
P7	Core — Nurse Inbox & Visit Flow	Weeks 12-14	Nurse inbox UI, filters, booking detail, payment gate warning, ONGOING/COMPLETED status controls	Planned
P8	Core — In-App Chat	Weeks 14-16	WebSocket chat, message persistence, push notifications, read receipts	Planned
P9	Core — Clinical Notes Module	Weeks 16-18	Vitals form, action log, medication entry, free text, MongoDB storage, nurse note UI	Planned
P10	Enhancement — AI Recommendation	Weeks 18-22	Data pipeline, ML model training, FastAPI serving, AI search mode in patient UI	Planned
P11	Enhancement — Maps & Navigation	Weeks 22-24	Google Maps integration, nurse navigation deep-link, patient location display, geocoding	Planned
P12	Enhancement — Reviews & Ratings	Weeks 24-26	Review submission flow, rating aggregation trigger, display on nurse profile	Planned
P13	Optimization — Admin Dashboard	Weeks 26-28	Admin portal: credential review, platform analytics, pricing management, user management	Planned
P14	Optimization — Earnings & Payouts	Weeks 28-30	Nurse wallet, auto-disbursement via bank transfer API, earnings dashboard, CSV export	Planned
P15	Expansion — Mobile Apps	Weeks 30-36	React Native (Expo) iOS + Android; parity with web; native push, camera, maps	Planned
P16	Expansion — Advanced Features	Weeks 36-42	Family account linking, repeat booking, telemedicine pre-consultation, B2B hospital partnerships	Planned

14.1 Key Milestones
#	Milestone	Target Date	Success Criteria
M1	Infrastructure Live	End of Week 2	All environments deployed; CI/CD pipeline green; zero critical security findings
M2	Auth System Complete	End of Week 4	Registration, login, OTP, JWT, and RBAC fully functional; 100% test coverage on auth module
M3	First Nurse Profile Published	End of Week 6	At least 1 nurse passes admin credential review and appears in search
M4	First Patient Booking Created	End of Week 10	End-to-end booking flow works from search to appointment creation (without payment)
M5	First Successful Payment	End of Week 12	Midtrans Snap processes test transaction; webhook updates appointment status
M6	First Completed Visit	End of Week 14	Full lifecycle: PENDING → ONGOING → COMPLETED triggered by nurse; patient notified at each step
M7	Chat System Live	End of Week 16	Real-time chat functional; messages persist; push notification delivered on new message
M8	Clinical Notes Live	End of Week 18	Nurse can create, view, and update all note types during an ONGOING appointment
M9	AI Recommendations in Production	End of Week 22	AI mode returns ranked nurse list; A/B test shows ≥ 10% higher booking conversion vs. default sort
M10	Mobile App Beta Release	End of Week 36	iOS + Android apps available on TestFlight/Internal Track; 100 beta testers onboarded
M11	Public Launch	End of Week 38	App live on App Store + Play Store; marketing campaign; first 500 patient registrations in 30 days
M12	Scale Milestone	Month 12	25,000 patients, 2,500 nurses, 8,000 completed visits/month, NPS ≥ 60

15. Success Metrics & KPIs


#	KPI Name	Target (12-mo)	Measurement Method	Owner
K01	Monthly Active Patients (MAP)	25,000 unique	Distinct patient IDs with ≥1 action in rolling 30 days	Product
K02	Monthly Active Nurses (MAN)	2,500 unique	Distinct nurse IDs with ≥1 action in rolling 30 days	Product
K03	Monthly Completed Visits	8,000	Count: appointments WHERE status = COMPLETED AND completed_at in period	Operations
K04	Nurse Utilization Rate	65%	(Completed visits / Available slots) × 100 per nurse, averaged	Operations
K05	Booking Conversion Rate	35%	(Appointments created / Nurse profile views) × 100	Product
K06	Payment Conversion Rate	90%	(PAID appointments / Created appointments) × 100	Product
K07	Average Booking-to-Confirmation Time	< 15 min	Median of (appointment.created_at - payment.paid_at)	Engineering
K08	Average Time-to-ONGOING (after PENDING)	< 60 min	Median of (started_at - created_at) on weekday bookings	Operations
K09	Visit Completion Rate	96%	(COMPLETED / (ONGOING + COMPLETED)) × 100	Operations
K10	Appointment Cancellation Rate	< 5%	(CANCELLED / Total created) × 100	Operations
K11	Patient 30-Day Retention	55%	% of patients with a 2nd booking within 30 days of first	Product
K12	Nurse 30-Day Retention	70%	% of nurses with ≥1 COMPLETED visit per month for 2 consecutive months	Operations
K13	Average Patient Rating Given	4.3+	AVG(reviews.rating) per period	Quality
K14	Nurse Average Rating	4.5+	AVG(nurse_profiles.rating) across all active nurses	Quality
K15	Platform NPS	≥ 60	Quarterly in-app NPS survey; (Promoters - Detractors) / Total	Product
K16	Gross Merchandise Value (GMV)	IDR 4B/month	SUM(appointments.base_price) for COMPLETED visits per month	Finance
K17	Platform Revenue (Net)	IDR 600M/month	SUM(appointments.platform_fee) for COMPLETED visits	Finance
K18	P99 API Response Time	< 500ms	Datadog APM percentile metric on /appointments and /nurses endpoints	Engineering
K19	System Uptime	99.9%	Datadog synthetic monitoring; measured monthly	Engineering
K20	Security Incidents (Critical)	0 per quarter	Sentry + Datadog alerts; manual incident log	Security

16. Security Considerations


16.1 Authentication & Session Security
    • JWT access tokens expire in 15 minutes; refresh tokens stored in httpOnly, Secure, SameSite=Strict cookies
    • Refresh token rotation: each use issues a new refresh token; previous token immediately invalidated in Redis blocklist
    • Brute-force protection: 5 failed login attempts triggers 15-minute account lock (Redis-backed)
    • OTP: 6-digit numeric, 5-minute TTL, max 3 attempts before re-request required; rate-limited to 3 OTPs per phone per hour
    • Password policy: minimum 8 characters, 1 uppercase, 1 number, 1 special character; Bcrypt cost factor = 12

16.2 Data Protection
    • All data in transit: TLS 1.3 enforced; HTTP Strict Transport Security (HSTS) max-age=31536000
    • All data at rest: AES-256 encryption on RDS, S3 (SSE-S3), ElastiCache (in-transit TLS)
    • PII fields (phone, address, medical_notes): encrypted at column level using pgcrypto where highest sensitivity
    • Clinical notes access: only the assigned nurse and the patient can read notes for their appointment; admin requires explicit audit-logged access
    • GDPR/UU PDP compliance: data minimization, right to deletion (soft-delete + scheduled hard-delete at 90 days), consent logging

16.3 API Security
    • All endpoints require JWT except: POST /auth/register, POST /auth/login, POST /auth/otp/*, GET /nurses (public listing)
    • RBAC enforced via NestJS Guards on every protected route: @Roles(Role.NURSE) etc.
    • Nurse can only read/write their own data; Patient can only read/write their own data — ownership checks on every mutation
    • Rate limiting: 100 req/min (authenticated), 20 req/min (unauthenticated), 10 req/min (auth endpoints) — @nestjs/throttler
    • Input validation: all DTOs validated with class-validator; no raw SQL; TypeORM prevents SQL injection by default
    • CORS: whitelist of allowed origins (nurseconnect.id, app.nurseconnect.id); no wildcard in production

16.4 Payment Security
    • Midtrans webhook: HMAC-SHA512 signature validated before any database update; replay attacks prevented via idempotency key (midtrans_order_id)
    • Card data: never touches NurseConnect servers — Midtrans Snap handles PCI-DSS scope
    • Payment amounts validated server-side: client cannot modify price; amount recalculated from pricing_rules at payment initiation

16.5 File Upload Security
    • Accepted MIME types: image/jpeg, image/png, application/pdf only; validated server-side via file-type library (magic bytes)
    • Max file size: 5MB per upload; multipart request size limit enforced by Nginx (10MB)
    • Files stored in private S3 bucket; access via pre-signed URLs (TTL = 15 minutes for downloads)
    • Credential documents scanned for malware via ClamAV on upload (async via BullMQ queue)

16.6 Infrastructure Security
    • VPC: NestJS, RDS, Redis in private subnets; only ALB in public subnet
    • Security Groups: RDS only accessible from ECS task security group; Redis only from ECS
    • Secrets: all credentials in AWS Secrets Manager; no secrets in environment variables or code
    • Dependency scanning: Dependabot + Snyk in CI pipeline; critical CVEs block deployment
    • Penetration testing: annual external pentest; quarterly internal OWASP Top 10 review

17. Open Questions


#	Question	Options / Considerations	Owner	Target Decision Date
OQ-01	Should nurses accept/decline individual bookings, or are all bookings auto-assigned?	A: Auto-assign (faster, less control). B: Accept/decline (nurse autonomy, risk of patient waiting). Hybrid: 30-min accept window then auto-cancel	Product	Week 3
OQ-02	What is the exact cancellation and refund policy?	A: Full refund if cancelled > 24h before visit. B: 50% refund if cancelled 2-24h. C: No refund if < 2h. Need legal review for consumer protection compliance.	Legal + Product	Week 4
OQ-03	Should live-in pricing be daily or hourly?	Daily rates simpler for patients. Hourly more flexible but complex to calculate. Hybrid: flat day/night rates.	Finance + Product	Week 4
OQ-04	How are disputes between patient and nurse handled?	A: Admin manual review. B: Automated evidence collection (timestamps, notes, chat logs). C: Third-party mediation. Need SLA: respond within 24h?	Operations	Week 5
OQ-05	What ML features are available at launch for AI recommendations?	If GPS is unavailable: use profile address. Cold start for new patients: default to service_type + rating sort. Define minimum data volume before enabling AI mode.	Engineering + AI	Week 6
OQ-06	Should chat persist after appointment completion?	A: Archive and hide after 90 days. B: Keep indefinitely for medical reference. C: Patient chooses. GDPR/UU PDP implications for medical records.	Legal + Product	Week 5
OQ-07	Is nurse-to-nurse messaging required (e.g. for care handoffs)?	Not in flowcharts; could be v2. Would need new conversation type and admin oversight for medical communications.	Product	Week 8
OQ-08	What are the nurse payout disbursement rails?	A: Bank transfer (BCA, Mandiri) via Midtrans Disbursement. B: GoPay / OVO wallet. C: Manual admin. Need payout API availability in Indonesia.	Finance + Engineering	Week 10
OQ-09	How should the platform handle nurses who repeatedly cancel?	Threshold for deactivation? Strike system (3 unexcused cancellations = reviewed)? Patient notification if nurse cancels?	Operations + Legal	Week 8
OQ-10	Should patient medical history be visible to the nurse before booking?	A: Full access after booking confirmed. B: Patient explicitly shares each visit. C: Only notes patient writes in booking form. Privacy-first approach recommended.	Legal + Product	Week 6
OQ-11	What is the nurse onboarding SLA for credential verification?	Target: 48h for admin review. SLA breach triggers escalation. Can we partially automate OCR-based license number validation?	Operations + Engineering	Week 4
OQ-12	Should there be a minimum booking notice period?	A: 2h minimum to give nurse time to prepare and travel. B: Urgent booking mode with premium pricing. C: No minimum but show availability in real time.	Product	Week 5
OQ-13	Are there geographic restrictions at launch?	Initial launch: Java island only (Jakarta, Surabaya, Bandung, Yogyakarta)? Phase 2: Sumatra, Kalimantan. GPS-based geo-fence required.	Business + Engineering	Week 3
OQ-14	What happens if Midtrans is down during payment?	Fallback UI: show 'payment temporarily unavailable'; no booking blocked indefinitely. Queue retry mechanism? Manual admin override?	Engineering	Week 10
OQ-15	How should nurse availability integrate with external calendars (Google Calendar)?	V1: manual availability entry only. V2: Google Calendar two-way sync via CalDAV / Google Calendar API. OAuth scope required.	Engineering + Product	Month 6

18. Glossary


Term	Definition
Appointment	A confirmed booking between a patient and nurse for a specific service, date, and time. Goes through lifecycle: PENDING_PAYMENT → PENDING → ONGOING → COMPLETED.
AI Recommendation	The system mode where a trained ML model ranks and returns nurses most likely to satisfy the patient's request, as opposed to manual name search.
Base Price	The gross price charged to the patient for a service, defined in the pricing_rules table by service_type, visit_type, and duration.
Booking Inbox	The nurse-side view of all assigned patient service requests, filterable by date, service type, and visit type.
Clinical Notes	Structured and free-text documentation recorded by a nurse during an ONGOING visit, stored in MongoDB. Types: vitals, action, medication, free_text.
Completion Rate	A nurse performance metric: (COMPLETED appointments) / (ACCEPTED appointments) × 100. Displayed on nurse profile.
Credential Document	A file uploaded by a nurse to prove licensure: STR (Surat Tanda Registrasi), SIP (Surat Izin Praktik), KTP (national ID), or university certificate.
COMPLETED	The final positive appointment status, set by the nurse after finishing the visit. Triggers patient review prompt and nurse payout scheduling.
Disbursement	The automated transfer of a nurse's earned payout to their bank account or e-wallet, triggered 24 hours after appointment COMPLETED status.
FCM	Firebase Cloud Messaging — the push notification service used to deliver real-time alerts to patient and nurse mobile and web apps.
GMV	Gross Merchandise Value — the total value of all completed service transactions on the platform within a period, before platform fee deduction.
In-App Chat	Real-time WebSocket-based messaging between a patient and their assigned nurse, scoped to a specific appointment.
Live-in	A visit type where the nurse resides at the patient's home for an extended duration (typically 12 or 24 hours per shift).
Live-out	A visit type where the nurse attends the patient's home for a defined session (typically 8 hours) then leaves.
Medical Service	A service type requiring clinical nursing skills: wound care, IV management, medication administration, vital signs monitoring, post-op care.
Midtrans	Indonesia's leading payment gateway, used by NurseConnect for secure payment processing. Provides Snap.js for embedded payment UI.
Non-Medical Service	A service type focused on personal care assistance without clinical procedures: bathing assistance, mobility support, companionship, meal preparation.
NPS	Net Promoter Score — a metric measuring patient and nurse satisfaction and loyalty. Calculated as: % Promoters (9-10) minus % Detractors (0-6).
ONGOING	The appointment status set by a nurse when they arrive at the patient's location and begin the visit. Triggers patient push notification.
Payment Gate	A system rule that prevents a nurse from transitioning an appointment to ONGOING if the patient's payment_status is not PAID.
Payment Status	The payment state of an appointment: UNPAID (initial), PAID (Midtrans confirmed), REFUNDED (cancellation refund processed).
PENDING	The appointment status after successful patient payment and before the nurse starts the visit.
Platform Fee	The commission retained by NurseConnect from each completed visit. Default: 15% of base_price. Configurable by admin.
RBAC	Role-Based Access Control — the authorization model ensuring patients, nurses, and admins can only access resources appropriate to their role.
STR / SIP	Surat Tanda Registrasi (nurse registration certificate) and Surat Izin Praktik (practice license) — mandatory Indonesian nursing credentials verified during nurse onboarding.



NurseConnect PRD v1.0 — CONFIDENTIAL — April 2025 — For Internal Use Only

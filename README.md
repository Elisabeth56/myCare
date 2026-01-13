# myCare – Hospital Management & AI Support Platform

## Description
myCare is a hospital web platform for managing patients, appointments, staff workflows, and medical documentation, with integrated AI assistance for search, automation, and document understanding.  
It is designed with strict role-based access, auditability, and compliance-first architecture.

---

## Tech Stack

**Frontend**
- Next.js (App Router)
- Tailwind CSS
- TypeScript

**Backend**
- Next.js API routes (Node.js)
- Supabase Postgres + pgvector
- Row Level Security (RLS)

**Authentication**
- NextAuth
- JWT-based sessions
- Role-based authorization

**AI**
- Ollama (local LLM runtime)
- LangChain.js (orchestration)
- Vector search via pgvector

**Storage**
- Local filesystem (dev)
- Supabase Storage (prod)

---

## Access Levels & Features

### 1. Public (No Login)
**Purpose**
- Trust building
- Compliance visibility
- Onboarding

**Features**
- Landing page (services, value proposition)
- Security & compliance information (HIPAA/GDPR)
- Contact / demo request
- Pricing (optional)
- Privacy policy & terms

**Restrictions**
- No dashboards
- No patient or hospital data access

---

### 2. Patient Portal (Limited Access)
**Scope**
- Patients can access **only their own data**.

**Features**
- Secure login
- View upcoming and past appointments
- Book / reschedule appointments
- View prescriptions (read-only)
- View lab results (read-only)
- Billing & invoices
- Notifications (email/SMS)
- Profile management

**Explicitly NOT Allowed**
- Viewing other patients
- Editing medical records
- Accessing staff or admin tools

---

### 3. Staff Portal (Role-Based)
**Common Features**
- Secure login
- Role-based UI and permissions
- Assigned patient access only

**Doctor**
- View patient medical records
- Write diagnosis notes
- Create prescriptions
- Request lab tests
- View appointment schedules
- AI-assisted medical document summaries (non-diagnostic)

**Nurse**
- Enter vital signs
- Update patient status
- Medication tracking
- Assist with patient monitoring

**Receptionist**
- Register new patients
- Book and manage appointments
- Queue management
- Insurance verification

**Restrictions**
- Cannot manage system settings
- Cannot create users
- Cannot bypass audit logs

---

### 4. Admin Dashboard (Hospital Management SaaS)
**User & Staff Management**
- Create staff accounts
- Assign roles (doctor, nurse, receptionist)
- Suspend / reactivate users
- Audit user actions

**Patient Management**
- Full patient database
- Medical record access (audit-logged)
- Merge duplicate records
- Data export (compliance)

**Operations**
- Appointment rules
- Department management
- Shift scheduling
- Room / bed management

**Billing**
- Service pricing
- Invoice generation
- Insurance integrations
- Payment reports

**Compliance & Security (Critical)**
- Full audit logs (who accessed what and when)
- Access history
- Data retention policies
- Consent management

**System Configuration**
- Hospital profile
- Department setup
- Permissions matrix
- External integrations (labs, pharmacy)

---

## AI Capabilities (Scoped & Safe)
**Available AI Tools**
- Hospital Knowledge Base Search (vector-based)
- Support AI Chatbot (non-clinical)
- Medical Document Reader (non-diagnostic)
- Doctor Notes Transcription
- Workflow Automation Agent
- Media / report generation (admin-only)

**Restrictions**
- No diagnosis
- No treatment decisions
- No cross-patient data access
- All AI actions are logged

---

## Security Model
- Role-based access control (RBAC)
- Supabase Row Level Security (mandatory)
- JWT session validation
- Audit logs for all sensitive actions
- Encrypted storage
- Principle of least privilege

---

## Deployment Strategy

**Development**
- Local Supabase
- Local Ollama
- Local storage

**Production**
- Supabase hosted Postgres
- Supabase Storage
- Dockerized Ollama (isolated network)
- Environment-based secrets

---

## Final Notes
- myCare is **not** a generic CRUD app.
- Admin ≠ Staff ≠ Patient dashboards.
- AI is **assistive**, not diagnostic.
- Compliance is a **core feature**, not an add-on.

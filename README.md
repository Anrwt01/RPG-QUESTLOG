# ⚔️ QuestLog – A Gamified User Experience Platform

## 🧭 Overview
**QuestLog** is a collaborative project developed by our team — **Anuj Rawat** and **Ishika Singhal** — with the vision of merging productivity, gamification, and personalization.  
Users create profiles, embark on virtual “quests,” and level up their **avatars** based on real-world actions, progress, or achievements.

Our goal is to make every user’s journey interactive, rewarding, and fun — like living inside a game world 🌍.

---

## 🧠 Core Concept
At its heart, **QuestLog** transforms daily goals, learning progress, or project tasks into an RPG-style experience:
- **Users** register, log in, and manage their profile securely.  
- Each user owns an **Avatar** — representing their in-game identity.  
- Completing activities grants **XP (experience points)** and increases **levels**.  
- Avatars have **classes**, **stats**, and **gear** that evolve over time.  
- Future updates will include **quests**, **achievements**, and **leaderboards**.

---

## 🧩 Tech Stack

| Layer | Technology |
|--------|-------------|
| Backend Framework | **Node.js + Express** |
| Database | **PostgreSQL** |
| ORM | **Prisma** |
| Authentication | **JWT + bcrypt** |
| Validation | **Zod Schema** |
| Future Frontend | React (planned) |

---
## 🧭 Game Logic
| Feature | Description |
|----------|-------------|
| **Quests** | Daily or long-term tasks that grant XP and rewards. |
| **Achievements** | Milestones that unlock special gear or titles. |
| **Leaderboards** | Track users’ progress globally or by group. |
| **Inventory System** | Manage gear and items to customize avatars. |
| **Progress API** | REST endpoints to update XP and levels dynamically. |

---

## ⚙️ Setup Guide

```bash
# Clone repo
git clone https://github.com/<your-team>/questlog.git
cd questlog

# Install dependencies
npm install

# Create .env file
DATABASE_URL="postgresql://user:password@localhost:5432/questlog"
JWT_SECRET="supersecretkey"

# Setup database
npx prisma migrate dev --name init
npx prisma generate

# Run development server
npm run dev
👥 Team Members
Name	Role	Contribution
Anuj Rawat	Backend Developer	Prisma Models, API Design, Authentication Logic
Ishika Singhal	Backend Developer	Schema Design, Data Validation, Architecture Planning

🤝 Team Vision
We are a team of developers passionate about combining creativity, logic, and technology to make software that feels alive.
With QuestLog, we aim to turn routine activities into achievements, encouraging consistent progress and engagement.

🎯 Project Goals
Build a secure and modular backend

Design a robust schema for users and avatars

Introduce gamification through quests and leveling

Develop an API ready for future frontend integration

🧾 License
This project is released under the MIT License.

🏰 QuestLog — Level Up Your Journey!


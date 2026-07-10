# Orbit

<p align="center">
  <img src="https://github.com/user-attachments/assets/8de1a244-3fe4-434b-89a9-0968c4284015" alt="Orbit Banner" width="100%" />
</p>

<p align="center">
  <strong>An open-source workflow automation platform.</strong>
</p>

<p align="center">
  Build AI-powered workflows, connect APIs, automate repetitive tasks, and create powerful integrations with an intuitive visual editor.
</p>

---

## 📸 Screenshots

### Workflow Editor

<p align="center">
  <img src="https://github.com/user-attachments/assets/61679fb4-1d18-4ac9-9fe2-4ffae884d642" width="100%" />
</p>

### Node Selector

<p align="center">
  <img src="https://github.com/user-attachments/assets/c75065c0-6876-4dcb-a6da-7d2f12f35479" width="100%" />
</p>

### Home Page

<p align="center">
  <img src="https://github.com/user-attachments/assets/0ec560ab-d329-4e04-8e1d-c82ba4de7a26" width="100%" />
</p>


### SignIn

<p align="center">
  <img src="https://github.com/user-attachments/assets/54b918ed-2fe6-427f-b45f-8076e38b906c" width="100%" />
</p>

---

## ✨ Features

- 🎨 Visual drag-and-drop workflow editor
- 🔗 Connect nodes with an interactive flow builder
- 🤖 AI integrations (OpenAI, Anthropic, Gemini)
- 🌐 HTTP Request node
- 🚀 Manual and Trigger nodes
- 🔐 Secure credential management
- 📊 Workflow execution history
- ⚡ Real-time workflow editing
- 💾 PostgreSQL + Prisma
- 🔑 Authentication
- 📱 Responsive interface

---

## 🏗️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | Next.js, React, TypeScript |
| Styling | Tailwind CSS, shadcn/ui |
| Workflow Editor | React Flow |
| Backend | tRPC |
| Database | PostgreSQL, Prisma |
| Authentication | Better Auth |
| Validation | Zod |
| State | TanStack Query |
| Background Jobs | Inngest |

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/orbit.git
cd orbit
```

### Install dependencies

```bash
npm install
```

### Configure environment

Create a `.env` file.

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run migrations

```bash
npx prisma migrate dev
```

### Start development server

```bash
npm run dev
```

---

## 📂 Project Structure

```
src/
├── app/
├── components/
├── features/
├── server/
├── generated/
├── lib/
└── hooks/
```

---

## 🤖 Supported Nodes

- Initial
- Manual Trigger
- HTTP Request
- OpenAI
- Anthropic
- Gemini
- Discord
- Slack
- Google Forms Trigger
- Stripe Trigger

---

## 📖 Roadmap

- [ ] Conditional nodes
- [ ] Loop node
- [ ] Code node
- [ ] Webhook trigger
- [ ] Schedule trigger
- [ ] Variables
- [ ] Sub workflows

---

## 📄 License

MIT License.

---

<p align="center">
Made with ❤️ using Next.js, React Flow and Prisma.
</p>

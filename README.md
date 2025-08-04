# ADmyBRAND Insights Dashboard

A fully client-side **Next.js 14 App Router** analytics dashboard featuring:

* 🎯 **Key Metrics**: Revenue, Users, Conversions, Growth %
* 📊 **Interactive Charts**: Line, Bar, Pie (via Recharts)
* 📋 **Data Table**: sortable, filterable, responsive
* 📁 **Data Import/Export**: CSV & Excel import, CSV export
* 🌓 **Dark/Light Mode**: toggle via `next-themes`
* 🤖 **AI Chat**: ask questions about your data powered by OpenRouter
* ⚙️ **Mock Data**: dynamic or static sample data via `src/lib`

---

## 🚀 Live Demo

[https://analytics-dashboard-ai.netlify.app/](https://analytics-dashboard-ai.netlify.app)

## 📂 Repository

[https://github.com/Pritam499/ai-analytical-dashboard](https://github.com/Pritam499/ai-analytical-dashboard)

---

## 💻 Getting Started

### Prerequisites

* Node.js ≥ 18
* npm or Yarn

```bash
# Clone the repo
git clone https://github.com/Pritam499/ai-analytical-dashboard.git
cd ai-analytical-dashboard

# Install dependencies
npm install
# or
yarn
```

### Environment Variables

Create a `.env.local` in the project root and add:

```env
NEXT_PUBLIC_OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### Run Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Design & Components

* Built with **shadcn/ui** (Tailwind CSS)
* Component source in `src/components/`
* State & data logic in:

  * `src/context/DataContext.tsx`
  * `src/lib/data.ts` (mock generator)
  * `src/lib/mockData.ts` (static sample)

---

## ☁️ Deployment to Netlify

1. Push to GitHub
2. In Netlify, click **New site from Git** → select repo
3. Set **Build command** to:

```bash
npm run build
```

4. Set **Publish directory** to:

```
out
```

(or leave blank for SSR)
5\. Add environment variable in Netlify dashboard:

```text
NEXT_PUBLIC_OPENROUTER_API_KEY=your_key_here
```

6. Deploy!

---

## 🤖 AI Usage Report

**Tools**: ChatGPT (OpenAI), GitHub Copilot, Lucide icons

**Summary**:

* Scaffolding Next.js + Tailwind + shadcn/ui components
* Writing mock-data generators in `src/lib`
* Implementing AI chat via OpenRouter API
* Building charts and data table UI
* Creating deployment scripts and docs

---

## 📄 License

MIT © Your Name

😂 Tell Me a Joke

A sleek, responsive web app built with Next.js 14 and Tailwind CSS that fetches and displays random pickup lines from api.jcwyt.com/pickup. The app includes a serverless proxy to handle CORS issues, ensuring smooth client-side fetching.

🔗 Live Demo: tell-me-a-joke-drab.vercel.app
🚀 Features

    Random Pickup Lines: Fetches a new pickup line on each request.

    CORS Handling: Utilizes a serverless proxy to bypass CORS restrictions.

    Responsive Design: Mobile-first UI with Tailwind CSS.

    Interactive UI: Includes a loading animation and a "Next" button to fetch new lines.

🖼️ Preview

🛠️ Tech Stack

    Framework: Next.js 14

    Styling: Tailwind CSS

    Icons: React Icons

    Deployment: Vercel

🧑‍💻 Getting Started
Prerequisites

    Node.js (v16 or later)

    npm or yarn

Installation

    Clone the repository:
```bash
git clone https://github.com/imvishweshpatil/Tell-Me-a-Joke.git
cd Tell-Me-a-Joke
```
Install dependencies:
```bash
npm install
# or
yarn install
```
Run the development server:
```bash
    npm run dev
    # or
    yarn dev
```
    Open your browser:

    Navigate to http://localhost:3000 to view the application.

🧩 Project Structure
```bash
Tell-Me-a-Joke/
├── app/
│   ├── api/
│   │   └── pickup/
│   │       └── route.ts       # Serverless function to fetch pickup lines
│   └── page.tsx               # Main page component
├── public/
│   └── images/
│       └── screenshot.png     # Application screenshot
├── styles/
│   └── globals.css            # Global styles
├── tailwind.config.js         # Tailwind CSS configuration
├── next.config.js             # Next.js configuration
├── package.json
└── README.md
```

🧪 Testing

To test the application:

    Run the development server:
```bash
    npm run dev
```
    Open your browser:

    Navigate to http://localhost:3000.

    Interact with the app:

        Click the "Next" button to fetch a new pickup line.

        Observe the loading animation during data fetching.

📦 Deployment

The application is ready for deployment on platforms like Vercel.

Deploy with Vercel:

    Push your code to GitHub.

    Import your repository into Vercel.

    Configure the project settings if necessary.

    Deploy the application.

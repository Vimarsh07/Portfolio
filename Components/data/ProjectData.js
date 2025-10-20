/** @format */

export const Data = {
  "Customer Service-Apointment Booking Agent": {
    description: `Role-aware LLM agent (Student/Instructor/Admin) using Azure OpenAI GPT-4o + LangGraph function calling for schedule/reschedule/cancel and payouts/payments.

RAG FAQ/Policy assistant with Azure AI Search + embeddings; prompt guardrails, evaluations, and citations to reduce hallucinations.

Production backend: NestJS (TypeScript), Azure SQL (MSSQL), Stripe checkout → entitlements, RBAC, audit logs, conflict detection/slot generator.

DevOps: Docker, GitHub Actions CI/CD to Azure App Service; observability (structured logs/metrics); channels: Angular web + Twilio WhatsApp/SMS.`,
    githubLink:
      "https://github.com/Vimarsh07/Customer-Service---Appointment-Booking-Agent",
  },

  "AI Podcast Summarizer Tool":{
    description: `Developed an AI-powered Podcast Summarization Workflow using LLMs, DeepGram for transcription and speaker diarization, and RAG pipelines to automatically fetch, transcribe, and analyze podcast episodes from RSS feeds.

Implemented end-to-end automation for multi-podcast ingestion, metadata extraction (title, guest, duration, transcript), and daily synchronization with intelligent episode tracking.

Integrated AI & automation tools such as Zapier, Ghost CMS, and Typeform to enable dynamic publishing, lead capture, and real-time content workflows.`,
  
githubLink:"https://github.com/Vimarsh07/podcast-backend"

  },
  "Price & Demand Forecasting System": {
    description: `Built a comprehensive Price & Demand Forecasting System using Python, TensorFlow, and FastAPI to enhance pricing strategies and inventory management.

Implemented data preprocessing, feature engineering, and model training pipelines to predict product prices and demand with high accuracy.

Developed a user-friendly web interface with React for real-time visualization of forecasts, enabling stakeholders to make informed decisions based on predictive analytics.`,
    githubLink:
      "https://github.com/Vimarsh07/Price-and-Demand-Forecasting",
  },

  "AI Powered Invoice Matching Tool":{
    description:`AI-powered cash application service for matching bank transactions to invoices.

CashSage is a lightweight, TypeScript-based backend service that ingests bank transactions, matches them to static invoices using a combination of deterministic rules and a Large Language Model (LLM), and stores all data in Supabase. Queueing with BullMQ ensures the matching process runs asynchronously, giving your frontend instant feedback while heavy LLM work happens in the background.`,
    githubLink:"https://github.com/Vimarsh07/CashSage"
  },


  "LLM-Doc-Intel-Assistant": {
    description: `Built an end-to-end pipeline that ingests PDFs, DOCX and text, splits them into semantic chunks, and orchestrates retrieval & summarization agents—all via LangChain’s modular framework.
    Leveraged sentence-transformers + ChromaDB PersistentClient for CPU-or GPU-flexible embeddings and sub-second, RAG-powered similarity searches across both unstructured documents and structured data.`,
    githubLink: "https://github.com/Vimarsh07/LLM-Doc-Intel-Assistant",
  },

  "NLP-Based Sentiment Analysis Platform ": {
    description: `
    Develop a comprehensive sentiment analysis platform to process and analyze large datasets of textual content, enabling accurate sentiment classification.
    Employed Python and libraries such as NLTK, TensorFlow, and Keras to develop the platform. Applied NLP techniques like tokenization, stemming, and lemmatization to preprocess text data and implemented machine learning models for sentiment analysis. `,
    githubLink:
      "https://github.com/Vimarsh07/-Sentiment-Classification-using-IMDB-Data",
  },

  "Stock Analysis using Transformer": {
    description: `Leveraged advanced transformer models with HuggingFace and PyTorch in Python to forecast stock trends. This project involved preprocessing and transforming large-scale financial datasets, fine-tuning transformer architectures to capture intricate temporal patterns, and implementing forecasting algorithms that boosted prediction accuracy by 15%. The insights provided helped guide timely and strategic investment decisions by highlighting emerging market trends.
      `,
    githubLink: "https://github.com/Vimarsh07/Financial-Forecasting",
  },

  "Customer Churn Prediction": {
    description: `Designed and developed a robust classification model using Python, pandas, and scikit-learn to predict customer churn. The project included extensive exploratory data analysis, feature engineering, and model tuning to accurately identify at-risk customers. By enabling proactive retention strategies, the solution effectively reduced churn rates by 20% and supported improved customer lifecycle management.
      `,
    githubLink: "https://github.com/Vimarsh07/Churn-Prediction-Model",
  },

  "MindSutra (Mental Health Chatbot)": {
    description: `A chatbot for empathetic mental health support using fine-tuned Llama models, prompt engineering and RAG.`,
    githubLink: "https://github.com/Vimarsh07/MindSutra.git",
  },

  
};

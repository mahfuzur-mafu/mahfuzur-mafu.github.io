/* =========================================================
   Content data
   ========================================================= */

const socialLinks = [
  { href: "https://github.com/mahfuzur-mafu", label: "GitHub", icon: "github" },
  { href: "https://www.linkedin.com/in/mahfuzurmafu/", label: "LinkedIn", icon: "linkedin" },
  { href: "https://scholar.google.com/citations?hl=en&authuser=7&user=TaBes-sAAAAJ", label: "Google Scholar", icon: "scholar" },
  { href: "mailto:mahfuzurmafu@gmail.com", label: "Email", icon: "mail" }
];

const experience = [
  {
    title: "ML / LLM Engineer",
    org: "RAIN",
    logo: "assets/logo-rain.png",
    duration: "Oct 2026 — Present (full-time)",
    meta: "Helsinki, Uusimaa, Finland · Remote"
  },
  {
    title: "Teaching Assistant",
    org: "University of Helsinki",
    logo: "assets/logo-helsinki.jpg",
    duration: "Sep 2026 — Oct 2026 (part-time,contract)",
    meta: "Data Science Study Skills · Autumn 2026",
    bullets: [
      " Supporting students with course assignments, academic writing, and study related tasks."
    ]
  },
  {
    title: "Research Assistant Trainee & Master's Thesis Student",
    org: "University of Helsinki",
    logo: "assets/logo-helsinki.jpg",
    duration: "Nov 2025 — June 2026",
    meta: "Complex Systems Computation (CoSCo) Group · Generation AI Project",
    bullets: [
      "Work in the Complex Systems Computation (CoSCo) Group as part of the Generation AI project, focusing on analyzing language model behavior, training data influence, and attribution research.",
      "Build and maintain end-to-end pipelines for text preprocessing, chunking, embedding generation, and vector database based semantic retrieval.",
      "Design and run controlled experiments using Hugging Face and local language models to study dataset influence, next-token prediction behavior, and how retrieved context changes model outputs.",
      "Implement retrieval-augmented generation style prototypes and benchmark both computational performance and qualitative output differences.",
      "Log and analyze detailed computation metrics such as embedding time, retrieval latency, and generation latency to support reproducible research experiments.",
      "Develop a prototype ML system with a backend processing pipeline and a lightweight frontend web interface to demonstrate and visualize results for research and educational use.",
      "Contribute to making AI systems more transparent and explainable, including building tools aimed at improving AI literacy and understanding of data-driven model behavior."
    ]
  },
  {
    title: "Teaching Assistant",
    org: "Daffodil International University",
    logo: "assets/logo-daffodil.jpg",
    duration: "Sep 2020 — Apr 2021",
    meta: "",
    desc: "Assisted in teaching Software Project I (CSE136) and Software Project II (CSE216), providing academic support to students across two semesters. Responsibilities included guiding project phases, clarifying course materials, and evaluating assignments."
  }
];

const skills = [
  { title: "Programming Languages", items: ["Python", "JavaScript", "HTML/CSS", "SQL", "C/C++", "Java"] },
  { title: "Machine Learning & AI", items: ["Scikit-learn", "PyTorch", "TensorFlow", "Keras", "OpenCV", "LangChain", "Hugging Face", "Model Evaluation"] },
  { title: "Data Processing", items: ["Pandas", "NumPy", "Spark", "SciPy", "Time Series Forecasting", "EDA", "Data Cleaning", "Vector DBs & Embeddings", "Data Wrangling", "Azure Data Lake", "Feature Engineering"] },
  { title: "Visualization & BI Tools", items: ["Power BI", "Tableau", "Plotly", "Matplotlib", "Seaborn", "Streamlit", "Git", "GitHub", "Kaggle API"] }
];

/* Tech-stack badge metadata: real brand icon (via Simple Icons CDN) plus a
   short fallback initials in case a particular icon slug isn't available.
   Skills without their own product/brand (pure concepts, or techniques)
   borrow the closest parent tool's logo, noted in comments below. */
const ICON_BASE = "https://cdn.simpleicons.org";
const techMeta = {
  "Python": { slug: "python", fallback: "Py" },
  "JavaScript": { slug: "javascript", fallback: "JS" },
  "HTML/CSS": { slug: "html5", fallback: "</>" },
  "SQL": { slug: "mysql", fallback: "SQL" },              // parent: MySQL (most common RDBMS)
  "C/C++": { slug: "cplusplus", fallback: "C++" },
  "Java": { slug: "openjdk", fallback: "Ja" },

  "Scikit-learn": { slug: "scikitlearn", fallback: "skl" },
  "PyTorch": { slug: "pytorch", fallback: "PT" },
  "TensorFlow": { slug: "tensorflow", fallback: "TF" },
  "Keras": { slug: "keras", fallback: "Ks" },
  "OpenCV": { slug: "opencv", fallback: "CV" },
  "LangChain": { slug: "langchain", fallback: "LC" },
  "Hugging Face": { slug: "huggingface", fallback: "🤗" },
  "Model Evaluation": { slug: "scikitlearn", fallback: "Ev" },   // parent: scikit-learn (metrics module)

  "Pandas": { slug: "pandas", fallback: "Pd" },
  "NumPy": { slug: "numpy", fallback: "Np" },
  "Spark": { slug: "apachespark", fallback: "Sp" },
  "SciPy": { slug: "scipy", fallback: "Sc" },
  "Time Series Forecasting": { slug: "pandas", fallback: "TS" },   // parent: pandas
  "EDA": { slug: "jupyter", fallback: "EDA" },                     // parent: Jupyter notebooks
  "Data Cleaning": { slug: "pandas", fallback: "DC" },             // parent: pandas
  "Vector DBs & Embeddings": { slug: "huggingface", fallback: "Vec" }, // parent: Hugging Face embeddings
  "Data Wrangling": { slug: "pandas", fallback: "DW" },            // parent: pandas
  "Azure Data Lake": { slug: "microsoftazure", fallback: "Az" },
  "Feature Engineering": { slug: "scikitlearn", fallback: "FE" },  // parent: scikit-learn

  "Power BI": { slug: "powerbi", fallback: "BI" },
  "Tableau": { slug: "tableau", fallback: "Tb" },
  "Plotly": { slug: "plotly", fallback: "Pl" },
  "Matplotlib": { slug: "matplotlib", fallback: "Mpl" },
  "Seaborn": { slug: "matplotlib", fallback: "Sb" },   // parent: Matplotlib (Seaborn is built on it)
  "Streamlit": { slug: "streamlit", fallback: "St" },
  "Git": { slug: "git", fallback: "Git" },
  "GitHub": { slug: "github", fallback: "Gh" },
  "Kaggle API": { slug: "kaggle", fallback: "Kg" }
};

const filterLabels = {
  all: "All",
  "data-cleaning": "Data Cleaning",
  eda: "EDA",
  ts: "Time Series",
  "ml-model": "ML Models",
  ai: "AI",
  dl: "Deep Learning",
  hci: "HCI",
  de: "Data Engineering",
  swe: "Software Engineering"
};

const projects = [
  {
    title: "Radioactivity Measurement Anomaly Detection",
    category: "ml-model",
    desc: "An automated anomaly detection system built for STUK (the Radiation and Nuclear Safety Authority of Finland), which collects tens of thousands of environmental samples each year (fish, soil, water, milk, and more) and manually enters radioactivity measurements into a database.",
    tech: "Python · Hugging Face Datasets · Sentence Transformers · NumPy · Node.js · Express",
    github: "https://github.com/mahfuzur-mafu/radioactivity-measurement-anomaly-detection"
  },
  {
    title: "Semantic Text Retrieval System",
    category: "ml-model",
    desc: "End-to-end semantic retrieval pipeline that loads Hugging Face datasets, chunks text, generates sentence embeddings, and retrieves the most relevant chunks using Euclidean distance and cosine similarity. Includes a lightweight web interface for prompt-based search.",
    tech: "Python · Hugging Face Datasets · Sentence Transformers · NumPy · Node.js · Express",
    github: "https://github.com/mahfuzur-mafu/semantic-text-retrieval-system"
  },
  {
    title: "Atmospheric CO₂ Shift Detection & Forecast",
    category: "ts",
    desc: "Predictive modeling of 67 years of atmospheric CO₂ using regime-shift detection (STL + PELT) and ensemble forecasting (ARIMA, SARIMA, Holt-Winters, RF, ANN, LSTM), evaluated with in-sample, out-of-sample, and prequential rolling forecasts.",
    tech: "Python · pandas · statsmodels · scikit-learn · TensorFlow/Keras · ruptures",
    github: "https://github.com/mahfuzur-mafu/atmosphericCO2-shiftdetection-forecast"
  },
  {
    title: "Sentiment Analysis — Text to Emotions",
    category: "ml-model",
    desc: "Interactive sentiment analysis web app that analyzes text polarity and subjectivity using TextBlob, classifying input as positive, negative, or neutral and visualizing sentiment strength with progress bars.",
    tech: "Python · Streamlit · TextBlob · NLP",
    github: "https://github.com/mahfuzur-mafu/sentiment-analysis-mapping-text2emotions"
  },
  {
    title: "Financial Fraud Detection Analysis",
    category: "ml-model",
    desc: "A machine learning project to identify fraudulent financial transactions from behavioral patterns in transaction data, with a Streamlit app that returns instant fraud predictions from user-entered transaction details.",
    tech: "Python · Pandas · scikit-learn · joblib · Streamlit",
    github: "https://github.com/mahfuzur-mafu/Financial-Fraud-Detection-Analysis"
  },
  {
    title: "Customer Segmentation Using ML Clustering",
    category: "ml-model",
    desc: "Customer segmentation using unsupervised clustering (KMeans) on demographic and behavioral attributes, helping tailor marketing strategy and optimize resource allocation.",
    tech: "Python · pandas · scikit-learn · Streamlit",
    github: "https://github.com/mahfuzur-mafu/Customer-Segmentation-Using-ML-Clustering"
  },
  {
    title: "Customer Churn Prediction",
    category: "ml-model",
    desc: "Predicts customer churn from usage and account data to help identify customers likely to leave, enabling proactive retention efforts.",
    tech: "Python · Pandas · NumPy · Streamlit",
    github: "https://github.com/mahfuzur-mafu/customer-churn-prediction"
  },
  {
    title: "Car Price Range Estimation App",
    category: "ml-model",
    desc: "Estimates a suitable car price range for a customer based on financial inputs such as age, salary, and net worth.",
    tech: "Pandas · NumPy · Streamlit · scikit-learn",
    github: "https://github.com/mahfuzur-mafu/car-price-estimator"
  },
  {
    title: "Real Estate Price Prediction",
    category: "ml-model",
    desc: "Analyzes real estate data and builds predictive insights on house prices from features such as size, bedroom count, and other key attributes.",
    tech: "Pandas · NumPy · Streamlit · scikit-learn",
    github: "https://github.com/mahfuzur-mafu/Real-Estate-Price-Prediction"
  },
  {
    title: "Crops Image Recognition",
    category: "dl",
    desc: "Deep learning image classifier for agricultural crops, using ResNet50 as a pretrained feature extractor with a custom classification head for 30 crop types, plus a Streamlit app for live predictions.",
    tech: "Python · TensorFlow/Keras · ResNet50 · Streamlit",
    github: "https://github.com/mahfuzur-mafu/crops-image-recognition"
  },
  {
    title: "Interactive Data Visualization",
    category: "eda",
    desc: "An interactive Streamlit + Plotly dashboard visualizing global trends in air pollution deaths through dynamic charts, maps, and key metrics, studying how well the prototype supports exploration.",
    tech: "Python · Plotly · Streamlit · Pandas",
    github: "https://github.com/mahfuzur-mafu/Interactive-Data-Visualization"
  },
  {
    title: "Fake News Detection",
    category: "ml-model",
    desc: "Built an ML model achieving 99.5% accuracy using Decision Tree and Random Forest algorithms to classify news articles as fake or real.",
    tech: "Python · pandas · scikit-learn · Hadoop · Spark",
    github: "https://github.com/mahfuzur-mafu/Fake-News-Detection"
  },
  {
    title: "Face Mask Detection System",
    category: "ml-model",
    desc: "Real-time face mask detection system achieving 99% accuracy using classical computer vision techniques.",
    tech: "Python · NumPy · pandas · OpenCV",
    github: "https://github.com/mahfuzur-mafu/Face-Mask-Detection"
  },
  {
    title: "Credit Card Approval Prediction",
    category: "ml-model",
    desc: "Predicts credit card approval outcomes by building and evaluating several classification models to identify the best-performing approach.",
    tech: "Pandas · NumPy · scikit-learn · Seaborn",
    github: "https://github.com/mahfuzur-mafu/Credit-Card-Approval-Predictor"
  },
  {
    title: "Netflix Data Cleaning Project",
    category: "data-cleaning",
    desc: "Data cleaning and preprocessing pipeline for the Netflix titles dataset — handling missing values, duplicates, and inconsistent formatting to prepare it for downstream analysis.",
    tech: "Python · pandas · NumPy",
    github: "https://github.com/mahfuzur-mafu/NetflixData_data_cleaning"
  },
  {
    title: "Deep Learning With PyTorch",
    category: "dl",
    desc: "A repository exploring the fundamental building blocks of PyTorch as a deep learning framework, from tensors to training loops.",
    tech: "PyTorch · NumPy · Matplotlib",
    github: "https://github.com/mahfuzur-mafu/Deep-Learning-With-PyTorch"
  },
  {
    title: "Airbnb Data Cleaning Project",
    category: "data-cleaning",
    desc: "Data cleaning and preprocessing pipeline for an Airbnb listings dataset — handling missing values, duplicates, and inconsistent formatting to prepare it for downstream analysis.",
    tech: "Python · pandas · NumPy",
    github: "https://github.com/mahfuzur-mafu/AirbnbData_data_cleaning"
  },
  {
    title: "Walmart Sales Data Analysis using SQL",
    category: "eda",
    desc: "End-to-end analysis of Walmart sales data using Python and SQL to extract business insights, aimed at strengthening data manipulation and querying skills.",
    tech: "Python · pandas · NumPy · PostgreSQL",
    github: "https://github.com/mahfuzur-mafu/Walmart-Sales-Data-Analysis-using-SQL"
  },
  {
    title: "Online Course Platform",
    category: "swe",
    desc: "A web application connecting instructors and students — instructors create and manage courses while students browse, enroll, and interact with course content.",
    tech: "PHP · HTML · CSS · JavaScript · MySQL",
    github: "https://github.com/mahfuzur-mafu/online_course_platform_E-CourseV1.1"
  },
  {
    title: "Money Expense Manager",
    category: "swe",
    desc: "A CRUD application for tracking personal income and expenses — add, update, view, and delete transactions.",
    tech: "Dart · Flutter · Hive",
    github: "https://github.com/mahfuzur-mafu/Money-Manager-v1.0.0"
  },
  {
    title: "Todo App — Spring Boot",
    category: "swe",
    desc: "A simple CRUD to-do application built with Spring Boot and Spring JDBC.",
    tech: "Java · Spring Boot · Spring JDBC · Thymeleaf",
    github: "https://github.com/mahfuzur-mafu/todo-app-springboot-v1.2"
  },
  {
    title: "JavaQz v1.0",
    category: "swe",
    desc: "A web application for taking Java quizzes online and self-verifying knowledge, useful as a mock test before an exam.",
    tech: "Java · Spring Boot · Spring Data JPA · Thymeleaf",
    github: "https://github.com/mahfuzur-mafu/JavaQz-v1.0"
  },
  {
    title: "STC-Assist v1.7",
    category: "swe",
    desc: "An application to manage organization information, events, and member logins, with role-based access starting from an admin login.",
    tech: "Java · JSwing · JDBC",
    github: "https://github.com/mahfuzur-mafu/STC-Assist-v1.7"
  },
  {
    title: "Snake Game v0.9",
    category: "swe",
    desc: "A desktop Snake game built as a JavaFX application.",
    tech: "Java · JavaFX",
    github: "https://github.com/mahfuzur-mafu/Snake-Game-v-0.9"
  },
  {
    title: "Adventure Works Data Engineering Project",
    category: "de",
    desc: "An end-to-end data engineering pipeline built on Azure, ingesting and modeling the Adventure Works dataset into a cloud data lake for analytics.",
    tech: "Azure · Data Lake",
    github: "https://github.com/mahfuzur-mafu/Adventure-Works-Data-Engineering-Project"
  },
  {
    title: "Uber Data Engineering Project",
    category: "de",
    desc: "A data engineering pipeline for Uber trip data using Mage on Google Cloud Platform, covering ingestion, transformation, and orchestration.",
    tech: "GCP · Mage",
    github: "https://github.com/mahfuzur-mafu/Uber-data_Data-Engineering-Project"
  },
  {
    title: "LLM App with Streamlit",
    category: "ai",
    desc: "A Streamlit application wrapping an OpenAI LLM with LangChain, providing an interactive interface for experimenting with prompts and responses.",
    tech: "LangChain · OpenAI · Streamlit",
    github: "https://github.com/mahfuzur-mafu/LLM-model-with-streamlit-"
  },
  {
    title: "Time Series Data Forecasting",
    category: "ts",
    desc: "Forecasting workflows comparing classical statistical models for trend and seasonality analysis on time series data.",
    tech: "Pandas · statsmodels · pmdarima · Matplotlib",
    github: "https://github.com/mahfuzur-mafu/Time-Series-Forecasting"
  },
  {
    title: "Eco Scan — HCI Project",
    category: "hci",
    desc: "An HCI-focused app prototype exploring how everyday users can scan and understand the environmental footprint of products.",
    tech: "App Prototype",
    github: "https://github.com/mahfuzur-mafu/Eco_Scan_HCI_Project"
  }
];

const hackathons = [
  {
    title: "Junction 2024 — Sustainable Space Data (Aalto University)",
    sub: "Transforming space data into urban sustainability solutions",
    desc: "Our project transforms satellite data into actionable insights for urban planners to target emissions, expand green spaces, and cool down cities — empowering data-driven decisions for a more sustainable urban future.",
    link: "https://eu.junctionplatform.com/projects/junction-2024/view/672e6f7e6afb9482214df271"
  }
];

const publications = [
  {
    title: "A novel approach to analyzing the impact of AI, ChatGPT, and chatbot on education using machine learning algorithms",
    sub: "Bulletin of Electrical Engineering and Informatics",
    desc: "Examines how AI tools such as ChatGPT influence academic work and research support, using machine learning algorithms to analyze their impact on the education sector.",
    link: "https://beei.org/index.php/EEI/article/view/7158"
  }
];

const education = [
  {
    degree: "M.Sc. in Data Science",
    org: "University of Helsinki, Finland",
    logo: "assets/logo-helsinki.jpg",
    lines: ["Expected Graduation: July 2026", "GPA: 4.32 / 5"],
    highlight: "Awarded prestigious scholarship (2.4% acceptance rate)"
  },
  {
    degree: "B.Sc. in Computer Science and Engineering",
    org: "Daffodil International University, Bangladesh",
    logo: "assets/logo-daffodil.jpg",
    lines: ["GPA: 3.81 / 4.00", "Graduated: March 2024"]
  }
];

/* =========================================================
   Icons (inline SVG, stroke-based to match the console aesthetic)
   ========================================================= */
const icons = {
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-3.7c0-1.6 1-2.8 2.5-2.8s2.5 1.1 2.5 2.8v3.7M12 12.8v3.7"/></svg>`,
  scholar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 2 9l10 6 10-6z"/><path d="M6 11.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 14a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1 1"/><path d="M14 10a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1-1"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z"/></svg>`
};

/* =========================================================
   Render helpers
   ========================================================= */
const el = (tag, cls, html) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (html !== undefined) node.innerHTML = html;
  return node;
};

function renderSocials() {
  const wrap = document.getElementById("social-links");
  socialLinks.forEach(s => {
    const a = el("a", "", `${icons[s.icon]}<span>${s.label}</span>`);
    a.href = s.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", s.label);
    wrap.appendChild(a);
  });
}

function renderExperience() {
  const wrap = document.getElementById("experience-list");
  experience.forEach(item => {
    const div = el("div", "exp-item");
    const logo = item.logo
      ? `<img class="org-logo" src="${item.logo}" alt="${item.org} logo" loading="lazy" onerror="this.style.display='none';">`
      : "";
    div.innerHTML = `
      <div class="exp-head">
        ${logo}
        <div>
          <h3>${item.title}</h3>
          <span class="exp-meta">${item.org}${item.duration ? " · <span>" + item.duration + "</span>" : ""}${item.meta ? " · " + item.meta : ""}</span>
        </div>
      </div>
      ${item.bullets ? `<ul class="exp-bullets">${item.bullets.map(b => `<li>${b}</li>`).join("")}</ul>` : item.desc ? `<p class="exp-desc">${item.desc}</p>` : ""}
    `;
    wrap.appendChild(div);
  });
}

function renderSkills() {
  const wrap = document.getElementById("skills-grid");
  skills.forEach(cat => {
    const div = el("div", "skill-card");
    const badges = cat.items.map(name => {
      const meta = techMeta[name] || { slug: "", fallback: name.slice(0, 2) };
      const iconUrl = meta.slug ? `${ICON_BASE}/${meta.slug}` : "";
      return `
        <div class="tech-card" tabindex="0">
          <span class="tech-badge">
            ${iconUrl ? `<img src="${iconUrl}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">` : ""}
            <span class="tech-fallback"${iconUrl ? "" : ' style="display:flex;"'}>${meta.fallback}</span>
          </span>
          <span class="tech-label">${name}</span>
        </div>`;
    }).join("");
    div.innerHTML = `<h3>${cat.title}</h3><div class="tech-grid">${badges}</div>`;
    wrap.appendChild(div);
  });
}

function renderFilters() {
  const wrap = document.getElementById("filter-row");
  const cats = ["all", ...new Set(projects.map(p => p.category))];
  cats.forEach((cat, i) => {
    const btn = el("button", "filter-btn" + (i === 0 ? " active" : ""), filterLabels[cat] || cat);
    btn.dataset.filter = cat;
    wrap.appendChild(btn);
  });
}

function renderProjects() {
  const wrap = document.getElementById("project-grid");
  projects.forEach(p => {
    const card = el("div", "project-card show");
    card.dataset.category = p.category;
    card.innerHTML = `
      <span class="project-cat">${filterLabels[p.category] || p.category}</span>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-tech">${p.tech}</div>
      <div class="project-links">
        <a href="${p.github}" target="_blank" rel="noopener">${icons.github} GitHub</a>
      </div>
    `;
    wrap.appendChild(card);
  });

  document.getElementById("filter-row").addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filterValue = btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.classList.toggle("show", filterValue === "all" || card.dataset.category === filterValue);
    });
  });
}

function renderHackathons() {
  const wrap = document.getElementById("hackathon-list");
  hackathons.forEach(h => {
    const div = el("div", "info-card");
    div.innerHTML = `
      <h3>${h.title}</h3>
      <span class="sub">${h.sub}</span>
      <p>${h.desc}</p>
      <div class="project-links"><a href="${h.link}" target="_blank" rel="noopener">${icons.link} View project</a></div>
    `;
    wrap.appendChild(div);
  });
}

function renderPublications() {
  const wrap = document.getElementById("publication-list");
  publications.forEach(p => {
    const div = el("div", "info-card");
    div.innerHTML = `
      <h3>${p.title}</h3>
      <span class="sub">${p.sub}</span>
      <p>${p.desc}</p>
      <div class="project-links"><a href="${p.link}" target="_blank" rel="noopener">${icons.link} Read paper</a></div>
    `;
    wrap.appendChild(div);
  });
}

function renderEducation() {
  const wrap = document.getElementById("education-grid");
  education.forEach(e => {
    const div = el("div", "edu-card");
    const logo = e.logo
      ? `<img class="org-logo" src="${e.logo}" alt="${e.org} logo" loading="lazy" onerror="this.style.display='none';">`
      : "";
    div.innerHTML = `
      <div class="edu-head">
        ${logo}
        <div>
          <h3>${e.degree}</h3>
          <div class="org">${e.org}</div>
        </div>
      </div>
      ${e.lines.map(l => `<span class="edu-meta">${l}</span>`).join("")}
      ${e.highlight ? `<span class="edu-meta highlight">${e.highlight}</span>` : ""}
    `;
    wrap.appendChild(div);
  });
}

/* =========================================================
   Hero terminal typewriter
   ========================================================= */
function typeTerminal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lines = [
    { prompt: "whoami", out: "<strong>Md Mahfuzur Rahman</strong>" },
    { prompt: "role", out: "M.Sc. in <strong>Data Science</strong> from the <strong>University of Helsinki</strong> with research and engineering experience in <strong>Large Language Models (LLMs)</strong>, <strong>Embedding-Based Retrieval</strong>, <strong>Semantic Search</strong>, <strong>Vector Databases</strong>, and <strong>Explainable AI (XAI)</strong>. Experienced in building <strong>end-to-end NLP pipelines</strong>, <strong>scalable retrieval systems</strong>, and <strong>machine learning solutions</strong>." },
    { prompt: "status --current", out: "Open to <strong>AI</strong>, <strong>Machine Learning</strong>, <strong>Data Science</strong>, and <strong>Research</strong> opportunities." }
  ];
  const body = document.getElementById("terminal-body");
  const terminalEl = document.querySelector(".terminal");

  function renderStatic() {
    body.innerHTML = lines.map(l => `
      <div class="terminal-line"><span class="prompt">$</span><span>${l.prompt}</span></div>
      <div class="terminal-line out">${l.out}</div>
    `).join("") + `<div class="terminal-line"><span class="prompt">$</span><span class="typed-cursor"></span></div>`;
  }

  if (reduceMotion) { renderStatic(); return; }

  let isPaused = false;
  let timers = [];
  const clearTimers = () => { timers.forEach(t => clearTimeout(t)); timers = []; };

  function typeLoop() {
    body.innerHTML = "";
    let li = 0;

    function typeLine() {
      if (isPaused) return;
      if (li >= lines.length) {
        const finalLine = el("div", "terminal-line");
        finalLine.innerHTML = `<span class="prompt">$</span><span class="typed-cursor"></span>`;
        body.appendChild(finalLine);
        timers.push(setTimeout(() => { if (!isPaused) typeLoop(); }, 3200));
        return;
      }
      const line = lines[li];
      const promptDiv = el("div", "terminal-line");
      const promptSpan = el("span", "prompt", "$");
      const textSpan = el("span", "", "");
      promptDiv.appendChild(promptSpan);
      promptDiv.appendChild(textSpan);
      body.appendChild(promptDiv);

      let ci = 0;
      const text = line.prompt;
      const iv = setInterval(() => {
        if (isPaused) { clearInterval(iv); return; }
        textSpan.textContent = text.slice(0, ci + 1);
        ci++;
        if (ci >= text.length) {
          clearInterval(iv);
          const outDiv = el("div", "terminal-line out", line.out);
          body.appendChild(outDiv);
          li++;
          timers.push(setTimeout(typeLine, 220));
        }
      }, 32);
    }
    typeLine();
  }

  function pause() {
    if (isPaused) return;
    isPaused = true;
    clearTimers();
    renderStatic();
  }
  function resume() {
    if (!isPaused) return;
    isPaused = false;
    typeLoop();
  }

  typeLoop();

  if (terminalEl) {
    terminalEl.addEventListener("mouseenter", pause);
    terminalEl.addEventListener("mouseleave", resume);
    terminalEl.addEventListener("touchstart", pause, { passive: true });
    document.addEventListener("touchstart", e => {
      if (isPaused && !terminalEl.contains(e.target)) resume();
    }, { passive: true });
  }
}

/* =========================================================
   Scroll reveal + mobile nav
   ========================================================= */
function initReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach(t => t.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => io.observe(t));
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
}

/* =========================================================
   Theme toggle (dark / light)
   ========================================================= */
function getStoredTheme() {
  try { return localStorage.getItem("theme"); } catch (e) { return null; }
}
function storeTheme(value) {
  try { localStorage.setItem("theme", value); } catch (e) { /* ignore, e.g. sandboxed preview */ }
}

function initTheme() {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    btn.innerHTML = theme === "light" ? icons.moon : icons.sun;
    btn.setAttribute("aria-label", theme === "light" ? "Switch to dark mode" : "Switch to light mode");
  }

  // theme was already set pre-paint by the inline head script; just sync the icon
  apply(root.getAttribute("data-theme") || "dark");

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    apply(next);
    storeTheme(next);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSocials();
  renderExperience();
  renderSkills();
  renderFilters();
  renderProjects();
  renderHackathons();
  renderPublications();
  renderEducation();
  typeTerminal();
  initReveal();
  initMobileNav();
  initTheme();
  initCursorGlow();
});

/* =========================================================
   Cursor-following ambient glow (desktop, motion-ok only)
   ========================================================= */
function initCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow) return;

  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canHover || reduceMotion) { glow.style.display = "none"; return; }

  let raf = null;
  window.addEventListener("pointermove", e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      glow.style.setProperty("--x", e.clientX + "px");
      glow.style.setProperty("--y", e.clientY + "px");
      raf = null;
    });
  }, { passive: true });
}

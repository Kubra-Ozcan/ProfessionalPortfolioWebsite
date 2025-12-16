import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram, 
  Youtube, 
  BookOpen, 
  Database, 
  Brain, 
  Code2, 
  Terminal, 
  Eye, 
  LineChart, 
  Monitor, 
  Zap,
  Server
} from 'lucide-react';
import { ProjectCategory, SocialLink, ProjectItem } from './types';

// Use relative path string for image. 
// Since HashRouter is used, "./image.png" works relative to the index.html location.
const profilePic = "image.png";

// Social Links are shared across languages
export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", platform: "LinkedIn", url: "https://www.linkedin.com/in/kubra-ozcan/", icon: Linkedin, color: "hover:text-blue-500" },
  { name: "GitHub", platform: "GitHub", url: "https://github.com/Kubra-Ozcan", icon: Github, color: "hover:text-gray-400" },
  { name: "Medium", platform: "Medium", url: "https://medium.com/@kubra.ozcan_98680", icon: BookOpen, color: "hover:text-white" },
  { name: "Email", platform: "Email", url: `mailto:kubraozcan.business@gmail.com`, icon: Mail, color: "hover:text-orange-400" },
  { name: "Instagram", platform: "Instagram", url: "https://www.instagram.com/kubra.ann/", icon: Instagram, color: "hover:text-pink-500" },
  { name: "YouTube", platform: "YouTube", url: "https://www.youtube.com/@Spannungsbogen1", icon: Youtube, color: "hover:text-red-600" }
];

/* ---------------- ENGLISH DATA ---------------- */

const PERSONAL_INFO_EN = {
  name: "Kübra ÖZCAN",
  title: "DATA SCIENTIST / AI & COMPUTER ENGINEER",
  email: "kubraozcan.business@gmail.com",
  phone: "Phone number available upon request",
  location: "TÜRKİYE",
  gender: "Female",
  dob: "26/06/1999",
  nationality: "Turkish",
  profileImage: profilePic,
  about: `I graduated in January 2025 from Hasan Kalyoncu University with a Bachelor's degree in Computer Engineering (English, full scholarship). Throughout my academic journey, I gained extensive hands-on experience through both domestic and international internships, research projects, and academic–industry collaborations, especially in the fields of data science, artificial intelligence, and software development.

In the summer of 2023, I completed my long-term internship at Sanko Holding, one of the largest companies in the Southeast Anatolia Region. Here, I actively worked on ERP systems such as C#, .NET, C# Windows Forms, and SAP/ABAP. During this internship, I took part in production-ready projects, contributed directly to code development, and collaborated with cross-functional teams in real enterprise environments.

During my final year, I was awarded an Erasmus+ scholarship and completed a 4-month international internship at the University of Ljubljana, Faculty of Computer Science and Informatics, where I worked in a Computer Vision Laboratory. In this role, I contributed to computer vision research, dataset preparation, model experimentation, and various Python-based CV pipelines, strengthening my expertise in deep learning and image-processing technologies.

My main technical interests include machine learning, deep learning, computer vision, data analysis, and data manipulation. I have worked extensively on data cleaning, feature engineering, and modeling using techniques such as XGBoost, Random Forest, segmentation models, Bayesian approaches, Decision Trees, and ensemble learning. My project experience includes Python-based data science workflows, where I frequently use libraries such as Scikit-learn, Pandas, NumPy, Selenium, TensorFlow, and Keras. I have also developed end-to-end computer vision applications using OpenCV, MediaPipe, and custom datasets.

I gained exposure to MLOps by building data access pipelines, modeling workflows, and automated processes using tools like JAX, ACL, and API integrations. Additionally, I have strong experience with SQL for data extraction, transformation, and analysis. To present analytical insights effectively, I use Tableau, Power BI, Matplotlib, and Seaborn for clear and impactful visualizations.

Beyond technical work, I have always been an active part of university communities. Throughout my studies, I took on leadership and member roles in several student clubs, including theatre, software communities, and Google Developer Groups (GDG). I also participated in multiple volunteer initiatives, contributing to campus life and community-based projects.

One of my proudest achievements is being selected as one of 2,000 data science scholars among thousands of applicants for the Google Artificial Intelligence and Technology Academy. Through this program, I continue to receive advanced technical training, build AI and data science projects, participate in datathons, and consistently strengthen my expertise.

My strongest motivation lies in uncovering insights from complex data, building intelligent systems, and contributing to decision-support processes that create meaningful real-world impact.`,
  resumeUrl: "#"
};

const TYPEWRITER_TEXTS_EN = [
  "I am AI Engineer",
  "I am Computer Engineer",
  "I am Machine Learning Engineer",
  "I am Software Engineer"
];

const SKILLS_DATA_EN = [
  {
    category: "AI & Machine Learning",
    gradient: "from-purple-500 to-pink-500",
    icon: Brain,
    skills: ["TensorFlow", "Keras", "Scikit-learn", "XGBoost", "OpenCV", "MediaPipe", "YOLO", "Deep Learning", "NLP"]
  },
  {
    category: "Data Science",
    gradient: "from-orange-400 to-red-500",
    icon: Database,
    skills: ["Python", "Pandas", "NumPy", "SQL", "Data Analysis", "Feature Engineering", "Tableau", "Power BI", "Matplotlib"]
  },
  {
    category: "Software Development",
    gradient: "from-blue-400 to-cyan-500",
    icon: Code2,
    skills: ["C#", ".NET", "SAP", "ABAP", "ERP", "Python", "SQL", "Git", "Docker", "REST APIs", "OOP", "Software Architecture", "Agile", "Jira"]
  },
  {
    category: "Other",
    gradient: "from-green-400 to-emerald-500",
    icon: Terminal,
    skills: ["Linux", "Bash", "VS Code", "Research", "Technical Writing", "Public Speaking", "Leadership", "Project Management", "Teamwork"]
  }
];

const PROJECT_CATEGORIES_EN: ProjectCategory[] = [
  {
    id: "data-analyze-ml",
    title: "Data Analyze & ML",
    count: 12,
    description: "In-depth data analysis, predictive modeling, and machine learning solutions.",
    gradient: "from-orange-400 to-red-500",
    icon: LineChart,
    emoji: "📊",
    path: "/projects/data-analyze-ml",
    projects: [
      {
        id: 403,
        title: "Emotional / Sentiment Analysis",
        description: "I built an NLP-powered sentiment analysis model that classifies text into positive, negative, or neutral categories using TF-IDF and word embeddings. The project analyzes and interprets emotional tones across textual data.",
        tags: ["NLP", "Machine Learning", "Python"],
        imageUrl: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "TF-IDF", "NLP", "Scikit-learn"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Emotional-Analysis"
      },
      {
        id: 409,
        title: "Renting Price Prediction",
        description: "Developed a machine learning model to predict rental prices using regression algorithms, feature engineering, and data preprocessing techniques. The model demonstrates high performance in estimating rental values.",
        tags: ["Machine Learning", "Regression", "Prediction"],
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "Scikit-learn", "Pandas"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/RentingPricePrediction"
      },
      {
        id: 410,
        title: "NBA Players Success Prediction",
        description: "Predicts player success in the NBA using Naive Bayes classification. Advanced feature engineering, thorough data cleaning, and model evaluation methods were applied to enhance prediction accuracy.",
        tags: ["Machine Learning", "Naive Bayes", "Sports Analytics"],
        imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "Naive Bayes", "Feature Engineering"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/NBA-Players-Success-Prediction--with-Naive-Bayes"
      },
      {
        id: 404,
        title: "Marketing Sales Analysis",
        description: "I performed exploratory data analysis (EDA) on marketing and sales datasets, examining multivariate relationships, customer behavior patterns, and sales trends.",
        tags: ["Data Analysis", "EDA", "Marketing"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 405,
        title: "Penguins Dataset Analysis",
        description: "Using the Penguins dataset, I built linear and multiple linear regression models to analyze relationships between physical measurements and species prediction.",
        tags: ["Data Analysis", "Regression", "Machine Learning"],
        imageUrl: "https://images.unsplash.com/photo-1551187067-169150e12d52?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "Linear Regression", "Scikit-learn"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 407,
        title: "Hypothesis Testing with Python",
        description: "I applied statistical hypothesis tests such as t-tests, chi-square tests, and proportion tests to determine whether significant differences exist between various data groups.",
        tags: ["Statistics", "Data Analysis"],
        imageUrl: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "SciPy", "Statsmodels"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 408,
        title: "ANOVA Testing",
        description: "This project conducts ANOVA testing to compare multiple groups and assess the impact of categorical variables on numerical outcomes.",
        tags: ["Statistics", "Data Analysis"],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "ANOVA", "Statistics"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 411,
        title: "Bank Customer Prediction",
        description: "I built a churn prediction model for banking customers using Naive Bayes. The project includes preprocessing, feature selection, and performance evaluation.",
        tags: ["Machine Learning", "Finance", "Classification"],
        imageUrl: "https://images.unsplash.com/photo-1601597111158-2fceff292cd4?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "Naive Bayes", "Scikit-learn"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 412,
        title: "Penguin Cluster Estimation",
        description: "This clustering project utilizes the K-Means algorithm to determine optimal cluster groups using silhouette and inertia metrics.",
        tags: ["Machine Learning", "Clustering", "Unsupervised"],
        imageUrl: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "K-Means", "Scikit-learn"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 413,
        title: "Airline Customer Estimation",
        description: "I developed classification models using Decision Tree, Random Forest, and XGBoost algorithms to analyze airline customer satisfaction.",
        tags: ["Machine Learning", "Classification"],
        imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "XGBoost", "Random Forest"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 414,
        title: "Marketing Promotion Analysis",
        description: "This project evaluates the effectiveness of marketing campaigns through comprehensive EDA, segmentation analysis, and statistical evaluation.",
        tags: ["Data Analysis", "Marketing", "Statistics"],
        imageUrl: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "Pandas", "Data Viz"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 415,
        title: "Air Quality Analysis",
        description: "I analyzed air quality data using probability distributions (normal, exponential, etc.) and descriptive statistics to assess pollution levels.",
        tags: ["Data Analysis", "Environment", "Statistics"],
        imageUrl: "https://images.unsplash.com/photo-1622345688589-9e67d2645601?auto=format&fit=crop&q=80&w=600",
        category: "Data Analyze & ML Projects",
        technologies: ["Python", "Statistics", "Probability"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      }
    ]
  },
  {
    id: "python-projects",
    title: "Python Projects",
    count: 7,
    description: "Versatile Python applications ranging from automation to data science.",
    gradient: "from-yellow-400 to-orange-500",
    icon: Terminal,
    emoji: "🐍",
    path: "/projects/python-projects",
    projects: [
      {
        id: 501,
        title: "WhatsApp Message Bot",
        description: "Developed an automated WhatsApp messaging bot using Python and Selenium WebDriver. The bot is capable of sending predefined messages to specific contacts, automating repetitive communication tasks.",
        tags: ["Automation", "Selenium", "Python"],
        imageUrl: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=600",
        category: "Python Projects",
        technologies: ["Python", "Selenium", "WebDriver"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Whattsap_BotwithPythonSelenium"
      },
      {
        id: 502,
        title: "Simpsons Character Analysis",
        description: "Applies deep learning techniques to classify Simpsons characters from images. Using CNN architectures, extensive preprocessing, and data augmentation, the model successfully identifies characters with high accuracy.",
        tags: ["Deep Learning", "CNN", "Python"],
        imageUrl: "https://images.unsplash.com/photo-1620559029047-e7eb98638d17?auto=format&fit=crop&q=80&w=600",
        category: "Python Projects",
        technologies: ["Python", "CNN", "Keras", "TensorFlow"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Simpsons-Character-Analysis-with-Deep-Learning-Python"
      },
      {
        id: 503,
        title: "Air Quality Analysis",
        description: "Analyzed air quality measurements using probability distributions (normal, exponential, Poisson, etc.) and descriptive statistics. The project focuses on understanding the distributional structure of pollution levels.",
        tags: ["Data Analysis", "Statistics", "Python"],
        imageUrl: "https://images.unsplash.com/photo-1611273426728-131c909e735e?auto=format&fit=crop&q=80&w=600",
        category: "Python Projects",
        technologies: ["Python", "SciPy", "Statistics"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 504,
        title: "Hypothesis Testing",
        description: "Demonstrates statistical hypothesis testing using Python. Tests such as t-tests, chi-square tests, ANOVA, and proportion tests were applied to evaluate significant differences between groups.",
        tags: ["Statistics", "Data Analysis", "Python"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        category: "Python Projects",
        technologies: ["Python", "SciPy", "Statsmodels"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 505,
        title: "ANOVA Testing",
        description: "Performed ANOVA to compare numerical outcomes across multiple groups and determine whether group differences were statistically significant. Includes interpretation of p-values, assumptions, and visual analysis.",
        tags: ["Statistics", "Data Analysis", "Python"],
        imageUrl: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=600",
        category: "Python Projects",
        technologies: ["Python", "Statsmodels", "Pandas"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 506,
        title: "Web Scraping with Python",
        description: "Focuses on extracting structured information from web pages using Python libraries. Includes scraping product data, text content, and metadata from multiple websites, followed by data cleaning.",
        tags: ["Web Scraping", "Python", "Data Mining"],
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=600",
        category: "Python Projects",
        technologies: ["Python", "BeautifulSoup", "Selenium"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 507,
        title: "Clothing Images Dataset",
        description: "Created a custom dataset by scraping clothing images from various shopping websites using Selenium. Automates navigation, image extraction, and dataset structuring for computer vision tasks.",
        tags: ["Web Scraping", "Dataset", "Python"],
        imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=600",
        category: "Python Projects",
        technologies: ["Python", "Selenium", "Computer Vision"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Web-Scrapping-with-Python-_-Clothes-"
      }
    ]
  },
  {
    id: "computer-vision",
    title: "Computer Vision Projects",
    count: 7,
    description: "Advanced image processing, deep learning, and real-time vision systems.",
    gradient: "from-purple-500 to-pink-500",
    icon: Eye,
    emoji: "👁️",
    path: "/projects/computer-vision",
    projects: [
      {
        id: 801,
        title: "Face Detection with Haar Cascades",
        description: "In this project, I implemented a face detection system using the Haar Cascade Classifier in Python and OpenCV. The model detects human faces in real time by leveraging classical computer vision techniques. I also published a detailed Medium article explaining the full implementation, preprocessing steps, and underlying algorithmic logic.",
        tags: ["Computer Vision", "OpenCV", "Haar Cascade"],
        imageUrl: "https://images.unsplash.com/photo-1555685812-4b943f3db9f0?auto=format&fit=crop&q=80&w=600",
        category: "Computer Vision Projects",
        technologies: ["Python", "OpenCV", "Haar Cascade"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/-Face-Detection-with-Haar-Cascades-Computer-Vision",
        articles: [
            { label: "Read in English", url: "https://medium.com/@kubra.ozcan_98680/face-recognition-with-haar-cascade-classifier-in-python-6439da0d23e3", lang: 'en' },
            { label: "Türkçe Oku", url: "https://medium.com/@kubra.ozcan_98680/python-da-haar-cascade-s%C4%B1n%C4%B1fland%C4%B1r%C4%B1c%C4%B1-ile-y%C3%BCz-tan%C4%B1ma-4f0e0cb13f2c", lang: 'tr' }
        ]
      },
      {
        id: 802,
        title: "Face Recognition with OpenCV",
        description: "This project focuses on building a face recognition system using OpenCV and deep learning–based facial embeddings. The application identifies individuals by comparing extracted facial features with a trained dataset. It highlights preprocessing, face encoding, model training, and real-time video inference.",
        tags: ["Computer Vision", "Deep Learning", "OpenCV", "Face Recognition"],
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
        category: "Computer Vision Projects",
        technologies: ["Python", "OpenCV", "Deep Learning"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Face-Recognition-with-OpenCV-s---Computer-Vision-Deep-Learning"
      },
      {
        id: 803,
        title: "Edge Detection with Python",
        description: "I developed an edge detection pipeline using OpenCV to analyze object boundaries within images. Techniques such as Canny Edge Detection and gradient-based filters were applied to extract meaningful structural details from visual data.",
        tags: ["Computer Vision", "OpenCV", "Image Processing"],
        imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600",
        category: "Computer Vision Projects",
        technologies: ["Python", "OpenCV", "Canny Edge"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Edge-Detection-with-Python-"
      },
      {
        id: 2,
        title: "Hand Tracking and Gesture Control",
        description: "This project implements real-time hand tracking and gesture recognition using MediaPipe and OpenCV. The system detects hand landmarks from a live camera feed and maps gestures to specific control actions, enabling intuitive human–computer interaction.",
        tags: ["Computer Vision", "MediaPipe", "Real-time", "HCI"],
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600",
        category: "Computer Vision Projects",
        technologies: ["Python", "OpenCV", "MediaPipe"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Hand-Tracking-and-Gesture-Control-from-Camera-Using-Mediapipe-and-OpenCV-in-Python"
      },
      {
        id: 804,
        title: "Vehicle Tracking and Counting",
        description: "In this computer vision project, I built a vehicle detection, tracking, and counting system using the YOLOv8 object detection model. The application processes video streams to detect moving vehicles, track their trajectories, and count them based on lane crossings.",
        tags: ["Computer Vision", "YOLOv8", "Object Detection", "Tracking"],
        imageUrl: "https://images.unsplash.com/photo-1565514020176-db936c646002?auto=format&fit=crop&q=80&w=600",
        category: "Computer Vision Projects",
        technologies: ["Python", "YOLOv8", "OpenCV"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Track-and-Count-Vehicles-with-yolov8"
      },
      {
        id: 401,
        title: "Flower Recognition",
        description: "Developed a deep-learning-based image classification model capable of identifying different flower species from images using CNN architectures.",
        tags: ["Deep Learning", "CNN", "Classification"],
        imageUrl: "https://images.unsplash.com/photo-1490750967868-bcdf92dd8364?auto=format&fit=crop&q=80&w=600",
        category: "Computer Vision Projects",
        technologies: ["Python", "CNN", "Keras", "TensorFlow"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Flower_Recognition_Deep_Learning_Project"
      },
      {
        id: 402,
        title: "Simpsons Character Recognition",
        description: "Focuses on recognizing Simpsons characters through image classification. I developed a deep learning model using CNNs and comprehensive preprocessing.",
        tags: ["Deep Learning", "CNN", "Classification"],
        imageUrl: "https://images.unsplash.com/photo-1580130601275-c9f0c2a4dd85?auto=format&fit=crop&q=80&w=600",
        category: "Computer Vision Projects",
        technologies: ["Python", "CNN", "Deep Learning"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Simpsons-Character-Analysis-with-Deep-Learning-Python"
      }
    ]
  },
  {
    id: "ai-projects",
    title: "AI & Automation Projects",
    count: 2,
    description: "Cutting-edge artificial intelligence applications and automated systems.",
    gradient: "from-blue-400 to-cyan-500",
    icon: Brain,
    emoji: "🧠",
    path: "/projects/ai-projects",
    projects: [
      {
        id: 601,
        title: "AI Assistant App",
        description: "This project is an interactive AI assistant application built using LangChain and Streamlit. It allows users to ask questions, receive contextual and intelligent responses, and explore personalized roadmap suggestions—powered by large language models. The app integrates prompt chaining, dynamic UI components, and real-time interaction features to deliver a seamless conversational experience.",
        tags: ["AI", "LangChain", "Streamlit", "LLM"],
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
        category: "AI Projects",
        technologies: ["Python", "LangChain", "Streamlit", "OpenAI"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/AI-App-with-LangChain-and-Streamlit"
      },
       {
        id: 406,
        title: "Diabetes Risk Prediction App",
        description: "This application predicts an individual's diabetes risk using multiple machine learning classification models. The project includes data preprocessing, feature analysis, model training, and prediction logic wrapped in a user-friendly interface. It enables users to input medical parameters and immediately view their risk level based on trained ML models.",
        tags: ["Healthcare", "Prediction", "Classification", "App"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
        category: "AI Projects",
        technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/Diabetes-Risk-Prediction-App"
      }
    ]
  },
  {
    id: "end-to-end",
    title: "End-to-End Projects",
    count: 6,
    description: "Full-stack and complete lifecycle projects from conception to deployment.",
    gradient: "from-green-400 to-emerald-500",
    icon: Monitor,
    emoji: "🖥️",
    path: "/projects/end-to-end",
    projects: [
      {
        id: 202,
        title: "Portfolio Website",
        description: "Modern portfolio website built with React and Tailwind CSS.",
        tags: ["Web Dev", "Frontend"],
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
        category: "End-to-End Projects",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan"
      },
      {
        id: 701,
        title: "Donation Website",
        description: "This end-to-end web application is a donation platform where users can contribute clothes, books, and other items. I developed both the frontend and backend using HTML, CSS, JavaScript, and PHP. The system includes user-friendly forms, database operations via XAMPP, item submission workflows, and a fully functional donation management interface.",
        tags: ["Web Dev", "PHP", "Full Stack"],
        imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=600",
        category: "End-to-End Projects",
        technologies: ["HTML", "CSS", "PHP", "JavaScript", "XAMPP"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/DonationWebProject_With_Html_CSS_PHP_JS"
      },
      {
        id: 702,
        title: "Traversal Core Project",
        description: "This project was developed as part of Murat Yücedağ’s comprehensive C# .NET course. It is a full-stack MVC-based travel management system built using .NET Core. The application includes layered architecture, user authentication, admin panels, dynamic content management, and database integration—demonstrating real-world enterprise-level software design.",
        tags: [".NET Core", "MVC", "Full Stack"],
        imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
        category: "End-to-End Projects",
        technologies: ["C#", ".NET Core", "MVC", "SQL"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/TraversalCoreProje"
      },
      {
        id: 703,
        title: "Car Rental Automation",
        description: "I built a complete car rental automation system using C# and .NET technologies. The project includes vehicle management, customer registration, rental transactions, payment structure, and reporting features. It demonstrates practical usage of OOP principles, CRUD operations, and database handling in .NET environments.",
        tags: ["Desktop App", "Automation", "C#"],
        imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600",
        category: "End-to-End Projects",
        technologies: ["C#", ".NET", "OOP", "SQL"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/CarRentalProject"
      },
      {
        id: 704,
        title: "Customer Sales Automation",
        description: "This project is a desktop-based sales automation system developed with C# Windows Forms and Entity Framework. It includes modules for customer management, product tracking, sales processing, and real-time data operations. Entity Framework was used for database modeling, relational mapping, and efficient data transactions.",
        tags: ["Desktop App", "WinForms", "Database"],
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=600",
        category: "End-to-End Projects",
        technologies: ["C#", "WinForms", "Entity Framework", "SQL"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/EntityFramework"
      },
      {
        id: 705,
        title: "Car Rental C# Form Website",
        description: "This is a web-based car rental platform built using C# and .NET technologies. It includes functionalities for vehicle listing, customer booking, rental tracking, and administrative control panels. The project reflects a complete end-to-end system with backend logic, database operations, and a dynamic user interface.",
        tags: ["Web Dev", ".NET", "Full Stack"],
        imageUrl: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=600",
        category: "End-to-End Projects",
        technologies: ["C#", ".NET", "ASP.NET", "SQL"],
        link: "#",
        github: "https://github.com/Kubra-Ozcan/ArabaKiralama"
      }
    ]
  },
  {
    id: "other-projects",
    title: "Other Projects",
    count: 0,
    description: "Various other technical projects and experiments.",
    gradient: "from-gray-500 to-slate-500",
    icon: Zap,
    emoji: "🌐",
    path: "/projects/other-projects",
    projects: []
  }
];

const RESUME_DATA_EN = {
  experience: [
    {
      role: "Core Team Member",
      company: "Kaggle Türkiye Community",
      period: "June 2025 - Present",
      description: "Organizing AI and data science events in Turkey; managing sponsorships and partnerships to align with global trends and encourage local participation."
    },
    {
      role: "Data Science Scholar",
      company: "Google AI & Technology Academy",
      period: "November 2024 - Present",
      description: "Gained valuable project management experience by participating in hackathons, entrepreneurship training, and data science competitions, building a strong professional network in the data science community."
    },
    {
      role: "Contributor - Trainer (Part-time)",
      company: "Outlier",
      period: "November 2024 - Present",
      description: "Worked part-time on training AI models by optimizing and experimenting with language models at Outlier."
    },
    {
      role: "Volunteer",
      company: "T3 Foundation",
      period: "April 2024 - Present",
      description: "Volunteering in Machine Learning, Computer Vision, and Deep Learning initiatives."
    },
    {
      role: "Erasmus+ Exchange Intern",
      company: "University of Ljubljana Computer Vision Laboratory",
      period: "February 2024 - August 2024",
      description: "Conducted research in machine learning, computer vision, and deep learning. Worked on real-world computer vision projects utilizing advanced algorithms and neural networks to analyze visual data and derive meaningful insights."
    },
    {
      role: "Intern Engineer",
      company: "SANKO Holding A.Ş (SANShine)",
      period: "July 2023 - Oct 2023",
      description: "Assisted in ERP system integration and management working with SAP, ABAP, SQL, C#, and .NET Form technologies. Contributed to the development and optimization of internal tools for company operations."
    },
    {
      role: "Event Organizer",
      company: "HKU GDSC Core Team Member",
      period: "September 2023 - May 2024",
      description: "Organized technology events, managed sponsorships, and established partnerships to enhance community engagement and provide valuable opportunities for students."
    },
    {
      role: "Project Team Coordinator",
      company: "2209 TUBITAK",
      period: "October 2023 - April 2024",
      description: "University Students Research Projects Support Program - VR Simulation Project for Police Schools (Project Approved). Web Programming (PHP, CSS, HTML, Javascript), Game Development (Unity)."
    },
    {
      role: "One-on-One Training Volunteer",
      company: "Bamboo Education Platform",
      period: "October 2022 - December 2024",
      description: "Provided volunteer mathematics tutoring to a high school student."
    }
  ],
  education: [
    {
      school: "Hasan Kalyoncu University",
      degree: "Computer Engineering (English) - Bachelor's Degree",
      period: "2019-2025",
      detail: "Full Scholarship"
    },
    {
      school: "University of Ljubljana",
      degree: "Erasmus+ Exchange",
      period: "2024",
      detail: "Computer Vision Laboratory"
    },
    {
      school: "Gaziantep Anatolian High School",
      degree: "High School",
      period: "",
      detail: "(TÜRKİYE)"
    }
  ],
  skills: {
    technical: [], 
    soft: [
      "Teamwork", "Integrity", "Leadership", "Analytical Problem Solving"
    ]
  },
  languages: [
    { name: "English", level: "IELTS: B2" },
    { name: "German", level: "A2" },
    { name: "Turkish", level: "Native" }
  ],
  certificates: [
    "Google AI Essentials (Google)",
    "IELTS Certificate (Level: B2)",
    "Advanced Data Analytics (Coursera - Google)",
    "Miuul Machine Learning",
    "Python for Machine Learning (AI Business School)",
    "Google Project Management (Coursera - Google)",
    "Data Analysis Bootcamp (Global AI Hub)",
    "E-Commerce Masterclass (The Dot Academy)"
  ],
  hobbies: [
    "Doing Yoga", "Playing Piano", "Amateur Theatre Acting", "Playing Chess", "Drawing"
  ],
  references: [
    {
      name: "Prof. Dr. Muhammet Fatih HASOĞLU",
      title: "Head of Computer Engineering Department at Hasan Kalyoncu University",
      contact: "Contact info available upon request"
    },
    {
      name: "Ersan TAN (Sanko Holding)",
      title: "Logistics Manager (HR/MM/EWM)",
      contact: "Contact info available upon request"
    }
  ]
};

const SKILLS_DATA_EN_RESUME = {
    technical: SKILLS_DATA_EN.flatMap(s => s.skills),
    soft: RESUME_DATA_EN.skills.soft
};
RESUME_DATA_EN.skills = SKILLS_DATA_EN_RESUME as any;

/* ---------------- HELPER: Localize Categories ---------------- */

// Helper to clone structure (preserving icons) and applying text translations
const createLocalizedCategories = (
  source: ProjectCategory[], 
  transMap: { 
    categories: Record<string, { title: string; description: string }>; 
    projects: Record<number, { title: string; description: string }> 
  }
): ProjectCategory[] => {
  return source.map(cat => {
    // Create a shallow copy to preserve component references (icons)
    const newCat = { ...cat };
    
    // Apply category translations
    const catTrans = transMap.categories[cat.id];
    if (catTrans) {
      newCat.title = catTrans.title;
      newCat.description = catTrans.description;
    }

    // Apply project translations
    newCat.projects = cat.projects.map(proj => {
      const projTrans = transMap.projects[proj.id];
      if (projTrans) {
        return {
          ...proj,
          title: projTrans.title,
          description: projTrans.description,
          // If the project category string is displayed on the card, update it too
          category: catTrans ? catTrans.title : proj.category
        };
      }
      return proj;
    });

    return newCat;
  });
};

/* ---------------- TRANSLATION MAPS ---------------- */

const TR_TRANSLATIONS = {
  categories: {
    "data-analyze-ml": { title: "Veri Analizi & ML", description: "Derinlemesine veri analizi, tahmine dayalı modelleme ve makine öğrenimi çözümleri." },
    "python-projects": { title: "Python Projeleri", description: "Otomasyondan veri bilimine kadar çok yönlü Python uygulamaları." },
    "computer-vision": { title: "Bilgisayarlı Görü", description: "Gelişmiş görüntü işleme, derin öğrenme ve gerçek zamanlı görü sistemleri." },
    "ai-projects": { title: "Yapay Zeka Projeleri", description: "Son teknoloji yapay zeka uygulamaları ve otomatik sistemler." },
    "end-to-end": { title: "Uçtan Uca Projeler", description: "Fikirden dağıtıma kadar tam kapsamlı ve tam döngü projeler." },
    "other-projects": { title: "Diğer Projeler", description: "Çeşitli diğer teknik projeler ve deneyler." }
  },
  projects: {
    403: { title: "Duygu Analizi", description: "TF-IDF ve kelime gömmeleri kullanarak metni pozitif, negatif veya nötr kategorilere ayıran NLP destekli bir duygu analizi modeli geliştirdim. Proje, metinsel verilerdeki duygusal tonları analiz edip yorumlamaktadır." },
    409: { title: "Kira Fiyatı Tahmini", description: "Regresyon algoritmaları, özellik mühendisliği ve veri ön işleme teknikleri kullanarak kira fiyatlarını tahmin eden bir makine öğrenimi modeli geliştirdim. Model, kira değerlerini tahmin etmede yüksek performans göstermektedir." },
    410: { title: "NBA Oyuncu Başarısı Tahmini", description: "Naive Bayes sınıflandırması kullanarak NBA oyuncularının başarısını tahmin eder. Tahmin doğruluğunu artırmak için gelişmiş özellik mühendisliği, kapsamlı veri temizleme ve model değerlendirme yöntemleri uygulanmıştır." },
    404: { title: "Pazarlama Satış Analizi", description: "Pazarlama ve satış veri setleri üzerinde keşifsel veri analizi (EDA) gerçekleştirdim; çok değişkenli ilişkileri, müşteri davranış modellerini ve satış trendlerini inceledim." },
    405: { title: "Penguen Veri Seti Analizi", description: "Penguenler veri setini kullanarak, fiziksel ölçümler ile tür tahmini arasındaki ilişkileri analiz etmek için doğrusal ve çoklu doğrusal regresyon modelleri kurdum." },
    407: { title: "Python ile Hipotez Testleri", description: "Çeşitli veri grupları arasında anlamlı farklılıklar olup olmadığını belirlemek için t-testleri, ki-kare testleri ve oran testleri gibi istatistiksel hipotez testleri uyguladım." },
    408: { title: "ANOVA Testi", description: "Bu proje, birden fazla grubu karşılaştırmak ve kategorik değişkenlerin sayısal sonuçlar üzerindeki etkisini değerlendirmek için ANOVA testleri yürütmektedir." },
    411: { title: "Banka Müşteri Tahmini", description: "Naive Bayes kullanarak banka müşterileri için bir kayıp (churn) tahmin modeli oluşturdum. Proje ön işleme, özellik seçimi ve performans değerlendirmesini içermektedir." },
    412: { title: "Penguen Küme Tahmini", description: "Bu kümeleme projesi, siluet ve atalet metriklerini kullanarak optimal küme gruplarını belirlemek için K-Means algoritmasını kullanır." },
    413: { title: "Havayolu Müşteri Tahmini", description: "Havayolu müşteri memnuniyetini analiz etmek için Karar Ağacı, Rastgele Orman ve XGBoost algoritmalarını kullanarak sınıflandırma modelleri geliştirdim." },
    414: { title: "Pazarlama Promosyon Analizi", description: "Bu proje, kapsamlı EDA, segmentasyon analizi ve istatistiksel değerlendirme yoluyla pazarlama kampanyalarının etkinliğini değerlendirmektedir." },
    415: { title: "Hava Kalitesi Analizi", description: "Kirlilik seviyelerini değerlendirmek için olasılık dağılımlarını (normal, üstel vb.) ve tanımlayıcı istatistikleri kullanarak hava kalitesi verilerini analiz ettim." },
    501: { title: "WhatsApp Mesaj Botu", description: "Python ve Selenium WebDriver kullanarak otomatik bir WhatsApp mesajlaşma botu geliştirdim. Bot, belirli kişilere önceden tanımlanmış mesajlar göndererek tekrarlayan iletişim görevlerini otomatize edebilir." },
    502: { title: "Simpsons Karakter Analizi", description: "Simpsons karakterlerini görüntülerden sınıflandırmak için derin öğrenme teknikleri uygular. CNN mimarileri, kapsamlı ön işleme ve veri artırma kullanılarak model karakterleri yüksek doğrulukla tanımlar." },
    503: { title: "Hava Kalitesi Analizi", description: "Hava kalitesi ölçümlerini olasılık dağılımları ve tanımlayıcı istatistikler kullanarak analiz ettim. Proje, kirlilik seviyelerinin dağılım yapısını anlamaya odaklanmaktadır." },
    504: { title: "Hipotez Testi", description: "Python kullanarak istatistiksel hipotez testlerini gösterir. Gruplar arasındaki anlamlı farklılıkları değerlendirmek için t-testleri, ki-kare testleri, ANOVA ve oran testleri uygulanmıştır." },
    505: { title: "ANOVA Testi", description: "Sayısal sonuçları birden fazla grup arasında karşılaştırmak ve grup farklılıklarının istatistiksel olarak anlamlı olup olmadığını belirlemek için ANOVA uygulandı." },
    506: { title: "Python ile Web Kazıma", description: "Python kütüphanelerini kullanarak web sayfalarından yapılandırılmış bilgi çıkarmaya odaklanır. Ürün verilerini, metin içeriğini ve meta verileri birden fazla siteden kazımayı ve veri temizlemeyi içerir." },
    507: { title: "Giyim Görselleri Veri Seti", description: "Selenium kullanarak çeşitli alışveriş sitelerinden giyim görsellerini kazıyarak özel bir veri seti oluşturdum. Bilgisayarlı görü görevleri için navigasyonu, görüntü çıkarmayı ve veri seti yapılandırmasını otomatize eder." },
    801: { title: "Haar Cascades ile Yüz Tespiti", description: "Bu projede, Python ve OpenCV'deki Haar Cascade Sınıflandırıcısı'nı kullanarak bir yüz tespit sistemi uyguladım. Model, klasik bilgisayarlı görü tekniklerini kullanarak insan yüzlerini gerçek zamanlı olarak algılar." },
    802: { title: "OpenCV ile Yüz Tanıma", description: "Bu proje, OpenCV ve derin öğrenme tabanlı yüz gömmelerini (embeddings) kullanarak bir yüz tanıma sistemi oluşturmaya odaklanmaktadır. Uygulama, çıkarılan yüz özelliklerini eğitilmiş bir veri setiyle karşılaştırarak bireyleri tanımlar." },
    803: { title: "Python ile Kenar Tespiti", description: "Görüntülerdeki nesne sınırlarını analiz etmek için OpenCV kullanarak bir kenar tespit hattı geliştirdim. Görsel verilerden anlamlı yapısal detayları çıkarmak için Canny Kenar Tespiti gibi teknikler uygulandı." },
    2: { title: "El Takibi ve Jest Kontrolü", description: "Bu proje, MediaPipe ve OpenCV kullanarak gerçek zamanlı el takibi ve jest tanıma uygular. Sistem, canlı kamera akışından el işaretlerini algılar ve jestleri belirli kontrol eylemlerine eşleyerek sezgisel insan-bilgisayar etkileşimi sağlar." },
    804: { title: "Araç Takibi ve Sayımı", description: "Bu bilgisayarlı görü projesinde, YOLOv8 nesne algılama modelini kullanarak bir araç tespit, takip ve sayım sistemi kurdum. Uygulama, hareket halindeki araçları tespit etmek ve şerit geçişlerine göre saymak için video akışlarını işler." },
    401: { title: "Çiçek Tanıma", description: "CNN mimarilerini kullanarak görüntülerden farklı çiçek türlerini tanımlayabilen derin öğrenme tabanlı bir görüntü sınıflandırma modeli geliştirdim." },
    402: { title: "Simpsons Karakter Tanıma", description: "Görüntü sınıflandırma yoluyla Simpsons karakterlerini tanımaya odaklanır. CNN'ler ve kapsamlı ön işleme kullanarak bir derin öğrenme modeli geliştirdim." },
    601: { title: "Yapay Zeka Asistan Uygulaması", description: "Bu proje, LangChain ve Streamlit kullanılarak oluşturulmuş etkileşimli bir yapay zeka asistan uygulamasıdır. Kullanıcıların sorular sormasına, bağlamsal yanıtlar almasına ve kişiselleştirilmiş yol haritası önerilerini keşfetmesine olanak tanır." },
    406: { title: "Diyabet Riski Tahmin Uygulaması", description: "Bu uygulama, birden fazla makine öğrenimi sınıflandırma modeli kullanarak bir bireyin diyabet riskini tahmin eder. Proje, veri ön işleme, özellik analizi, model eğitimi ve kullanıcı dostu bir arayüz içerir." },
    202: { title: "Portföy Web Sitesi", description: "React ve Tailwind CSS ile oluşturulmuş modern portföy web sitesi." },
    701: { title: "Bağış Web Sitesi", description: "Bu uçtan uca web uygulaması, kullanıcıların kıyafet, kitap ve diğer eşyaları bağışlayabileceği bir platformdur. HTML, CSS, JavaScript ve PHP kullanarak hem ön yüzü hem de arka yüzü geliştirdim." },
    702: { title: "Traversal Core Projesi", description: "Bu proje, Murat Yücedağ’ın kapsamlı C# .NET kursunun bir parçası olarak geliştirilmiştir. .NET Core kullanılarak oluşturulmuş tam yığın MVC tabanlı bir seyahat yönetim sistemidir." },
    703: { title: "Araç Kiralama Otomasyonu", description: "C# ve .NET teknolojilerini kullanarak eksiksiz bir araç kiralama otomasyon sistemi kurdum. Proje araç yönetimi, müşteri kaydı, kiralama işlemleri ve raporlama özelliklerini içerir." },
    704: { title: "Müşteri Satış Otomasyonu", description: "Bu proje, C# Windows Formları ve Entity Framework ile geliştirilmiş masaüstü tabanlı bir satış otomasyon sistemidir. Müşteri yönetimi, ürün takibi ve satış işlemleri modüllerini içerir." },
    705: { title: "Araç Kiralama Web Sitesi", description: "Bu, C# ve .NET teknolojileri kullanılarak oluşturulmuş web tabanlı bir araç kiralama platformudur. Araç listeleme, müşteri rezervasyonu ve yönetim kontrol panelleri işlevlerini içerir." }
  }
};

const DE_TRANSLATIONS = {
  categories: {
    "data-analyze-ml": { title: "Datenanalyse & ML", description: "Tiefgehende Datenanalyse, prädiktive Modellierung und Machine Learning Lösungen." },
    "python-projects": { title: "Python Projekte", description: "Vielseitige Python-Anwendungen von Automatisierung bis Data Science." },
    "computer-vision": { title: "Computer Vision", description: "Fortschrittliche Bildverarbeitung, Deep Learning und Echtzeit-Vision-Systeme." },
    "ai-projects": { title: "KI Projekte", description: "Hochmoderne Anwendungen künstlicher Intelligenz und automatisierte Systeme." },
    "end-to-end": { title: "End-to-End Projekte", description: "Full-Stack-Projekte über den gesamten Lebenszyklus von der Konzeption bis zur Bereitstellung." },
    "other-projects": { title: "Andere Projekte", description: "Verschiedene andere technische Projekte und Experimente." }
  },
  projects: {
    403: { title: "Emotions-/Sentimentanalyse", description: "Ich habe ein NLP-gestütztes Sentimentanalyse-Modell erstellt, das Text mithilfe von TF-IDF und Word Embeddings in positive, negative oder neutrale Kategorien klassifiziert." },
    409: { title: "Mietpreisvorhersage", description: "Entwicklung eines ML-Modells zur Vorhersage von Mietpreisen unter Verwendung von Regressionsalgorithmen und Feature Engineering." },
    410: { title: "NBA Spielerfolgsvorhersage", description: "Vorhersage des Spielerfolgs in der NBA mittels Naive Bayes Klassifikation. Erweiterte Feature-Entwicklung zur Verbesserung der Genauigkeit." },
    404: { title: "Marketing-Verkaufsanalyse", description: "Durchführung einer explorativen Datenanalyse (EDA) auf Marketing- und Verkaufsdatensätzen zur Untersuchung von Trends." },
    405: { title: "Pinguin-Datensatzanalyse", description: "Verwendung des Pinguin-Datensatzes zur Erstellung linearer Regressionsmodelle für die Analyse von physikalischen Merkmalen." },
    407: { title: "Hypothesentests mit Python", description: "Anwendung statistischer Hypothesentests wie t-Tests und Chi-Quadrat-Tests zur Bestimmung signifikanter Unterschiede." },
    408: { title: "ANOVA Test", description: "Durchführung von ANOVA-Tests zum Vergleich mehrerer Gruppen und zur Bewertung des Einflusses kategorialer Variablen." },
    411: { title: "Bankkunden-Vorhersage", description: "Erstellung eines Abwanderungsvorhersagemodells (Churn) für Bankkunden mittels Naive Bayes." },
    412: { title: "Pinguin-Cluster-Schätzung", description: "Cluster-Projekt unter Verwendung des K-Means-Algorithmus zur Bestimmung optimaler Gruppen." },
    413: { title: "Fluggesellschaft-Kundenanalyse", description: "Entwicklung von Klassifikationsmodellen (Decision Tree, Random Forest, XGBoost) zur Analyse der Kundenzufriedenheit." },
    414: { title: "Marketing-Promotionsanalyse", description: "Bewertung der Wirksamkeit von Marketingkampagnen durch umfassende EDA und Segmentierungsanalyse." },
    415: { title: "Luftqualitätsanalyse", description: "Analyse von Luftqualitätsdaten unter Verwendung von Wahrscheinlichkeitsverteilungen und deskriptiver Statistik." },
    501: { title: "WhatsApp Nachrichten-Bot", description: "Entwicklung eines automatisierten WhatsApp-Bots mit Python und Selenium WebDriver für automatisierte Kommunikation." },
    502: { title: "Simpsons Charakteranalyse", description: "Anwendung von Deep Learning (CNN) zur Klassifizierung von Simpsons-Charakteren aus Bildern." },
    503: { title: "Luftqualitätsanalyse", description: "Analyse von Luftqualitätsmessungen unter Verwendung von Wahrscheinlichkeitsverteilungen zum Verständnis der Verschmutzungsstruktur." },
    504: { title: "Hypothesentests", description: "Demonstration statistischer Hypothesentests mit Python zur Bewertung signifikanter Gruppenunterschiede." },
    505: { title: "ANOVA Test", description: "Durchführung von ANOVA zum Vergleich numerischer Ergebnisse über mehrere Gruppen hinweg." },
    506: { title: "Web Scraping mit Python", description: "Extraktion strukturierter Informationen von Webseiten unter Verwendung von Python-Bibliotheken." },
    507: { title: "Kleidungsbilder-Datensatz", description: "Erstellung eines benutzerdefinierten Datensatzes durch Scraping von Kleidungsbildern für Computer Vision Aufgaben." },
    801: { title: "Gesichtserkennung mit Haar Cascades", description: "Implementierung eines Gesichtserkennungssystems mit Haar Cascade Classifier in Python und OpenCV." },
    802: { title: "Gesichtserkennung mit OpenCV", description: "Aufbau eines Gesichtserkennungssystems unter Verwendung von OpenCV und Deep Learning-basierten Gesichts-Embeddings." },
    803: { title: "Kantenerkennung mit Python", description: "Entwicklung einer Pipeline zur Kantenerkennung mit OpenCV zur Analyse von Objektgrenzen." },
    2: { title: "Hand-Tracking und Gestensteuerung", description: "Echtzeit-Hand-Tracking und Gestenerkennung mit MediaPipe und OpenCV für intuitive Mensch-Computer-Interaktion." },
    804: { title: "Fahrzeugverfolgung und -zählung", description: "Fahrzeugerkennungs-, Verfolgungs- und Zählsystem unter Verwendung des YOLOv8-Objekterkennungsmodells." },
    401: { title: "Blumenerkennung", description: "Entwicklung eines Deep-Learning-Bildklassifikationsmodells zur Identifizierung verschiedener Blumenarten." },
    402: { title: "Simpsons Charaktererkennung", description: "Fokus auf die Erkennung von Simpsons-Charakteren durch Bildklassifikation mittels CNNs." },
    601: { title: "KI-Assistenten-App", description: "Interaktive KI-Assistenten-App, erstellt mit LangChain und Streamlit, für kontextbezogene Antworten." },
    406: { title: "Diabetes-Risiko-Vorhersage-App", description: "Vorhersage des Diabetesrisikos unter Verwendung mehrerer ML-Klassifikationsmodelle in einer benutzerfreundlichen Oberfläche." },
    202: { title: "Portfolio Website", description: "Moderne Portfolio-Website, erstellt mit React und Tailwind CSS." },
    701: { title: "Spenden-Website", description: "End-to-End-Webanwendung für Kleiderspenden, entwickelt mit HTML, CSS, JavaScript und PHP." },
    702: { title: "Traversal Core Projekt", description: "Full-Stack MVC-basiertes Reisemanagementsystem, erstellt mit .NET Core als Teil eines umfassenden Kurses." },
    703: { title: "Autovermietungs-Automatisierung", description: "Komplettes Autovermietungssystem mit C# und .NET Technologien, inklusive Fahrzeugmanagement." },
    704: { title: "Kundenverkaufs-Automatisierung", description: "Desktop-basiertes Verkaufsautomatisierungssystem, entwickelt mit C# Windows Forms und Entity Framework." },
    705: { title: "Autovermietungs-Website (C#)", description: "Webbasierte Autovermietungsplattform mit C# und .NET, inklusive Buchungs- und Verwaltungsfunktionen." }
  }
};

const ES_TRANSLATIONS = {
  categories: {
    "data-analyze-ml": { title: "Análisis de Datos y ML", description: "Análisis de datos en profundidad, modelado predictivo y soluciones de aprendizaje automático." },
    "python-projects": { title: "Proyectos Python", description: "Aplicaciones Python versátiles que van desde la automatización hasta la ciencia de datos." },
    "computer-vision": { title: "Visión por Computadora", description: "Procesamiento de imágenes avanzado, aprendizaje profundo y sistemas de visión en tiempo real." },
    "ai-projects": { title: "Proyectos de IA", description: "Aplicaciones de inteligencia artificial de vanguardia y sistemas automatizados." },
    "end-to-end": { title: "Proyectos End-to-End", description: "Proyectos de ciclo completo y full-stack desde la concepción hasta el despliegue." },
    "other-projects": { title: "Otros Proyectos", description: "Varios otros proyectos técnicos y experimentos." }
  },
  projects: {
    403: { title: "Análisis Emocional / de Sentimientos", description: "Construí un modelo de análisis de sentimientos impulsado por PNL que clasifica el texto en categorías positivas, negativas o neutrales." },
    409: { title: "Predicción de Precios de Alquiler", description: "Desarrollo de un modelo de aprendizaje automático para predecir precios de alquiler utilizando algoritmos de regresión." },
    410: { title: "Predicción de Éxito de Jugadores NBA", description: "Predice el éxito de los jugadores en la NBA utilizando la clasificación Naive Bayes y técnicas avanzadas de ingeniería de características." },
    404: { title: "Análisis de Ventas de Marketing", description: "Realicé análisis exploratorio de datos (EDA) en conjuntos de datos de marketing y ventas para examinar tendencias." },
    405: { title: "Análisis del Dataset de Pingüinos", description: "Uso del conjunto de datos de pingüinos para construir modelos de regresión lineal para analizar relaciones físicas." },
    407: { title: "Pruebas de Hipótesis con Python", description: "Apliqué pruebas de hipótesis estadísticas como pruebas t y chi-cuadrado para determinar diferencias significativas." },
    408: { title: "Prueba ANOVA", description: "Este proyecto realiza pruebas ANOVA para comparar múltiples grupos y evaluar el impacto de variables categóricas." },
    411: { title: "Predicción de Clientes Bancarios", description: "Construí un modelo de predicción de abandono (churn) para clientes bancarios utilizando Naive Bayes." },
    412: { title: "Estimación de Clúster de Pingüinos", description: "Proyecto de agrupación que utiliza el algoritmo K-Means para determinar grupos óptimos." },
    413: { title: "Estimación de Clientes de Aerolíneas", description: "Desarrollo de modelos de clasificación (Decision Tree, Random Forest, XGBoost) para analizar la satisfacción del cliente." },
    414: { title: "Análisis de Promoción de Marketing", description: "Evalúa la efectividad de las campañas de marketing a través de un EDA integral y análisis de segmentación." },
    415: { title: "Análisis de Calidad del Aire", description: "Analicé datos de calidad del aire utilizando distribuciones de probabilidad y estadísticas descriptivas." },
    501: { title: "Bot de Mensajes de WhatsApp", description: "Desarrollo de un bot automatizado de WhatsApp usando Python y Selenium WebDriver para tareas de comunicación." },
    502: { title: "Análisis de Personajes de los Simpson", description: "Aplica técnicas de aprendizaje profundo (CNN) para clasificar personajes de los Simpson a partir de imágenes." },
    503: { title: "Análisis de Calidad del Aire", description: "Análisis de mediciones de calidad del aire utilizando distribuciones de probabilidad para comprender la contaminación." },
    504: { title: "Pruebas de Hipótesis", description: "Demuestra pruebas de hipótesis estadísticas usando Python para evaluar diferencias significativas entre grupos." },
    505: { title: "Prueba ANOVA", description: "Realización de ANOVA para comparar resultados numéricos en múltiples grupos." },
    506: { title: "Web Scraping con Python", description: "Enfoque en extraer información estructurada de páginas web utilizando bibliotecas de Python." },
    507: { title: "Conjunto de Datos de Ropa", description: "Creación de un conjunto de datos personalizado extrayendo imágenes de ropa para tareas de visión por computadora." },
    801: { title: "Detección de Rostros con Haar Cascades", description: "Implementación de un sistema de detección de rostros utilizando el clasificador Haar Cascade en Python y OpenCV." },
    802: { title: "Reconocimiento Facial con OpenCV", description: "Construcción de un sistema de reconocimiento facial utilizando OpenCV y embeddings faciales basados en aprendizaje profundo." },
    803: { title: "Detección de Bordes con Python", description: "Desarrollo de un pipeline de detección de bordes usando OpenCV para analizar límites de objetos." },
    2: { title: "Seguimiento de Manos y Control por Gestos", description: "Implementación de seguimiento de manos en tiempo real y reconocimiento de gestos usando MediaPipe y OpenCV." },
    804: { title: "Rastreo y Conteo de Vehículos", description: "Sistema de detección, rastreo y conteo de vehículos utilizando el modelo de detección de objetos YOLOv8." },
    401: { title: "Reconocimiento de Flores", description: "Desarrollo de un modelo de clasificación de imágenes basado en aprendizaje profundo para identificar especies de flores." },
    402: { title: "Reconocimiento de Personajes de los Simpson", description: "Enfoque en reconocer personajes de los Simpson mediante clasificación de imágenes usando CNN." },
    601: { title: "App Asistente de IA", description: "Aplicación interactiva de asistente de IA construida con LangChain y Streamlit para respuestas contextuales." },
    406: { title: "App de Predicción de Riesgo de Diabetes", description: "Predice el riesgo de diabetes de un individuo utilizando múltiples modelos de clasificación de ML." },
    202: { title: "Sitio Web Portafolio", description: "Sitio web de portafolio moderno construido con React y Tailwind CSS." },
    701: { title: "Sitio Web de Donaciones", description: "Aplicación web end-to-end para donaciones, desarrollada con HTML, CSS, JavaScript y PHP." },
    702: { title: "Proyecto Traversal Core", description: "Sistema de gestión de viajes full-stack basado en MVC construido con .NET Core." },
    703: { title: "Automatización de Alquiler de Coches", description: "Sistema completo de automatización de alquiler de coches utilizando tecnologías C# y .NET." },
    704: { title: "Automatización de Ventas al Cliente", description: "Sistema de automatización de ventas basado en escritorio desarrollado con C# Windows Forms y Entity Framework." },
    705: { title: "Sitio Web de Alquiler de Coches (C#)", description: "Plataforma de alquiler de coches basada en web construida con tecnologías C# y .NET." }
  }
};

const PERSONAL_INFO_TR = {
  ...PERSONAL_INFO_EN,
  title: "VERİ BİLİMCİSİ / YAPAY ZEKA VE BİLGİSAYAR MÜHENDİSİ",
  about: `Ocak 2025'te Hasan Kalyoncu Üniversitesi Bilgisayar Mühendisliği (İngilizce, tam burslu) bölümünden mezun oldum. Akademik yolculuğum boyunca, özellikle veri bilimi, yapay zeka ve yazılım geliştirme alanlarında yurtiçi ve yurtdışı stajlar, araştırma projeleri ve akademik-sektörel iş birlikleri yoluyla kapsamlı deneyimler kazandım.

Daha önce, 2023 yazında Güneydoğu Anadolu Bölgesi'nin en büyük kurumsal şirketlerinden birinde uzun dönem stajımı tamamladım. Burada C#, .NET, C# Windows Formları ve SAP/ABAP gibi ERP sistemleri üzerinde aktif olarak çalıştım. Bu staj süresince üretime hazır projelerde yer aldım, doğrudan kod geliştirmeye katkıda bulundum ve gerçek kurumsal ortamlarda ekipler arası iş birliği yaptım. Son yılımda Erasmus+ bursu kazanarak Slovenya'daki Ljubljana Üniversitesi, Bilgisayar ve Enformatik Fakültesi'nde 4 aylık uluslararası bir staj tamamladım. Buradaki Bilgisayar Görüsü Laboratuvarı'nda (Computer Vision Laboratory) çalıştım. Bu rolde bilgisayarlı görü araştırmalarına, veri seti hazırlığına, model deneylerine ve çeşitli Python tabanlı görüntü işleme süreçlerine katkıda bulunarak derin öğrenme ve görüntü işleme teknolojilerindeki uzmanlığımı güçlendirdim.

Başlıca teknik ilgi alanlarım arasında makine öğrenimi, derin öğrenme, bilgisayarlı görü, veri analizi ve veri manipülasyonu yer almaktadır. Veri temizleme, özellik mühendisliği ve XGBoost, Random Forest, segmentasyon modelleri, Bayes yaklaşımları, Karar Ağaçları ve topluluk öğrenimi gibi teknikleri kullanarak modelleme konularında kapsamlı çalışmalar yaptım. Proje deneyimlerim arasında Scikit-learn, Pandas, NumPy, Selenium, TensorFlow ve Keras gibi kütüphaneleri sıkça kullandığım Python tabanlı veri bilimi iş akışları bulunmaktadır. Ayrıca OpenCV, MediaPipe ve özel veri setleri kullanarak uçtan uca bilgisayarlı görü uygulamaları geliştirdim.

JAX, ACL ve API entegrasyonları gibi araçları kullanarak veri erişim hatları, modelleme iş akışları ve otomatik süreçler oluşturarak MLOps konusunda deneyim kazandım. Ayrıca, veri çıkarma, dönüştürme ve analiz süreçlerinde SQL konusunda güçlü bir deneyime sahibim. Analitik içgörüleri etkili bir şekilde sunmak için Tableau, Power BI, Matplotlib ve Seaborn gibi araçları kullanarak net ve etkileyici görselleştirmeler yapıyorum.

Teknik çalışmalarımın ötesinde, üniversite topluluklarının her zaman aktif bir parçası oldum. Öğrenimim boyunca tiyatro, yazılım toplulukları ve Google Developer Groups (GDG) dahil olmak üzere çeşitli öğrenci kulüplerinde liderlik ve üyelik rolleri üstlendim. Ayrıca kampüs yaşamına ve toplum temelli projelere katkıda bulunarak birçok gönüllü girişimde yer aldım.

En gurur duyduğum başarılarımdan biri, binlerce başvuru arasından Google Yapay Zeka ve Teknoloji Akademisi için seçilen 2.000 veri bilimi bursiyerinden biri olmaktır. Bu program sayesinde ileri düzey teknik eğitimler almaya, yapay zeka ve veri bilimi projeleri geliştirmeye, datathonlara katılmaya ve uzmanlığımı sürekli güçlendirmeye devam ediyorum.

En güçlü motivasyonum, karmaşık verilerden içgörüler ortaya çıkarmak, akıllı sistemler inşa etmek ve anlamlı, gerçek dünya etkileri yaratan karar destek süreçlerine katkıda bulunmaktır.`,
};

const TYPEWRITER_TEXTS_TR = [
  "Ben Yapay Zeka Mühendisiyim",
  "Ben Bilgisayar Mühendisiyim",
  "Ben Makine Öğrenmesi Mühendisiyim",
  "Ben Yazılım Mühendisiyim"
];

const SKILLS_DATA_TR = SKILLS_DATA_EN;

const RESUME_DATA_TR = {
  experience: [
    {
      role: "Çekirdek Ekip Üyesi",
      company: "Kaggle Türkiye Topluluğu",
      period: "Haziran 2025 - Günümüz",
      description: "Türkiye'de yapay zeka ve veri bilimi etkinlikleri düzenlemek; küresel trendlerle uyum sağlamak ve yerel katılımı teşvik etmek için sponsorlukları ve ortaklıkları yönetmek."
    },
    {
      role: "Veri Bilimi Bursiyeri",
      company: "Google Yapay Zeka ve Teknoloji Akademisi",
      period: "Kasım 2024 - Günümüz",
      description: "Hackathonlara, girişimcilik eğitimlerine ve veri bilimi yarışmalarına katılarak değerli proje yönetimi deneyimi kazandım ve veri bilimi topluluğunda güçlü bir profesyonel ağ oluşturdum."
    },
    {
      role: "Katılımcı - Eğitmen (Yarı Zamanlı)",
      company: "Outlier",
      period: "Kasım 2024 - Günümüz",
      description: "Outlier'da dil modellerini optimize ederek ve deneyler yaparak yapay zeka modellerini eğitmek üzerine yarı zamanlı çalıştım."
    },
    {
      role: "Gönüllü",
      company: "T3 Vakfı",
      period: "Nisan 2024 - Günümüz",
      description: "Makine Öğrenimi, Bilgisayarlı Görü ve Derin Öğrenme girişimlerinde gönüllü olarak yer alıyorum."
    },
    {
      role: "Erasmus+ Değişim Stajyeri",
      company: "Ljubljana Üniversitesi Bilgisayarlı Görü Laboratuvarı",
      period: "Şubat 2024 - Ağustos 2024",
      description: "Makine öğrenimi, bilgisayarlı görü ve derin öğrenme alanlarında araştırmalar yürüttüm. Görsel verileri analiz etmek ve anlamlı içgörüler elde etmek için gelişmiş algoritmalar ve sinir ağları kullanarak gerçek dünya bilgisayarlı görü projelerinde çalıştım."
    },
    {
      role: "Stajyer Mühendis",
      company: "SANKO Holding A.Ş (SANShine)",
      period: "Temmuz 2023 - Ekim 2023",
      description: "SAP, ABAP, SQL, C# ve .NET Form teknolojileriyle çalışarak ERP sistem entegrasyonu ve yönetimine yardımcı oldum. Şirket operasyonları için iç araçların geliştirilmesine ve optimizasyonuna katkıda bulundum."
    },
    {
      role: "Etkinlik Organizatörü",
      company: "HKU GDSC Çekirdek Ekip Üyesi",
      period: "Eylül 2023 - Mayıs 2024",
      description: "Teknoloji etkinlikleri düzenledim, sponsorlukları yönettim ve topluluk katılımını artırmak ve öğrencilere değerli fırsatlar sunmak için ortaklıklar kurdum."
    },
    {
      role: "Proje Ekip Koordinatörü",
      company: "2209 TUBITAK",
      period: "Ekim 2023 - Nisan 2024",
      description: "Üniversite Öğrencileri Araştırma Projeleri Destek Programı - Polis Okulları için VR Simülasyon Projesi (Proje Onaylandı). Web Programlama (PHP, CSS, HTML, Javascript), Oyun Geliştirme (Unity)."
    },
    {
      role: "Birebir Eğitim Gönüllüsü",
      company: "Bamboo Eğitim Platformu",
      period: "Ekim 2022 - Aralık 2024",
      description: "Bir lise öğrencisine gönüllü matematik özel dersi verdim."
    }
  ],
  education: [
    {
      school: "Hasan Kalyoncu Üniversitesi",
      degree: "Bilgisayar Mühendisliği (İngilizce) - Lisans Derecesi",
      period: "2019-2025",
      detail: "Tam Burslu"
    },
    {
      school: "Ljubljana Üniversitesi",
      degree: "Erasmus+ Değişimi",
      period: "2024",
      detail: "Bilgisayarlı Görü Laboratuvarı"
    },
    {
      school: "Gaziantep Anadolu Lisesi",
      degree: "Lise",
      period: "",
      detail: "(TÜRKİYE)"
    }
  ],
  skills: {
    technical: SKILLS_DATA_EN[0].skills.concat(SKILLS_DATA_EN[1].skills, SKILLS_DATA_EN[2].skills, SKILLS_DATA_EN[3].skills), 
    soft: [
      "Takım Çalışması", "Dürüstlük", "Liderlik", "Analitik Problem Çözme"
    ]
  },
  skillsDisplay: {
    technical: [
      "Python", "SQL", "Machine Learning", "Deep Learning", "Computer Vision", 
      "Data Science", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Keras", "OpenCV", 
      "Tableau", "Power BI", "Git", "C#", ".NET", "SAP/ABAP", "MediaPipe", "JAX", "Selenium"
    ],
    soft: [
      "Takım Çalışması", "Dürüstlük", "Liderlik", "Analitik Problem Çözme"
    ]
  },
  languages: [
    { name: "İngilizce", level: "IELTS: B2" },
    { name: "Almanca", level: "A2" },
    { name: "Türkçe", level: "Anadil" }
  ],
  certificates: [
    "Google AI Essentials (Google)",
    "IELTS Sertifikası (Seviye: B2)",
    "İleri Veri Analitiği (Coursera - Google)",
    "Miuul Makine Öğrenmesi",
    "Makine Öğrenmesi için Python (AI Business School)",
    "Google Proje Yönetimi (Coursera - Google)",
    "Veri Analizi Bootcamp (Global AI Hub)",
    "E-Commerce Masterclass (The Dot Academy)"
  ],
  hobbies: [
    "Yoga Yapmak", "Piyano Çalmak", "Amatör Tiyatro Oyunculuğu", "Satranç Oynamak", "Çizim Yapmak"
  ],
  references: [
    {
      name: "Prof. Dr. Muhammet Fatih HASOĞLU",
      title: "Hasan Kalyoncu Üniversitesi Bilgisayar Mühendisliği Bölüm Başkanı",
      contact: "Referansların iletişim bilgileri talep üzerine sunulur"
    },
    {
      name: "Ersan TAN (Sanko Holding)",
      title: "Lojistik Müdürü (İK/MM/EWM)",
      contact: "Referansların iletişim bilgileri talep üzerine sunulur"
    }
  ]
};

const SKILLS_DATA_TR_RESUME = {
    technical: SKILLS_DATA_EN.flatMap(s => s.skills),
    soft: RESUME_DATA_TR.skills.soft
};
RESUME_DATA_TR.skills = SKILLS_DATA_TR_RESUME as any;


/* ---------------- GERMAN DATA (DE) ---------------- */

const PERSONAL_INFO_DE = {
  ...PERSONAL_INFO_EN,
  title: "DATA SCIENTIST / KI- & COMPUTER-INGENIEURIN",
  about: `Mein Bachelor-Studium in Computer Engineering (Englisch, Vollstipendium) an der Hasan Kalyoncu University schloss ich im Januar 2025 ab. Während meiner gesamten akademischen Laufbahn sammelte ich umfassende praktische Erfahrungen durch nationale und internationale Praktika, Forschungsprojekte sowie akademisch-industrielle Kooperationen, insbesondere in den Bereichen Data Science, Künstliche Intelligenz und Softwareentwicklung.

Im Sommer 2023 absolvierte ich mein Langzeitpraktikum bei der Sanko Holding, einem der größten Unternehmen in der Region Südostanatolien. Dort arbeitete ich aktiv an ERP-Systemen wie C#, .NET, C# Windows Forms und SAP/ABAP. Während dieses Praktikums war ich an produktionsreifen Projekten beteiligt, trug direkt zur Code-Entwicklung bei und kollaborierte mit funktionsübergreifenden Teams in realen Unternehmensumgebungen.

In meinem Abschlussjahr erhielt ich ein Erasmus+-Stipendium und absolvierte ein viermonatiges internationales Praktikum an der Universität Ljubljana, Fakultät für Computer- und Informationswissenschaft, wo ich in einem Computer Vision Laboratory tätig war. In dieser Rolle trug ich zur Computer Vision-Forschung, zur Vorbereitung von Datensätzen, zu Modellexperimenten und verschiedenen Python-basierten CV-Pipelines bei, wodurch ich meine Expertise im Deep Learning und in Bildverarbeitungstechnologien vertiefte.

Zu meinen wichtigsten technischen Interessen gehören Maschinelles Lernen, Deep Learning, Computer Vision, Datenanalyse und Datenmanipulation. Ich habe umfangreiche Arbeiten in den Bereichen Datenbereinigung, Feature Engineering und Modellierung mit Techniken wie XGBoost, Random Forest, Segmentierungsmodellen, Bayes-Ansätzen, Entscheidungsbäumen und Ensemble-Learning durchgeführt. Meine Projekterfahrung umfasst Python-basierte Data-Science-Workflows, bei denen ich häufig Bibliotheken wie Scikit-learn, Pandas, NumPy, Selenium, TensorFlow und Keras einsetze. Zudem habe ich End-to-End-Computer Vision-Anwendungen unter Verwendung von OpenCV, MediaPipe und benutzerdefinierten Datensätzen entwickelt.

Durch den Aufbau von Datenzugriffspipelines, Modellierungs-Workflows und automatisierten Prozessen mithilfe von Tools wie JAX, ACL und API-Integrationen erhielt ich Einblicke in MLOps. Darüber hinaus verfüge ich über fundierte Erfahrung mit SQL zur Datenextraktion, -transformation und -analyse. Um analytische Erkenntnisse effektiv zu präsentieren, verwende ich Tableau, Power BI, Matplotlib, und Seaborn für klare und wirkungsvolle Visualisierungen.

Über die technische Arbeit hinaus war ich stets aktives Mitglied in verschiedenen Universitätsgemeinschaften. Während meines Studiums übernahm ich Führungs- und Mitgliedsrollen in mehreren Studentenclubs, darunter Theater, Software-Communitys und Google Developer Groups (GDG). Ich beteiligte mich auch an zahlreichen Freiwilligeninitiativen und leistete einen Beitrag zum Campusleben und zu gemeinschaftsbasierten Projekten.

Eine meiner stolzesten Errungenschaften ist die Auswahl als eine von 2.000 Data Science-Stipendiaten unter Tausenden von Bewerbern für die Google Artificial Intelligence and Technology Academy. Im Rahmen dieses Programms erhalte ich weiterhin fortgeschrittene technische Schulungen, entwickle KI- und Data Science-Projekte, nehme an Datathons teil und festige kontinuierlich meine Expertise.

Meine stärkste Motivation liegt darin, Erkenntnisse aus komplexen Daten zu gewinnen, intelligente Systeme aufzubauen und zu Entscheidungsfindungsprozessen beizutragen, die eine sinnvolle, reale Wirkung erzielen.`,
};

const TYPEWRITER_TEXTS_DE = [
  "Ich bin KI-Ingenieurin",
  "Ich bin Computer-Ingenieurin",
  "Ich bin Machine Learning Ingenieurin",
  "Ich bin Software-Ingenieurin"
];

const SKILLS_DATA_DE = SKILLS_DATA_EN;

const RESUME_DATA_DE = {
  experience: [
    {
      role: "Kernteam-Mitglied",
      company: "Kaggle Türkiye Community",
      period: "Juni 2025 - Heute",
      description: "Organisation von KI- und Data-Science-Events in der Türkei; Verwaltung von Sponsoring und Partnerschaften."
    },
    {
      role: "Data Science Stipendiatin",
      company: "Google AI & Technology Academy",
      period: "November 2024 - Heute",
      description: "Sammeln wertvoller Projektmanagement-Erfahrungen durch Teilnahme an Hackathons, Unternehmerschulungen und Data-Science-Wettbewerben."
    },
    {
      role: "Mitwirkende - Trainerin (Teilzeit)",
      company: "Outlier",
      period: "November 2024 - Heute",
      description: "Teilzeitarbeit am Training von KI-Modellen durch Optimierung und Experimentieren mit Sprachmodellen."
    },
    {
      role: "Freiwillige",
      company: "T3 Foundation",
      period: "April 2024 - Heute",
      description: "Freiwilligenarbeit in Initiativen für Maschinelles Lernen, Computer Vision und Deep Learning."
    },
    {
      role: "Erasmus+ Austauschpraktikantin",
      company: "Universität Ljubljana Computer Vision Labor",
      period: "Februar 2024 - August 2024",
      description: "Forschung im Bereich maschinelles Lernen, Computer Vision und Deep Learning. Arbeit an realen Computer-Vision-Projekten."
    },
    {
      role: "Ingenieurspraktikantin",
      company: "SANKO Holding A.Ş (SANShine)",
      period: "Juli 2023 - Oktober 2023",
      description: "Unterstützung bei der Integration und Verwaltung von ERP-Systemen (SAP, ABAP, SQL, C#, .NET)."
    },
    {
      role: "Event-Organisatorin",
      company: "HKU GDSC Kernteam-Mitglied",
      period: "September 2023 - Mai 2024",
      description: "Organisation von Technologie-Events, Verwaltung von Sponsoring und Förderung von Partnerschaften."
    },
    {
      role: "Projektteam-Koordinatorin",
      company: "2209 TUBITAK",
      period: "Oktober 2023 - April 2024",
      description: "Forschungsprojekt-Unterstützungsprogramm für Universitätsstudenten - VR-Simulationsprojekt."
    },
    {
      role: "Eins-zu-Eins-Trainingsfreiwillige",
      company: "Bamboo Training Platform",
      period: "Oktober 2022 - Dezember 2024",
      description: "Freiwillige Mathematik-Nachhilfe für einen Oberschüler."
    }
  ],
  education: [
    {
      school: "Hasan Kalyoncu Universität",
      degree: "Computertechnik (Englisch) - Bachelor-Abschluss",
      period: "2019-2025",
      detail: "Vollstipendium"
    },
    {
      school: "Universität Ljubljana",
      degree: "Erasmus+ Austausch",
      period: "2024",
      detail: "Computer Vision Labor"
    },
    {
      school: "Gaziantep Anatolian High School",
      degree: "Oberschule",
      period: "",
      detail: "(TÜRKİYE)"
    }
  ],
  skills: {
    technical: SKILLS_DATA_EN[0].skills.concat(SKILLS_DATA_EN[1].skills, SKILLS_DATA_EN[2].skills, SKILLS_DATA_EN[3].skills),
    soft: [
      "Teamarbeit", "Integrität", "Führung", "Analytische Problemlösung"
    ]
  },
  languages: [
    { name: "Englisch", level: "IELTS: B2" },
    { name: "Deutsch", level: "A2" },
    { name: "Türkisch", level: "Muttersprache" }
  ],
  certificates: [
    "Google AI Essentials (Google)",
    "IELTS Zertifikat (Level: B2)",
    "Advanced Data Analytics (Coursera - Google)",
    "Miuul Machine Learning",
    "Python für Machine Learning (AI Business School)",
    "Google Projektmanagement (Coursera - Google)",
    "Data Analysis Bootcamp (Global AI Hub)",
    "E-Commerce Masterclass (The Dot Academy)"
  ],
  hobbies: [
    "Yoga", "Klavier spielen", "Amateurtheater", "Schach", "Zeichnen"
  ],
  references: RESUME_DATA_EN.references
};

const SKILLS_DATA_DE_RESUME = {
    technical: SKILLS_DATA_EN.flatMap(s => s.skills),
    soft: RESUME_DATA_DE.skills.soft
};
RESUME_DATA_DE.skills = SKILLS_DATA_DE_RESUME as any;


/* ---------------- SPANISH DATA (ES) ---------------- */

const PERSONAL_INFO_ES = {
  ...PERSONAL_INFO_EN,
  title: "CIENTÍFICA DE DATOS / ING. DE IA Y COMPUTACIÓN",
  about: `Me gradué en enero de 2025 de la Hasan Kalyoncu University con una Licenciatura en Ingeniería Informática (en inglés, con beca completa). A lo largo de mi trayectoria académica, adquirí una amplia experiencia práctica a través de pasantías nacionales e internacionales, proyectos de investigación y colaboraciones académico-industriales, especialmente en los campos de ciencia de datos, inteligencia artificial y desarrollo de software.
En el verano de 2023, completé mi pasantía de larga duración en Sanko Holding, una de las empresas más grandes de la Región de Anatolia Sudoriental. Allí, trabajé activamente en sistemas ERP como C#, .NET, C# Windows Forms y SAP/ABAP. Durante esta pasantía, participé en proyectos listos para producción, contribuí directamente al desarrollo de código y colaboré con equipos multifuncionales en entornos empresariales reales.
Durante mi último año, obtuve una beca Erasmus+ y completé una pasantía internacional de 4 meses en la Universidad de Liubliana, Facultad de Ciencias de la Computación e Informática, donde trabajé en un Laboratorio de Visión por Computadora. En este rol, contribuí a la investigación de visión por computadora, la preparación de conjuntos de datos, la experimentación de modelos y varios pipelines de CV basados en Python, fortaleciendo mi experiencia en aprendizaje profundo y tecnologías de procesamiento de imágenes.
Mis principales intereses técnicos incluyen aprendizaje automático (machine learning), aprendizaje profundo (deep learning), visión por computadora, análisis de datos y manipulación de datos. He trabajado extensamente en limpieza de datos, ingeniería de características y modelado utilizando técnicas como XGBoost, Random Forest, modelos de segmentación, enfoques bayesianos, Árboles de Decisión y aprendizaje de conjuntos (ensemble learning). Mi experiencia en proyectos incluye workflows de ciencia de datos basados en Python, donde utilizo frecuentemente librerías como Scikit-learn, Pandas, NumPy, Selenium, TensorFlow y Keras. También he desarrollado aplicaciones de visión por computadora end-to-end utilizando OpenCV, MediaPipe y conjuntos de datos personalizados.
Obtuve exposición a MLOps mediante la construcción de pipelines de acceso a datos, workflows de modelado y procesos automatizados utilizando herramientas como JAX, ACL e integraciones de API. Además, tengo una sólida experiencia con SQL para la extracción, transformación y análisis de datos. Para presentar insights analíticos de manera efectiva, utilizo Tableau, Power BI, Matplotlib y Seaborn para visualizaciones claras e impactantes.
Más allá del trabajo técnico, siempre he sido una parte activa de las comunidades universitarias. A lo largo de mis estudios, asumí roles de liderazgo y miembro en varios clubes estudiantiles, incluyendo teatro, comunidades de software y Google Developer Groups (GDG). También participé en múltiples iniciativas de voluntariado, contribuyendo a la vida del campus y a proyectos basados en la comunidad.
Uno de mis logros más destacados es haber sido seleccionada como una de las 2,000 becarias de ciencia de datos entre miles de solicitantes para la Google Artificial Intelligence and Technology Academy. A través de este programa, continúo recibiendo capacitación técnica avanzada, construyendo proyectos de IA y ciencia de datos, participando en datathons, y fortaleciendo constantemente mi experiencia.
Mi mayor motivación reside en descubrir insights a partir de datos complejos, construir sistemas inteligentes y contribuir a procesos de apoyo a la toma de decisiones que generen un impacto significativo en el mundo real.`,
};

const TYPEWRITER_TEXTS_ES = [
  "Soy Ingeniera de IA",
  "Soy Ingeniera Informática",
  "Soy Ingeniera de Machine Learning",
  "Soy Ingeniera de Software"
];

const SKILLS_DATA_ES = SKILLS_DATA_EN;

const RESUME_DATA_ES = {
  experience: [
    {
      role: "Miembro del Equipo Central",
      company: "Comunidad Kaggle Türkiye",
      period: "Junio 2025 - Presente",
      description: "Organización de eventos de IA y ciencia de datos en Turquía; gestión de patrocinios y asociaciones."
    },
    {
      role: "Becaria de Ciencia de Datos",
      company: "Google AI & Technology Academy",
      period: "Noviembre 2024 - Presente",
      description: "Adquirí valiosa experiencia en gestión de proyectos participando en hackatones, capacitación empresarial y competencias de ciencia de datos."
    },
    {
      role: "Colaboradora - Entrenadora (Tiempo Parcial)",
      company: "Outlier",
      period: "Noviembre 2024 - Presente",
      description: "Trabajé a tiempo parcial entrenando modelos de IA mediante la optimización y experimentación con modelos de lenguaje."
    },
    {
      role: "Voluntaria",
      company: "Fundación T3",
      period: "Abril 2024 - Presente",
      description: "Voluntariado en iniciativas de Aprendizaje Automático, Visión por Computadora y Aprendizaje Profundo."
    },
    {
      role: "Pasante de Intercambio Erasmus+",
      company: "Laboratorio de Visión por Computadora, Univ. de Liubliana",
      period: "Febrero 2024 - Agosto 2024",
      description: "Realicé investigaciones en el campo del aprendizaje automático, visión por computadora y aprendizaje profundo."
    },
    {
      role: "Ingeniera Pasante",
      company: "SANKO Holding A.Ş (SANShine)",
      period: "Julio 2023 - Octubre 2023",
      description: "Asistí en la integración y gestión de sistemas ERP, incluyendo trabajo con SAP, ABAP, SQL, C# y .NET."
    },
    {
      role: "Organizadora de Eventos",
      company: "Miembro del Equipo Central HKU GDSC",
      period: "Septiembre 2023 - Mayo 2024",
      description: "Organicé eventos tecnológicos, gestioné patrocinios y facilité asociaciones para mejorar la participación comunitaria."
    },
    {
      role: "Coordinadora del Equipo de Proyecto",
      company: "2209 TUBITAK",
      period: "Octubre 2023 - Abril 2024",
      description: "Programa de Apoyo a Proyectos de Investigación de Estudiantes Universitarios - Proyecto de Simulación VR."
    },
    {
      role: "Voluntaria de Entrenamiento Individual",
      company: "Plataforma de Entrenamiento Bamboo",
      period: "Octubre 2022 - Diciembre 2024",
      description: "Proporcioné tutoría voluntaria de matemáticas a un estudiante de secundaria."
    }
  ],
  education: [
    {
      school: "Universidad Hasan Kalyoncu",
      degree: "Ingeniería Informática (Inglés) - Licenciatura",
      period: "2019-2025",
      detail: "Beca Completa"
    },
    {
      school: "Universidad de Liubliana",
      degree: "Intercambio Erasmus+",
      period: "2024",
      detail: "Laboratorio de Visión por Computadora"
    },
    {
      school: "Escuela Secundaria de Anatolia Gaziantep",
      degree: "Escuela Secundaria",
      period: "",
      detail: "(TURQUÍA)"
    }
  ],
  skills: {
    technical: SKILLS_DATA_EN[0].skills.concat(SKILLS_DATA_EN[1].skills, SKILLS_DATA_EN[2].skills, SKILLS_DATA_EN[3].skills),
    soft: [
      "Trabajo en Equipo", "Integridad", "Liderazgo", "Resolución Analítica de Problemas"
    ]
  },
  languages: [
    { name: "Inglés", level: "IELTS: B2" },
    { name: "Alemán", level: "A2" },
    { name: "Turco", level: "Nativo" }
  ],
  certificates: [
    "Google AI Essentials (Google)",
    "Certificado IELTS (Nivel: B2)",
    "Análisis de Datos Avanzado (Coursera - Google)",
    "Aprendizaje Automático Miuul",
    "Python para Aprendizaje Automático (AI Business School)",
    "Gestión de Proyectos de Google (Coursera - Google)",
    "Bootcamp de Análisis de Datos (Global AI Hub)",
    "Clase Magistral de Comercio Electrónico (The Dot Academy)"
  ],
  hobbies: [
    "Hacer Yoga", "Tocar el Piano", "Actuación Teatral Amateur", "Jugar Ajedrez", "Dibujar"
  ],
  references: RESUME_DATA_EN.references
};

const SKILLS_DATA_ES_RESUME = {
    technical: SKILLS_DATA_EN.flatMap(s => s.skills),
    soft: RESUME_DATA_ES.skills.soft
};
RESUME_DATA_ES.skills = SKILLS_DATA_ES_RESUME as any;


/* ---------------- UI TEXTS ---------------- */

const UI_LABELS = {
  en: {
    nav: { home: 'Home', resume: 'Resume / CV', projects: 'Projects', contact: 'Contact' },
    hero: {
      welcome: 'Welcome to my portfolio',
      hi: "Hi, It's",
      iam: "I am",
      desc_part1: "I am passionate about uncovering the story behind complex data and transforming these stories into concrete, actionable insights. By continuously developing myself in the world of",
      desc_highlight1: "machine learning",
      desc_part2: ",",
      desc_highlight2: "artificial intelligence systems",
      desc_part3: ", and",
      desc_highlight3: "data science",
      desc_part4: ", I am advancing towards creating smart, user-focused solutions that fuel innovation.",
      viewProjects: "View Projects",
      downloadCv: "Download CV"
    },
    about: {
      title: "About",
      me: "Me",
      certificates: "Certificates"
    },
    skills: {
      title: "Technical",
      highlight: "Skills",
      subtitle: "My technical expertise and toolkit"
    },
    projects: {
      title: "My",
      highlight: "Projects",
      desc: "Explore my technical portfolio across various domains. Click on a category to view detailed projects.",
      viewCategory: "View Category"
    },
    contact: {
      tag: "Contact Me",
      title: "Let's Work",
      highlight: "Together",
      desc: "I'm currently open for new opportunities and collaborations in AI, Data Science, and Software Engineering. Have a project in mind or just want to say hi? I'd love to hear from you.",
      emailLabel: "Email Me",
      locationLabel: "Location",
      connectLabel: "Connect with me",
      formTitle: "Send me a message",
      nameLabel: "Your Name",
      emailInputLabel: "Your Email",
      messageLabel: "Message",
      sendButton: "Send Message",
      rights: "All Rights Reserved."
    },
    resume: {
      myProjects: "My Projects",
      aboutMe: "About Me",
      workExp: "Work Experience",
      education: "Education",
      languages: "Languages",
      certificates: "Certificates",
      technicalSkills: "Technical Skills",
      softSkills: "Soft Skills",
      references: "References",
      hobbies: "Hobbies"
    },
    projectList: {
      back: "Back",
      liveDemo: "Live Demo",
      code: "Code",
      noProjects: "No projects found",
      tryFilters: "Try adjusting the filters."
    },
    modal: {
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      comingSoon: "Projects Coming Soon...",
      workingOn: "I'm currently working on some exciting things in this domain."
    }
  },
  tr: {
    nav: { home: 'Anasayfa', resume: 'Özgeçmiş', projects: 'Projeler', contact: 'İletişim' },
    hero: {
      welcome: 'Portföyüme hoş geldiniz',
      hi: "Merhaba, Ben",
      iam: "Ben",
      desc_part1: "Karmaşık verileri eyleme dönüştürülebilir içgörülere çevirme konusunda tutkuluyum.",
      desc_highlight1: "Makine Öğrenimi",
      desc_part2: ",",
      desc_highlight2: "Yapay Zeka",
      desc_part3: " ve",
      desc_highlight3: "Veri Bilimi",
      desc_part4: " alanlarındaki deneyimlerimle, inovasyonu yönlendiren akıllı çözümler geliştiriyorum.",
      viewProjects: "Projeleri Gör",
      downloadCv: "CV İndir"
    },
    about: {
      title: "Hakkımda",
      me: "", 
      certificates: "Sertifikalar"
    },
    skills: {
      title: "Teknik",
      highlight: "Yetenekler",
      subtitle: "Teknik uzmanlığım ve araç setim"
    },
    projects: {
      title: "Projelerim",
      highlight: "",
      desc: "Çeşitli alanlardaki teknik portföyümü keşfedin. Detaylı projeleri görmek için bir kategoriye tıklayın.",
      viewCategory: "Kategoriyi İncele"
    },
    contact: {
      tag: "Bana Ulaşın",
      title: "Birlikte",
      highlight: "Çalışalım",
      desc: "Şu anda Yapay Zeka, Veri Bilimi ve Yazılım Mühendisliği alanlarında yeni fırsatlara ve iş birliklerine açığım. Aklınızda bir proje mi var ya da sadece merhaba demek mi istiyorsunuz? Sizi duymaktan memnuniyet duyarım.",
      emailLabel: "Bana E-posta Gönder",
      locationLabel: "Konum",
      connectLabel: "Benimle Bağlantı Kurun",
      formTitle: "Bana mesaj gönder",
      nameLabel: "Adınız",
      emailInputLabel: "E-postanız",
      messageLabel: "Mesajınız",
      sendButton: "Mesaj Gönder",
      rights: "Tüm Hakları Saklıdır."
    },
    resume: {
      myProjects: "Projelerim",
      aboutMe: "Hakkımda",
      workExp: "İş Deneyimi",
      education: "Eğitim",
      languages: "Diller",
      certificates: "Sertifikalar",
      technicalSkills: "Teknik Yetenekler",
      softSkills: "Yetenekler",
      references: "Referanslar",
      hobbies: "Hobiler"
    },
    projectList: {
      back: "Geri",
      liveDemo: "Canlı Demo",
      code: "Kod",
      noProjects: "Proje bulunamadı",
      tryFilters: "Filtreleri değiştirmeyi deneyin."
    },
    modal: {
      liveDemo: "Canlı Demo",
      sourceCode: "Kaynak Kodu",
      comingSoon: "Projeler Yakında...",
      workingOn: "Şu anda bu alanda heyecan verici şeyler üzerinde çalışıyorum."
    }
  },
  de: {
    nav: { home: 'Startseite', resume: 'Lebenslauf / CV', projects: 'Projekte', contact: 'Kontakt' },
    hero: {
      welcome: 'Willkommen in meinem Portfolio',
      hi: "Hallo, Ich bin",
      iam: "Ich bin",
      desc_part1: "Leidenschaftlich darin, komplexe Daten in umsetzbare Erkenntnisse zu verwandeln. Mit Expertise in",
      desc_highlight1: "Maschinellem Lernen",
      desc_part2: ",",
      desc_highlight2: "KI-Systemen",
      desc_part3: " und",
      desc_highlight3: "Data Science",
      desc_part4: " baue ich intelligente Lösungen, die Innovation vorantreiben.",
      viewProjects: "Projekte ansehen",
      downloadCv: "CV herunterladen"
    },
    about: {
      title: "Über",
      me: "Mich",
      certificates: "Zertifikate"
    },
    skills: {
      title: "Technische",
      highlight: "Fähigkeiten",
      subtitle: "Meine technische Expertise und Werkzeuge"
    },
    projects: {
      title: "Meine",
      highlight: "Projekte",
      desc: "Entdecken Sie mein technisches Portfolio in verschiedenen Bereichen. Klicken Sie auf eine Kategorie, um detaillierte Projekte anzuzeigen.",
      viewCategory: "Kategorie ansehen"
    },
    contact: {
      tag: "Kontaktieren Sie mich",
      title: "Lassen Sie uns",
      highlight: "zusammenarbeiten",
      desc: "Ich bin derzeit offen für neue Möglichkeiten und Kooperationen in den Bereichen KI, Data Science und Software Engineering. Haben Sie ein Projekt im Sinn oder möchten Sie einfach nur Hallo sagen? Ich würde mich freuen, von Ihnen zu hören.",
      emailLabel: "Schreiben Sie mir",
      locationLabel: "Standort",
      connectLabel: "Vernetzen Sie sich mit mir",
      formTitle: "Senden Sie mir eine Nachricht",
      nameLabel: "Ihr Name",
      emailInputLabel: "Ihre E-Mail",
      messageLabel: "Nachricht",
      sendButton: "Nachricht senden",
      rights: "Alle Rechte vorbehalten."
    },
    resume: {
      myProjects: "Meine Projekte",
      aboutMe: "Über mich",
      workExp: "Berufserfahrung",
      education: "Ausbildung",
      languages: "Sprachen",
      certificates: "Zertifikate",
      technicalSkills: "Technische Fähigkeiten",
      softSkills: "Soft Skills",
      references: "Referenzen",
      hobbies: "Hobbys"
    },
    projectList: {
      back: "Zurück",
      liveDemo: "Live-Demo",
      code: "Code",
      noProjects: "Keine Projekte gefunden",
      tryFilters: "Versuchen Sie, die Filter anzupassen."
    },
    modal: {
      liveDemo: "Live-Demo",
      sourceCode: "Quellcode",
      comingSoon: "Projekte folgen bald...",
      workingOn: "Ich arbeite derzeit an einigen spannenden Dingen in diesem Bereich."
    }
  },
  es: {
    nav: { home: 'Inicio', resume: 'Currículum / CV', projects: 'Proyectos', contact: 'Contacto' },
    hero: {
      welcome: 'Bienvenido a mi portafolio',
      hi: "Hola, Soy",
      iam: "Soy",
      desc_part1: "Apasionada por transformar datos complejos en conocimientos prácticos. Con experiencia en",
      desc_highlight1: "Aprendizaje Automático",
      desc_part2: ",",
      desc_highlight2: "sistemas de IA",
      desc_part3: " y",
      desc_highlight3: "Ciencia de Datos",
      desc_part4: ", construyo soluciones inteligentes que impulsan la innovación.",
      viewProjects: "Ver Proyectos",
      downloadCv: "Descargar CV"
    },
    about: {
      title: "Sobre",
      me: "Mí",
      certificates: "Certificados"
    },
    skills: {
      title: "Habilidades",
      highlight: "Técnicas",
      subtitle: "Mi experiencia técnica y herramientas"
    },
    projects: {
      title: "Mis",
      highlight: "Proyectos",
      desc: "Explore mi portafolio técnico en varios dominios. Haga clic en una categoría para ver proyectos detallados.",
      viewCategory: "Ver Categoría"
    },
    contact: {
      tag: "Contáctame",
      title: "Trabajemos",
      highlight: "Juntos",
      desc: "Actualmente estoy abierta a nuevas oportunidades y colaboraciones en IA, Ciencia de Datos e Ingeniería de Software. ¿Tienes un proyecto en mente o simplemente quieres saludar? Me encantaría saber de ti.",
      emailLabel: "Envíame un correo",
      locationLabel: "Ubicación",
      connectLabel: "Conéctate conmigo",
      formTitle: "Envíame un mensaje",
      nameLabel: "Tu Nombre",
      emailInputLabel: "Tu Correo",
      messageLabel: "Mensaje",
      sendButton: "Enviar Mensaje",
      rights: "Todos los derechos reservados."
    },
    resume: {
      myProjects: "Mis Proyectos",
      aboutMe: "Sobre Mí",
      workExp: "Experiencia Laboral",
      education: "Educación",
      languages: "Idiomas",
      certificates: "Certificados",
      technicalSkills: "Habilidades Técnicas",
      softSkills: "Habilidades Blandas",
      references: "Referencias",
      hobbies: "Pasatiempos"
    },
    projectList: {
      back: "Atrás",
      liveDemo: "Demo en Vivo",
      code: "Código",
      noProjects: "No se encontraron proyectos",
      tryFilters: "Intenta ajustar los filtros."
    },
    modal: {
      liveDemo: "Demo en Vivo",
      sourceCode: "Código Fuente",
      comingSoon: "Proyectos Próximamente...",
      workingOn: "Actualmente estoy trabajando en algunas cosas emocionantes en este dominio."
    }
  }
};

/* ---------------- EXPORTS ---------------- */

// Create the translated category arrays using the helper
const PROJECT_CATEGORIES_TR = createLocalizedCategories(PROJECT_CATEGORIES_EN, TR_TRANSLATIONS);
const PROJECT_CATEGORIES_DE = createLocalizedCategories(PROJECT_CATEGORIES_EN, DE_TRANSLATIONS);
const PROJECT_CATEGORIES_ES = createLocalizedCategories(PROJECT_CATEGORIES_EN, ES_TRANSLATIONS);

export const DATA_EN = {
  PERSONAL_INFO: PERSONAL_INFO_EN,
  SOCIAL_LINKS,
  TYPEWRITER_TEXTS: TYPEWRITER_TEXTS_EN,
  SKILLS_DATA: SKILLS_DATA_EN,
  PROJECT_CATEGORIES: PROJECT_CATEGORIES_EN,
  // We recreate the categories mapped array for each lang to ensure navigation works
  CATEGORIES: PROJECT_CATEGORIES_EN.map(({ id, title, count, emoji, path, gradient }) => ({
    id, title, count, emoji, path, gradient
  })),
  RESUME_DATA: RESUME_DATA_EN,
  UI: UI_LABELS.en
};

export const DATA_TR = {
  PERSONAL_INFO: PERSONAL_INFO_TR,
  SOCIAL_LINKS,
  TYPEWRITER_TEXTS: TYPEWRITER_TEXTS_TR,
  SKILLS_DATA: SKILLS_DATA_TR,
  PROJECT_CATEGORIES: PROJECT_CATEGORIES_TR,
  CATEGORIES: PROJECT_CATEGORIES_TR.map(({ id, title, count, emoji, path, gradient }) => ({
    id, title, count, emoji, path, gradient
  })),
  RESUME_DATA: RESUME_DATA_TR,
  UI: UI_LABELS.tr
};

export const DATA_DE = {
  PERSONAL_INFO: PERSONAL_INFO_DE,
  SOCIAL_LINKS,
  TYPEWRITER_TEXTS: TYPEWRITER_TEXTS_DE,
  SKILLS_DATA: SKILLS_DATA_DE,
  PROJECT_CATEGORIES: PROJECT_CATEGORIES_DE,
  CATEGORIES: PROJECT_CATEGORIES_DE.map(({ id, title, count, emoji, path, gradient }) => ({
    id, title, count, emoji, path, gradient
  })),
  RESUME_DATA: RESUME_DATA_DE,
  UI: UI_LABELS.de
};

export const DATA_ES = {
  PERSONAL_INFO: PERSONAL_INFO_ES,
  SOCIAL_LINKS,
  TYPEWRITER_TEXTS: TYPEWRITER_TEXTS_ES,
  SKILLS_DATA: SKILLS_DATA_ES,
  PROJECT_CATEGORIES: PROJECT_CATEGORIES_ES,
  CATEGORIES: PROJECT_CATEGORIES_ES.map(({ id, title, count, emoji, path, gradient }) => ({
    id, title, count, emoji, path, gradient
  })),
  RESUME_DATA: RESUME_DATA_ES,
  UI: UI_LABELS.es
};

// For backward compatibility (if any files import directly) - defaulting to EN
export const PERSONAL_INFO = PERSONAL_INFO_EN;
export const TYPEWRITER_TEXTS = TYPEWRITER_TEXTS_EN;
export const SKILLS_DATA = SKILLS_DATA_EN;
export const PROJECT_CATEGORIES = PROJECT_CATEGORIES_EN;
export const CATEGORIES = DATA_EN.CATEGORIES;
export const RESUME_DATA = RESUME_DATA_EN;
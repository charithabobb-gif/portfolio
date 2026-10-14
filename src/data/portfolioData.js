export const personalInfo = {
  name: "Bobbili Charitha",
  shortName: "Charitha",
  title: "AI/ML Engineering Fresher",
  tagline: "Bridging Core Software Engineering & Predictive AI Solutions",
  email: "charithabobbili@gmail.com",
  phone: "9398806097",
  phoneFormatted: "+91 9398806097",
  location: "Hyderabad, India",
  github: "https://github.com/charithacherry12",
  githubHandle: "charithacherry12",
  linkedin: "https://linkedin.com/in/charitha-bobbili",
  linkedinHandle: "charitha-bobbili",
  resumePath: "/Charitha_resume.pdf",
  profileImage: "/charitha_profile.jpg",
  summary: "Motivated and detail-oriented AI/ML engineering fresher with hands-on experience in data preprocessing, model development, and neural networks, looking to apply AI solutions to real-world impact-driven projects.",
  typingWords: [
    "AI/ML Engineering Fresher",
    "Data Preprocessing & Model Developer",
    "Java & Software Enthusiast",
    "Neural Networks & Deep Learning Aspirant"
  ],
  bio: "I am a dedicated Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at TKR College of Engineering and Technology, Hyderabad. With a strong foundation in Core and Advanced Java combined with modern Machine Learning paradigms, I bridge the gap between clean object-oriented architecture and data-driven intelligence. I thrive in challenging environments where I can leverage predictive modeling and robust software practices to solve complex, real-world problems.",
  strengths: [
    {
      title: "Quick Learner & Adaptable",
      desc: "Proven ability to rapidly assimilate new technologies, frameworks, and engineering methodologies, staying agile in fast-evolving AI landscapes.",
      icon: "Zap",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Resilient Problem Solver",
      desc: "Demonstrated capacity to perform under pressure, meet strict deadlines, and deliver structured solutions with strong analytical and collaborative thinking.",
      icon: "ShieldCheck",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Data & Model Engineering",
      desc: "Deep focus on end-to-end data preprocessing pipelines, feature engineering, and neural network tuning for high accuracy predictive models.",
      icon: "BrainCircuit",
      color: "from-purple-500 to-pink-500"
    }
  ],
  stats: [
    { label: "B.Tech CGPA", value: "8.51", subtext: "TKR College (AI & ML)" },
    { label: "Intermediate", value: "98.6%", subtext: "Sri Chaitanya (MPC)" },
    { label: "SSC Board", value: "95.0%", subtext: "Sri Chaitanya Techno" },
    { label: "Enterprise Projects", value: "3+", subtext: "Java OOP & AI Models" }
  ]
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Skills" },
    { id: "programming", name: "Programming Languages" },
    { id: "aiml", name: "AI/ML & Data" },
    { id: "soft", name: "Soft Skills & Engineering" }
  ],
  skills: [
    // Programming Languages
    { name: "Core Java", category: "programming", level: 90, icon: "Coffee", desc: "OOP Principles, Exception Handling, Collections, Multithreading" },
    { name: "Advanced Java", category: "programming", level: 82, icon: "Layers", desc: "JDBC, Servlets, Enterprise Architecture, Modular Design" },
    { name: "HTML5", category: "programming", level: 95, icon: "Code", desc: "Semantic Markup, Accessibility, Modern DOM Structure" },
    { name: "CSS3", category: "programming", level: 90, icon: "Palette", desc: "Flexbox, CSS Grid, Glassmorphism, Responsive UI Design" },
    { name: "JavaScript", category: "programming", level: 85, icon: "Terminal", desc: "ES6+, DOM Manipulation, Async/Await, Interactive Web" },

    // Core Competencies AI/ML
    { name: "Machine Learning Concepts", category: "aiml", level: 88, icon: "Brain", desc: "Supervised & Unsupervised Learning, Regression, Classification, Clustering" },
    { name: "Data Preprocessing", category: "aiml", level: 92, icon: "FileSpreadsheet", desc: "Missing Value Imputation, Feature Scaling, Encoding, Outlier Detection" },
    { name: "Model Development", category: "aiml", level: 86, icon: "Cpu", desc: "Hyperparameter Tuning, Cross-Validation, Model Evaluation Metrics" },
    { name: "Neural Networks", category: "aiml", level: 84, icon: "Network", desc: "Feedforward Networks, Activation Functions, Backpropagation, Deep Architectures" },

    // Soft Skills
    { name: "Problem Solving", category: "soft", level: 95, icon: "Sparkles", desc: "Algorithmic Thinking, Root-Cause Analysis, Systematic Debugging" },
    { name: "Teamwork & Collaboration", category: "soft", level: 92, icon: "Users", desc: "Cross-functional communication, Agile mindset, Peer pair programming" },
    { name: "Time Management", category: "soft", level: 90, icon: "Clock", desc: "Deadline delivery, Prioritization, High pressure execution" }
  ]
};

export const projectsData = [
  {
    id: "hospital-management",
    title: "Hospital Patient Management System",
    category: "Java OOP",
    highlight: "Core Java Enterprise System",
    shortDesc: "Console-based patient record management system built in Core Java using OOP principles, handling patient registration, appointment scheduling, and record search/update.",
    fullDesc: "Designed and developed a comprehensive hospital patient administration suite implementing pure Object-Oriented Programming (OOP) concepts in Core Java. The system streamlines healthcare intake by managing patient demographics, physician allocation, dynamic appointment scheduling, and transactional health log updates.",
    features: [
      "Patient Registration with unique ID generation and medical history logging",
      "Dynamic Appointment Scheduling algorithm matching available doctor specialties",
      "Robust record search, status update, and historical consultation retrieval",
      "Strict data encapsulation preventing unauthorized patient record tampering",
      "Console-driven menu interface with rigorous exception handling and input validation"
    ],
    oopConcepts: [
      "Encapsulation: Secure Patient and Doctor entity state isolation via private fields and accessors",
      "Inheritance: Base Person class extended into Patient and Doctor classes",
      "Polymorphism: Overridden search methods allowing queries by ID, Name, or Department",
      "Abstraction: Interface-driven PatientService and AppointmentService contracts"
    ],
    tech: ["Core Java", "OOP Principles", "Data Structures", "Exception Handling", "Console UI"],
    githubUrl: "https://github.com/charithacherry12/Hospital-Patient-Management-System",
    demoUrl: "#projects",
    featured: true,
    codeSnippet: `// Core OOP Patient Model Demonstration
public class Patient extends Person {
    private String patientId;
    private String ailmentCategory;
    private Appointment currentAppointment;

    public Patient(String name, int age, String phone, String ailment) {
        super(name, age, phone);
        this.patientId = "PAT-" + System.currentTimeMillis() % 10000;
        this.ailmentCategory = ailment;
    }

    @Override
    public void displaySummary() {
        System.out.printf("[%s] %s | Age: %d | Ailment: %s%n", 
            patientId, getName(), getAge(), ailmentCategory);
    }
}`
  },
  {
    id: "library-management",
    title: "Library Management System",
    category: "Java OOP",
    highlight: "Inventory & Circulation Engine",
    shortDesc: "Developed in Core Java applying OOP concepts to manage book inventory, member records, and borrow/return transactions with validation logic.",
    fullDesc: "An automated library inventory management engine built with Core Java applying deep OOP design patterns. The application models catalog management, active student/faculty membership tiers, real-time availability tracking, fine calculation algorithms, and multi-record borrowing workflows.",
    features: [
      "Book Inventory Cataloging with ISBN indexing, category tagging, and stock count",
      "Member Registration with role-based borrowing privileges (Student/Faculty)",
      "Automated Borrow & Return workflow with due-date enforcement and fine metrics",
      "In-memory transaction history tracking with search and audit logging",
      "Error-resilient input parsing handling edge cases like duplicate IDs and zero inventory"
    ],
    oopConcepts: [
      "Inheritance: Member hierarchy with varying checkout limits and privileges",
      "Polymorphism: Dynamic fine calculation strategy based on membership type",
      "Abstraction: TransactionHandler interface decoupling business rules from data storage",
      "Collections: Utilized HashMaps and ArrayLists for fast O(1)/O(n) lookups"
    ],
    tech: ["Core Java", "Collections Framework", "OOP Architecture", "File I/O", "Logic Design"],
    githubUrl: "https://github.com/charithacherry12/Library-Management-System",
    demoUrl: "#projects",
    featured: true,
    codeSnippet: `// Circulation Logic with Collections and OOP
public class LibraryService implements ILibraryService {
    private Map<String, Book> catalog = new HashMap<>();
    private Map<String, Member> members = new HashMap<>();

    @Override
    public boolean processBorrow(String memberId, String isbn) {
        Book book = catalog.get(isbn);
        Member member = members.get(memberId);
        if (book != null && book.isAvailable() && member.canBorrow()) {
            book.setAvailable(false);
            member.addBorrowedBook(book);
            return true;
        }
        return false;
    }
}`
  },
  {
    id: "ai-disease-prediction",
    title: "Predictive Patient Risk & Disease Classifier",
    category: "AI/ML",
    highlight: "Neural Network & ML Pipeline",
    shortDesc: "End-to-end Machine Learning pipeline utilizing rigorous data preprocessing, feature engineering, and neural network classification for diagnostic risk assessment.",
    fullDesc: "An advanced machine learning spotlight project showcasing Bobbili Charitha's core competencies in AI/ML: end-to-end data cleaning, handling skewed distributions, feature selection, normalization, and training a multi-layer neural network architecture for high accuracy predictive inference.",
    features: [
      "Automated Data Preprocessing: Imputation of missing values and outlier filtering",
      "Feature Engineering & Correlation Matrix analysis to prevent multicollinearity",
      "Neural Network Architecture with Dropout and Batch Normalization layers",
      "Model Evaluation using Confusion Matrix, Precision, Recall, and ROC-AUC curve",
      "Cross-validation scoring ensuring generalization across unseen patient cohorts"
    ],
    oopConcepts: [
      "Data Pipeline Modularization: Clean classes for Preprocessor, ModelTrainer, and Evaluator",
      "Reusability: Parameterized hyperparameter configurations",
      "Performance: High precision threshold tuning for healthcare risk tolerance"
    ],
    tech: ["Machine Learning", "Neural Networks", "Data Preprocessing", "Feature Scaling", "Python / Scikit-Learn"],
    githubUrl: "https://github.com/charithacherry12",
    demoUrl: "#projects",
    featured: true,
    codeSnippet: `# AI/ML Pipeline Preprocessing & Architecture
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

class MedicalPredictorPipeline:
    def __init__(self):
        self.scaler = StandardScaler()
        
    def preprocess_and_fit(self, X, y):
        # Data Preprocessing & Scaling
        X_clean = np.nan_to_num(X, nan=np.nanmedian(X, axis=0))
        X_scaled = self.scaler.fit_transform(X_clean)
        return train_test_split(X_scaled, y, test_size=0.2, random_state=42)`
  }
];

export const educationData = [
  {
    institution: "TKR College of Engineering and Technology",
    degree: "B.Tech in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
    period: "2022 – 2026",
    score: "CGPA: 8.51",
    scoreType: "CGPA",
    scoreValue: "8.51 / 10.0",
    location: "Hyderabad, India",
    highlights: [
      "Specialized in Artificial Intelligence, Machine Learning Algorithms, and Neural Network Architectures.",
      "Consistently achieved top academic performance with an 8.51 cumulative grade point average.",
      "Hands-on project work bridging Core Java OOP architecture with machine learning implementations.",
      "Active participant in technical symposiums, hackathons, and collaborative engineering initiatives."
    ],
    icon: "GraduationCap"
  },
  {
    institution: "Sri Chaitanya Junior Kalashala",
    degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
    period: "2020 – 2022",
    score: "Percentage: 98.6%",
    scoreType: "Percentage",
    scoreValue: "98.6%",
    location: "Hyderabad, India",
    highlights: [
      "Outstanding academic distinction achieving 98.6% overall across rigorous MPC curriculum.",
      "Exceptional quantitative, mathematical reasoning, and logical problem-solving foundation.",
      "Ranked in top academic percentile across the state cohort."
    ],
    icon: "Award"
  },
  {
    institution: "Sri Chaitanya Techno",
    degree: "Secondary School Certificate (SSC)",
    period: "2019 – 2020",
    score: "Percentage: 95%",
    scoreType: "Percentage",
    scoreValue: "95.0%",
    location: "Kodad, India",
    highlights: [
      "Secured top grade with 95% aggregate in SSC Board Examinations.",
      "Excellence in mathematics, scientific problem-solving, and co-curricular leadership."
    ],
    icon: "BookOpen"
  }
];

export const certificationsData = [
  {
    title: "Cybersecurity Job Simulation",
    issuer: "Deloitte",
    issuedDate: "Verified Credential",
    badgeColor: "from-blue-600 to-cyan-600",
    icon: "ShieldAlert",
    skills: ["Cybersecurity Assessment", "Data Safeguarding", "Threat Modeling", "Enterprise Analysis"],
    description: "Completed practical job simulation with Deloitte focusing on enterprise security architecture, forensic threat assessment, and organizational defense mechanisms against modern digital vulnerabilities."
  },
  {
    title: "Salesforce Certified Agent",
    issuer: "Salesforce",
    issuedDate: "Certified Credential",
    badgeColor: "from-sky-500 to-indigo-600",
    icon: "CloudCheck",
    skills: ["CRM Architecture", "Workflow Automation", "Process Optimization", "Cloud Computing"],
    description: "Demonstrated certified proficiency in Salesforce agent tooling, customer relationship lifecycle management, automated workflows, and enterprise cloud data coordination."
  }
];

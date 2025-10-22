import type { WeeklyPlan } from "./types"

export const week12Plan: WeeklyPlan[] = [
  {
    week: 1,
    title: "Python & Mathematics Foundations",
    focus: "Python for Data Science and Mathematics Fundamentals",
    course: "Python for Data Science and AI",
    courseId: "7",
    topics: ["Python", "NumPy", "Pandas", "Matplotlib", "Basic Statistics"],
    milestones: [
      "Set up development environment",
      "Complete Python basics refresher",
      "Implement data manipulation exercises"
    ],
    projects: "Analyze a real dataset using Pandas"
  },
  {
    week: 2,
    title: "Mathematics for ML",
    focus: "Linear Algebra, Calculus, Probability",
    course: "Mathematics for Machine Learning",
    courseId: "9",
    topics: ["Vectors", "Matrices", "Derivatives", "Probability Distributions"],
    milestones: [
      "Understand gradient descent mathematically",
      "Implement matrix operations from scratch"
    ],
    projects: "Build a simple linear regression without libraries"
  },
  {
    week: 3,
    title: "Introduction to Machine Learning",
    focus: "Core ML Concepts and Algorithms",
    course: "Introduction to Machine Learning",
    courseId: "1",
    topics: ["Supervised/Unsupervised Learning", "Regression", "Classification"],
    milestones: [
      "Implement k-NN and linear regression",
      "Understand bias-variance tradeoff"
    ],
    projects: "Build a classification model for real data"
  },
  {
    week: 4,
    title: "Neural Networks Basics",
    focus: "Introduction to Deep Learning",
    course: "Deep Learning Specialization - Part 1",
    courseId: "2",
    topics: ["Neural Networks", "Backpropagation", "Activation Functions"],
    milestones: [
      "Build neural network from scratch",
      "Understand forward and backward propagation"
    ],
    projects: "Implement a neural network for MNIST"
  },
  {
    week: 5,
    title: "TensorFlow/PyTorch",
    focus: "Deep Learning Frameworks",
    course: "TensorFlow Developer Certificate",
    courseId: "10",
    topics: ["Framework basics", "Model building", "Training loops"],
    milestones: [
      "Master chosen framework basics",
      "Implement various architectures"
    ],
    projects: "Build image classifier with transfer learning"
  },
  {
    week: 6,
    title: "Computer Vision",
    focus: "CNNs and Image Processing",
    course: "Computer Vision Fundamentals",
    courseId: "4",
    topics: ["CNNs", "ResNet", "Object Detection", "YOLO"],
    milestones: [
      "Understand CNN architectures",
      "Implement object detection"
    ],
    projects: "Build custom object detector"
  },
  {
    week: 7,
    title: "Natural Language Processing",
    focus: "Text Processing and Transformers",
    course: "Natural Language Processing with Transformers",
    courseId: "3",
    topics: ["BERT", "GPT", "Text Classification", "Generation"],
    milestones: [
      "Fine-tune a transformer model",
      "Build text classification system"
    ],
    projects: "Create a sentiment analysis API"
  },
  {
    week: 8,
    title: "Generative AI & LLMs",
    focus: "Large Language Models and Applications",
    course: "Generative AI and Large Language Models",
    courseId: "8",
    topics: ["LLMs", "Prompt Engineering", "RAG", "Fine-tuning"],
    milestones: [
      "Implement RAG system",
      "Master prompt engineering"
    ],
    projects: "Build an AI chatbot with RAG"
  },
  {
    week: 9,
    title: "Feature Engineering & Optimization",
    focus: "Model Improvement Techniques",
    course: "Feature Engineering for Machine Learning",
    courseId: "16",
    topics: ["Feature Selection", "Extraction", "Dimensionality Reduction"],
    milestones: [
      "Apply advanced feature engineering",
      "Optimize model performance"
    ],
    projects: "Kaggle competition submission"
  },
  {
    week: 10,
    title: "MLOps Fundamentals",
    focus: "Deploying ML Models",
    course: "MLOps: Machine Learning Operations",
    courseId: "6",
    topics: ["Model Deployment", "CI/CD", "Monitoring", "MLflow"],
    milestones: [
      "Deploy model to production",
      "Set up monitoring"
    ],
    projects: "Deploy ML model as REST API"
  },
  {
    week: 11,
    title: "Advanced Specialization",
    focus: "Choose one specialization",
    course: "Reinforcement Learning or Graph Neural Networks",
    courseId: "5",
    topics: ["Advanced domain topics", "Specialized techniques"],
    milestones: [
      "Master chosen specialization",
      "Build advanced project"
    ],
    projects: "Domain-specific application"
  },
  {
    week: 12,
    title: "Capstone & Portfolio",
    focus: "Final Project and AI Ethics",
    course: "AI Ethics and Responsible AI",
    courseId: "12",
    topics: ["Ethics", "Bias", "Fairness", "Privacy", "Portfolio Building"],
    milestones: [
      "Complete capstone project",
      "Deploy portfolio website",
      "Document learnings"
    ],
    projects: "End-to-end AI application with ethical considerations"
  }
]

export const week24Plan: WeeklyPlan[] = [
  { week: 1, title: "Python Mastery - Part 1", focus: "Python for Data Science", course: "Python for Data Science and AI", courseId: "7", topics: ["Python Basics", "Data Structures", "OOP"], milestones: ["Set up environment", "Master Python basics"], projects: "Build data analysis toolkit" },
  { week: 2, title: "Python Mastery - Part 2", focus: "Advanced Python", course: "Python for Data Science and AI", courseId: "7", topics: ["Advanced Python", "Testing", "Best Practices"], milestones: ["Advanced concepts", "Testing frameworks"], projects: "Create automated data pipeline" },
  { week: 3, title: "Mathematics Deep Dive - Part 1", focus: "Linear Algebra", course: "Mathematics for Machine Learning", courseId: "9", topics: ["Vectors", "Matrices", "Linear Transformations"], milestones: ["Master linear algebra"], projects: "Implement ML algorithms from scratch" },
  { week: 4, title: "Mathematics Deep Dive - Part 2", focus: "Calculus & Optimization", course: "Mathematics for Machine Learning", courseId: "9", topics: ["Derivatives", "Gradients", "Optimization"], milestones: ["Understand calculus for ML"], projects: "Mathematical proofs and derivations" },
  { week: 5, title: "Machine Learning Fundamentals - Part 1", focus: "Supervised Learning", course: "Introduction to Machine Learning", courseId: "1", topics: ["Regression", "Classification", "Model Evaluation"], milestones: ["Implement core algorithms"], projects: "Multiple Kaggle datasets" },
  { week: 6, title: "Machine Learning Fundamentals - Part 2", focus: "Unsupervised Learning", course: "Introduction to Machine Learning", courseId: "1", topics: ["Clustering", "Dimensionality Reduction", "Anomaly Detection"], milestones: ["Master unsupervised techniques"], projects: "Comparative algorithm analysis" },
  { week: 7, title: "Neural Networks & Deep Learning - Part 1", focus: "Neural Network Fundamentals", course: "Deep Learning Specialization", courseId: "2", topics: ["Neural Networks", "Backpropagation", "Optimization"], milestones: ["Build networks from scratch"], projects: "Custom architectures" },
  { week: 8, title: "Neural Networks & Deep Learning - Part 2", focus: "Advanced Architectures", course: "Deep Learning Specialization", courseId: "2", topics: ["CNNs", "RNNs", "Advanced Topics"], milestones: ["Master deep architectures"], projects: "Research paper implementations" },
  { week: 9, title: "Neural Networks & Deep Learning - Part 3", focus: "Optimization & Regularization", course: "Deep Learning Specialization", courseId: "2", topics: ["Regularization", "Hyperparameter Tuning", "Best Practices"], milestones: ["Optimize model performance"], projects: "Performance optimization challenge" },
  { week: 10, title: "TensorFlow Framework", focus: "TensorFlow Mastery", course: "TensorFlow Developer Certificate", courseId: "10", topics: ["TensorFlow", "Keras", "Model Building"], milestones: ["Master TensorFlow"], projects: "Convert models to TensorFlow" },
  { week: 11, title: "PyTorch Framework", focus: "PyTorch Mastery", course: "PyTorch for Deep Learning", courseId: "11", topics: ["PyTorch", "Dynamic Graphs", "Advanced Features"], milestones: ["Master PyTorch"], projects: "Performance comparisons" },
  { week: 12, title: "Computer Vision Deep Dive - Part 1", focus: "Image Processing & CNNs", course: "Computer Vision Fundamentals", courseId: "4", topics: ["Image Processing", "CNNs", "Transfer Learning"], milestones: ["Master CV basics"], projects: "Multi-task vision system" },
  { week: 13, title: "Computer Vision Deep Dive - Part 2", focus: "Object Detection & Segmentation", course: "Computer Vision Fundamentals", courseId: "4", topics: ["Object Detection", "Segmentation", "Tracking"], milestones: ["Advanced CV techniques"], projects: "Real-time video analysis" },
  { week: 14, title: "Edge AI & Model Optimization", focus: "Model Optimization", course: "Edge AI and Model Optimization", courseId: "18", topics: ["Model Compression", "Quantization", "Edge Deployment"], milestones: ["Optimize models for edge"], projects: "Deploy CV model on edge device" },
  { week: 15, title: "Natural Language Processing - Part 1", focus: "NLP Fundamentals", course: "Natural Language Processing with Transformers", courseId: "3", topics: ["Text Processing", "Word Embeddings", "RNNs"], milestones: ["Master NLP basics"], projects: "Text classification tasks" },
  { week: 16, title: "Natural Language Processing - Part 2", focus: "Transformers & Advanced NLP", course: "Natural Language Processing with Transformers", courseId: "3", topics: ["Transformers", "BERT", "GPT", "Fine-tuning"], milestones: ["Master transformers"], projects: "Custom transformer implementation" },
  { week: 17, title: "Generative AI & LLMs - Part 1", focus: "Large Language Models", course: "Generative AI and Large Language Models", courseId: "8", topics: ["LLMs", "Prompt Engineering", "Fine-tuning"], milestones: ["Master LLM techniques"], projects: "AI agent system" },
  { week: 18, title: "Generative AI & LLMs - Part 2", focus: "Advanced LLM Applications", course: "Generative AI and Large Language Models", courseId: "8", topics: ["RAG", "Agents", "Tools", "Production Systems"], milestones: ["Build production systems"], projects: "Production LLM application" },
  { week: 19, title: "MLOps & Production - Part 1", focus: "MLOps Fundamentals", course: "MLOps: Machine Learning Operations", courseId: "6", topics: ["Deployment", "CI/CD", "Monitoring"], milestones: ["Master MLOps"], projects: "Full ML pipeline on cloud" },
  { week: 20, title: "MLOps & Production - Part 2", focus: "Cloud MLOps", course: "MLOps with AWS", courseId: "20", topics: ["AWS SageMaker", "Lambda", "Scaling", "Monitoring"], milestones: ["Cloud deployment mastery"], projects: "Auto-scaling production system" },
  { week: 21, title: "Advanced Specialization 1", focus: "Reinforcement Learning", course: "Reinforcement Learning", courseId: "5", topics: ["Q-Learning", "Policy Gradients", "Deep RL"], milestones: ["Master RL fundamentals"], projects: "Advanced RL project" },
  { week: 22, title: "Advanced Specialization 2", focus: "Time Series or Recommendation Systems", course: "Time Series Forecasting", courseId: "13", topics: ["Time Series", "Forecasting", "Advanced Techniques"], milestones: ["Master specialization"], projects: "Real-world application" },
  { week: 23, title: "Ethics & Feature Engineering", focus: "Responsible AI", course: "AI Ethics and Responsible AI", courseId: "12", topics: ["Ethics", "Bias", "Fairness", "Feature Engineering"], milestones: ["Ethical AI practices"], projects: "Audit existing model for bias" },
  { week: 24, title: "Capstone Project", focus: "End-to-End AI System", course: "Comprehensive Project", topics: ["Full Stack", "Deployment", "Documentation"], milestones: ["Complete capstone", "Deploy application", "Portfolio"], projects: "Production-ready AI application" }
]

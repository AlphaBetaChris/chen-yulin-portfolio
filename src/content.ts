export type Locale = 'zh' | 'en';

interface NavItem {
  label: string;
  href: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Detail {
  label: string;
  value: string;
}

interface Award {
  title: string;
  result: string;
  date: string;
}

interface Project {
  title: string;
  role: string;
  description: string;
  responsibility: string;
  tags: string[];
}

interface SkillGroup {
  title: string;
  description: string;
}

export interface SiteContent {
  skipLink: string;
  name: string;
  initials: string;
  navLabel: string;
  navItems: NavItem[];
  languageAction: string;
  hero: {
    eyebrow: string;
    role: string;
    tagline: string[];
    intro: string;
    primaryAction: string;
    secondaryAction: string;
    portraitAlt: string;
    portraitCaption: string;
  };
  stats: Stat[];
  about: {
    number: string;
    title: string;
    lead: string[];
    body: string;
    details: Detail[];
  };
  education: {
    number: string;
    title: string;
    school: string;
    major: string;
    period: string;
    admission: string;
    rankingLabel: string;
    ranking: string;
    gpaLabel: string;
    gpa: string;
    languageLabel: string;
    language: string;
    coursesLabel: string;
    courses: string[];
  };
  honors: {
    number: string;
    title: string;
    intro: string;
    awards: Award[];
  };
  projects: {
    number: string;
    title: string;
    intro: string[];
    descriptionLabel: string;
    responsibilityLabel: string;
    items: Project[];
  };
  skills: {
    number: string;
    title: string;
    intro: string;
    groups: SkillGroup[];
  };
  contact: {
    number: string;
    title: string;
    lead: string[];
    note: string;
    emailLabel: string;
    phoneLabel: string;
    githubLabel: string;
  };
  footer: {
    line: string;
    backToTop: string;
  };
}

export const content: Record<Locale, SiteContent> = {
  zh: {
    skipLink: '跳至主要内容',
    name: '陈昱霖',
    initials: 'CYL',
    navLabel: '主要导航',
    navItems: [
      { label: '关于', href: '#about' },
      { label: '教育', href: '#education' },
      { label: '荣誉', href: '#honors' },
      { label: '项目', href: '#projects' },
      { label: '技能', href: '#skills' },
      { label: '联系', href: '#contact' },
    ],
    languageAction: 'Switch to English',
    hero: {
      eyebrow: '计算机科学 · 人工智能 · 实践者',
      role: '西南大学计算机科学与技术专业学生',
      tagline: ['用代码、数学', '与好奇心，', '解决真实问题。'],
      intro:
        '我关注 AI 应用、数学建模与产品开发，已有 RAG 问答、多模态识别和跨端联调实践，已获四川大学网络空间安全学院硕士研究生推免拟录取，拟于 2027 年入学。',
      primaryAction: '浏览经历',
      secondaryAction: '联系我',
      portraitAlt: '陈昱霖的肖像',
      portraitCaption: 'CHEN YULIN / 2026',
    },
    stats: [
      { value: '7 / 72', label: '专业排名 · 前 10%' },
      { value: '4.0', label: '平均绩点 · 5.0 制' },
      { value: '8', label: '奖项与荣誉' },
      { value: '3', label: '项目实践' },
    ],
    about: {
      number: '01',
      title: '关于我',
      lead: [
        '以计算机科学基础',
        '与数理思维为底座，',
        '在竞赛、开发',
        '和人工智能探索中',
        '持续成长。',
      ],
      body:
        '我重视计算机与数理基础，也享受把想法变成可用产品的过程。作为数学建模竞赛队长，我协调任务分工，使用 Python 对比粒子群、模拟退火和差分进化策略，完成参数搜索、结果分析与复现实验。在校园导览、精准扶贫平台和文化研学项目中，我积累了 AI 应用、跨端开发和测试交付经验。两年部队服役经历也培养了我的纪律意识、责任心与团队协作能力。',
      details: [
        { label: '政治面貌', value: '中共党员' },
        { label: '出生年月', value: '2002.10' },
        { label: '籍贯', value: '四川省阆中市' },
        { label: '当前方向', value: 'AI 应用与计算机科学' },
      ],
    },
    education: {
      number: '02',
      title: '教育背景',
      school: '西南大学',
      major: '计算机科学与技术',
      period: '2023 — 2027（预计）',
      admission: '已获四川大学网络空间安全学院硕士研究生推免拟录取，拟于 2027 年入学。',
      rankingLabel: '专业排名',
      ranking: '7 / 72（前 10%）',
      gpaLabel: '平均绩点',
      gpa: '4.0 / 5.0',
      languageLabel: '英语水平',
      language: 'CET-4',
      coursesLabel: '核心课程',
      courses: [
        '数据结构 · 90',
        '高等数学 · 91 / 93',
        '数据库原理 · 92',
        '数字电路 · 91',
        '离散数学 · 90',
      ],
    },
    honors: {
      number: '03',
      title: '荣誉奖项',
      intro: '从数理建模到程序设计，用持续投入换来一组可以被验证的成长坐标。',
      awards: [
        {
          title: '国家励志奖学金',
          result: '2024—2025 学年',
          date: '2025.12',
        },
        {
          title: '西南大学三好学生',
          result: '2024—2025 学年',
          date: '2025.12',
        },
        {
          title: '全国大学生数学建模竞赛',
          result: '全国二等奖',
          date: '2025.11',
        },
        {
          title: '西南大学“含弘杯”大学生创业计划竞赛',
          result: '银奖',
          date: '',
        },
        {
          title: '美国大学生数学建模竞赛（MCM/ICM）',
          result: 'Honorable Mention',
          date: '2025.05',
        },
        {
          title: '蓝桥杯全国软件和信息技术专业人才大赛',
          result: '重庆赛区 Python 组二等奖',
          date: '2025.04',
        },
        {
          title: '西南大学二等奖学金',
          result: '2023—2024 学年',
          date: '2024.12',
        },
        {
          title: '西南大学优秀学生干部',
          result: '综合荣誉',
          date: '',
        },
      ],
    },
    projects: {
      number: '04',
      title: '项目经历',
      intro: [
        '从智能校园导览',
        '到精准扶贫与文化研学，',
        '参与 AI 应用、跨端开发',
        '与测试交付。',
      ],
      descriptionLabel: '项目',
      responsibilityLabel: '我的工作',
      items: [
        {
          title: 'SWU Guide 智能校园导览系统',
          role: '核心开发成员 · RAG 与多模态',
          description:
            '面向校园咨询与游览的一体化移动应用，覆盖智能问答、路线导航和拍照识别，串联“问答—选点—导航”操作流程。',
          responsibility:
            '负责校园资料清洗、文本切分、向量检索和提示词编排，整合校园知识库与联网搜索，支持多轮咨询、地点别名匹配和上下文指代。打通 Flutter 客户端与 Python AI 服务，组合 CLIP 与 Qwen-VL 实现建筑识别和图文讲解，并参与知识库校验、日志排查、iOS 适配与跨模块联调。',
          tags: ['RAG', 'CLIP / Qwen-VL', 'Flutter / Python', '跨端联调'],
        },
        {
          title: '云智扶精准扶贫信息化平台',
          role: '项目开发成员',
          description:
            '面向精准扶贫业务建设用户端与管理端，覆盖项目申报、材料审核、信息公示和诉求反馈。',
          responsibility:
            '基于 Spring Boot、MySQL、Vue 与 HarmonyOS 参与页面开发、接口联调和异常排查，处理材料上传、参数校验与状态同步问题。',
          tags: ['Spring Boot', 'MySQL', 'Vue', 'HarmonyOS'],
        },
        {
          title: '寻迹土家',
          role: '国家级大学生创新创业项目 · 主要开发者',
          description:
            '围绕研学课程、活动展示和内容运营建设微信小程序，支撑土家文化内容的线上展示与持续维护。',
          responsibility:
            '负责前后端开发、页面交互与数据管理，完成接口联调、功能测试、缺陷修复及展示版本交付。',
          tags: ['微信小程序', '前后端开发', '功能测试', '版本交付'],
        },
      ],
    },
    skills: {
      number: '05',
      title: '专业技能',
      intro: '围绕“分析问题、实现方案、验证结果”建立的工具与能力组合。',
      groups: [
        {
          title: '编程语言',
          description:
            '熟悉 Python、C / C++、SQL，掌握数据结构、算法与数据库基础，具备独立编码和问题定位能力。',
        },
        {
          title: '数学与建模',
          description:
            '具备高等数学、线性代数和离散数学基础，有全国与国际数学建模竞赛经验，实践过粒子群、模拟退火与差分进化优化策略。',
        },
        {
          title: '开发与测试',
          description:
            '了解 Spring Boot、Vue、Flutter、HarmonyOS 与微信小程序开发，熟悉 MySQL、REST API、接口联调和功能测试。',
        },
        {
          title: 'AI 应用',
          description:
            '具备 RAG、多轮对话和多模态应用实践，熟悉文本切分、向量检索、提示词设计及模型接口调用。',
        },
        {
          title: '工具与平台',
          description:
            '熟悉 Git 及 Linux 基本操作，能够使用 ChatGPT、Claude 等 AI 工具辅助资料检索、代码实现、调试排错和文档整理。',
        },
      ],
    },
    contact: {
      number: '06',
      title: '联系方式',
      lead: [
        '欢迎交流人工智能、',
        '建模、开发，',
        '以及任何值得',
        '认真解决的问题。',
      ],
      note: '邮件通常是联系我的最佳方式。',
      emailLabel: '邮箱',
      phoneLabel: '电话',
      githubLabel: 'GitHub',
    },
    footer: {
      line: '以真实经历为底稿，持续更新。',
      backToTop: '返回顶部',
    },
  },
  en: {
    skipLink: 'Skip to main content',
    name: 'Yulin Chen',
    initials: 'CYL',
    navLabel: 'Primary navigation',
    navItems: [
      { label: 'About', href: '#about' },
      { label: 'Education', href: '#education' },
      { label: 'Honors', href: '#honors' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    languageAction: '切换至中文',
    hero: {
      eyebrow: 'COMPUTER SCIENCE · AI · BUILDER',
      role: 'Computer Science student at Southwest University',
      tagline: [
        'Solving real problems',
        ' with code, mathematics,',
        ' and curiosity.',
      ],
      intro:
        'I build AI applications with experience in RAG, multimodal recognition, and cross-platform integration. I have received provisional admission through the recommendation-based pathway to a master’s program at Sichuan University’s School of Cyber Science and Engineering, with entry planned for 2027.',
      primaryAction: 'Explore my journey',
      secondaryAction: 'Get in touch',
      portraitAlt: 'Portrait of Yulin Chen',
      portraitCaption: 'CHEN YULIN / 2026',
    },
    stats: [
      { value: '7 / 72', label: 'Major rank · Top 10%' },
      { value: '4.0', label: 'GPA · 5.0 scale' },
      { value: '8', label: 'Honors and awards' },
      { value: '3', label: 'Selected projects' },
    ],
    about: {
      number: '01',
      title: 'About Me',
      lead: [
        'Building on computer',
        ' science fundamentals',
        ' and mathematical thinking,',
        ' I keep growing through',
        ' competitions, development,',
        ' and AI exploration.',
      ],
      body:
        'I value computer science and mathematical foundations alongside building useful products. As a mathematical modeling team leader, I coordinated tasks and implemented particle swarm optimization, simulated annealing, and differential evolution in Python for parameter search, result analysis, and reproducibility experiments. Campus navigation, poverty alleviation, and cultural education projects have given me experience in AI applications, cross-platform development, testing, and delivery. Two years of military service strengthened my discipline, sense of responsibility, and teamwork.',
      details: [
        { label: 'Political status', value: 'CPC Member' },
        { label: 'Born', value: 'October 2002' },
        { label: 'Hometown', value: 'Langzhong, Sichuan' },
        { label: 'Current focus', value: 'AI Applications and Computer Science' },
      ],
    },
    education: {
      number: '02',
      title: 'Education',
      school: 'Southwest University',
      major: 'B.S. in Computer Science and Technology',
      period: '2023 — 2027 (expected)',
      admission: 'Provisional admission through the recommendation-based pathway to a master’s program at Sichuan University’s School of Cyber Science and Engineering. Entry planned for 2027.',
      rankingLabel: 'Major rank',
      ranking: '7 / 72 (Top 10%)',
      gpaLabel: 'GPA',
      gpa: '4.0 / 5.0',
      languageLabel: 'English',
      language: 'CET-4',
      coursesLabel: 'Selected coursework',
      courses: [
        'Data Structures · 90',
        'Calculus · 91 / 93',
        'Database Systems · 92',
        'Digital Circuits · 91',
        'Discrete Mathematics · 90',
      ],
    },
    honors: {
      number: '03',
      title: 'Honors & Awards',
      intro:
        'A set of verifiable milestones shaped by sustained work in modeling, programming, and academic study.',
      awards: [
        {
          title: 'National Encouragement Scholarship',
          result: '2024–2025 Academic Year',
          date: 'Dec 2025',
        },
        {
          title: 'Southwest University Outstanding Student',
          result: '2024–2025 Academic Year',
          date: 'Dec 2025',
        },
        {
          title: 'China Undergraduate Mathematical Contest in Modeling',
          result: 'National Second Prize',
          date: 'Nov 2025',
        },
        {
          title: 'Southwest University “Hanhong Cup” Business Plan Competition',
          result: 'Silver Award',
          date: '',
        },
        {
          title: 'Mathematical Contest in Modeling (MCM/ICM)',
          result: 'Honorable Mention',
          date: 'May 2025',
        },
        {
          title: 'Lanqiao Cup Programming Competition',
          result: 'Chongqing Second Prize · Python',
          date: 'Apr 2025',
        },
        {
          title: 'Southwest University Second-Class Scholarship',
          result: '2023–2024 Academic Year',
          date: 'Dec 2024',
        },
        {
          title: 'Southwest University Outstanding Student Leader',
          result: 'Student leadership recognition',
          date: '',
        },
      ],
    },
    projects: {
      number: '04',
      title: 'Selected Projects',
      intro: [
        'AI applications',
        ' and cross-platform development',
        ' across campus navigation,',
        ' poverty alleviation,',
        ' and cultural education.',
      ],
      descriptionLabel: 'The project',
      responsibilityLabel: 'My contribution',
      items: [
        {
          title: 'SWU Guide',
          role: 'Core Developer · RAG & Multimodal AI',
          description:
            'An integrated campus guide app covering conversational Q&A, route navigation, and photo recognition, connecting answers to place selection and navigation.',
          responsibility:
            'Built data cleaning, text chunking, vector retrieval, and prompt orchestration workflows combining campus knowledge and web search for multi-turn questions, place aliases, and contextual references. Integrated the Flutter client with Python AI services and combined CLIP with Qwen-VL for building recognition and illustrated explanations. Contributed to knowledge-base validation, log analysis, iOS adaptation, and cross-module integration.',
          tags: ['RAG', 'CLIP / Qwen-VL', 'Flutter / Python', 'Integration'],
        },
        {
          title: 'Yunzhifu Poverty Alleviation Platform',
          role: 'Development Team Member',
          description:
            'A user-facing and administrative platform for targeted poverty alleviation, covering project applications, document review, public notices, and feedback.',
          responsibility:
            'Contributed to page development, API integration, and troubleshooting with Spring Boot, MySQL, Vue, and HarmonyOS, addressing document uploads, parameter validation, and state synchronization.',
          tags: ['Spring Boot', 'MySQL', 'Vue', 'HarmonyOS'],
        },
        {
          title: 'Tracing Tujia',
          role: 'National Innovation Project · Primary Developer',
          description:
            'A WeChat mini program supporting study courses, activity showcases, and content operations for the online presentation and maintenance of Tujia cultural resources.',
          responsibility:
            'Developed the front end, back end, page interactions, and data management. Completed API integration, functional testing, defect fixes, and delivery of a demonstration version.',
          tags: [
            'WeChat Mini Program',
            'Full-stack',
            'Functional Testing',
            'Delivery',
          ],
        },
      ],
    },
    skills: {
      number: '05',
      title: 'Skills & Toolkit',
      intro:
        'A practical toolkit organized around analyzing problems, building solutions, and validating results.',
      groups: [
        {
          title: 'Programming',
          description:
            'Familiar with Python, C / C++, and SQL, with foundations in data structures, algorithms, and databases and experience in independent implementation and debugging.',
        },
        {
          title: 'Mathematics & Modeling',
          description:
            'Foundations in calculus, linear algebra, and discrete mathematics, with national and international modeling experience and practical work in particle swarm optimization, simulated annealing, and differential evolution.',
        },
        {
          title: 'Development & Testing',
          description:
            'Working knowledge of Spring Boot, Vue, Flutter, HarmonyOS, and WeChat mini-program development, with experience in MySQL, REST APIs, integration, and functional testing.',
        },
        {
          title: 'AI Applications',
          description:
            'Hands-on experience with RAG, multi-turn conversations, and multimodal applications, including text chunking, vector retrieval, prompt design, and model API integration.',
        },
        {
          title: 'Tools & Platforms',
          description:
            'Familiar with Git and basic Linux operations. Use ChatGPT, Claude, and other AI tools for research, implementation, troubleshooting, and documentation.',
        },
      ],
    },
    contact: {
      number: '06',
      title: 'Contact',
      lead: [
        'Let’s talk about AI,',
        ' modeling, development,',
        ' or any problem',
        ' worth solving carefully.',
      ],
      note: 'Email is usually the best way to reach me.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      githubLabel: 'GitHub',
    },
    footer: {
      line: 'Built from real experience, and always evolving.',
      backToTop: 'Back to top',
    },
  },
};

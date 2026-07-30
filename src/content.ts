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
    tagline: string;
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
    lead: string;
    body: string;
    details: Detail[];
  };
  education: {
    number: string;
    title: string;
    school: string;
    major: string;
    period: string;
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
    intro: string;
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
    lead: string;
    note: string;
    emailLabel: string;
    phoneLabel: string;
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
      tagline: '用代码、数学与好奇心，解决真实问题。',
      intro:
        '我关注人工智能、数学建模与产品开发，喜欢把复杂问题拆解成可以验证、可以落地的方案。',
      primaryAction: '浏览经历',
      secondaryAction: '联系我',
      portraitAlt: '陈昱霖的肖像',
      portraitCaption: 'CHEN YULIN / 2026',
    },
    stats: [
      { value: '11 / 72', label: '专业排名 · 前 15%' },
      { value: '3.91', label: '平均绩点 · 5.0 制' },
      { value: '7', label: '奖项与荣誉' },
      { value: '2', label: '国家级创新项目' },
    ],
    about: {
      number: '01',
      title: '关于我',
      lead:
        '以计算机科学基础与数理思维为底座，在竞赛、开发和人工智能探索中持续成长。',
      body:
        '我重视扎实的理论基础，也享受把想法变成可用产品的过程。多门核心课程成绩超过 90 分，数学建模竞赛培养了我从数据和约束中寻找结构的能力；国家级创新项目则让我积累了开发、测试与团队协作经验。未来希望在研究生阶段深入开展人工智能相关科研。',
      details: [
        { label: '政治面貌', value: '中共党员' },
        { label: '出生年月', value: '2002.10' },
        { label: '籍贯', value: '四川省阆中市' },
        { label: '当前方向', value: '人工智能与计算机科学' },
      ],
    },
    education: {
      number: '02',
      title: '教育背景',
      school: '西南大学',
      major: '计算机科学与技术',
      period: '2023 — 至今',
      rankingLabel: '专业排名',
      ranking: '11 / 72（前 15%）',
      gpaLabel: '平均绩点',
      gpa: '3.91 / 5.0',
      languageLabel: '英语水平',
      language: 'CET-4',
      coursesLabel: '核心课程',
      courses: [
        '高等数学 · 91 / 93',
        '数据库原理 · 92',
        '数字电路 · 91',
        '离散数学 · 90',
        '线性代数 · 89',
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
          title: '全国大学生创新创业大赛',
          result: '校赛铜奖',
          date: '2025.06',
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
      ],
    },
    projects: {
      number: '04',
      title: '项目经历',
      intro: '在文化传播与心理健康两个真实场景中，分别承担开发与质量保障角色。',
      descriptionLabel: '项目',
      responsibilityLabel: '我的工作',
      items: [
        {
          title: '寻迹土家',
          role: '国家级大学生创新创业项目 · 主要开发者',
          description:
            '聚焦渝东南土家文化传承，融合教育、文旅与科技，构建“文化 + 教育 + 旅游”三位一体研学模式，推动民族文化公益事业与乡村振兴。',
          responsibility:
            '负责线上数字化平台（小程序端）的前后端开发与维护，完成用户交互界面、内容展示和数据管理模块，并持续进行功能迭代与性能优化。',
          tags: ['微信小程序', '前后端开发', '界面设计', '性能优化'],
        },
        {
          title: 'HUG',
          role: '国家级大学生创新创业项目 · 核心成员',
          description:
            '依托西南大学心理学科资源，研发基于虚拟现实技术的负性情绪调适软件，以沉浸式空间和数字人互动缓解压力与焦虑。',
          responsibility:
            '负责 VR 交互场景的功能测试、用例设计、回归测试与缺陷追踪，保障产品质量与用户体验。',
          tags: ['VR', '软件测试', '用例设计', '缺陷追踪'],
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
            '熟练使用 Python、C / C++，具备良好的代码规范与工程实践能力。',
        },
        {
          title: '数学与建模',
          description:
            '具备高等数学、线性代数和离散数学基础，有全国与国际数学建模竞赛经验。',
        },
        {
          title: '开发与测试',
          description:
            '熟悉微信小程序开发流程与前后端协作，掌握功能测试、回归测试和缺陷管理。',
        },
        {
          title: 'AI 工具',
          description:
            '熟练使用 ChatGPT、Claude、Gemini 辅助代码编写、文献调研、数据分析与问题求解。',
        },
        {
          title: '工具与平台',
          description:
            '熟悉 Git、LaTeX，了解 Linux 基本操作与常用开发环境配置。',
        },
      ],
    },
    contact: {
      number: '06',
      title: '联系方式',
      lead: '欢迎交流人工智能、建模、开发，以及任何值得认真解决的问题。',
      note: '邮件通常是联系我的最佳方式。',
      emailLabel: '邮箱',
      phoneLabel: '电话',
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
      tagline: 'Solving real problems with code, mathematics, and curiosity.',
      intro:
        'I explore artificial intelligence, mathematical modeling, and product development, turning complex questions into solutions that can be tested and built.',
      primaryAction: 'Explore my journey',
      secondaryAction: 'Get in touch',
      portraitAlt: 'Portrait of Yulin Chen',
      portraitCaption: 'CHEN YULIN / 2026',
    },
    stats: [
      { value: '11 / 72', label: 'Major rank · Top 15%' },
      { value: '3.91', label: 'GPA · 5.0 scale' },
      { value: '7', label: 'Honors and awards' },
      { value: '2', label: 'National innovation projects' },
    ],
    about: {
      number: '01',
      title: 'About Me',
      lead:
        'Building on computer science fundamentals and mathematical thinking, I keep growing through competitions, development, and AI exploration.',
      body:
        'I value rigorous foundations as much as the process of turning ideas into useful products. Scores above 90 in several core courses reflect my academic discipline. Mathematical modeling taught me to find structure in data and constraints, while national innovation projects gave me hands-on experience in development, testing, and teamwork. I hope to pursue deeper AI research in graduate study.',
      details: [
        { label: 'Political status', value: 'CPC Member' },
        { label: 'Born', value: 'October 2002' },
        { label: 'Hometown', value: 'Langzhong, Sichuan' },
        { label: 'Current focus', value: 'AI and Computer Science' },
      ],
    },
    education: {
      number: '02',
      title: 'Education',
      school: 'Southwest University',
      major: 'B.S. in Computer Science and Technology',
      period: '2023 — Present',
      rankingLabel: 'Major rank',
      ranking: '11 / 72 (Top 15%)',
      gpaLabel: 'GPA',
      gpa: '3.91 / 5.0',
      languageLabel: 'English',
      language: 'CET-4',
      coursesLabel: 'Selected coursework',
      courses: [
        'Calculus · 91 / 93',
        'Database Systems · 92',
        'Digital Circuits · 91',
        'Discrete Mathematics · 90',
        'Linear Algebra · 89',
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
          title: 'China International College Students’ Innovation Competition',
          result: 'University Bronze Award',
          date: 'Jun 2025',
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
      ],
    },
    projects: {
      number: '04',
      title: 'Selected Projects',
      intro:
        'Development and quality-assurance work across two real-world contexts: cultural heritage and mental wellbeing.',
      descriptionLabel: 'The project',
      responsibilityLabel: 'My contribution',
      items: [
        {
          title: 'Tracing Tujia',
          role: 'National Innovation Project · Primary Developer',
          description:
            'A culture, education, and tourism initiative for preserving Tujia heritage in southeastern Chongqing through immersive study programs, cultural products, and a digital platform.',
          responsibility:
            'Developed and maintained the mini-program platform across the front and back end, building user interactions, content presentation, and data-management modules while iterating on features and performance.',
          tags: [
            'WeChat Mini Program',
            'Full-stack',
            'Interface Design',
            'Optimization',
          ],
        },
        {
          title: 'HUG',
          role: 'National Innovation Project · Core Member',
          description:
            'A VR-based negative-emotion regulation product developed with Southwest University psychology resources, using immersive environments and digital-human interaction to ease stress and anxiety.',
          responsibility:
            'Designed and executed functional tests for VR interactions, including test cases, regression testing, and defect tracking to protect product quality and user experience.',
          tags: ['Virtual Reality', 'Software Testing', 'Test Design', 'QA'],
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
            'Proficient in Python and C / C++, with disciplined coding practices and engineering awareness.',
        },
        {
          title: 'Mathematics & Modeling',
          description:
            'Strong foundations in calculus, linear algebra, and discrete mathematics, backed by national and international modeling competitions.',
        },
        {
          title: 'Development & Testing',
          description:
            'Familiar with WeChat mini-program development, front-end/back-end collaboration, functional testing, regression testing, and defect management.',
        },
        {
          title: 'AI Tools',
          description:
            'Fluent with ChatGPT, Claude, and Gemini for coding, literature research, data analysis, and structured problem solving.',
        },
        {
          title: 'Tools & Platforms',
          description:
            'Comfortable with Git and LaTeX, with working knowledge of Linux and common development environments.',
        },
      ],
    },
    contact: {
      number: '06',
      title: 'Contact',
      lead:
        'Let’s talk about AI, modeling, development, or any problem worth solving carefully.',
      note: 'Email is usually the best way to reach me.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
    },
    footer: {
      line: 'Built from real experience, and always evolving.',
      backToTop: 'Back to top',
    },
  },
};

// Content for the portfolio. The site renders English only; each user-facing
// string keeps an { en, ja } shape but only the `en` field is displayed. The
// `ja` values are retained as data in case the site goes bilingual again.

export type LS = { en: string; ja: string };

export interface Metric {
  value: string; // monospace "readout" value, e.g. "days → hours"
  label: LS;
}

// A flagship piece of work delivered within a role. Lives under its Experience
// entry — the org comes from the parent role, so it isn't repeated here.
export interface Achievement {
  name: LS;
  summary: LS;
  metrics: Metric[];
  tags: string[];
  link?: { label: string; url: string }; // optional external write-up (e.g. tech blog)
}

export interface Experience {
  org: string;
  role: LS;
  period: LS;
  start: string; // short year/marker for the timeline anchor
  achievements: Achievement[];
}

export interface Award {
  title: LS;
  org: LS;
  year: string;
  note?: LS;
}

export interface EducationItem {
  school: string;
  degree: LS;
  period: LS;
  detail?: LS; // optional secondary line (e.g. notable course), shown small below
  link?: string; // optional course/program URL (applies to `detail` when present)
}

export interface Certification {
  name: LS;
  issuer: LS;
  year: string; // year issued
  expires?: string; // expiry label, e.g. 'Dec. 2024' (omit for non-expiring)
}

export const profile = {
  name: 'Kento Tanaka',
  nameJa: '田中健斗',
  role: {
    en: 'Applied Research Engineer',
    ja: 'アプライドリサーチエンジニア',
  } as LS,
  location: {
    en: 'Tokyo, Japan',
    ja: '東京',
  } as LS,
  // The hero thesis — the most characteristic thing about his work.
  thesis: {
    en: 'Building ML products on an NLP research foundation — production agents, evaluation pipelines, and reliable LLM systems.',
    ja: 'NLP 研究を土台に、ML プロダクトをつくる。本番のエージェント・評価パイプライン・信頼できる LLM システム。',
  } as LS,
  email: 'tanaken0304.0123@gmail.com',
};

export const links = {
  github: 'https://github.com/kent0304',
  linkedin: 'https://www.linkedin.com/in/kento-tanaka/',
  email: 'mailto:tanaken0304.0123@gmail.com',
};

export const experiences: Experience[] = [
  {
    org: 'Sakana AI',
    role: { en: 'Applied Research Engineer', ja: 'アプライドリサーチエンジニア' },
    period: { en: 'Aug. 2026 – Present', ja: '2026年8月 – 現在' },
    start: '2026',
    achievements: [],
  },
  {
    org: 'Recruit Co., Ltd.',
    role: { en: 'Machine Learning Engineer', ja: '機械学習エンジニア' },
    period: { en: 'Apr. 2022 – Jul. 2026', ja: '2022年4月 – 2026年7月' },
    start: '2022',
    achievements: [
      {
        name: { en: 'Multi-Agent Decision Support', ja: 'マルチエージェント意思決定支援' },
        summary: {
          en: 'Agentic search over structured data for business decisions, at low latency.',
          ja: '構造化データを低レイテンシで推論する、意思決定支援のエージェント検索。',
        },
        metrics: [
          { value: 'millions', label: { en: 'tokens reasoned over', ja: 'トークンを横断推論' } },
          { value: 'low-latency', label: { en: 'numerical reasoning', ja: '数値推論' } },
        ],
        tags: ['LLM Agents', 'Structured Data'],
      },
      {
        name: { en: 'Automated Essay Feedback', ja: '自動エッセイフィードバック' },
        summary: {
          en: 'Custom models and API governed by eval pipelines and human-in-the-loop review.',
          ja: 'モデルと API を評価パイプラインと Human-in-the-Loop で統制。',
        },
        metrics: [
          { value: 'LLMOps', label: { en: 'release gating', ja: 'リリースゲーティング' } },
          { value: 'HITL', label: { en: 'human review', ja: '人手レビュー' } },
        ],
        tags: ['LLMOps', 'LLM', 'API'],
        link: {
          label: 'Tech Blog',
          url: 'https://blog.recruit.co.jp/data/articles/manabi_writingfb_llm_eval/',
        },
      },
      {
        name: { en: 'Data Quality Infrastructure', ja: 'データ品質基盤' },
        summary: {
          en: 'dbt data-quality frameworks across the analytics platform.',
          ja: '分析基盤全体の dbt データ品質フレームワーク。',
        },
        metrics: [
          { value: 'days → hours', label: { en: 'validation lead time', ja: '検証リードタイム' } },
        ],
        tags: ['dbt', 'Data Platform', 'MLOps'],
      },
    ],
  },
  {
    org: 'Independent Contractor',
    role: { en: 'Full-stack Engineer (Side Project)', ja: 'フルスタックエンジニア（個人事業）' },
    period: { en: 'Jan. 2024 – Present', ja: '2024年1月 – 現在' },
    start: '2024',
    achievements: [
      {
        name: { en: 'Workflow Automation SaaS', ja: 'ワークフロー自動化 SaaS' },
        summary: {
          en: 'Workflow automation platform built and scaled solo — full ownership from architecture to ops.',
          ja: 'ひとりで構築・スケールしたワークフロー自動化基盤。設計から運用まで全責任を担当。',
        },
        metrics: [
          { value: '55 sites', label: { en: 'in production', ja: '本番稼働' } },
          { value: 'full ownership', label: { en: 'architecture → ops', ja: '設計から運用まで' } },
        ],
        tags: ['Full-stack', 'SaaS', 'TypeScript'],
      },
    ],
  },
  {
    org: 'ExaWizards Inc.',
    role: { en: 'Machine Learning Engineer (Part-time)', ja: '機械学習エンジニア（アルバイト）' },
    period: { en: 'Aug. 2021 – Sep. 2021', ja: '2021年8月 – 2021年9月' },
    start: '2021',
    achievements: [],
  },
  {
    org: 'Recruit Co., Ltd.',
    role: { en: 'Machine Learning Engineer (Part-time)', ja: '機械学習エンジニア（アルバイト）' },
    period: { en: 'Feb. 2021 – Mar. 2021', ja: '2021年2月 – 2021年3月' },
    start: '2021',
    achievements: [],
  },
  {
    org: 'Cookpad Inc.',
    role: { en: 'Machine Learning Engineer (Part-time)', ja: '機械学習エンジニア（アルバイト）' },
    period: { en: 'Nov. 2020 – Feb. 2021', ja: '2020年11月 – 2021年2月' },
    start: '2020',
    achievements: [],
  },
];

export const awards: Award[] = [
  {
    title: { en: 'Annual Special Award', ja: '通期特別賞' },
    org: { en: 'Recruit', ja: 'Recruit' },
    year: '2024',
    note: {
      en: 'Automated essay feedback system launch.',
      ja: '自動エッセイ評価システムの立ち上げ。',
    },
  },
  {
    title: { en: 'Newcomer Excellence Award', ja: '新人成果発表会 DO賞(優秀賞)' },
    org: { en: 'Recruit', ja: 'Recruit' },
    year: '2023',
    note: {
      en: 'Data quality frameworks improving reliability.',
      ja: '信頼性を高めたデータ品質基盤。',
    },
  },
  {
    title: { en: 'ICT Innovation Award, Excellent Research', ja: 'ICTイノベーション優秀研究賞' },
    org: { en: 'Kyoto University', ja: '京都大学' },
    year: '2022',
    note: { en: '16th edition.', ja: '第16回。' },
  },
  {
    title: { en: 'Excellence Award', ja: '優秀賞' },
    org: { en: 'Benesse Digital Plan Workshop', ja: 'Benesse Digital Plan Workshop' },
    year: '2020',
  },
  {
    title: { en: '1st Place', ja: '優勝' },
    org: {
      en: 'Rakuten Futakotamagawa Summer Hackathon',
      ja: '楽天 二子玉川夏の陣ハッカソン',
    },
    year: '2020',
  },
];

export const education: EducationItem[] = [
  {
    school: 'Kyoto University',
    degree: { en: 'M.S. in Informatics', ja: '情報学修士' },
    period: { en: 'Apr. 2020 – Mar. 2022', ja: '2020年4月 – 2022年3月' },
  },
  {
    school: 'Meiji University',
    degree: { en: 'B.S. in Mechanical Engineering Informatics', ja: '機械情報工学 学士' },
    period: { en: 'Apr. 2016 – Mar. 2020', ja: '2016年4月 – 2020年3月' },
  },
  {
    school: 'University of California, Berkeley',
    degree: { en: 'Exchange Student', ja: '交換留学' },
    detail: {
      en: 'CS 61A — Structure and Interpretation of Computer Programs',
      ja: 'CS 61A（計算機プログラムの構造と解釈）',
    },
    period: { en: 'May 2017 – Aug. 2017', ja: '2017年5月 – 2017年8月' },
    link: 'https://cs61a.org/',
  },
];

export interface PubLink {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  venue: string;
  authors: string;
  links?: PubLink[];
}

// Non-peer-reviewed writing (tech blog posts, etc.), kept separate from papers.
export interface Article {
  title: string;
  venue: string; // publication outlet, e.g. 'Recruit Data Blog'
  year: string;
  href: string;
}

export const publications: Publication[] = [
  {
    title: 'Image Description Dataset for Language Learners',
    venue: 'LREC 2022 — 13th Language Resources and Evaluation Conference',
    authors:
      'Kento Tanaka, Taichi Nishimura, Hiroaki Nanjo, Keisuke Shirai, Hirotaka Kameko, Masatake Dantsuji',
    links: [
      { label: 'Paper', href: 'https://aclanthology.org/2022.lrec-1.735/' },
      { label: 'Poster', href: 'https://lrec2022.lrec-conf.org/proceedings/lrec2022/posters/598.pdf' },
      { label: 'Video', href: 'https://lrec2022.lrec-conf.org/proceedings/lrec2022/posters/598.mp4' },
    ],
  },
  {
    title: '画像描写問題における学習者作文の訂正文生成',
    venue: '言語処理学会 第28回年次大会 (NLP2022)',
    authors: '田中健斗, 西村太一, 南條浩輝, 白井圭佑, 亀甲博貴',
  },
  {
    title: '写真描画問題における自動採点手法の検討',
    venue: '人工知能学会全国大会 (JSAI2021)',
    authors: '田中健斗, 西村太一, 白井圭佑, 亀甲博貴, 森信介',
  },
];

export const articles: Article[] = [
  {
    title: '【スタディサプリ】LLMで英検エッセイ自動採点の評価フローを改善',
    venue: 'Recruit Data Blog',
    year: '2024',
    href: 'https://blog.recruit.co.jp/data/articles/manabi_writingfb_llm_eval/',
  },
];

export const skills = {
  languages: ['Python', 'SQL', 'TypeScript'],
  core: {
    en: ['LLM Applications', 'AI Agents', 'LLMOps/MLOps', 'Production ML Systems', 'Data Platforms'],
    ja: ['LLM アプリケーション', 'AI エージェント', 'LLMOps/MLOps', '本番 ML システム', 'データ基盤'],
  },
  cloud: ['GCP'],
};

export const certifications: Certification[] = [
  {
    name: { en: 'Kaggle Expert (Competitions)', ja: 'Kaggle Expert（Competitions）' },
    issuer: { en: 'Kaggle', ja: 'Kaggle' },
    year: '2022',
  },
  {
    name: { en: 'Professional Data Engineer', ja: 'Professional Data Engineer' },
    issuer: { en: 'Google Cloud', ja: 'Google Cloud' },
    year: '2022',
    expires: 'Dec. 2024',
  },
  {
    name: { en: 'TOEIC 840', ja: 'TOEIC 840' },
    issuer: { en: 'ETS', ja: 'ETS' },
    year: '2019',
  },
];

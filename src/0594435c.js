const worlds = [
  {
    name: 'Symbolencyclopedia',
    jp: '架空疑問展 | 記号アーカイブ',
    type: 'archive',
    category: '記号 / アーカイブ',
    status: 'green',
    summary: '記号の意味・由来・使用例を記録する中核アーカイブ。USSOの理念を実体化した記号図鑑です。',
    url: 'https://ec2045.github.io/Symbolencyclopedia/',
    tags: ['記号', '辞典', 'アーカイブ']
  },
  {
    name: 'USSO',
    jp: '世界記号統一団体',
    type: 'organization',
    category: '組織 / 規格',
    status: 'blue',
    summary: '普遍的シンボルの確立を目指す標準化組織。記号の統一と観測の中心です。',
    url: 'https://ec2045.github.io/USSO/',
    tags: ['標準化', '組織', '理念']
  },
  {
    name: 'CED',
    jp: 'Contribution Energy Discovery',
    type: 'organization',
    category: '財団 / エネルギー',
    status: 'amber',
    summary: '特異現象をエネルギーとして社会へ還元する財団。NODE LABの基盤にあたる存在です。',
    url: 'https://ec2045.github.io/CED/',
    tags: ['財団', '能源', '社会還元']
  },
  {
    name: 'NODE LAB',
    jp: 'ノードラボ株式会社',
    type: 'organization',
    category: '企業 / 技術',
    status: 'red',
    summary: '意識・記憶・個性をデジタル領域へ転送する技術企業。CEDのエネルギーを活用する未来系の中核です。',
    url: 'https://ec2045.github.io/NODE-LAB/',
    tags: ['未来', '転送', '研究']
  },
  {
    name: 'BIB',
    jp: 'Biological Identity Base',
    type: 'organization',
    category: '対抗組織 / 生体保存',
    status: 'pink',
    summary: 'デジタル化に対抗し、肉体と実存を守る保存基盤。NODE LABの対立軸として機能します。',
    url: 'https://ec2045.github.io/BIB/',
    tags: ['身体', '保存', '対抗']
  },
  {
    name: 'Artist R',
    jp: '同一アート作家 R',
    type: 'person',
    category: '個人 / アート',
    status: 'green',
    summary: 'onva出身のデジタルアート作家。記号を用いた芸術表現や、独自の感性に基づく世界構築を行います。',
    url: 'https://ec2045.github.io/artr/',
    tags: ['芸術', '記号', '人物']
  },
  {
    name: 'onva',
    jp: '王国 onva（ア゛ンヴァ）',
    type: 'project',
    category: '国家 / 世界設定',
    status: 'blue',
    summary: '東暦1928年に成立した最適化国家。18文字の !anbyam を核に、合理主義で社会と文化を再設計した世界です。',
    url: 'https://ec2045.github.io/onva/',
    tags: ['国家', '言語', '世界観']
  },
  {
    name: '!anbyam',
    jp: 'onva語・言語ガイド',
    type: 'archive',
    category: '言語 / 文法',
    status: 'green',
    summary: '18の音素で構成された最適化言語のガイド。SVO、否定、時制、辞書、変換ツールまで整理されています。',
    url: 'https://ec2045.github.io/onva/anvum.html',
    tags: ['言語', '文法', '辞書']
  },
  {
    name: 'onva/study',
    jp: 'onva語・学習ツール',
    type: 'archive',
    category: '言語 / 文法',
    status: 'green',
    summary: 'onva語の学習をサポートするための支援型ツール。　onva語を学習したい人向け',
    url: 'https://ec2045.github.io/onva/study.html',
    tags: ['言語', '文法', '学習']
  },
  {
    name: 'onva/translation',
    jp: 'onva語・翻訳ツール',
    type: 'archive',
    category: '言語 / 文法',
    status: 'green',
    summary: 'onva語を日本語に翻訳することに特化したツール。　日本語話者がonva語を理解するのを補助します。',
    url: 'https://ec2045.github.io/onva/translation.html',
    tags: ['言語', '文法', '翻訳']
  },
  {
    name: 'onva/print',
    jp: 'onva語・印刷用資料',
    type: 'archive',
    category: '言語 / 文法',
    status: 'green',
    summary: 'onva語の印刷用資料。　学習者や研究者向けに整理されています。　印刷も可能です。',
    url: 'https://ec2045.github.io/onva/print.html',
    tags: ['言語', '文法', '練習用']
  },
  {
    name: 'ONVA Culture',
    jp: 'ONVA文化アーカイブ',
    type: 'archive',
    category: '文化 / 生活',
    status: 'green',
    summary: 'ONVA王国の衣食住、生活様式を記録したアーカイブ。伝統衣装「!abyang」や主食のポテトサラダなど、合理性と美学が融合した日常を詳説。',
    url: 'https://ec2045.github.io/onva_culture',
    tags: ['文化', '生活', '伝統']
  },
  {
    name: 'onva-history',
    jp: 'onva語・歴史資料',
    type: 'archive',
    category: '国家 / 歴史',
    status: 'green',
    summary: 'onva王国の歴史を記録したアーカイブ。　ツナサラダの神話を始めとした様々な歴史が整理されています。',
    url: 'https://ec2045.github.io/onva-history/',
    tags: ['国家', '歴史', '記録']
  },
  {
    name: 'onva-s_creature',
    jp: 'onva・生物資料',
    type: 'archive',
    category: '国家 / 生物',
    status: 'green',
    summary: 'onva王国に住む生物について書かれているwebサイト。　様々な生物が登録されている',
    url: 'https://ec2045.github.io/onva-s_creature/',
    tags: ['国家', '生物', '記録']
  },
  {
    name: 'onvision',
    jp: 'ONVA公式放送局',
    type: 'project',
    category: '放送 / メディア',
    status: 'green',
    summary: 'ONVAの現状を世界、そして未来へ伝える公認放送プログラム。標準言語プロトコルと演算精度の監視・報道を行います。',
    url: 'https://ec2045.github.io/onvision/',
    tags: ['放送', 'メディア', 'ONVA']
  },
  {
    name: 'onva-citizen',
    jp: 'ONVA 国籍データベース',
    type: 'archive',
    category: '国家 / 市民',
    status: 'green',
    summary: 'ONVA王国の国籍保有者名簿。種族・名前・言語・バイナリで検索可能な市民管理アーカイブ。',
    url: 'https://ec2045.github.io/onva-citizen/',
    tags: ['国家', '市民', 'データベース']
  },
  {
    name: 'AI Fictional Dictionary',
    jp: '架空AI図鑑',
    type: 'archive',
    category: 'AI / 図鑑',
    status: 'blue',
    summary: '存在しない知能たちを記録するアーカイブ。世界の「可能性」を増やす棚です。',
    url: 'https://ec2045.github.io/ai-Fictional-dictionary/',
    tags: ['AI', '図鑑', '想像']
  },
  {
    name: 'Murinsu',
    jp: '株式会社ムリンス',
    type: 'organization',
    category: '企業 / 問い',
    status: 'amber',
    summary: '答えより問いを重視する企業体。世界観の中で「思考の入口」を担います。',
    url: 'https://ec2045.github.io/murinsu/',
    tags: ['問い', '企業', '哲学']
  },
  {
    name: 'Antagonistic Inquiry Cards',
    jp: '問いを作るケードゲーム',
    type: 'project',
    category: '問い/カードゲーム',
    status: 'amber',
    summary: 'その予想できない組み合わせは時に新しい発見をもたらす。',
    url: 'https://ec2045.github.io/murinsu/questionn_generator.html',
    tags: ['問い', 'カードゲーム', '哲学']
  },
  {
    name: 'T.S Portfolio',
    jp: 'T.S Official Portfolio',
    type: 'project',
    category: '個人 / 作品群',
    status: 'pink',
    summary: '意味のない美学と機能しない合理性を統合するポートフォリオ。メタ的な補助入口です。',
    url: 'https://ec2045.github.io/murinsu/index%20-%20TS.html',
    tags: ['ポートフォリオ', 'メタ', '作品']
  },
  {
    name: 'WAC',
    jp: '歴史記録アーカイブ',
    type: 'archive',
    category: '歴史 / 年表',
    status: 'amber',
    summary: '各組織・国家・思想の変遷を時系列で整理した記録サイト。世界観を「時間」で理解するための中核アーカイブです。',
    url: 'https://ec2045.github.io/wac/',
    tags: ['歴史', '年表', '記録']
  },
  {
    name: 'E4 CLOUD SERVICE',
    jp: '内部暗号化データストレージ',
    type: 'archive',
    category: 'クラウド / ストレージ',
    status: 'blue',
    summary: '内部管理者用の暗号化データストレージ。アリア、メイ、シュレン、T.S.の個人アーカイブを格納し、物理フォルダスキャンによる動的同期に対応。',
    url: 'https://ec2045.github.io/e4cloud/',
    tags: ['暗号化', 'ストレージ', '物理同期']
  },
  {
    name: 'Waon Jinkoku',
    jp: '和温陣国',
    type: 'project',
    category: '国家 / 世界設定',
    status: 'pink',
    summary: '均衡と調和、秩序ある混沌を掲げる国家。ピクセル陰陽を核に、杖文化と王の儀礼で国家の理を保つ世界です。',
    url: 'https://ec2045.github.io/Waon-Jinkoku/',
    tags: ['国家', '調和', '杖文化']
  },
  {
    name: 'Waonjin-Ecosystem-Observatory',
    jp: '和温陣国生態系観測所',
    type: 'project',
    category: '国家 / 生物',
    status: 'pink',
    summary: '和温陣国に住む生物について書かれているwebサイト。　様々な生物が登録されている',
    url: 'https://ec2045.github.io/Waonjin-Ecosystem-Observatory/',
    tags: ['国家', '生物', '記録']
  },
  {
    name: 'Artist R Blog',
    jp: '同一アート作家 R - Manifesto',
    type: 'person',
    category: '個人 / アーカイブ',
    status: 'green',
    summary: '同一アート作家 Rによるマニフェストとアーカイブ。思考のバイナリパターンや独創性の源泉が記録された極秘ログ。',
    url: 'https://ec2045.github.io/artr_blog/',
    tags: ['マニフェスト', '芸術', 'ログ']
  },
  {
    name: 'ArtR x T.S. Archive',
    jp: 'ArtR x T.S. 対話記録',
    type: 'archive',
    category: 'ログ / 対話',
    status: 'green',
    summary: 'Artist RとT.S.の対話記録。バイナリの使途や和音陣国に隠された「問い」が記録されている。',
    url: 'https://ec2045.github.io/artr-ts/',
    tags: ['対話', '記録', 'アーカイブ']
  },
  {
    name: "Rittsu's Blog",
    jp: "Rittsu's - 過去の記憶",
    type: 'person',
    category: '個人 / アーカイブ',
    status: 'green',
    summary: 'Rの称号を受け継ぐりっつーのブログ。過去の記憶やメイとの出会いの記録。',
    url: 'https://ec2045.github.io/rittu-blog/',
    tags: ['ブログ', '記録', '人物']
  },
  {
    name: 'WEN',
    jp: '和温陣国公式放送局',
    type: 'project',
    category: '放送 / メディア',
    status: 'green',
    summary: '和温陣国の国内放送。様々な最新情報を国民に伝えるとともに、国家の文化を国外に発信する役割もある重要なメディアです。',
    url: 'https://ec2045.github.io/WZN/',
    tags: ['放送', 'メディア', '和温陣国']
  },
  {
    name: 'The-Bible-of-Kneaded-Erasers',
    jp: '練里消詩教',
    type: 'project',
    category: '宗教',
    status: 'green',
    summary: '「世界は練り消しのようなまとまりを持つべきだ」という思想をもつ宗教団体。経典である「練里消詩教」は世界を柔軟に捉えるための教えを説いています',
    url: 'https://ec2045.github.io/The-Bible-of-Kneaded-Erasers/',
    tags: ['宗教', '練り消し', '経典']
  },
    {
    name: '2045font',
    jp: '2045フォント',
    type: 'project',
    category: 'フォント',
    status: 'green',
    summary: '東暦2045で使われるフォントの公式サイト',
    url: 'https://ec2045.github.io/2045font/',
    tags: ['フォント', '文字', '文化']
  },
  {
    name: '!byaren Exchange ',
    jp: '!byaren 交換公式サイト',
    type: 'project',
    category: 'サイト',
    status: 'green',
    summary: 'onvaの市場価値がわかるサイト',
    url: 'https://ec2045.github.io/2045font/',
    tags: ['国家', '経済', '通貨']
  },
  {
    name: 'RAC',
    jp: '生物アーカイブ',
    type: 'project',
    category: 'アーカイブ',
    status: 'green',
    summary: '生命体や、異常存在、異常現象をまとめたサイト。',
    url: 'https://ec2045.github.io/RAC/',
    tags: ['国家', '経済', '通貨']
  },
];


const icons = {
  organization: '◼',
  archive: '⌁',
  person: '◉',
  project: '✦'
};

const grid = document.getElementById('grid');
const search = document.getElementById('search');
const filter = document.getElementById('filter');
const sort = document.getElementById('sort');
const count = document.getElementById('count');
const connectionCount = document.getElementById('connection-count');
const loader = document.getElementById('loader');

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[s]));
}

/**
 * レンダリング処理
 */
function render() {
  const q = search.value.trim().toLowerCase();
  const f = filter.value;
  const s = sort.value;

  // フィルタリング
  let list = worlds.filter(w => {
    const hay = [w.name, w.jp, w.category, w.summary, ...(w.tags || [])].join(' ').toLowerCase();
    const okSearch = !q || hay.includes(q);
    const okFilter = f === 'all' || w.type === f;
    return okSearch && okFilter;
  });

  // ソート
  if (s === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
  } else if (s === 'type') {
    list.sort((a, b) => (a.type + a.name).localeCompare(b.type + b.name, 'ja'));
  }

  // カード表示生成
  grid.innerHTML = list.map(w => `
        <article class="card">
          <div class="badge-row">
            <span class="badge">${icons[w.type] || '•'} ${escapeHtml(w.category)}</span>
            <span class="status ${w.status}">${escapeHtml(w.type.toUpperCase())}</span>
          </div>
          <h4>${escapeHtml(w.name)}</h4>
          <div class="jp">${escapeHtml(w.jp)}</div>
          <p class="desc">${escapeHtml(w.summary)}</p>
          <div class="badge-row">${w.tags.map(t => `<span class="badge"># ${escapeHtml(t)}</span>`).join('')}</div>
          <div class="card-footer">
            <a class="linkbtn" href="${w.url}" target="_blank" rel="noopener noreferrer">開く →</a>
            <span class="hint">${escapeHtml(w.category)}</span>
          </div>
        </article>
      `).join('');

  // 表示件数と総接続数の更新
  count.textContent = `${list.length} 件表示`;
  connectionCount.textContent = worlds.length;
}

// イベントリスナー
search.addEventListener('input', render);
filter.addEventListener('change', render);
sort.addEventListener('change', render);

// 初期化
window.onload = function () {
  // ローダー解除
  setTimeout(() => {
    loader.classList.add('hide');
  }, 900);

  // 最初のレンダリング
  render();
};

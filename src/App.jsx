import './App.css'

const imagePath = (fileName) =>
  `${import.meta.env.BASE_URL}images/donatella-web/${encodeURIComponent(fileName)}`

const donatellaImages = {
  cover: imagePath('Cover.jpg'),
  p1: imagePath('P1.jpg'),
  p2: imagePath('P2.jpg'),
  p3: imagePath('P3.jpg'),
  p4: imagePath('P4.jpg'),
  zb1: imagePath('ZB1.jpg'),
  zb2: imagePath('ZB2.jpg'),
  zb3: imagePath('ZB3.jpg'),
  italy1: imagePath('Italy 1.jpg'),
  italy2: imagePath('Italy 2.jpg'),
  italy3: imagePath('Italy 3.jpg'),
  italy4: imagePath('Italy 4.jpg'),
  ny1: imagePath('NY1.jpg'),
  ny2: imagePath('NY2.jpg'),
  ny3: imagePath('NY3.jpg'),
  genexis1: imagePath('Genexis BioTech1.jpg'),
  genexis2: imagePath('Genexis BioTech2.jpg'),
  genexis3: imagePath('Genexis BioTech3.jpg'),
  end1: imagePath('End1.jpg'),
  end2: imagePath('End2.jpg'),
  end3: imagePath('End3.jpg'),
}

const chapters = [
  {
    era: '1960年代',
    title: '意大利南部的根源',
    place: '贫困渔村 / 家族地下室',
    image: donatellaImages.p1,
    summary:
      'Donatella 出生在意大利南部海边的贫困村庄。父亲的地下生意让她过早见识权力、沉默和谈判的重量，也让她第一次接触到家族秘藏的生物机械研究。',
    detail:
      '她学会观察每个人的弱点，判断风险的方向，并把冷静当成最可靠的武器。地下室里闪烁的仪器，后来成为她跨入生物科技世界的第一道暗门。',
  },
  {
    era: '1970年代末',
    title: '纽约的崛起',
    place: '航班舷窗 / 布鲁克林交易所',
    image: donatellaImages.p2,
    summary:
      '带着财富与秘密抵达纽约后，Donatella 没有依靠蛮力扩张。她用商业判断、心理战和政治交易，一步步取得纽约地下世界的信任。',
    detail:
      '自由女神像出现在舷窗外时，她把那座城市看成一张等待重写的合约。几年之内，她从边缘角色变成了被各方仰望的黑帮女王。',
  },
  {
    era: '2040年代',
    title: '生物科技的新生',
    place: 'Genexis BioTech 总部',
    image: donatellaImages.p3,
    summary:
      '当传统地下生意无法容纳她的野心，Donatella 投资并掌控 Genexis BioTech，将家族技术转化为公开世界的资本与声望。',
    detail:
      '她身着白大褂，并以女王般的姿态指挥实验室。第一代猫机器人融合体并不完美，却证明了生命与机器可以被同一个意志重新编排。',
  },
  {
    era: '本世纪60年代',
    title: '冷酷统治与未来挑战',
    place: '全球生物科技高塔',
    image: donatellaImages.p4,
    summary:
      '机械化后的 Donatella 已不再只是猫咪、掌权者或企业家。她成为跨越生命形态的统治者，控制着全球生物科技产业的核心命脉。',
    detail:
      '在未来都市的高塔上，她背对众人，面向机械猫人、仿生人和人类臣民。她的帝国不只出售技术，也重新定义世界的生存规则。',
  },
]

const gallery = [
  {
    title: '南方渔村的继承者',
    caption: '烟雾、海盐和地下设备之间，年轻的 Donatella 学会了如何保持沉默。',
    image: donatellaImages.italy2,
  },
  {
    title: '家族地下室',
    caption: '黑暗里同时存在权力训练与机械实验，这是她未来帝国的原点。',
    image: donatellaImages.italy3,
  },
  {
    title: '离开意大利之前',
    caption: '旧世界的海风、家族的秘密和她尚未公开的野心在同一刻凝固。',
    image: donatellaImages.italy1,
  },
  {
    title: '纽约舷窗里的野心',
    caption: '她抵达纽约时，看到的不是自由，而是一座可以被计算和收购的城市。',
    image: donatellaImages.ny1,
  },
  {
    title: '布鲁克林交易',
    caption: '她用沉默完成威慑，用合约完成扩张，把地下世界变成自己的董事会。',
    image: donatellaImages.ny2,
  },
  {
    title: '黑帮女王加冕',
    caption: '纽约不再只是目的地，而是她建立跨世纪势力的第一座王城。',
    image: donatellaImages.ny3,
  },
  {
    title: 'Genexis 的实验女王',
    caption: '在冷光实验室中，她用优雅的姿态指挥一场跨越物种边界的改造。',
    image: donatellaImages.genexis1,
  },
  {
    title: '融合体原型',
    caption: '不完美的猫机器人融合体证明了一个事实：生命可以被重新设计。',
    image: donatellaImages.genexis2,
  },
  {
    title: '机械生命蓝图',
    caption: 'Genexis 的成就让她从地下权力者转向公开世界的科技统治者。',
    image: donatellaImages.genexis3,
  },
  {
    title: '未来高塔',
    caption: '她站在新世界的高处，俯瞰机械猫人、仿生人与人类臣民。',
    image: donatellaImages.end2,
    tall: true,
  },
  {
    title: '帝国秩序',
    caption: '生物科技重塑政治、寿命和身体，Donatella 成为秩序本身。',
    image: donatellaImages.end1,
    tall: true,
  },
  {
    title: '永恒统治',
    caption: '从猫咪到机械生命体，她把自己的传说写进未来世界的结构里。',
    image: donatellaImages.end3,
    tall: true,
  },
]

const products = [
  {
    name: 'Donatella 动作人偶',
    description: '可替换机械爪、实验室披风和纽约统治者底座。',
    price: '¥499',
    image: donatellaImages.zb1,
  },
  {
    name: 'Genexis 实验日志',
    description: '复古档案风笔记本，收录帝国时间线和机密编号页。',
    price: '¥129',
    image: donatellaImages.zb2,
  },
  {
    name: '机械猫徽章套装',
    description: '南意大利、纽约、Genexis 三枚金属徽章。',
    price: '¥89',
    image: donatellaImages.zb3,
  },
]

function StoryChapter({ chapter, index }) {
  return (
    <article className="chapter">
      <div className="chapter-media">
        {chapter.image ? (
          <img src={chapter.image} alt={`${chapter.title}阶段的 Donatella 插图`} />
        ) : (
          <div className="image-empty">图片暂时空缺</div>
        )}
        <span className="chapter-index">0{index + 1}</span>
      </div>
      <div className="chapter-copy">
        <p className="kicker">{chapter.era}</p>
        <h3>{chapter.title}</h3>
        <p className="place">{chapter.place}</p>
        <p>{chapter.summary}</p>
        <p>{chapter.detail}</p>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="Donatella 页面导航">
        <a href="#home">首页</a>
        <a href="#story">故事之旅</a>
        <a href="#gallery">画廊</a>
        <a href="#shop">商店</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="kicker">Donatella Archives</p>
          <h1>Donatella 的崛起与统治</h1>
          <p>
            她从意大利南部贫困渔村走来，穿过纽约地下世界的阴影，最终掌控
            Genexis BioTech，把猫咪的优雅、权力的冷静和机械生命的未来压缩进同一个名字。
          </p>
          <div className="hero-actions" aria-label="页面快速入口">
            <a href="#story">阅读故事</a>
            <a href="#gallery">查看画廊</a>
            <a href="#shop">进店购物</a>
          </div>
        </div>
        <div className="hero-portrait" aria-label="Donatella 主视觉">
          <img src={donatellaImages.cover} alt="Donatella Genexis BioTech Empress 封面图" />
          <div className="portrait-badge">
            <strong>Genexis</strong>
            <span>BioTech Empress</span>
          </div>
        </div>
      </section>

      <section className="section story-section" id="story">
        <div className="section-heading">
          <p className="kicker">Story Journey</p>
          <h2>从普通猫咪到生物科技帝国女王</h2>
          <p>
            四个时代构成 Donatella 的完整转变：贫穷、迁徙、科技介入，以及未来世界的全球统治。
          </p>
        </div>
        <div className="chapters">
          {chapters.map((chapter, index) => (
            <StoryChapter key={chapter.title} chapter={chapter} index={index} />
          ))}
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="section-heading">
          <p className="kicker">Gallery</p>
          <h2>Donatella 的重要时刻</h2>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <figure className={`gallery-item ${item.tall ? 'gallery-item-tall' : ''}`} key={item.title}>
              <img src={item.image} alt={item.title} />
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section shop-section" id="shop">
        <div className="section-heading align-left">
          <p className="kicker">Shop</p>
          <h2>Donatella 帝国商品陈列</h2>
          <p>为她的崛起、实验室和未来统治设计的收藏品展示区。</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product" key={product.name}>
              <div className="product-image">
                <img src={product.image} alt={`${product.name}商品图`} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>{product.price}</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        欢迎购买周边，为生物科技帝国女王集资购买猫条
      </footer>
    </main>
  )
}

export default App

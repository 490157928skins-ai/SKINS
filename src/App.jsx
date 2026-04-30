import './App.css'

const pets = [
  {
    name: '贰拾',
    species: '灰色蓝猫',
    personality: '安静、聪明、略带高冷，熟悉之后会用很轻的方式撒娇。',
    role: '猫咪馆的银灰馆长，负责审阅每一束阳光是否足够柔软。',
    image: '/SKINS/images/ershi.png',
    accent: 'moon',
  },
  {
    name: '黄狸',
    species: '玳瑁猫',
    personality: '活泼机警，观察力很强，喜欢把家里的动静全部收入眼底。',
    role: '猫咪馆的巡逻骑士，守护所有纸箱、窗台和晚饭时间。',
    image: '/SKINS/images/huangli.png',
    accent: 'amber',
  },
  {
    name: '奶嘴儿',
    species: '银白猫',
    personality: '温柔亲人，像一团会呼吸的奶油云，擅长把房间变安静。',
    role: '猫咪馆的云朵收藏家，专门保管柔软、梦境和被窝边角。',
    image: '/SKINS/images/naizuier.png',
    accent: 'cream',
  },
]

function PetCard({ pet }) {
  return (
    <article className={`pet-card pet-card-${pet.accent}`}>
      <div className="photo-frame">
        <img src={pet.image} alt={`${pet.name}的照片占位图`} />
      </div>

      <div className="card-content">
        <div className="card-heading">
          <p className="label">CAT PROFILE</p>
          <h2>{pet.name}</h2>
        </div>

        <dl className="details">
          <div>
            <dt>物种 / 外貌</dt>
            <dd>{pet.species}</dd>
          </div>
          <div>
            <dt>性格</dt>
            <dd>{pet.personality}</dd>
          </div>
          <div>
            <dt>身份设定</dt>
            <dd>{pet.role}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">世界上最可爱的猫咪馆</p>
        <h1>我家的宠物档案馆</h1>
        <p className="hero-copy">
          三位猫咪常驻嘉宾，以柔软、机灵和一点点骄傲共同管理这座温暖的小小展馆。
        </p>
      </section>

      <section className="pet-grid" aria-label="宠物卡片区">
        {pets.map((pet) => (
          <PetCard key={pet.name} pet={pet} />
        ))}
      </section>
    </main>
  )
}

export default App

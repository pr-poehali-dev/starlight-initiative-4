import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ШКОЛОДЕНЬ
          </a>
          <div className="flex space-x-8">
            <a href="#features" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Функции
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О приложении
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Скачать
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ШКОЛО
              <br />
              ДЕНЬ
            </h1>
            <p className="text-xl max-w-xl mb-8">
              Умный дневник школьника. Фото доски → готовый план. Помодоро-таймер, чек-листы, виртуальный питомец и родительский контроль без стресса.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-black text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
              >
                Попробовать бесплатно
              </a>
              <a
                href="#features"
                className="border-2 border-black px-8 py-3 text-sm uppercase tracking-widest hover:border-red-600 hover:text-red-600 transition-colors"
              >
                Как это работает
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-8xl mb-4">🐾</div>
                <div className="text-xl font-bold tracking-tighter">Уровень 12</div>
                <div className="text-sm uppercase tracking-widest opacity-80 mt-1">Всё ДЗ выполнено!</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black flex items-center justify-center">
                <span className="text-white text-xs text-center font-bold uppercase tracking-wider leading-tight px-2">Помо<br/>доро</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ФУНКЦИИ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="Camera" size={48} className="text-black group-hover:text-white transition-colors mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors">01</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Фото доски</h3>
              <p className="text-neutral-400">Сфотографируй доску — приложение само распознает задания и составит список дел</p>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="Timer" size={48} className="text-black group-hover:text-white transition-colors mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors">02</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Помодоро-таймер</h3>
              <p className="text-neutral-400">25 минут работы — 5 минут отдыха. Научно доказанный метод для максимальной концентрации</p>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="Star" size={48} className="text-black group-hover:text-white transition-colors mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors">03</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Виртуальный питомец</h3>
              <p className="text-neutral-400">Выполняй уроки — развивай питомца. Геймификация превращает домашку в увлекательную игру</p>
            </div>

            {/* Feature 4 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="CheckSquare" size={48} className="text-black group-hover:text-white transition-colors mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors">04</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Умные чек-листы</h3>
              <p className="text-neutral-400">ИИ разбивает сложное задание на простые шаги. Большая задача больше не пугает</p>
            </div>

            {/* Feature 5 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="MessageCircle" size={48} className="text-black group-hover:text-white transition-colors mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors">05</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">ИИ-помощник</h3>
              <p className="text-neutral-400">Не даёт готовых ответов — задаёт наводящие вопросы. Ребёнок думает сам, но не один</p>
            </div>

            {/* Feature 6 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300 p-8">
                  <Icon name="Eye" size={48} className="text-black group-hover:text-white transition-colors mb-4" />
                  <span className="text-black group-hover:text-white text-5xl font-bold transition-colors">06</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Тихий контроль</h3>
              <p className="text-neutral-400">Родители видят прогресс в реальном времени — без нотаций, давления и конфликтов</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О НАС</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="text-7xl mb-6">📚</div>
                  <div className="text-2xl font-bold tracking-tighter">87% детей</div>
                  <div className="text-sm uppercase tracking-widest text-neutral-500 mt-2">делают уроки быстрее</div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black pointer-events-none"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                ШКОЛОДЕНЬ — это не просто дневник. Это система, которая превращает скучную подготовку уроков в структурированный, наглядный и увлекательный процесс.
              </p>
              <p className="mb-6">
                Мы создали приложение для детей 8–16 лет, которое работает так, как работает детский мозг: через игру, достижения и короткие сфокусированные сессии. Технологии распознавания изображений и голоса убирают рутину, а ИИ-помощник учит думать, а не подсказывает ответы.
              </p>
              <p className="mb-6">
                Родители получают спокойствие без необходимости стоять над душой. Ребёнок — самостоятельность и уверенность в себе.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Геймификация</li>
                    <li>Научный подход</li>
                    <li>Без готовых ответов</li>
                    <li>Тихий контроль</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Возможности</h3>
                  <ul className="space-y-2">
                    <li>Фото и голос</li>
                    <li>Помодоро-таймер</li>
                    <li>ИИ-помощник</li>
                    <li>Виртуальный питомец</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">СКАЧАТЬ</h2>
              <p className="text-xl mb-8">Оставьте email — пришлём ссылку на приложение, как только оно выйдет. Ранний доступ бесплатно.</p>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <Icon name="Mail" size={18} className="text-white opacity-70" />
                  <a href="mailto:hello@shkoloden.ru" className="hover:underline">
                    hello@shkoloden.ru
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Icon name="MessageSquare" size={18} className="text-white opacity-70" />
                  <a href="https://t.me/shkoloden" className="hover:underline">
                    Telegram-канал
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Icon name="MapPin" size={18} className="text-white opacity-70" />
                  <span>Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm uppercase tracking-widest mb-2">
                    Кто вы?
                  </label>
                  <select
                    id="role"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black text-white"
                  >
                    <option value="" className="text-black">Выберите роль</option>
                    <option value="parent" className="text-black">Родитель</option>
                    <option value="student" className="text-black">Школьник</option>
                    <option value="teacher" className="text-black">Учитель</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Пожелания
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 resize-none"
                    placeholder="Что хотите видеть в приложении?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-red-600 py-4 text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors"
                >
                  Получить ранний доступ
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-bold tracking-tighter">ШКОЛОДЕНЬ</span>
          <span className="text-sm text-neutral-500 uppercase tracking-widest">
            © 2025 Школодень. Все права защищены.
          </span>
          <div className="flex gap-6">
            <a href="#features" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Функции
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О нас
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

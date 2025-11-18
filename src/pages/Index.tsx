import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    { icon: 'Heart', title: 'Семейная терапия', desc: 'Восстановление гармонии в отношениях' },
    { icon: 'User', title: 'Индивидуальные консультации', desc: 'Работа с личными запросами' },
    { icon: 'Users', title: 'Работа с подростками', desc: 'Помощь в переходном возрасте' },
    { icon: 'Laptop', title: 'Онлайн-формат', desc: 'Удобные сессии из дома' },
    { icon: 'Shield', title: 'Поддержка при разводе', desc: 'Сопровождение в сложный период' },
    { icon: 'Brain', title: 'Работа с тревогой', desc: 'Снижение стресса и напряжения' }
  ];

  const benefits = [
    { icon: 'Award', title: '12 лет опыта', desc: 'Практика с 2013 года' },
    { icon: 'Users', title: '500+ счастливых семей', desc: 'Подтвержденные результаты' },
    { icon: 'Video', title: 'Онлайн и офлайн', desc: 'Выбирайте удобный формат' },
    { icon: 'Lock', title: 'Полная конфиденциальность', desc: 'Защита ваших данных' },
    { icon: 'MessageCircle', title: 'Поддержка 24/7', desc: 'Связь между сессиями' }
  ];

  const testimonials = [
    { name: 'Мария К.', text: 'После 6 сессий мы с мужем снова нашли общий язык. Спасибо за профессионализм!', rating: 5 },
    { name: 'Алексей В.', text: 'Помогла справиться с тревожностью. Теперь чувствую себя увереннее в работе и жизни.', rating: 5 },
    { name: 'Елена С.', text: 'Очень деликатный подход. Дочь-подросток открылась и стала спокойнее после консультаций.', rating: 5 }
  ];

  const prices = [
    { title: 'Пробная консультация', price: '2 500 ₽', features: ['50 минут', 'Онлайн или офлайн', 'Первичная диагностика'] },
    { title: 'Стандартная сессия', price: '5 000 ₽', features: ['60 минут', 'Любой формат', 'План работы', 'Поддержка между встречами'] },
    { title: 'Пакет из 8 встреч', price: '35 000 ₽', features: ['8 сессий по 60 мин', 'Скидка 12%', 'Индивидуальная программа', 'Круглосуточная связь'] }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Психолог</div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition">Услуги</a>
            <a href="#about" className="text-foreground hover:text-primary transition">Специалист</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">Отзывы</a>
            <a href="#prices" className="text-foreground hover:text-primary transition">Цены</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Контакты</a>
          </nav>
          <div className="flex gap-3">
            <Button size="icon" variant="outline" className="hover-scale">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button size="icon" className="bg-primary hover:bg-primary/90 hover-scale">
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Психолог, который помогает вернуть гармонию в отношениях за 4–8 сеансов
              </h1>
              <p className="text-lg text-muted-foreground">
                500+ семей прошли терапию · 12 лет практики · Полная конфиденциальность
              </p>
              <div className="bg-accent p-4 rounded-lg border-l-4 border-primary">
                <p className="text-lg font-semibold">Первичная консультация — бесплатно</p>
                <p className="text-sm text-muted-foreground">Или пробная сессия со скидкой 50%</p>
              </div>
              <p className="text-muted-foreground italic">Начните изменений уже сегодня — это легко</p>
              <div className="flex gap-4">
                <Button size="lg" className="hover-scale">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="hover-scale">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/417c610b-643c-4ea7-aa72-5d9459c4b5dc/files/b9011960-033e-44e4-ad94-ec40f4398eed.jpg" 
                alt="Психолог"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {benefits.map((benefit, i) => (
              <Card key={i} className="hover-scale animate-fade-in text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-secondary rounded-full">
                      <Icon name={benefit.icon} size={24} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Направления работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="hover-scale animate-fade-in">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Icon name={service.icon} size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как проходит работа</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Send', title: 'Заявка', desc: 'Оставьте заявку удобным способом' },
              { icon: 'Calendar', title: 'Первая встреча', desc: 'Знакомство и диагностика запроса' },
              { icon: 'ClipboardList', title: 'План работы', desc: 'Индивидуальная программа терапии' },
              { icon: 'Sparkles', title: 'Результат', desc: 'Достижение целей и поддержка' }
            ].map((step, i) => (
              <div key={i} className="text-center animate-fade-in">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {i + 1}
                  </div>
                </div>
                <div className="mb-3">
                  <Icon name={step.icon} size={32} className="mx-auto text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-r from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/417c610b-643c-4ea7-aa72-5d9459c4b5dc/files/ff8befcd-f579-49df-8de6-74581b562560.jpg" 
                alt="Кабинет"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">О специалисте</h2>
              <h3 className="text-2xl text-primary font-semibold">Анна Петрова</h3>
              <p className="text-muted-foreground">Практикующий психолог, специалист по семейной и индивидуальной терапии</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="GraduationCap" size={20} className="text-primary" />
                  <span>МГУ им. Ломоносова, факультет психологии</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Award" size={20} className="text-primary" />
                  <span>12 лет практики в семейной терапии</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="BookOpen" size={20} className="text-primary" />
                  <span>Сертификат когнитивно-поведенческой терапии</span>
                </div>
              </div>
              <p className="text-lg italic border-l-4 border-primary pl-4 py-2 bg-accent rounded">
                "Я помогаю людям обрести гармонию с собой и близкими, найти внутренние ресурсы для счастливой жизни"
              </p>
              <div className="flex gap-4">
                <Button className="hover-scale">
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Записаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <Card key={i} className="hover-scale animate-fade-in">
                <CardContent className="pt-6">
                  <div className="flex mb-3">
                    {Array.from({ length: item.rating }).map((_, j) => (
                      <Icon key={j} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <p className="font-semibold">{item.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Стоимость услуг</h2>
          <p className="text-center text-muted-foreground mb-12">Выберите удобный формат работы</p>
          <div className="grid md:grid-cols-3 gap-6">
            {prices.map((price, i) => (
              <Card key={i} className={`hover-scale animate-fade-in ${i === 2 ? 'border-primary border-2' : ''}`}>
                <CardContent className="pt-6">
                  {i === 2 && (
                    <div className="bg-primary text-white text-center py-1 px-3 rounded-full text-sm font-semibold mb-4 inline-block">
                      Выгодно
                    </div>
                  )}
                  <h3 className="font-bold text-xl mb-2">{price.title}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{price.price}</p>
                  <ul className="space-y-2 mb-6">
                    {price.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full hover-scale">Записаться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Записаться на консультацию</h2>
          <p className="text-center text-muted-foreground mb-12">Заполните форму, и я свяжусь с вами в течение часа</p>
          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Кратко опишите ваш запрос (необязательно)" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full hover-scale">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-6 pt-6 border-t">
                <p className="text-center text-sm text-muted-foreground mb-4">Или напишите напрямую:</p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="hover-scale">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="hover-scale">
                    <Icon name="Send" size={18} className="mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" className="hover-scale">
                    <Icon name="Phone" size={18} className="mr-2" />
                    +7 (999) 123-45-67
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Психолог</h3>
              <p className="text-sm text-muted-foreground">Профессиональная психологическая помощь</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition">Услуги</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition">О специалисте</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition">Отзывы</a></li>
                <li><a href="#prices" className="text-muted-foreground hover:text-primary transition">Цены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>info@psycholog.ru</li>
                <li>Москва, ул. Примерная, 10</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover-scale">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover-scale">
                  <Icon name="Send" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="hover-scale">
                  <Icon name="Instagram" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Психолог. Все права защищены. <a href="#" className="hover:text-primary">Политика конфиденциальности</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

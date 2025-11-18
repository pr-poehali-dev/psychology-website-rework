import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "79000000000";
    const text = `Привет! Меня зовут ${formData.name}. ${formData.message}`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const services = [
    {
      icon: "Heart",
      title: "Семейная терапия",
      description:
        "Помощь в решении семейных конфликтов, улучшение взаимопонимания между партнерами",
    },
    {
      icon: "User",
      title: "Индивидуальные консультации",
      description:
        "Работа с личными проблемами, тревогой, депрессией, самооценкой",
    },
    {
      icon: "Video",
      title: "Онлайн-формат",
      description:
        "Удобные консультации из любой точки мира в комфортной обстановке",
    },
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Конфиденциальность",
      description: "Полная анонимность и защита личных данных",
    },
    {
      icon: "Award",
      title: "Опыт 10+ лет",
      description: "Сертифицированный специалист с подтвержденной квалификацией",
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Удобное время для консультаций, включая вечерние часы",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Запись на консультацию",
      description: "Выберите удобное время через WhatsApp или Telegram",
    },
    {
      number: "02",
      title: "Первая встреча",
      description: "Знакомство, обсуждение запроса и составление плана работы",
    },
    {
      number: "03",
      title: "Работа над целями",
      description: "Регулярные сессии и достижение желаемых результатов",
    },
  ];

  const testimonials = [
    {
      name: "Анна, 34 года",
      text: "Спасибо за помощь в восстановлении отношений с мужем. После 5 сессий мы снова понимаем друг друга.",
      rating: 5,
    },
    {
      name: "Михаил, 28 лет",
      text: "Избавился от тревожности, которая мешала жить полноценной жизнью. Рекомендую!",
      rating: 5,
    },
    {
      name: "Елена, 41 год",
      text: "Профессиональный подход, деликатность и реальные результаты. Нашла себя снова.",
      rating: 5,
    },
  ];

  const results = [
    { number: "500+", label: "Успешных консультаций" },
    { number: "92%", label: "Клиентов достигли целей" },
    { number: "10+", label: "Лет практики" },
  ];

  const prices = [
    {
      title: "Первичная консультация",
      price: "Бесплатно",
      duration: "30 минут",
      features: [
        "Знакомство со специалистом",
        "Обсуждение запроса",
        "План работы",
      ],
    },
    {
      title: "Индивидуальная сессия",
      price: "3500 ₽",
      duration: "60 минут",
      features: [
        "Глубокая проработка темы",
        "Практические упражнения",
        "Домашние задания",
      ],
    },
    {
      title: "Пакет 5 сессий",
      price: "15000 ₽",
      duration: "5 x 60 минут",
      features: [
        "Скидка 15%",
        "Системная работа",
        "Поддержка между сессиями",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-heading font-bold text-primary">
            Психолог онлайн
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О специалисте
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#prices" className="text-foreground hover:text-primary transition-colors">
              Цены
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button variant="default" className="font-heading">
            <a href="#contact">Записаться</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
                Найдите гармонию вместе со мной
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональная психологическая помощь онлайн. Работаем с семейными
                отношениями, личными кризисами и внутренними конфликтами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-heading text-lg">
                  <a href="#contact">Бесплатная консультация</a>
                </Button>
                <Button size="lg" variant="outline" className="font-heading text-lg">
                  <a href="#about">Узнать больше</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/417c610b-643c-4ea7-aa72-5d9459c4b5dc/files/7e62ced5-becb-4b21-8ddc-38ac50949164.jpg"
                alt="Психологический кабинет"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">
            Преимущества работы со мной
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4 text-foreground">
            Мои услуги
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Индивидуальный подход к каждому клиенту
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={36} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-heading font-semibold mb-4">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4 text-foreground">
            Как проходит работа
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Простой и понятный процесс
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-7xl font-heading font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h4 className="text-2xl font-heading font-semibold mb-3">
                  {step.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/417c610b-643c-4ea7-aa72-5d9459c4b5dc/files/a0ced930-5c06-49bd-a57b-42114f812d00.jpg"
                alt="Психолог Анна Иванова"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h3 className="text-4xl font-heading font-bold mb-6 text-foreground">
                О специалисте
              </h3>
              <h4 className="text-2xl font-heading font-semibold mb-4 text-primary">
                Анна Иванова
              </h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Клинический психолог с 10-летним опытом работы. Специализируюсь на
                семейной и индивидуальной психотерапии, работе с тревожными
                расстройствами и кризисными состояниями.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Образование</p>
                    <p className="text-muted-foreground">
                      МГУ им. Ломоносова, факультет психологии
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Сертификаты</p>
                    <p className="text-muted-foreground">
                      КПТ-терапевт, семейный психолог, гештальт-терапевт
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Users" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Опыт</p>
                    <p className="text-muted-foreground">
                      Более 500 успешных консультаций, 10+ лет практики
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="font-heading">
                <a href="#contact">Записаться на консультацию</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4 text-foreground">
            Отзывы клиентов
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят люди, которым я помогла
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-12 text-foreground">
            Результаты работы
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-heading font-bold text-primary mb-2">
                  {result.number}
                </div>
                <p className="text-xl text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4 text-foreground">
            Цены и тарифы
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите удобный формат работы
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((price, index) => (
              <Card
                key={index}
                className={`border-2 transition-all duration-300 hover:shadow-xl animate-fade-in ${
                  index === 0 ? "border-primary bg-primary/5" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {index === 0 && (
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Рекомендую начать
                    </div>
                  )}
                  <h4 className="text-2xl font-heading font-semibold mb-2">
                    {price.title}
                  </h4>
                  <div className="text-4xl font-heading font-bold text-primary mb-2">
                    {price.price}
                  </div>
                  <p className="text-muted-foreground mb-6">{price.duration}</p>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon
                          name="Check"
                          size={20}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={index === 0 ? "default" : "outline"}
                    className="w-full font-heading"
                  >
                    <a href="#contact">Записаться</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-heading font-bold mb-6 text-foreground">
            Миссия
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Моя миссия — помочь каждому человеку найти внутреннюю гармонию, раскрыть
            свой потенциал и построить здоровые отношения с собой и окружающими.
            Я верю, что каждый заслуживает быть счастливым, и психологическая помощь —
            это не слабость, а шаг к лучшей версии себя.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4 text-foreground">
            Запись на консультацию
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Заполните форму, и я свяжусь с вами в течение часа
          </p>
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Ваше имя
                  </label>
                  <Input
                    type="text"
                    placeholder="Как вас зовут?"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Что вас беспокоит?
                  </label>
                  <Textarea
                    placeholder="Кратко опишите ваш запрос (необязательно)"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full font-heading text-lg">
                  Отправить запрос в WhatsApp
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-muted-foreground mb-4">
                  Или свяжитесь со мной напрямую:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" className="font-heading">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="lg" className="font-heading">
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-heading font-bold mb-4 text-foreground">
                Психолог онлайн
              </h4>
              <p className="text-muted-foreground">
                Профессиональная психологическая помощь онлайн
              </p>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-foreground">
                Контакты
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: anna@psycholog.ru</p>
                <p>Телефон: +7 (900) 000-00-00</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4 text-foreground">
                Соцсети
              </h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Психолог Анна Иванова. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

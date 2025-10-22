import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const wishes = [
    {
      icon: "Plane",
      title: "Лёгкого полёта",
      description: "Пусть дорога будет комфортной и быстрой"
    },
    {
      icon: "Sun",
      title: "Яркого солнца",
      description: "Тёплых дней и незабываемых впечатлений"
    },
    {
      icon: "Camera",
      title: "Ярких моментов",
      description: "Миллион фотографий и невероятных эмоций"
    },
    {
      icon: "Sparkles",
      title: "Новых открытий",
      description: "Удивительных мест и восточной магии"
    },
    {
      icon: "Palmtree",
      title: "Полного релакса",
      description: "Отдохни от всего и насладись моментом"
    },
    {
      icon: "Heart",
      title: "Незабываемых эмоций",
      description: "Пусть эта поездка запомнится навсегда"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(94, 58, 138, 0.3), rgba(43, 116, 185, 0.4)), url('https://cdn.poehali.dev/projects/bb2c2acf-a470-4aba-bed2-d36d64578756/files/77852954-f279-4464-93e4-c9b2523362fe.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="inline-block mb-6 animate-glow">
            <Icon name="Palmtree" size={80} className="text-primary drop-shadow-2xl" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
            БОН ВОЯЖ!
          </h1>
          
          <p className="text-2xl md:text-4xl text-white/95 font-semibold mb-8 drop-shadow-lg">
            Эмираты ждут тебя
          </p>
          
          <div className="flex items-center justify-center gap-3 text-white/90">
            <Icon name="Star" size={24} className="animate-glow" />
            <p className="text-lg md:text-xl font-medium">Отличного путешествия!</p>
            <Icon name="Star" size={24} className="animate-glow" />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={40} className="text-white/70" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Особое поздравление
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Брат, впереди тебя ждёт невероятное приключение! 
            Эмираты — это мир роскоши, футуристичной архитектуры и восточного гостеприимства. 
            Наслаждайся каждым мгновением этого путешествия!
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Пожелания в дорогу
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishes.map((wish, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-2 border-border/50 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-primary/10 rounded-full">
                    <Icon name={wish.icon} size={40} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-2">
                    {wish.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {wish.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary to-accent text-white animate-fade-in">
          <div className="text-center">
            <Icon name="Sparkles" size={60} className="mx-auto mb-6 animate-glow" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Возвращайся с историями!
            </h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Пусть эта поездка подарит тебе море позитива, невероятных впечатлений 
              и запоминающихся моментов. Отдыхай на полную, исследуй, удивляйся 
              и наслаждайся восточной сказкой! 
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              <Icon name="Heart" size={28} className="text-red-300 animate-pulse" />
              <p className="text-xl font-semibold">С любовью и лучшими пожеланиями!</p>
              <Icon name="Heart" size={28} className="text-red-300 animate-pulse" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;

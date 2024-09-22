interface Translations {
  title: string;
  about: string;
  news: string;
  gallery: string;
  contact: string;
  buyNow: string;
  availableOn: string;
  slideOneTitle: string;
  slideTwoTitle: string;
  slideThreeTitle: string;
  slideOneDescription: string;
  slideTwoDescription: string;
  slideThreeDescription: string;
  newsTitle: string;
  arenasTitle: string;
  arenasDate: string;
  arenasDescription: string;
  readMore: string;
  replayDate: string;
  replayTitle: string;
  replayDescription: string;
  galleryTitle: string;
  scrollPhotos: string;
  scrollVideos: string;
  availableTitle: string;
  newsLetterTitle: string;
  subscribe: string;
  followUs: string;
  footer: string;
}

interface LanguageTranslations {
  [key: string]: Translations;
}

const translations: LanguageTranslations = {
  en: {
    title: "Home",
    about: "About",
    news: "News",
    gallery: "Gallery",
    contact: "Contact",
    buyNow: "Buy Now",
    availableOn: "Available on",
    slideOneTitle: "ON THE PATH OF VENGEANCE",
    slideTwoTitle: "ADAPTATION IS THE WAY",
    slideThreeTitle: "TRAINING NEVER ENDS",
    slideOneDescription: "The hunt for the assassins of your family will take you through the hidden corners of the city, from gang-ridden suburbs to the cold hallways of corporate towers. You have one day, and countless enemies on your way. Time will be the price to pay.",
    slideTwoDescription: "Careful positioning and clever use of the environment to your advantage are key to your survival. Throwable objects, makeshift weapons, windows and ledges... The odds are stacked against you, you will have to use everything at your disposal to prevail.",
    slideThreeDescription: "Kung Fu is a path for the body and the mind. Learn from your errors, unlock unique skills, and find the strength within yourself to master the devastating techniques of Pak-Mei Kung-Fu.",
    newsTitle: "LATEST NEWS",
    arenasTitle: "PATCH 1.19 & 1.20 - ARENAS & DAY 1 PATCH",
    arenasDate: "March 28, 2023",
    arenasDescription: "Sifu is finally on Steam and Xbox, and the Arenas update is here!",
    readMore: "READ MORE",
    replayDate: "February 3, 2023",
    replayTitle: "REPLAY EDITOR CONTEST",
    replayDescription: "We're launching our second community contest...",
    galleryTitle: "GALLERY",
    scrollPhotos: "PHOTOS_相片",
    scrollVideos: "VIDEOS_影片",
    availableTitle: "available",
    newsLetterTitle: "NEWSLETTER",
    subscribe: "SUBSCRIBE",
    followUs: "FOLLOW US",
    footer: "LOREM IPSUM - ALL RIGHTS RESERVED"
  },
  ua: {
    title: "Домашня",
    about: "Огляд",
    news: "Новини",
    gallery: "Галерея",
    contact: "Контакт",
    buyNow: "Купити зараз",
    availableOn: "Доступно на",
    slideOneTitle: "НА ШЛЯХУ ПОМСТИ",
    slideTwoTitle: "АДАПТАЦІЯ - ЦЕ ШЛЯХ",
    slideThreeTitle: "НАВЧАННЯ НІКОЛИ НЕ ЗАКІНЧУЮТЬСЯ",
    slideOneDescription: "Полювання на вбивць вашої сім'ї проведе вас через таємні куточки міста, від охоплених бандами передмість до холодних коридорів корпоративних веж. У вас один день і незліченна кількість ворогів на вашому шляху. Час буде ціною.",
    slideTwoDescription: "Ретельне розміщення та розумне використання навколишнього середовища на вашу користь є ключовими для вашого виживання. Кидальні предмети, саморобна зброя, вікна та виступи... Шанси проти вас, вам доведеться використовувати все, що є у вашому розпорядженні, щоб перемогти.",
    slideThreeDescription: "Кунг-фу - це шлях для тіла і розуму. Вчіться на своїх помилках, відкрийте унікальні навички та знайдіть у собі сили, щоб освоїти нищівні прийоми Пак-Мей Кунг-Фу.",
    newsTitle: "ОСТАННІ НОВИНИ",
    arenasTitle: "ПАТЧ 1.19 і 1.20 - АРЕНИ ТА ПАТЧ ПЕРШОГО ДНЯ",
    arenasDate: "28 березня, 2023",
    arenasDescription: "Sifu нарешті в Steam і Xbox, а також оновлення Arenas тут!",
    readMore: "ЧИТАТИ БІЛЬШЕ",
    replayDate: "3 лютого, 2023",
    replayTitle: "КОНКУРС ПОВТОРІВ",
    replayDescription: "Ми запускаємо наш другий конкурс спільноти...",
    galleryTitle: "ГАЛЕРЕЯ",
    scrollPhotos: "ФОТО_相片",
    scrollVideos: "ВІДЕО_影片",
    availableTitle: "доступно",
    newsLetterTitle: "ПІДПИСКА",
    subscribe: "ПІДПИСАТИСЬ",
    followUs: "СОЦІАЛЬНІ МЕРЕЖІ",
    footer: "LOREM IPSUM - УСІ ПРАВА ЗАХИЩЕНО"
  },
};

export default translations;

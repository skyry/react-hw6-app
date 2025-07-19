
# React HW6 App

## Опис
Цей застосунок демонструє сучасну маршрутизацію у React з використанням createBrowserRouter та RouterProvider, динамічне створення маршрутів і меню, а також стилізацію всіх сторінок через Bootstrap.

## Основні можливості
- Головне меню з навігацією між сторінками Home, About, Contact (Bootstrap navbar, NavLink).
- Динамічне створення маршрутів і посилань через масив об'єктів.
- Сучасний роутер: createBrowserRouter, RouterProvider.
- Адаптивний дизайн, красивий фон, сучасна верстка.
- Контактна форма, інформація про команду, послуги.

## Структура проекту
react-hw6-app/
├── public/
│   └── vite.svg
│
├── src/
│   ├── App.tsx — головний компонент, маршрутизація та меню
│   ├── index.css
│   ├── main.tsx
│   └── components/
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Contact.tsx
│       └── DataFetcher.tsx (опціонально)
│
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md

## Запуск проекту
1. Встановіть залежності:
   npm install

2. Запустіть застосунок:
   npm run dev

## Використання
- Home — головна сторінка, коротка інформація та послуги.
- About — інформація про команду, місію, переваги.
- Contact — контактна інформація та форма зворотного зв'язку.

## Додатково
- Для коректної роботи стилів переконайтеся, що Bootstrap підключено (npm install bootstrap та import 'bootstrap/dist/css/bootstrap.min.css').
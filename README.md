# Freedom Studios Academy

Одностраничный тёмный лендинг медиаакадемии Freedom Studios Academy. Статический HTML + SCSS, без фреймворков: сборка на Gulp, мобильное меню на ванильном JS.

Восстановлен из собранного билда: оригинальный gulpfile не сохранился, SCSS-исходники извлечены из sourcemap внутри скомпилированного `main.css`, сборка на Gulp воссоздана заново.

## Стек

HTML5, SCSS (dart-sass), Gulp 5, Autoprefixer.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
```

Команды: `npm run build` (разовая сборка: scss в `css/main.css`, js в `js/index.bundle.js`), `npm run format` (Prettier).

## Структура

- `scss/` — `main.scss` и партиалы в `base/` и `blocks/`
- `css/main.css`, `css/main.css.map` — скомпилированный стиль и source map
- `js/index.js`, `js/index.bundle.js` — исходник переключения мобильного меню и минифицированный бандл
- `img/` — картинки и иконки

## Деплой

GitHub Pages раздаёт корень ветки `main`, поэтому скомпилированные файлы хранятся в репозитории: правки вносятся в `scss/` и `js/index.js`, после `npm run build` обновлённые артефакты коммитятся. Сайт: <https://gitmaxm.github.io/studio-gulp/>.

var translation = {
    "New Game": "Новая игра",
    "Resume Game": "Продолжить игру",
    "Do you want to start new game?": "Вы уверены, что хотите начать новую игру? Вы можете потерять Ваш текущий прогресс.",
    "OK": "OK",
    "Cancel": "Отмена",
    "Choose Level": "Выбор уровня",
    "Level:": "Уровень:",
    "Money:": "Счёт:",
    "Switch language": "Сменить язык"
};
if (!i18n.ru) {
    i18n.ru = translation;
} else {
    i18n.ru = i18n.ru.concat(translation);
}

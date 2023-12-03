БЛОК ТОП ПРОДАВЦЫ
ОТЗЫВЫ
БЛОК ОБНОВЛЕНИЙ
FOOTER



Отдельные страницы
1.Сравнение характеристик



Простое добавление файлов без создания версии и ветки
1. git clone https://github.com/feiskooo/branches.git
2. Переходим в папку скаченого проекта
3. Добавляем нужные нам файлы
4. git add .
5. git commit -m "Название файла для Git"
6. git push -u origin


Создание новой версии и сохранение на сервер
1. git clone https://github.com/feiskooo/branches.git
2. cd branches
3. git checkout -b "Название_новой_ветки"
4. git add .
5. git commit -m "Описание_обновления"
6. git push -u origin
7. git push --set-upstream origin Название_новой_ветки

Возрат к нужной верси
1. git log
2. git checkout цифры_нужной_версии
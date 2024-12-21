document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav__ul_a');

    // Устанавливаем активную ссылку при загрузке страницы
    const currentLocation = window.location.href;

    links.forEach((link) => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }

        link.addEventListener('click', function () {
            // Сначала удаляем класс 'active' у всех ссылок
            links.forEach((l) => l.classList.remove('active'));
            
            // Затем добавляем класс 'active' к текущей ссылке
            this.classList.add('active');
        });
    });
});
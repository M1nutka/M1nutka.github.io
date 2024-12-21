document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');

    // Проверка наличия сохранённых данных при загрузке страницы
    if (localStorage.getItem('remember') === 'true') {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        usernameInput.value = savedUsername;
        passwordInput.value = savedPassword;
        rememberCheckbox.checked = true;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const remember = rememberCheckbox.checked;

        if (remember) {
            // Сохраняем данные в localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('remember', 'true');
        } else {
            // Удаляем данные из localStorage
            localStorage.removeItem('password');
            localStorage.removeItem('remember');
        }

        // Передача имени пользователя на следующую страницу через URL
        window.location.href = 'indexac.html?username=' + encodeURIComponent(username);
    });
});
(function() {
    const storedTheme = localStorage.getItem('theme');
    const body = document.body;

    // 初始化主题
    if (storedTheme === 'dark') {
        body.classList.add('dark');
        body.classList.remove('light-mode-override');
    } else if (storedTheme === 'light') {
        body.classList.remove('dark');
        body.classList.add('light-mode-override');
    } else {
        body.classList.remove('light-mode-override');
    }

    // 获取按钮（每个页面都有 id="theme-toggle"）
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    // 设置按钮初始图标
    btn.textContent = body.classList.contains('dark') ? '☀️' : '🌙';

    btn.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light-mode-override');
            localStorage.setItem('theme', 'light');
            btn.textContent = '🌙';
        } else {
            body.classList.add('dark');
            body.classList.remove('light-mode-override');
            localStorage.setItem('theme', 'dark');
            btn.textContent = '☀️';
        }
    });

    // 监听系统主题变化（仅在无手动存储时）
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark');
                if (btn) btn.textContent = '☀️';
            } else {
                body.classList.remove('dark');
                if (btn) btn.textContent = '🌙';
            }
        }
    });
})();

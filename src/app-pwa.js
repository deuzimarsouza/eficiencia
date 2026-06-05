(function registerPwa() {
    if (!('serviceWorker' in navigator)) return;

    const serviceWorkerUrl = new URL('../sw.js', document.currentScript.src);

    window.addEventListener('load', () => {
        navigator.serviceWorker.register(serviceWorkerUrl.pathname).catch(() => {
            // O app continua funcionando normalmente se o navegador bloquear o registro.
        });
    });
})();

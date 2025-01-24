module.exports = (editor) => {

    const addScriptToIframe = (iframe) => {
        const scriptId = 'tailwind-browser-script';

        if (iframe && iframe.contentDocument && !iframe.contentDocument.getElementById(scriptId)) {
            const script = iframe.contentDocument.createElement('script');
            script.id = scriptId;
            script.src = 'https://unpkg.com/@tailwindcss/browser@4';
            script.async = true;
            iframe.contentDocument.head.appendChild(script);

            script.onload = () => {
                console.log('TailwindCSS browser script loaded successfully in iframe');
            };

            script.onerror = () => {
                console.error('Failed to load the TailwindCSS browser script in iframe');
            };
        }
    };

    // Add the script when the iframe loads
    editor.on('load', () => {
        const canvas = editor.Canvas;
        const iframe = canvas.getFrameEl();

        if (iframe) {
            iframe.onload = () => {
                addScriptToIframe(iframe);
            };


            if (iframe.contentDocument.readyState === 'complete') {
                addScriptToIframe(iframe);
            }
        }
    });
};
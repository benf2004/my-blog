import * as React from 'react';
import {useEffect} from 'react';
import Giscus from '@giscus/react';

const Comments = () => {
    useEffect(() => {
        function changeGiscusTheme() {
            const theme = localStorage.getItem('theme-ui-color-mode');

            function sendMessage(message) {
                const iframe = document.querySelector('iframe[title="Comments"]');
                if (!iframe) return;
                iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
            }

            sendMessage({
                setConfig: {
                    theme: theme,
                },
            });
        }

        changeGiscusTheme();
        function listeners(){
            let button = document.querySelector(`button[title="Activate Dark Mode"]`)
            if (!button) button = document.querySelector(`button[title="Activate Light Mode"]`)
            if (button) button.addEventListener('click', changeGiscusTheme);
        }

        setTimeout(listeners, 1000)
    }, []);

    return (
        <Giscus
            id="comments"
            repo="benf2004/my-blog"
            repoId="R_kgDOJx_n5Q"
            category="Announcements"
            categoryId="DIC_kwDOJx_n5c4CXmy-"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
        />
    );
};

export default Comments;

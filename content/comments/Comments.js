import * as React from 'react';
import {useEffect} from 'react';
import Giscus from '@giscus/react';

const Comments = () => {
    useEffect(() => {
        function changeGiscusTheme() {
            const theme = localStorage.getItem('theme-ui-color-mode');

            function sendMessage(message) {
                const iframe = document.querySelector('iframe.giscus-frame');
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

        document.querySelector('button').addEventListener('click', changeGiscusTheme);

        return () => {
            document.querySelector('button').removeEventListener('click', changeGiscusTheme);
        };
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

import React, { useEffect } from 'react';
import Giscus from '@giscus/react';

interface CommentsProps {
    // Define the props for the component here
    theme?: string;
}

const Comments: React.FC<CommentsProps> = ({ theme }) => {
    useEffect(() => {
        function changeGiscusTheme() {
            const selectedTheme = theme || localStorage.getItem('theme-ui-color-mode');

            function sendMessage(message: any) {
                const iframe = document.querySelector('iframe.giscus-frame');
                if (!iframe) return;
                iframe.contentWindow?.postMessage({ giscus: message }, 'https://giscus.app');
            }

            sendMessage({
                setConfig: {
                    theme: selectedTheme,
                },
            });
        }

        changeGiscusTheme();

        document.querySelector('button')?.addEventListener('click', changeGiscusTheme);

        return () => {
            // Cleanup code here (remove event listeners, etc.) if needed
            document.querySelector('button')?.removeEventListener('click', changeGiscusTheme);
        };
    }, [theme]);

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

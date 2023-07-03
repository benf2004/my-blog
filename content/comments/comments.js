import * as React from 'react';
import {useEffect, useState} from 'react';
import Giscus from '@giscus/react';

const Comments = () => {
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'theme-ui-color-mode') {
                setTheme(event.newValue);
            }
        };

        const storedTheme = localStorage.getItem('theme-ui-color-mode');
        if (storedTheme) {
            setTheme(storedTheme);
        }

        window.addEventListener('storage', handleStorageChange);
        console.log(window)

        return () => {
            window.addEventListener('storage', handleStorageChange);
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
            theme={theme}
            lang="en"
        />
    );
};

export default Comments;

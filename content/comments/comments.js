import * as React from 'react';
import {useEffect, useState} from 'react';
import Giscus from '@giscus/react';

const Comments = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme-ui-color-mode'));

    useEffect(() => {
        const handleStorageChange = () => {
            setTheme(localStorage.getItem('theme-ui-color-mode'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
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
            theme={theme} // Pass the theme state variable
            lang="en"
        />
    );
};

export default Comments;

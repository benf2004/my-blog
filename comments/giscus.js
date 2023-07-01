import Giscus from '@giscus/react';

export default function Comments() {
    return (
        <Giscus
            id="comments"
            repo="giscus/giscus-component"
            repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
            category="Announcements"
            categoryId="DIC_kwDOF1L2fM4B-hVS"
            mapping="specific"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="light"
            lang="en"
            loading="lazy"
        />
    );
}
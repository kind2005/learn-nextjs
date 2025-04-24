import Link from "next/link"

export default function AboutUs(){
    return (
    <div>
        <h1>About</h1>
        <hr/>
        <h2>this</h2>
        <div>
            <span>react 맛보기 중 ...</span>
            <span>next.js</span>
            <span>를 사용해서 뚝딱뚝딱</span>
        </div>
        <hr/>
        <h2>next.js</h2>
        <div>
            <ol>
                <li>SSR, CSR, SSG, ISR</li>
                <li>page.tsx, layout.tsx, not-found.tsx, loading.tsx, error.tsx</li>
                <li>&lt;Suspense&gt;</li>
                <li>"use client"</li>
                <li>app/global.css, .module.css</li>
                <li>&lt;Link&gt;, useRouter, prefetch</li>
                <li>Metadata, static metadata, dynamic metatdata(generateMetadata)</li>
                <li>routeGroup (), Dynamic Routes (App Router) []</li>
                <li>usePathname</li>
                <li>fetch(url, options)</li>
                <li>Promise.all()</li>
            </ol>
        </div>
        <hr/>
        <h2>reference</h2>
        <div style={{marginBottom: '50px',}}>
            <dl>
                <dt>GitHub : </dt>
                <dd><Link href="https://github.com/kind2005/learn-nextjs">kind2005/learn-nextjs</Link></dd>
                <dt>강의 : </dt>
                <dd><Link href="https://nomadcoders.co/nextjs-for-beginners">NextJS 14 시작하기 - 노마드 코더 Nomad Coders</Link></dd>
                <dt>API : </dt>
                <dd><Link href="https://nomad-movies.nomadcoders.workers.dev/">Nomad Movies by 니꼬</Link></dd>
            </dl>
        </div>
    </div>
    );
}
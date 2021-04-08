import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | IgNews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Crating a monorepo with Lerna</strong>
                        <p>Inthis.guide, you will learnd hot to create a monorepo.</p>
                    </a>
                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Crating a monorepo with Lerna</strong>
                        <p>Inthis.guide, you will learnd hot to create a monorepo.</p>
                    </a>
                    <a>
                        <time>12 de março de 2021</time>
                        <strong>Crating a monorepo with Lerna</strong>
                        <p>Inthis.guide, you will learnd hot to create a monorepo.</p>
                    </a>
                </div>
            </main>

        </>
    )
}
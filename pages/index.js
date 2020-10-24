import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>my name</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

/*
Code splitting and prefetching
初期状態は現在表示しているページとそれに関係するページのみ読み込む。
Linkコンポーネントが存在しているページはprefetchesしてlink先のページをロードした状態になる。
Linkコンポーネントで関連付けられたページのコードを取得し高速で表示できるようになる。
*/

/*
Pre-renderingの仕組み
- Next.jsはデフォルトで全ページをPre-render
- Pre-rendergin = 事前にHTMLを生成すること
- ブラウザの負荷を下げて、表示を高速化
- 検索エンジンのクローラーにコンテンツを見せられる。
*/

/*
静的ジェネレーション
・外部データなし
    ビルド時にHTMLをレンダリング
・外部データあり(getStaticProps()を使う)
    ビルド時にDBや外部APIからデータを取得
    取得したデータを使ってHTMLをレンダリング
*/

/*
getStaticPropsでデータを取得
- 外部データを取得するために使う
- async/awaitを使って非同期処理を制御できる
- 本番環境ではビルド時に実行される関数
- 開発環境ではリクエスト毎に実行される関数
- pageコンポーネントでのみ使用可能
*/

/*
getServerSidePropsでデータを取得
- リクエスト毎に実行される関数
- Server-Side Renderingのために使う
- 外部データを取得するために使う
- async/awaitを使って非同期処理を制御できる
- pageコンポーネントのみで使用可能
*/

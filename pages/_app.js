import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}

// _app.jsは特殊なファイルでrouteコンポーネントをラップする
// 全ページで共通して実行させたいファイルを読み込む
// 全ページで共通して実行させたい処理を実行する
// 全ページで共通のレイアウトを組む
// ...etc

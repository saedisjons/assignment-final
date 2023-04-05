import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '8a92723f-e155-4850-be8d-056a21f0f31d',
    clientToken: 'pub3e020d7fb55670f7b31c28648f72ec9b',
    site: 'datadoghq.com',
    service:'a-final',
    env:'prod',
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tic Tac Toe</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕹</text></svg>"
        />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;

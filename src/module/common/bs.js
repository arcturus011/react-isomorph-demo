/**
 * Created by chenchen on 2017/2/3.
 */
export default _ => {
    if (process.browser) {
        document.write("<script async src='http://HOST:18441/browser-sync/browser-sync-client.js?v=2.18.7'><\/script>".replace("HOST", location.hostname));
    }
}
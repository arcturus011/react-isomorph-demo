if (process.browser) {

    // https://segmentfault.com/a/1190000009449930

    var dpr, rem, scale;
    var docEl = document.documentElement;
    var fontEl = document.createElement('style');
    var metaEl = document.querySelector('meta[name="viewport"]');

    dpr = window.devicePixelRatio || 1;

    rem = 50 * dpr;

    scale = 1 / dpr;

    // 设置viewport，进行缩放，达到高清效果,  iphone6为例  物理像素750 css像素375，将视口宽度设置两倍，在缩小
    metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

    // 设置data-dpr属性，留作的css hack之用
    docEl.setAttribute('data-dpr', dpr);

    // 动态写入样式
    docEl.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
}
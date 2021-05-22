// turn timestamp into descriptive expression
const ONE_MINUTE_IN_SECONDS = 60;
const ONE_HOUR_IN_SECONDS = 3600;
const ONE_DAY_IN_SECONDS = 86400;

function convertTS(ts) {
    const UTCNow = Date.now() / 1000; // turn milliseconds into seconds
    const timeDiff = UTCNow - ts;
    if (timeDiff / ONE_HOUR_IN_SECONDS < 1) return `${Math.round(timeDiff / ONE_MINUTE_IN_SECONDS)}分钟前`;
    if (timeDiff / ONE_DAY_IN_SECONDS < 1) return  `${Math.round(timeDiff / ONE_HOUR_IN_SECONDS)}小时前`;
    return  `${Math.round(timeDiff / ONE_DAY_IN_SECONDS)}天前`;
}

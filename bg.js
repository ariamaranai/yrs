chrome.omnibox.onInputChanged.addListener(async (text, suggest) => {
  if (navigator.onLine) {
    let data = await (await fetch ("https://assist-search.yahooapis.jp/SuggestSearchService/V3/webassistSearch?callback=fetchSuggest_2147483647&src=realtime&appid=dj0zaiZpPVU5MGlSOUZ4cHVLbCZzPWNvbnN1bWVyc2VjcmV0Jng9ZGQ-&query=" + encodeURIComponent(text))).text();
    (data = data.slice(data.indexOf(",", 31) + 3, -10).split('","')).pop();
    let len = data.length;
    if (len) {
      let s = 0;
      let i = 0;
      while (
        data[i] = { content: s = data[i], description: s },
        ++i < len
      );
      suggest(data);
    }
  }
});
chrome.omnibox.onInputEntered.addListener(text =>
  chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs =>
    text && chrome.tabs.update(tabs[0].id, {
      url: "https://search.yahoo.co.jp/realtime/search?p=" + text
    })
  )
);
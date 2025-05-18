chrome.omnibox.onInputChanged.addListener(async (text, suggest) => {
  if (navigator.onLine) {
    let data = await (await fetch (
      "https://assist-search.yahooapis.jp/SuggestSearchService/V3/webassistSearch?callback=fetchSuggest_" +
      Date.now() +
      "&src=realtime&appid=dj0zaiZpPVU5MGlSOUZ4cHVLbCZzPWNvbnN1bWVyc2VjcmV0Jng9ZGQ-&query=" +
      encodeURIComponent(text)
    )).text();
    let s = (data = data.slice(data.indexOf(",", 31) + 3, -10).split('","')).length - 1;
    if (s) {
      let results = Array(s);
      let i = 0;
      while (
        s = data[i],
        results[i] = { content: s, description: s },
        ++i < results.length
      );
      suggest(results);
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
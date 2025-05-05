chrome.omnibox.onInputChanged.addListener(async (text, suggest) => {
  if (navigator.onLine) {
    let data = await (await fetch (
      "https://assist-search.yahooapis.jp/SuggestSearchService/V3/webassistSearch?callback=fetchSuggest_" +
      Date.now() +
      "&src=realtime&appid=dj0zaiZpPVU5MGlSOUZ4cHVLbCZzPWNvbnN1bWVyc2VjcmV0Jng9ZGQ-&query=" +
      encodeURIComponent(text)
    )).text();
    (data = data.slice(data.indexOf(",", 31) + 3, -10).split('","')).pop();
    suggest(data.map(v => ({ content: "https://search.yahoo.co.jp/realtime/search?p=" + v, description: v })));
  }
});
chrome.omnibox.onInputEntered.addListener(text =>
  chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs =>
    chrome.tabs.update(tabs[0].id, {
      url: text ? "https://search.yahoo.co.jp/realtime/search?p=" + text : "https://search.yahoo.co.jp/realtime"
    })
  )
);
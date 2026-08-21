onunhandledrejection = e => e.preventDefault();

chrome.contextMenus.onClicked.addListener((info, tab) =>
  chrome.tabs.create({
    url:"https://search.yahoo.co.jp/realtime/search?p=" + info.selectionText,
    index: tab.index + 1
  })
);
chrome.omnibox.onInputChanged.addListener((text, suggest, $0) => {
  fetch("https://assist-search.yahooapis.jp/SuggestSearchService/V3/webassistSearch?callback=fetchSuggest_2e9&src=realtime&appid=dj0zaiZpPVU5MGlSOUZ4cHVLbCZzPWNvbnN1bWVyc2VjcmV0Jng9ZGQ-&query=" + encodeURIComponent(text))
  .then(r => r.text())
  .then(r => {
    let data = JSON.parse(r.slice(r.indexOf(",", 31) + 1, -8));
    let i = data.length;
    if (!i)
      return;
    while (
      data[--i] = { content: $0 = data[i], description: $0 },
      i
    );
    return suggest(data);
  });
});
chrome.omnibox.onInputEntered.addListener(text =>
  chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs =>
    text && chrome.tabs.update(
      tabs[0].id,
      { url: "https://search.yahoo.co.jp/realtime/search?p=" + encodeURIComponent(text) }
    )
  )
);
chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    id: "",
    title: 'Search for "%s"',
    contexts: ["selection"]
  })
);

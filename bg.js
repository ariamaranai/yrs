chrome.contextMenus.onClicked.addListener((info, tab) =>
  chrome.tabs.create({
    url:"https://search.yahoo.co.jp/realtime/search?p=" + info.selectionText,
    index: tab.index + 1
  })
);
chrome.omnibox.onInputChanged.addListener(async (text, suggest) => {
  try {
    let data = await (await fetch("https://assist-search.yahooapis.jp/SuggestSearchService/V3/webassistSearch?callback=fetchSuggest_2147483647&src=realtime&appid=dj0zaiZpPVU5MGlSOUZ4cHVLbCZzPWNvbnN1bWVyc2VjcmV0Jng9ZGQ-&query=" + encodeURIComponent(text))).text();
    let i = (data = JSON.parse(data.slice(data.indexOf(",", 31) + 1, -8))).length;
    while (i) {
      let s = data[--i];
      data[i] = { content: s, description: s };
    }
    data.pop();
    return suggest(data);
  } catch {}
});
chrome.omnibox.onInputEntered.addListener(text =>
  chrome.tabs.query({ active: !0, currentWindow: !0 }, tabs =>
    text && chrome.tabs.update(tabs[0].id, { url: "https://search.yahoo.co.jp/realtime/search?p=" + text })
  )
);
chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    id: "",
    title: 'Search for "%s"',
    contexts: ["selection"]
  })
);
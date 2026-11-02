window.PORTAL_LOCALES_READY = (async () => {
  const base = new URL('../lang/', document.currentScript.src);
  const output = {static:{}, cards:{}};
  function parse(source) {
    const data = Object.create(null);
    const decode = value => value.replace(/\\([\\nrt=])/g, (_, c) => ({n:'\n',r:'\r',t:'\t'}[c] ?? c));
    for (const line of source.split(/\r?\n/)) {
      if (!line.trim() || /^\s*[#;]/.test(line)) continue;
      let i=0;
      for (;i<line.length;i++) {if(line[i]==='\\') i++; else if(line[i]==='=') break;}
      if(i===line.length) throw new Error('Invalid .lang entry');
      data[decode(line.slice(0,i))]=decode(line.slice(i+1));
    }
    return data;
  }
  await Promise.all(['ja','en'].map(async language => {
    const response = await fetch(new URL(language+'.lang?v=20261102-1',base));
    if(!response.ok) throw new Error('Could not load '+language+'.lang');
    for(const [key,value] of Object.entries(parse(await response.text()))) {
      if(key.startsWith('static.')) (output.static[key.slice(7)] ||= {})[language] = value;
      else if(key.startsWith('cards.')) output.cards[key.slice(6)] = JSON.parse(value);
    }
  }));
  window.PORTAL_LOCALES=output;
  return output;
})();

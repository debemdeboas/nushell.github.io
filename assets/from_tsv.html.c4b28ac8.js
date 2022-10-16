import{_ as t,o as r,c as o,a,t as e,d as n,e as c}from"./app.93f2f945.js";const p={},l={id:"frontmatter-title-for-formats",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),d=n(),h=n(" for formats"),m={class:"command-title"},b=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from tsv --noheaders --no-infer --trim</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--noheaders</code>: don&#39;t treat the first row as column names</li><li><code>--no-infer</code>: no field type inferencing</li><li><code>--trim {string}</code>: drop leading and trailing whitespaces around headers names and/or field values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Create a tsv file with header columns and open it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">$&#39;c1(char tab)c2(char tab)c3(char nl)1(char tab)2(char tab)3&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv
</code></pre></div><p>Create a tsv file without header columns and open it</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">$&#39;a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv <span class="token parameter variable">-n</span>
</code></pre></div><p>Create a tsv file without header columns and open it, removing all unnecessary whitespaces</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">$&#39;a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv <span class="token parameter variable">--trim</span> all
</code></pre></div><p>Create a tsv file without header columns and open it, removing all unnecessary whitespaces in the header names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">$&#39;a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv <span class="token parameter variable">--trim</span> headers
</code></pre></div><p>Create a tsv file without header columns and open it, removing all unnecessary whitespaces in the field values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">$&#39;a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2&#39;</span> <span class="token operator">|</span> save tsv-data <span class="token operator">|</span> <span class="token function">open</span> tsv-data <span class="token operator">|</span> from tsv <span class="token parameter variable">--trim</span> fields
</code></pre></div>`,15);function u(s,v){return r(),o("div",null,[a("h1",l,[i,d,a("code",null,e(s.$frontmatter.title),1),h]),a("div",m,e(s.$frontmatter.formats),1),b])}const g=t(p,[["render",u],["__file","from_tsv.html.vue"]]);export{g as default};
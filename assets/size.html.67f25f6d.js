import{_ as t,o as n,c as r,a as e,t as s,d as o,e as c}from"./app.17e242a1.js";const i={},p={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; size </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Count the number of words in a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;There are seven words in this sentence&quot;</span> <span class="token operator">|</span> size
</code></pre></div><p>Counts unicode characters</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;\u4ECA\u5929\u5929\u6C14\u771F\u597D&#39;</span> <span class="token operator">|</span> size
</code></pre></div><p>Counts Unicode characters correctly in a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;Ame\u0301lie Amelie&quot;</span> <span class="token operator">|</span> size
</code></pre></div>`,9);function g(a,_){return n(),r("div",null,[e("h1",p,[d,l,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}var f=t(i,[["render",g],["__file","size.html.vue"]]);export{f as default};
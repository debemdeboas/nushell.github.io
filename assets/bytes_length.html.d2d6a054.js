import{_ as s,o as n,c as o,a as e,t,d as r,e as c}from"./app.25279188.js";const p={},l={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=r(),d={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes length ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally find length of binary by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the lengths of multiple strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AB<span class="token punctuation">]</span> <span class="token operator">|</span> bytes length
</code></pre></div><p>Return the lengths of multiple strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>0x<span class="token punctuation">[</span>1F FF AA AB<span class="token punctuation">]</span> 0x<span class="token punctuation">[</span>1F<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> bytes length
</code></pre></div>`,9);function g(a,_){return n(),o("div",null,[e("h1",l,[i,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",d,t(a.$frontmatter.usage),1),u])}const m=s(p,[["render",g],["__file","bytes_length.html.vue"]]);export{m as default};
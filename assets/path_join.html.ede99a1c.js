import{_ as e,z as p,A as o,X as a,C as n,D as t,a6 as c}from"./framework.3d018c9f.js";const i={},r={id:"frontmatter-title-for-default",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path join ...rest --columns</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: Path to append to the input</li><li><code>--columns {table}</code>: For a record or table input, join strings at the given columns</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Optionally, append an additional path to the result. It is designed to accept the output of &#39;path parse&#39; and &#39;path split&#39; subcommands.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Append a filename to a path</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking&#39;</span> <span class="token operator">|</span> path <span class="token function">join</span> spam.txt
</code></pre></div><p>Append a filename to a path</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;/home/viking&#39;</span> <span class="token operator">|</span> path <span class="token function">join</span> spams this_spam.txt
</code></pre></div><p>Append a filename to a path inside a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> path <span class="token function">join</span> spam.txt <span class="token parameter variable">-c</span> <span class="token punctuation">[</span> name <span class="token punctuation">]</span>
</code></pre></div><p>Join a list of parts into a path</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token string">&#39;/&#39;</span> <span class="token string">&#39;home&#39;</span> <span class="token string">&#39;viking&#39;</span> <span class="token string">&#39;spam.txt&#39;</span> <span class="token punctuation">]</span> <span class="token operator">|</span> path <span class="token function">join</span>
</code></pre></div><p>Join a structured path into a path</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> parent stem extension <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span> <span class="token string">&#39;/home/viking&#39;</span> <span class="token string">&#39;spam&#39;</span> <span class="token string">&#39;txt&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> path <span class="token function">join</span>
</code></pre></div>`,17);function u(s,g){return p(),o("div",null,[a("h1",r,[l,n(),a("code",null,t(s.$frontmatter.title),1),n(" for default")]),a("div",d,t(s.$frontmatter.default),1),h])}const m=e(i,[["render",u],["__file","path_join.html.vue"]]);export{m as default};
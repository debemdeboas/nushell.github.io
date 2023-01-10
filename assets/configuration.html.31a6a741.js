import{_ as p,z as d,A as i,X as e,C as n,T as a,$ as o,a6 as t,Q as l}from"./framework.3d018c9f.js";const u={},r=t('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h1><h2 id="nushell-配置与env-nu和config-nu" tabindex="-1"><a class="header-anchor" href="#nushell-配置与env-nu和config-nu" aria-hidden="true">#</a> Nushell 配置与<code>env.nu</code>和<code>config.nu</code></h2><p>Nushell 使用一个配置系统，在启动时加载并运行两个 Nushell 脚本文件： 首先是<code>env.nu</code>，然后是<code>config.nu</code>。 这些文件的路径可以通过调用<code>echo $nu.env-path</code>和<code>echo $nu.config-path</code>找到。 <code>env.nu</code>是用来定义环境变量的，之后这些环境变量定义将在<code>config.nu</code>中可用； <code>config.nu</code>可以用来在全局命名空间中添加定义、别名等等。</p>',3),h={href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"source /path/to/env.nu",-1),g=e("code",null,"source /path/to/config.nu",-1),k=e("code",null,"env.nu",-1),f=e("code",null,"config.nu",-1),b={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"default env.nu",-1),m={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"default config.nu",-1),x=t(`<h3 id="配置-env-config" tabindex="-1"><a class="header-anchor" href="#配置-env-config" aria-hidden="true">#</a> 配置 <code>$env.config</code></h3><p>Nushell 的主要设置是以记录的形式保存在 <code>config</code> 环境变量中。这个记录可以用以下方式创建：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre></div><p>你也可以隐藏(shadow)<code>$env.config</code>并更新它：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert <span class="token operator">&lt;</span>field name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>field value<span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre></div><p>按照约定，这个变量被定义在<code>config.nu</code>文件中。</p><h3 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h3>`,7),T=e("code",null,"let-env",-1),P=e("code",null,"env.nu",-1),R=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env FOO <span class="token operator">=</span> <span class="token string">&#39;BAR&#39;</span>
</code></pre></div><p><em>(尽管 <code>$env.config</code> 是一个环境变量，按照惯例它仍然在 <code>config.nu</code> 中定义。)</em></p><p>以下是值得关注的且为 Nushell 所特有的几个相对重要的环境变量：</p><ul><li><code>LS_COLORS</code>: 在<code>ls</code>中为每个文件类型设置颜色</li><li><code>PROMPT_COMMAND</code>: 为设置提示而执行的代码（块或字符串）</li><li><code>PROMPT_COMMAND_RIGHT</code>: 为设置正确的提示而执行的代码（块）</li><li><code>PROMPT_INDICATOR = &quot;〉&quot;</code>: 提示后打印的提示符（默认为 &quot;&gt;&quot; 类似的 Unicode 符号）</li><li><code>PROMPT_INDICATOR_VI_INSERT = &quot;: &quot;</code></li><li><code>PROMPT_INDICATOR_VI_NORMAL = &quot;〉 &quot;</code></li><li><code>PROMPT_MULTILINE_INDICATOR = &quot;::: &quot;</code></li></ul><h3 id="使用内置命令进行配置" tabindex="-1"><a class="header-anchor" href="#使用内置命令进行配置" aria-hidden="true">#</a> 使用内置命令进行配置</h3><p>从 Nushell 0.64 版本开始新增了两个内置命令(<code>config nu</code> 和 <code>config env</code>), 通过这两个命令，你可以使用自定义的编辑器或者 IDE 快速地更改 Nushell 配置信息</p><p>Nushell 遵循如下的规则来匹配编辑器:</p><ol><li><code>$config.buffer_editor</code></li><li><code>$env.EDITOR</code></li><li><code>$env.VISUAL</code></li><li>如果上面都未匹配成功，则针对 Windows 运行<code>notepad</code>, 其他系统<code>nano</code></li></ol><h3 id="颜色配置部分" tabindex="-1"><a class="header-anchor" href="#颜色配置部分" aria-hidden="true">#</a> 颜色配置部分</h3>`,9),I=t(`<h2 id="将-nu-配置为登录-shell" tabindex="-1"><a class="header-anchor" href="#将-nu-配置为登录-shell" aria-hidden="true">#</a> 将 Nu 配置为登录 Shell</h2><p>要把 Nu 作为一个登录 Shell，你需要配置<code>$env</code>变量。这样，在你将使用 Nu 为登录 Shell 时才有足够的支持来运行外部命令。</p><p>你可以通过在另一个 Shell（如 Bash）中运行 Nu 来建立完整的环境变量集。一旦你进入 Nu，你可以运行这样的命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">env</span> <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token builtin class-name">echo</span> $<span class="token string">&quot;let-env (<span class="token variable">$it</span>.name) = &#39;(<span class="token variable">$it</span>.raw)&#39;&quot;</span> <span class="token punctuation">}</span> <span class="token operator">|</span> str <span class="token function">join</span> <span class="token punctuation">(</span>char <span class="token function">nl</span><span class="token punctuation">)</span>
</code></pre></div>`,4),O=e("code",null,"let-env",-1),$=t(`<p>接下来，在一些发行版上，你还需要确保 Nu 在<code>/etc/shells</code>列表中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cat</span> /etc/shells
<span class="token comment"># /etc/shells: valid login shells</span>
/bin/sh
/bin/dash
/bin/bash
/bin/rbash
/usr/bin/screen
/usr/bin/fish
/home/jonathan/.cargo/bin/nu
</code></pre></div><p>这样你就可以使用<code>chsh</code>命令来将 Nu 设置为你的登录 Shell。在你注销后下次登录时，应该可以看到一个闪亮的 Nu 提示。</p><h3 id="使用-login-nu-进行配置" tabindex="-1"><a class="header-anchor" href="#使用-login-nu-进行配置" aria-hidden="true">#</a> 使用 <code>login.nu</code> 进行配置</h3><p>如果 Nushell 被用作登录 Shell，你可以使用一个特定的配置文件，该文件只在该情况下才会被加载。因此，一个名为 <code>login.nu</code> 的文件必须在标准配置目录中。</p><p>文件 <code>login.nu</code> 的加载在 <code>env.nu</code> 和 <code>config.nu</code> 之后，所以你可以覆盖这些配置，如果你需要的话。</p><p>有一个环境变量 <code>$nu.loginshell-path</code> 包含该文件的路径。</p><h3 id="macos-保持-open-为-usr-bin-open" tabindex="-1"><a class="header-anchor" href="#macos-保持-open-为-usr-bin-open" aria-hidden="true">#</a> macOS: 保持 <code>open</code> 为 <code>/usr/bin/open</code></h3>`,8),A=e("code",null,"open",-1),M=e("code",null,"open",-1),q=e("code",null,"/usr/bin/open",-1),w=e("code",null,"open",-1),S=e("code",null,"config.nu",-1),C=e("code",null,"open",-1),E=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def nuopen <span class="token punctuation">[</span>arg, <span class="token parameter variable">--raw</span> <span class="token punctuation">(</span>-r<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token variable">$raw</span> <span class="token punctuation">{</span> <span class="token function">open</span> <span class="token parameter variable">-r</span> <span class="token variable">$arg</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token function">open</span> <span class="token variable">$arg</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token builtin class-name">alias</span> <span class="token function">open</span> <span class="token operator">=</span> ^open
</code></pre></div><h2 id="path-配置" tabindex="-1"><a class="header-anchor" href="#path-配置" aria-hidden="true">#</a> <code>PATH</code> 配置</h2>`,2),L={href:"https://en.wikipedia.org/wiki/PATH_(variable)",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"env.nu",-1),H=e("code",null,"let-env",-1),V=e("code",null,"append",-1),B=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env <span class="token environment constant">PATH</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token environment constant">PATH</span> <span class="token operator">|</span> append <span class="token string">&#39;/some/path&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,1),U=e("code",null,"/some/path",-1),j=e("code",null,"PATH",-1),y=e("code",null,"prepend",-1),z=e("code",null,"PATH",-1);function F(G,Q){const c=l("ExternalLinkIcon"),s=l("RouterLink");return d(),i("div",null,[r,e("p",null,[e("em",null,[n("(你可以把 Nushell 的配置加载顺序想象成在启动时执行两行 "),e("a",h,[n("REPL"),a(c)]),n("："),_,n("和"),g,n("。因此，用"),k,n("表示环境，用"),f,n("表示其他配置只是一个约定。)")])]),e("p",null,[n("当你在没有设置这些文件的情况下启动 Nushell，Nushell 会提示你下载"),e("a",b,[v,a(c)]),n("和"),e("a",m,[N,a(c)]),n("。 你可以通过浏览这些默认文件，了解环境变量的默认值和所有可配置项的列表。")]),x,e("p",null,[n("你可以在 Nushell 会话期间使用"),a(s,{to:"/book/commands/let-env.html"},{default:o(()=>[T]),_:1}),n("在"),P,n("文件中设置环境变量。比如：")]),R,e("p",null,[n("你可以在 "),a(s,{to:"/zh-CN/book/coloring_and_theming.html"},{default:o(()=>[n("相关章节")]),_:1}),n(" 中了解更多关于设置颜色和主题的信息。")]),I,e("p",null,[n("这将打印出"),a(s,{to:"/book/commands/let-env.html"},{default:o(()=>[O]),_:1}),n("所有行，且包含每个环境变量及其设置。")]),$,e("p",null,[n("一些工具（例如 Emacs）依靠"),A,n("命令来打开 Mac 上的文件。 由于 Nushell 有自己的"),a(s,{to:"/book/commands/open.html"},{default:o(()=>[M]),_:1}),n("命令，它有不同的语义并隐藏了"),q,n("，这样某些工具在试图使用它时将出错。 一个解决这个问题的方法是为 Nushell 的"),w,n("定义一个自定义命令，并在你的"),S,n("文件中为系统的"),C,n("创建一个别名，像这样：")]),E,e("p",null,[n("要在 "),e("a",L,[n("PATH 变量"),a(c)]),n(" 中添加一个路径，你可以在"),D,n("中使用 "),a(s,{to:"/book/commands/let-env.html"},{default:o(()=>[H]),_:1}),n(" 和 "),a(s,{to:"/book/commands/append.html"},{default:o(()=>[V]),_:1}),n(" 完成，如下：")]),B,e("p",null,[n("这将把"),U,n("追加到"),j,n("的末尾；你也可以使用 "),a(s,{to:"/book/commands/prepend.html"},{default:o(()=>[y]),_:1}),n(" 将该路径添加到"),z,n("的开头。")])])}const X=p(u,[["render",F],["__file","configuration.html.vue"]]);export{X as default};
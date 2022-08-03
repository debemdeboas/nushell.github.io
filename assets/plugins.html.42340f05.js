import{_ as e,o as n,c as i,e as t}from"./app.5afaa2be.js";const s={},l=t(`<h1 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h1><p>Die Funktionen von Nushell k\xF6nnen mittels Plugins erweitert werden. Diese Plugins k\xF6nnen einen Gro\xDFteil der selben Operationen ausf\xFChren, wie die internen Befehle. Noch dazu haben Plugins den Vorteil, dass sie separat und flexibel zu Nushell hinzugef\xFCgt werden k\xF6nnen.</p><p>Um ein Plugin hinzuzuf\xFCgen, muss es erstellt werden und dann der Befehl <code>register</code> auf dieses Plugin aufgerufen werden. Wenn das getan wird, muss Nushell auch mitgeteilt werden, welches Protokoll vom Plugin verwendet wird.</p><p>Ein Beispiel:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; register ./my_plugins/nu-plugin-inc -e capnp
</code></pre></div><p>Wenn der Befehl registriert wurde, kann er als Teil der internen Befehle verwendet werden.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; inc --help
</code></pre></div>`,7),r=[l];function a(d,u){return n(),i("div",null,r)}var g=e(s,[["render",a],["__file","plugins.html.vue"]]);export{g as default};
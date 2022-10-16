import{_ as n,r,o as i,c as a,f as l,a as t,b as s,d as e,e as h}from"./app.93f2f945.js";const c={},d=t("h1",{id:"nushell-0-43",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-43","aria-hidden":"true"},"#"),e(" Nushell 0.43")],-1),u=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=t("p",null,"Today, we're releasing 0.43 of Nu. This release is a bugfix release of 0.42.",-1),p=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),f=e("Nu 0.43 is available as "),g={href:"https://github.com/nushell/nushell/releases/tag/0.43.0",target:"_blank",rel:"noopener noreferrer"},m=e("pre-built binaries"),b=e(" or from "),y={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=e("crates.io"),k=e(". If you have Rust installed you can install it using "),x=t("code",null,"cargo install nu",-1),N=e("."),q=h('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><p>You can now learn about some of the upcoming changes in Nushell by reading the <code>tutor e-q</code> page. It will tell you about some of the new features and breaking changes, as well as link you to the full list of changes.</p><h2 id="fixes" tabindex="-1"><a class="header-anchor" href="#fixes" aria-hidden="true">#</a> Fixes</h2>',5),v=e("Fix to the "),I={href:"https://github.com/nushell/nushell/pull/4241",target:"_blank",rel:"noopener noreferrer"},T=e("sample configuration file"),W=e(" (ilius)"),E=e("Fix to a "),V={href:"https://github.com/nushell/nushell/pull/4247",target:"_blank",rel:"noopener noreferrer"},j=e("crate description"),A=e(" (michel-slm)"),B=e("Bump to some "),F={href:"https://github.com/nushell/nushell/pull/4258",target:"_blank",rel:"noopener noreferrer"},L=e("dependencies in wasm support"),G=e(" (dependabot)"),C=e("Update to "),R={href:"https://github.com/nushell/nushell/pull/4261",target:"_blank",rel:"noopener noreferrer"},Y=e("sysinfo support"),z=e(" (GuillaumeGomez)"),H=e("Fix to build "),M={href:"https://github.com/nushell/nushell/pull/4262",target:"_blank",rel:"noopener noreferrer"},O=e("on latest Rust stable + clippy"),P=e(" (jt)"),S=t("h1",{id:"engine-q-progress",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#engine-q-progress","aria-hidden":"true"},"#"),e(" Engine-q progress")],-1),U=t("p",null,[e("Engine-q is now nearly complete. Most of the commands have been ported, as has support for the "),t("code",null,"shells"),e(" feature, many reedline-related improvements, text encoding, and much more. It's now ready for early adopters to pick it up and use it as their shell, reporting any issues they find.")],-1),D=e("To try it out, you can "),J={href:"https://github.com/nushell/engine-q",target:"_blank",rel:"noopener noreferrer"},K=e("build and run engine-q as a standalone application"),Q=e(". Also check out the "),X={href:"https://github.com/nushell/engine-q/issues/459",target:"_blank",rel:"noopener noreferrer"},Z=e("list of configuration settings"),$=e(", "),ee={href:"https://github.com/nushell/engine-q/issues/522",target:"_blank",rel:"noopener noreferrer"},te=e("list of breaking changes"),oe=e(", and "),se={href:"https://github.com/nushell/engine-q/issues/735",target:"_blank",rel:"noopener noreferrer"},ne=e("the final checklist before engine-q merges into Nushell"),re=e("."),ie=t("p",null,"We're hoping to merge engine-q into the main Nushell codebase after the the upcoming 0.44 release. We'll number this release 0.60 to show how much progress has been made by switching to the new engine. We've love to get your feedback on engine-q before it becomes the main Nushell, to help us fix any major issues before the merge happens. Let us know what you find!",-1),ae=e("You can check out a "),le={href:"https://www.youtube.com/watch?v=c18l_HPsOxs",target:"_blank",rel:"noopener noreferrer"},he=e("recent video about engine-q"),ce=e(" if you'd like to see it in action."),de=t("h1",{id:"looking-forward",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),e(" Looking forward")],-1),ue=e("There are still "),_e={href:"https://github.com/nushell/engine-q/issues/242",target:"_blank",rel:"noopener noreferrer"},pe=e("some commands left to port"),fe=e(" if you'd like to jump in and give porting a try. If you're interested, you can also help us by testing out engine-q itself as a shell and report your experiences with it. And of course, come join us on the "),ge={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},me=e("discord"),be=e(". We'd be happy to show you around."),ye=t("p",null,"Thanks again for all your support.",-1);function we(ke,xe){const o=r("ExternalLinkIcon");return i(),a("div",null,[d,u,_,l(" more "),p,t("p",null,[f,t("a",g,[m,s(o)]),b,t("a",y,[w,s(o)]),k,x,N]),q,t("ul",null,[t("li",null,[v,t("a",I,[T,s(o)]),W]),t("li",null,[E,t("a",V,[j,s(o)]),A]),t("li",null,[B,t("a",F,[L,s(o)]),G]),t("li",null,[C,t("a",R,[Y,s(o)]),z]),t("li",null,[H,t("a",M,[O,s(o)]),P])]),S,U,t("p",null,[D,t("a",J,[K,s(o)]),Q,t("a",X,[Z,s(o)]),$,t("a",ee,[te,s(o)]),oe,t("a",se,[ne,s(o)]),re]),ie,t("p",null,[ae,t("a",le,[he,s(o)]),ce]),de,t("p",null,[ue,t("a",_e,[pe,s(o)]),fe,t("a",ge,[me,s(o)]),be]),ye])}const qe=n(c,[["render",we],["__file","2022-01-18-nushell_0_43.html.vue"]]);export{qe as default};
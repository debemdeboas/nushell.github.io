import{_ as e,o as a,c as t,e as n}from"./app.d0d09c60.js";const s={},i=n(`<h1 id="\u30C6\u30FC\u30D5\u3099\u30EB\u3092\u6271\u3046" tabindex="-1"><a class="header-anchor" href="#\u30C6\u30FC\u30D5\u3099\u30EB\u3092\u6271\u3046" aria-hidden="true">#</a> \u30C6\u30FC\u30D6\u30EB\u3092\u6271\u3046</h1><p>Nu \u3067\u30C7\u30FC\u30BF\u3092\u8868\u793A\u3059\u308B\u4E00\u822C\u7684\u306A\u65B9\u6CD5\u306F\u30C6\u30FC\u30D6\u30EB\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3059\u3002Nu \u306B\u306F\u3001\u63A2\u3057\u3066\u3044\u308B\u3082\u306E\u3092\u898B\u3064\u3051\u3084\u3059\u304F\u3057\u305F\u308A\u3001\u5FC5\u8981\u306A\u30C7\u30FC\u30BF\u3092\u7D5E\u308A\u8FBC\u3093\u3060\u308A\u3059\u308B\u306E\u306B\u4FBF\u5229\u306A\u30C6\u30FC\u30D6\u30EB\u3092\u64CD\u4F5C\u3059\u308B\u305F\u3081\u306E\u30B3\u30DE\u30F3\u30C9\u304C\u305F\u304F\u3055\u3093\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><p>\u307E\u305A\u306F\u3058\u3081\u306B\u3001\u4ECA\u56DE\u5229\u7528\u3059\u308B\u30C6\u30FC\u30D6\u30EB\u3092\u78BA\u8A8D\u3057\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 1 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 2 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 3 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
 4 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 5 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 6 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="\u30C6\u3099\u30FC\u30BF\u306E\u30BD\u30FC\u30C8" tabindex="-1"><a class="header-anchor" href="#\u30C6\u3099\u30FC\u30BF\u306E\u30BD\u30FC\u30C8" aria-hidden="true">#</a> \u30C7\u30FC\u30BF\u306E\u30BD\u30FC\u30C8</h2><p>\u30BD\u30FC\u30C8\u306B\u5229\u7528\u3059\u308B\u5217\u540D\u3092\u6307\u5B9A\u3057\u3066\u3001<code>sort-by</code>\u30B3\u30DE\u30F3\u30C9\u3092\u547C\u3073\u3060\u3059\u3053\u3068\u3067\u30C6\u30FC\u30D6\u30EB\u3092\u30BD\u30FC\u30C8\u3067\u304D\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306E\u30B5\u30A4\u30BA\u3067\u30C6\u30FC\u30D6\u30EB\u3092\u30BD\u30FC\u30C8\u3057\u305F\u3044\u3068\u3057\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 1 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
 2 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 3 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 4 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 5 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 6 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u6BD4\u8F03\u3055\u3048\u3067\u304D\u308C\u3070\u4EFB\u610F\u306E\u5217\u3067\u30BD\u30FC\u30C8\u304C\u884C\u306A\u3048\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001&quot;name&quot;\u3001&quot;accessed&quot;\u3001\u307E\u305F\u306F&quot;modified&quot;\u5217\u3067\u30BD\u30FC\u30C8\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><h2 id="\u5FC5\u8981\u306A\u30C6\u3099\u30FC\u30BF\u3092\u9078\u629E\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u5FC5\u8981\u306A\u30C6\u3099\u30FC\u30BF\u3092\u9078\u629E\u3059\u308B" aria-hidden="true">#</a> \u5FC5\u8981\u306A\u30C7\u30FC\u30BF\u3092\u9078\u629E\u3059\u308B</h2><p>\u5217\u3084\u884C\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u3067\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u5FC5\u8981\u306A\u30C7\u30FC\u30BF\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u3044\u304F\u3064\u304B\u306E\u5217\u3092\u9078\u629E\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name size
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 size
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502  4.6 KB
 1 \u2502 lib.rs        \u2502   330 B
 2 \u2502 lite_parse.rs \u2502  6.3 KB
 3 \u2502 parse.rs      \u2502 49.8 KB
 4 \u2502 path.rs       \u2502  2.1 KB
 5 \u2502 shapes.rs     \u2502  4.7 KB
 6 \u2502 signature.rs  \u2502  1.2 KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u3053\u3046\u3059\u308B\u3053\u3068\u3067\u3001\u3088\u308A\u5FC5\u8981\u3068\u3059\u308B\u30C7\u30FC\u30BF\u306B\u30D5\u30A9\u30FC\u30AB\u30B9\u3057\u305F\u30C6\u30FC\u30D6\u30EB\u3092\u4F5C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6B21\u306B\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u304B\u3089\u3082\u3063\u3068\u3082\u5C0F\u3055\u3044 5 \u3064\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u8868\u793A\u3057\u3066\u307F\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name         \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 lib.rs       \u2502 File \u2502  330 B \u2502 5 days ago
 1 \u2502 signature.rs \u2502 File \u2502 1.2 KB \u2502 5 days ago
 2 \u2502 path.rs      \u2502 File \u2502 2.1 KB \u2502 5 days ago
 3 \u2502 files.rs     \u2502 File \u2502 4.6 KB \u2502 5 days ago
 4 \u2502 shapes.rs    \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u3082\u3063\u3068\u3082\u5C0F\u3055\u3044\u30D5\u30A1\u30A4\u30EB\u3092\u53D6\u5F97\u3059\u308B\u305F\u3081\u306B\u307E\u305A\u30B5\u30A4\u30BA\u3067\u30BD\u30FC\u30C8\u3057\u3001\u305D\u308C\u304B\u3089<code>first 5</code>\u3092\u5229\u7528\u3057\u3066\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u6700\u521D\u306E 5 \u884C\u3092\u8FD4\u3057\u3066\u3044\u307E\u3059\u3002</p><p>\u4E0D\u8981\u306A\u884C\u3092<code>skip</code>\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u4E0A\u8A18\u3067\u8FD4\u3055\u308C\u305F\uFF15\u884C\u306E\u3046\u3061\u6700\u521D\u306E\uFF12\u884C\u3092\u30B9\u30AD\u30C3\u30D7\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5 | skip 2
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name      \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 path.rs   \u2502 File \u2502 2.1 KB \u2502 5 days ago
 1 \u2502 files.rs  \u2502 File \u2502 4.6 KB \u2502 5 days ago
 2 \u2502 shapes.rs \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u95A2\u5FC3\u306E\u3042\u308B\uFF13\u884C\u306B\u7D5E\u308A\u8FBC\u307F\u307E\u3057\u305F\u3002</p><p>\u30C7\u30FC\u30BF\u3092\u9078\u629E\u3059\u308B\u305F\u3081\u306E\u4ED6\u306E\u30B3\u30DE\u30F3\u30C9\u3082\u307F\u3066\u307F\u307E\u3057\u3087\u3046\u3002\u30C6\u30FC\u30D6\u30EB\u306E\u5404\u884C\u304C\u6570\u5B57\u3092\u3082\u3064\u3053\u3068\u3092\u7591\u554F\u306B\u601D\u3063\u3066\u3044\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u3053\u308C\u306F\u5358\u4E00\u306E\u884C\u3092\u7C21\u5358\u306B\u6307\u5B9A\u3059\u308B\u65B9\u6CD5\u3068\u3057\u3066\u6A5F\u80FD\u3057\u307E\u3059\u3002\u30C6\u30FC\u30D6\u30EB\u3092\u30D5\u30A1\u30A4\u30EB\u540D\u3067\u30BD\u30FC\u30C8\u3057\u3066\u3001<code>nth</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5229\u7528\u3057\u3066 n \u884C\u76EE\u3092\u9078\u629E\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 1 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 2 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 3 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
 4 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 5 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 6 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

&gt; ls | sort-by name | nth 5
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name     \u2502 shapes.rs
 type     \u2502 File
 size     \u2502 4.7 KB
 modified \u2502 5 days ago
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="\u30C6\u30FC\u30D5\u3099\u30EB\u304B\u3089\u30C6\u3099\u30FC\u30BF\u3092\u53D6\u5F97\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u30C6\u30FC\u30D5\u3099\u30EB\u304B\u3089\u30C6\u3099\u30FC\u30BF\u3092\u53D6\u5F97\u3059\u308B" aria-hidden="true">#</a> \u30C6\u30FC\u30D6\u30EB\u304B\u3089\u30C7\u30FC\u30BF\u3092\u53D6\u5F97\u3059\u308B</h2><p>\u3053\u308C\u307E\u3067\u306F\u3001\u30C6\u30FC\u30D6\u30EB\u3092\u5FC5\u8981\u306A\u3082\u306E\u3060\u3051\u306B\u30C8\u30EA\u30DF\u30F3\u30B0\u3059\u308B\u64CD\u4F5C\u3092\u884C\u3063\u3066\u304D\u307E\u3057\u305F\u3002\u3068\u304D\u306B\u306F\u4E00\u6B69\u9032\u3093\u3067\u3001\u5217\u5168\u4F53\u3067\u306F\u306A\u304F\u3001\u30BB\u30EB\u81EA\u4F53\u306E\u5024\u304C\u5FC5\u8981\u306B\u306A\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002\u305F\u3068\u3048\u3070\u3001\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u30EA\u30B9\u30C8\u3060\u3051\u3092\u53D6\u5F97\u3057\u305F\u3044\u3068\u3057\u307E\u3057\u3087\u3046\u3002\u3053\u306E\u5834\u5408<code>get</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs
 1 \u2502 lib.rs
 2 \u2502 lite_parse.rs
 3 \u2502 parse.rs
 4 \u2502 path.rs
 5 \u2502 shapes.rs
 6 \u2502 signature.rs
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u3053\u308C\u3067\u5404\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u304C\u53D6\u5F97\u3067\u304D\u307E\u3057\u305F\u3002</p><p>\u3053\u308C\u306F\u3055\u304D\u307B\u3069\u307F\u305F<code>select</code>\u30B3\u30DE\u30F3\u30C9\u3068\u540C\u3058\u306B\u307F\u3048\u308B\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3001\u6BD4\u8F03\u306E\u305F\u3081\u306B<code>select</code>\u30B3\u30DE\u30F3\u30C9\u306E\u51FA\u529B\u3082\u307F\u3066\u304A\u304D\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs
 1 \u2502 lib.rs
 2 \u2502 lite_parse.rs
 3 \u2502 parse.rs
 4 \u2502 path.rs
 5 \u2502 shapes.rs
 6 \u2502 signature.rs
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u4E21\u8005\u306F\u975E\u5E38\u306B\u4F3C\u3066\u3044\u307E\u3059\uFF01\u4E21\u8005\u306E\u9055\u3044\u3092\u660E\u78BA\u306B\u3057\u3066\u304A\u304D\u307E\u3057\u3087\u3046\u3002</p><ul><li><code>select</code> - \u6307\u5B9A\u3055\u308C\u305F\u5217\u306E\u307F\u3092\u542B\u3080\u65B0\u3057\u3044\u30C6\u30FC\u30D6\u30EB\u3092\u4F5C\u6210\u3057\u307E\u3059</li><li><code>get</code> - \u6307\u5B9A\u3055\u308C\u305F\u5217\u5185\u306E\u5024\u3092\u8FD4\u3057\u307E\u3059</li></ul><p>\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u3053\u308C\u3089\u3092\u533A\u5225\u3059\u308B\u65B9\u6CD5\u306E\u4E00\u3064\u306F\u3001<code>value</code>\u5217\u540D\u3067\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u5024\u306E\u30EA\u30B9\u30C8\u3067\u3042\u308B\u3053\u3068\u304C\u308F\u304B\u308A\u307E\u3059\u3002</p><p><code>get</code>\u30B3\u30DE\u30F3\u30C9\u306F\u3001\u30D1\u30B9\u3092\u53D7\u3051\u53D6\u308A\u30C6\u30FC\u30D6\u30EB\u5185\u306E\u3088\u308A\u6DF1\u3044\u30C7\u30FC\u30BF\u3078\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A.json \u30D5\u30A1\u30A4\u30EB\u306B\u3042\u308B\u3088\u3046\u306A\u8907\u96D1\u306A\u30C7\u30FC\u30BF\u3092\u7C21\u5358\u306B\u64CD\u4F5C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><h2 id="\u30C6\u30FC\u30D5\u3099\u30EB\u306E\u30C6\u3099\u30FC\u30BF\u3092\u5909\u66F4\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u30C6\u30FC\u30D5\u3099\u30EB\u306E\u30C6\u3099\u30FC\u30BF\u3092\u5909\u66F4\u3059\u308B" aria-hidden="true">#</a> \u30C6\u30FC\u30D6\u30EB\u306E\u30C7\u30FC\u30BF\u3092\u5909\u66F4\u3059\u308B</h2><p>\u30C6\u30FC\u30D6\u30EB\u304B\u3089\u30C7\u30FC\u30BF\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u306B\u52A0\u3048\u3066\u3001\u30C6\u30FC\u30D6\u30EB\u306E\u5185\u5BB9\u3092\u66F4\u65B0\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u65B0\u3057\u3044\u5217\u3092\u52A0\u3048\u305F\u308A\u3001\u30BB\u30EB\u306E\u5185\u5BB9\u3092\u7DE8\u96C6\u3057\u305F\u308A\u3067\u304D\u308B\u306E\u3067\u3059\u3002Nu \u3067\u306F\u3001\u305D\u306E\u5834\u3067\u7DE8\u96C6\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u306E\u5404\u30B3\u30DE\u30F3\u30C9\u306F\u65B0\u3057\u3044\u30C6\u30FC\u30D6\u30EB\u3092\u8FD4\u3057\u307E\u3059\u3002</p><h3 id="\u65B0\u3057\u3044\u5217\u3092\u8FFD\u52A0\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u65B0\u3057\u3044\u5217\u3092\u8FFD\u52A0\u3059\u308B" aria-hidden="true">#</a> \u65B0\u3057\u3044\u5217\u3092\u8FFD\u52A0\u3059\u308B</h3><p><code>add</code>\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u3001\u65B0\u3057\u3044\u5217\u3092\u30C6\u30FC\u30D6\u30EB\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u4F8B\u3092\u307F\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u5024\u304C 2021 \u306E&quot;next_edition&quot;\u5217\u3092\u8FFD\u52A0\u3057\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u5143\u306E\u30D5\u30A1\u30A4\u30EB\u306F\u5909\u66F4\u3055\u308C\u3066\u3044\u306A\u3044\u3053\u3068\u306B\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Nu \u306E\u5909\u66F4\u306F\u6C38\u7D9A\u7684\u306A\u5909\u66F4\u3067\u306F\u306A\u304F\u3001\u5024\u81EA\u4F53\u306B\u4F5C\u7528\u3059\u308B\u95A2\u6570\u7684\u306A\u5909\u66F4\u3067\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u3001\u7D50\u679C\u3092\u66F8\u304D\u51FA\u3059\u6E96\u5099\u304C\u3067\u304D\u308B\u307E\u3067\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u4E0A\u3067\u69D8\u3005\u306A\u7A2E\u985E\u306E\u4F5C\u696D\u3092\u304A\u3053\u306A\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u3053\u3067\u306F\u3001<code>save</code>\u30B3\u30DE\u30F3\u30C9\u3092\u4F7F\u7528\u3057\u3066\u7D50\u679C\u3092\u66F8\u304D\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml
&gt; open rustfmt2.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h3 id="\u5217\u3092\u66F4\u65B0\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u5217\u3092\u66F4\u65B0\u3059\u308B" aria-hidden="true">#</a> \u5217\u3092\u66F4\u65B0\u3059\u308B</h3><p><code>insert</code>\u30B3\u30DE\u30F3\u30C9\u3068\u540C\u69D8\u306B\u3001<code>update</code>\u30B3\u30DE\u30F3\u30C9\u3092\u5229\u7528\u3057\u3066\u5217\u306E\u5185\u5BB9\u3092\u65B0\u3057\u3044\u5024\u306B\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u5B9F\u969B\u306B\u52D5\u4F5C\u3092\u78BA\u8A8D\u3059\u308B\u305F\u3081\u306B\u540C\u3058\u30D5\u30A1\u30A4\u30EB\u3092\u958B\u3044\u3066\u307F\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u4ECA\u5EA6\u306F\u3001\u30B5\u30DD\u30FC\u30C8\u3057\u305F\u6B21\u306E edition \u3092\u6307\u5B9A\u3059\u308B\u3088\u3046\u66F4\u65B0\u3057\u307E\u3057\u3087\u3046\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | update edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h3 id="\u5024\u3092\u5897\u3084\u3059" tabindex="-1"><a class="header-anchor" href="#\u5024\u3092\u5897\u3084\u3059" aria-hidden="true">#</a> \u5024\u3092\u5897\u3084\u3059</h3><p>\u6570\u5B57\u3084\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u6271\u3046\u969B\u306B\u4FBF\u5229\u306A\u30B3\u30DE\u30F3\u30C9\u304C\u3082\u3046\u3072\u3068\u3064\u3042\u308A\u307E\u3059\u3001<code>inc</code>\u3067\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
&gt; open rustfmt.toml | inc edition
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2019
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>&quot;edition&quot;\u306E\u5024\u306F\u6570\u5B57\u306A\u306E\u3067\u3001<code>inc</code>\u3092\u4F7F\u3063\u3066\u66F4\u65B0\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u6271\u3046\u969B\u306B\u306F<code>inc</code>\u304C\u305D\u306E\u771F\u4FA1\u3092\u767A\u63EE\u3057\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | get package.version
0.1.3
&gt; open Cargo.toml | inc package.version --minor | get package.version
0.2.0
</code></pre></div><p>\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u6271\u3046\u969B\u306B\u306F\u3001\u30D5\u30E9\u30B0\u3092\u5229\u7528\u3057\u3066\u3001\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8\u65B9\u6CD5\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002</p><ul><li><strong>--major</strong> - \u30E1\u30B8\u30E3\u30FC\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8 (0.1.3 -&gt; 1.0.0)</li><li><strong>--minor</strong> - \u30DE\u30A4\u30CA\u30FC\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8 (0.1.3 -&gt; 0.2.0)</li><li><strong>--patch</strong> - \u30D1\u30C3\u30C1\u30D0\u30FC\u30B8\u30E7\u30F3\u3092\u30A4\u30F3\u30AF\u30EA\u30E1\u30F3\u30C8 (0.1.3 -&gt; 0.1.4)</li></ul>`,52),d=[i];function o(r,l){return a(),t("div",null,d)}const g=e(s,[["render",o],["__file","working_with_tables.html.vue"]]);export{g as default};
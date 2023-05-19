'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [904],
    {
      904: function (s, a, n) {
        n.r(a),
          (a.default = {
            tile: 'Grid宫格',
            docs: '<h1>Grid 宫格</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。</p>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<div class="code-box-max">\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Grid</span>, <span class="hljs-title class_">GridItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div>\n<blockquote>\n<p>Vant Weapp 1.0 版本开始支持此组件，升级方式参见<a href="#/quickstart">快速上手</a></p>\n</blockquote>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基本用法</h3>\n<p>通过<code>icon</code>属性设置格子内的图标，<code>text</code>属性设置文字内容。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%97%E6%95%B0"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>自定义列数</h3>\n<p>默认一行展示四个格子，可以通过<code>columnNum</code>自定义列数。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">columnNum</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>自定义内容</h3>\n<p>通过插槽可以自定义格子展示的内容。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">columnNum</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">border</span>=<span class="hljs-string">{false}</span>&gt;</span>\n      {[1, 2, 3].map((item, index) =&gt; (\n        <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{index}</span> <span class="hljs-attr">forItem</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">Image</span>\n            <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%; height: 90px;&quot;</span>\n            <span class="hljs-attr">src</span>=<span class="hljs-string">{</span>::::_QA<span class="hljs-attr">https:</span>//<span class="hljs-attr">img.yzcdn.cn</span>/<span class="hljs-attr">vant</span>/<span class="hljs-attr">apple-</span>::::_AB<span class="hljs-attr">index</span> + <span class="hljs-attr">1</span>}<span class="hljs-attr">.jpg</span>::::_QA}\n          /&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">GridItem</span>&gt;</span>\n      ))}\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E6%AD%A3%E6%96%B9%E5%BD%A2%E6%A0%BC%E5%AD%90"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>正方形格子</h3>\n<p>设置<code>square</code>属性后，格子的高度会和宽度保持一致。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">square</span> <span class="hljs-attr">iconSize</span>=<span class="hljs-string">&quot;48&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E6%A0%BC%E5%AD%90%E9%97%B4%E8%B7%9D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>格子间距</h3>\n<p>通过<code>gutter</code>属性设置格子之间的距离。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">gutter</span>=<span class="hljs-string">{10}</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E5%86%85%E5%AE%B9%E6%A8%AA%E6%8E%92"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>内容横排</h3>\n<p>将<code>direction</code>属性设置为<code>horizontal</code>，可以让宫格的内容呈横向排列。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">columnNum</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>页面跳转</h3>\n<p>可以通过<code>url</code>属性进行页面跳转，通过<code>linkType</code>属性控制跳转类型。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">clickable</span> <span class="hljs-attr">columnNum</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>\n        <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;homeO&quot;</span>\n        <span class="hljs-attr">linkType</span>=<span class="hljs-string">&quot;navigateTo&quot;</span>\n        <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;/pages/dashboard/index&quot;</span>\n        <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Navigate 跳转&quot;</span>\n      /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span>\n        <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span>\n        <span class="hljs-attr">linkType</span>=<span class="hljs-string">&quot;reLaunch&quot;</span>\n        <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;/pages/dashboard/index&quot;</span>\n        <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;ReLaunch 跳转&quot;</span>\n      /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E6%8F%90%E7%A4%BA%E4%BF%A1%E6%81%AF"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>提示信息</h3>\n<p>设置<code>dot</code>属性后，会在图标右上角展示一个小红点。设置<code>badge</code>属性后，会在图标右上角展示相应的徽标。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Grid</span> <span class="hljs-attr">columnNum</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">GridItem</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;99+&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Grid</span>&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="GridProps%20%3Ca%20href%3D%22h"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>GridProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/grid.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>square</td>\n<td>是否为正方形格子</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>gutter</td>\n<td>格子间隔</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clickable</td>\n<td>是否开启点击反馈</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>columnNum</td>\n<td>列数</td>\n<td><em>  number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>center</td>\n<td>是否居中排列</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>是否显示边框</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>内容对齐方式</td>\n<td><em>  &quot;horizontal&quot;<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>图标大小</td>\n<td><em>  string ¦ number<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>reverse</td>\n<td>内容顺序反转</td>\n<td><em>  boolean<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>自定义内容</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="GridItemProps%20%3Ca%20hre"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>GridItemProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/grid.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>icon</td>\n<td>图标名称或图片链接</td>\n<td><em>  string<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconColor</td>\n<td>图标颜色</td>\n<td><em>  string<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>iconPrefix</td>\n<td>图标类名前缀，同 Icon 组件的 classPrefix 属性</td>\n<td><em>  string<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>是否显示图标右上角小红点</td>\n<td><em>  boolean<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>info</td>\n<td>图标右上角提示信息</td>\n<td><em>  attr:<br/>    ¦ string<br/>    ¦ number<br/>    ¦ undefined<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>badge</td>\n<td>图标右上角徽标的内容</td>\n<td><em>  attr:<br/>    ¦ string<br/>    ¦ number<br/>    ¦ undefined<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>text</td>\n<td>文字描述</td>\n<td><em>  ReactNode<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>url</td>\n<td>点击后跳转的链接地址</td>\n<td><em>  string<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>linkType</td>\n<td>跳转类型</td>\n<td><em>  attr:<br/>    ¦ &quot;navigateTo&quot;<br/>    ¦ &quot;reLaunch&quot;<br/>    ¦ &quot;redirectTo&quot;<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>children</td>\n<td>自定义内容</td>\n<td><em>  React.ReactNode<br/></em></td>\n<td>\'\'</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div>',
            h3Ids:
              '介绍:::引入:::基本用法:::自定义列数:::自定义内容:::正方形格子:::格子间距:::内容横排:::页面跳转:::提示信息:::GridProps <a href="h:::GridItemProps <a hre',
            codePath: [],
          })
      },
    },
  ],
)

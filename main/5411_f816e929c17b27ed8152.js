'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [5411],
    {
      5411: function (s, n, a) {
        a.r(n),
          (n.default = {
            tile: 'Steps步骤条',
            docs: '<h1>Steps 步骤条</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。</p>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<div class="code-box-max">\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Steps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基础用法</h3>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">const</span> steps = [\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤一&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤二&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤三&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤四&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n]\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Steps</span> <span class="hljs-attr">steps</span>=<span class="hljs-string">{steps}</span> <span class="hljs-attr">active</span>=<span class="hljs-string">{2}</span> /&gt;</span></span>\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>自定义样式</h3>\n<p>可以通过 <code>activeIcon</code> 和 <code>activeColor</code> 属性设置激活状态下的图标和颜色。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">const</span> steps = [\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤一&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤二&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤三&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤四&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n]\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Steps</span> <span class="hljs-attr">steps</span>=<span class="hljs-string">{steps}</span> <span class="hljs-attr">active</span>=<span class="hljs-string">{1}</span> <span class="hljs-attr">activeIcon</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">activeColor</span>=<span class="hljs-string">&quot;#38f&quot;</span> /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9B%BE%E6%A0%87"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>自定义图标</h3>\n<p>可以通过 <code>inactiveIcon</code> 和 <code>activeIcon</code> 属性分别设置每一项的图标。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">const</span> steps = [\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤一&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n    <span class="hljs-attr">inactiveIcon</span>: <span class="hljs-string">&#x27;location-o&#x27;</span>,\n    <span class="hljs-attr">activeIcon</span>: <span class="hljs-string">&#x27;success&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤二&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n    <span class="hljs-attr">inactiveIcon</span>: <span class="hljs-string">&#x27;like-o&#x27;</span>,\n    <span class="hljs-attr">activeIcon</span>: <span class="hljs-string">&#x27;plus&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤三&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n    <span class="hljs-attr">inactiveIcon</span>: <span class="hljs-string">&#x27;star-o&#x27;</span>,\n    <span class="hljs-attr">activeIcon</span>: <span class="hljs-string">&#x27;cross&#x27;</span>,\n  },\n]\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Steps</span> <span class="hljs-attr">steps</span>=<span class="hljs-string">{steps}</span> <span class="hljs-attr">active</span>=<span class="hljs-string">{2}</span> /&gt;</span></span>\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E7%AB%96%E5%90%91%E6%AD%A5%E9%AA%A4%E6%9D%A1"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>竖向步骤条</h3>\n<p>可以通过设置<code>direction</code>属性来改变步骤条的显示方式。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">const</span> steps = [\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤一&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤二&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n  {\n    <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;步骤三&#x27;</span>,\n    <span class="hljs-attr">desc</span>: <span class="hljs-string">&#x27;描述信息&#x27;</span>,\n  },\n]\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Steps</span>\n      <span class="hljs-attr">steps</span>=<span class="hljs-string">{steps}</span>\n      <span class="hljs-attr">active</span>=<span class="hljs-string">{1}</span>\n      <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>\n      <span class="hljs-attr">activeColor</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="StepsProps%20%3Ca%20href%3D%22"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>StepsProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/steps.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>iconClassPrefix</td>\n<td>icon 统一 class 的前缀</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>steps</td>\n<td>Step 配置项数组</td>\n<td><em>  {<br/>    index?: number<br/>    desc: React.ReactNode<br/>    text: string<br/>    activeIcon?: string<br/>    inactiveIcon?: string<br/>  }[]<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>active</td>\n<td>当前步骤</td>\n<td><em>  number<br/></em></td>\n<td>0</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>显示方向</td>\n<td><em>  attr:<br/>    ¦ &quot;horizontal&quot;<br/>    ¦ &quot;vertical&quot;<br/></em></td>\n<td><code>horizontal</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>activeColor</td>\n<td>激活颜色</td>\n<td><em>  string<br/></em></td>\n<td><code>#07c160</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>inactiveColor</td>\n<td>未激活颜色</td>\n<td><em>  string<br/></em></td>\n<td><code>#969799</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>activeIcon</td>\n<td>激活图标</td>\n<td><em>  string<br/></em></td>\n<td><code>#checked</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>inactiveIcon</td>\n<td>未激活图标</td>\n<td><em>  string<br/></em></td>\n<td><code>#checked</code></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onClickStep</td>\n<td>点击步骤时触发的事件，event.detail 当前步骤的索引</td>\n<td><em>  (<br/>    event: ITouchEvent &amp; {<br/>      detail: number<br/>    }<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考<a href="https://antmjs.github.io/vantui/#/config-provider">ConfigProvider 组件</a></p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--steps-background-color</td>\n<td><code> @white;</code></td>\n</tr>\n</tbody>\n</table>\n</div>',
            h3Ids:
              '介绍:::引入:::基础用法:::自定义样式:::自定义图标:::竖向步骤条:::StepsProps <a href=":::样式变量',
            codePath: [],
          })
      },
    },
  ],
)

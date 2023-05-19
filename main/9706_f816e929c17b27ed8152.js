'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [9706],
    {
      4562: function (s, n, a) {
        a.r(n),
          (n.default = {
            tile: 'DatetimePicker时间选择',
            docs: '<h1>DatetimePicker 时间选择</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>用于选择时间，支持日期、时分等时间维度，通常与 <a href="#/popup">弹出层</a> 组件配合使用。</p>\n</div><div class="card"><h3 id="%E5%BC%95%E5%85%A5"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引入</h3>\n<p>在 Taro 文件中引入组件</p>\n<div class="code-box-max">\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">DatetimePicker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div>\n</div><h2>代码演示</h2>\n<div class="card"><h3 id="%E9%80%89%E6%8B%A9%E5%AE%8C%E6%95%B4%E6%97%B6%E9%97%B4"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>选择完整时间</h3>\n<p><code>value</code> 为 Date 对象。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [state, setState] = react.<span class="hljs-title function_">useState</span>({\n    <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2018</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>).<span class="hljs-title function_">getTime</span>(),\n    <span class="hljs-attr">currentDate</span>: <span class="hljs-literal">null</span>,\n  })\n\n  <span class="hljs-keyword">const</span> onInput = react.<span class="hljs-title function_">useCallback</span>(\n    <span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) {\n      <span class="hljs-title function_">setState</span>({\n        ...state,\n        <span class="hljs-attr">currentDate</span>: event.<span class="hljs-property">detail</span>,\n      })\n    },\n    [state],\n  )\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>\n      <span class="hljs-attr">value</span>=<span class="hljs-string">{state.currentDate}</span>\n      <span class="hljs-attr">minDate</span>=<span class="hljs-string">{state.minDate}</span>\n      <span class="hljs-attr">maxDate</span>=<span class="hljs-string">{state.maxDate}</span>\n      <span class="hljs-attr">onInput</span>=<span class="hljs-string">{onInput}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F%EF%BC%88%E5%B9%B4%E6%9C%88%E6%97%A5%EF%BC%89"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>选择日期（年月日）</h3>\n<p><code>value</code> 为 Date 对象，通过传入 <code>formatter</code> 函数对选项文字进行处理。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [state, setState] = react.<span class="hljs-title function_">useState</span>({\n    <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2018</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>).<span class="hljs-title function_">getTime</span>(),\n    <span class="hljs-attr">currentDate</span>: <span class="hljs-literal">null</span>,\n  })\n\n  <span class="hljs-keyword">const</span> onInput = react.<span class="hljs-title function_">useCallback</span>(\n    <span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) {\n      <span class="hljs-title function_">setState</span>({\n        ...state,\n        <span class="hljs-attr">currentDate</span>: event.<span class="hljs-property">detail</span>,\n      })\n    },\n    [state],\n  )\n\n  <span class="hljs-keyword">const</span> formatter = react.<span class="hljs-title function_">useCallback</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">type, value</span>) {\n    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#x27;year&#x27;</span>) {\n      <span class="hljs-keyword">return</span> <span class="hljs-string">::::_QA<span class="hljs-subst">::::_ABvalue}</span>年::::_QA</span>\n    }\n\n    <span class="hljs-keyword">if</span> (type === <span class="hljs-string">&#x27;month&#x27;</span>) {\n      <span class="hljs-keyword">return</span> <span class="hljs-string">::::_QA<span class="hljs-subst">::::_ABvalue}</span>月::::_QA</span>\n    }\n\n    <span class="hljs-keyword">return</span> value\n  })\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;date&quot;</span>\n      <span class="hljs-attr">value</span>=<span class="hljs-string">{state.currentDate}</span>\n      <span class="hljs-attr">minDate</span>=<span class="hljs-string">{state.minDate}</span>\n      <span class="hljs-attr">maxDate</span>=<span class="hljs-string">{state.maxDate}</span>\n      <span class="hljs-attr">onInput</span>=<span class="hljs-string">{onInput}</span>\n      <span class="hljs-attr">formatter</span>=<span class="hljs-string">{formatter}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E9%80%89%E6%8B%A9%E6%97%A5%E6%9C%9F%EF%BC%88%E5%B9%B4%E6%9C%88%EF%BC%89"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>选择日期（年月）</h3>\n<p><code>value</code> 为 Date 对象。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [state, setState] = react.<span class="hljs-title function_">useState</span>({\n    <span class="hljs-attr">currentDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2018</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),\n    <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>(<span class="hljs-number">2018</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>).<span class="hljs-title function_">getTime</span>(),\n  })\n\n  <span class="hljs-keyword">const</span> onInput = react.<span class="hljs-title function_">useCallback</span>(\n    <span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) {\n      <span class="hljs-title function_">setState</span>({\n        <span class="hljs-attr">currentDate</span>: event.<span class="hljs-property">detail</span>,\n      })\n    },\n    [state],\n  )\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;year-month&quot;</span>\n      <span class="hljs-attr">value</span>=<span class="hljs-string">{state.currentDate}</span>\n      <span class="hljs-attr">minDate</span>=<span class="hljs-string">{state.minDate}</span>\n      <span class="hljs-attr">onInput</span>=<span class="hljs-string">{onInput}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E9%80%89%E6%8B%A9%E6%97%B6%E9%97%B4"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>选择时间</h3>\n<p><code>value</code> 为字符串。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [state, setState] = react.<span class="hljs-title function_">useState</span>({\n    <span class="hljs-attr">currentDate</span>: <span class="hljs-string">&#x27;12:00&#x27;</span>,\n    <span class="hljs-attr">minHour</span>: <span class="hljs-number">10</span>,\n    <span class="hljs-attr">maxHour</span>: <span class="hljs-number">20</span>,\n  })\n\n  <span class="hljs-keyword">const</span> onInput = react.<span class="hljs-title function_">useCallback</span>(\n    <span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) {\n      <span class="hljs-title function_">setState</span>({\n        <span class="hljs-attr">currentDate</span>: event.<span class="hljs-property">detail</span>,\n      })\n    },\n    [state],\n  )\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>\n      <span class="hljs-attr">value</span>=<span class="hljs-string">{state.currentDate}</span>\n      <span class="hljs-attr">minHour</span>=<span class="hljs-string">{state.minHour}</span>\n      <span class="hljs-attr">maxHour</span>=<span class="hljs-string">{state.maxHour}</span>\n      <span class="hljs-attr">onInput</span>=<span class="hljs-string">{onInput}</span>\n    /&gt;</span></span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E9%80%89%E9%A1%B9%E8%BF%87%E6%BB%A4%E5%99%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>选项过滤器</h3>\n<p>通过传入 <code>filter</code> 函数，可以对选项数组进行过滤，实现自定义时间间隔。</p>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">const</span> [state, setState] = react.<span class="hljs-title function_">useState</span>({\n    <span class="hljs-attr">currentDate</span>: <span class="hljs-string">&#x27;12:00&#x27;</span>,\n    <span class="hljs-attr">minHour</span>: <span class="hljs-number">10</span>,\n    <span class="hljs-attr">maxHour</span>: <span class="hljs-number">20</span>,\n  })\n\n  <span class="hljs-keyword">const</span> onInput = react.<span class="hljs-title function_">useCallback</span>(\n    <span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) {\n      <span class="hljs-title function_">setState</span>({\n        <span class="hljs-attr">currentDate</span>: event.<span class="hljs-property">detail</span>,\n      })\n    },\n    [state],\n  )\n\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">DatetimePicker</span>\n      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>\n      <span class="hljs-attr">value</span>=<span class="hljs-string">{state.currentDate}</span>\n      <span class="hljs-attr">minHour</span>=<span class="hljs-string">{state.minHour}</span>\n      <span class="hljs-attr">maxHour</span>=<span class="hljs-string">{state.maxHour}</span>\n      <span class="hljs-attr">onInput</span>=<span class="hljs-string">{onInput}</span>\n      <span class="hljs-attr">filter</span>=<span class="hljs-string">{(type,</span> <span class="hljs-attr">options</span>) =&gt;</span> {\n        if (type === &#x27;minute&#x27;) {\n          return options.filter((option) =&gt; option % 5 === 0)\n        }\n\n        return options\n      }}\n    /&gt;</span>\n  )\n}\n</code></pre>\n</div>\n</div><div class="card"><h3 id="DatetimePickerProps%20"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>DatetimePickerProps <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>value</td>\n<td>选项的值</td>\n<td><em>  attr:<br/>    ¦ string<br/>    ¦ number<br/>    ¦ Date<br/></em></td>\n<td>null</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>filter</td>\n<td>对选项数组进行过滤，实现自定义时间间隔</td>\n<td><em>  (<br/>    type: string,<br/>    values: (<br/>      ¦ string<br/>      ¦ number<br/>    )[]<br/>  ) =&gt; (number ¦ string)[]<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>时间类型，不建议动态修改</td>\n<td><em>  attr:<br/>    ¦ &quot;datetime&quot;<br/>    ¦ &quot;date&quot;<br/>    ¦ &quot;year-month&quot;<br/>    ¦ &quot;time&quot;<br/></em></td>\n<td>datetime</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>showToolbar</td>\n<td>是否显示顶部栏</td>\n<td><em>  boolean<br/></em></td>\n<td>true</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>formatter</td>\n<td>选项格式化函数</td>\n<td><em>  (<br/>    type: string,<br/>    value: string ¦ number<br/>  ) =&gt; number ¦ string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>minDate</td>\n<td>可选的最小时间，精确到分钟</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>十年前</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>maxDate</td>\n<td>可选的最大时间，精确到分钟</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>十年后</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>minHour</td>\n<td>可选的最小小时，针对 type=time</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>0</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>maxHour</td>\n<td>可选的最大小时，针对 type=time</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>23</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>minMinute</td>\n<td>可选的最小分钟，针对 type=time</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>0</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>maxMinute</td>\n<td>可选的最大分钟，针对 type=time</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>59</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onInput</td>\n<td>当值变化时触发的事件</td>\n<td><em>  (<br/>    e: DatetimePickerEventsByValue<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>当值变化时触发的事件</td>\n<td><em>  (<br/>    e: DatetimePickerEventsByInstance<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>点击完成按钮时触发的事件</td>\n<td><em>  (<br/>    e: DatetimePickerEventsByValue<br/>  ) =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>点击取消按钮时触发的事件</td>\n<td><em>  () =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="onInput%E3%80%81onConfirm%20%E7%9A%84%E5%9B%9E"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>onInput、onConfirm 的回掉参数 <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts">[详情]</a></h3>\n<p>继承了@taro/components 的 ITouchEvent</p>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>detail</td>\n<td>选项的值</td>\n<td><em>  {<br/>    value?:<br/>      ¦ string<br/>      ¦ number<br/>  }<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="onChange%20%E7%9A%84%E5%9B%9E%E6%8E%89%E5%8F%82%E6%95%B0%20%3Ca%20hr"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>onChange 的回掉参数 <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>方法</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>detail</td>\n<td>包含每项的值 columns、当前时间 innerValue、手动设置列数据 setColumns、更新某列值 updateColumnValue</td>\n<td><em>  {<br/>    datetimePicker: {<br/>      columns: (<br/>        ¦ string<br/>        ¦ number<br/>      )[]<br/>      setColumns: (<br/>        columns: (<br/>          ¦ string<br/>          ¦ number<br/>        )[]<br/>      ) =&gt; void<br/>      innerValue: Date<br/>      updateColumnValue: (<br/>        value: string<br/>      ) =&gt; Promise<string><br/>    }<br/>  }<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%20%3Ca%20href%3D%22https%3A"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>组件实例 <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/datetime-picker.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>方法</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>columns</td>\n<td>-</td>\n<td><em>  (<br/>    ¦ string<br/>    ¦ number<br/>  )[]<br/></em></td>\n</tr>\n<tr>\n<td>setColumns</td>\n<td>-</td>\n<td><em>  (<br/>    columns: (<br/>      ¦ string<br/>      ¦ number<br/>    )[]<br/>  ) =&gt; void<br/></em></td>\n</tr>\n<tr>\n<td>innerValue</td>\n<td>-</td>\n<td><em>  Date<br/></em></td>\n</tr>\n<tr>\n<td>updateColumnValue</td>\n<td>-</td>\n<td><em>  (<br/>    value: string<br/>  ) =&gt; Promise<string><br/></em></td>\n</tr>\n<tr>\n<td>pickerInstance</td>\n<td>-</td>\n<td><em>  IPickerInstance<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div>',
            h3Ids:
              '介绍:::引入:::选择完整时间:::选择日期（年月日）:::选择日期（年月）:::选择时间:::选项过滤器:::DatetimePickerProps :::onInput、onConfirm 的回:::onChange 的回掉参数 <a hr:::组件实例 <a href="https:',
            codePath: [],
          })
      },
    },
  ],
)

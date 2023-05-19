'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [7763],
    {
      7763: function (s, a, n) {
        n.r(a),
          (a.default = {
            tile: '定制主题',
            docs: '<h1>定制主题</h1>\n<div class="card"><h3 id="%E8%83%8C%E6%99%AF%E7%9F%A5%E8%AF%86"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>背景知识</h3>\n<p>Taro3 的架构摒弃了小程序自定义组件带来的复杂性，所以 @antmjs/vantui 使用与之配套的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS 变量</a> 来实现定制主题。链接中的内容可以帮助你对这两个概念有基本的认识，避免许多不必要的困扰。</p>\n<p>CSS 变量 的兼容性要求可以在 <a href="https://caniuse.com/#feat=css-variables">这里</a> 查看。对于不支持 CSS 变量 的设备，定制主题将不会生效，不过不必担心，默认样式仍会生效。</p>\n</div><div class="card"><h3 id="%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>样式变量</h3>\n<p>定制使用的 CSS 变量 与 Less 变量 同名，下面是一些基本的样式变量，所有可用的颜色变量请参考 <a href="https://github.com/AntmJS/vantui/blob/main/packages/vantui/src/style/var.less">配置文件</a>，你可以覆盖其变量达到定制主题的目的。</p>\n<div class="code-box-max">\n<pre><code class="language-less"><span class="hljs-comment">// Component Colors</span>\n<span class="hljs-variable">@text-color:</span> <span class="hljs-number">#323233</span>;\n<span class="hljs-variable">@border-color:</span> <span class="hljs-number">#ebedf0</span>;\n<span class="hljs-variable">@active-color:</span> <span class="hljs-number">#f2f3f5</span>;\n<span class="hljs-variable">@background-color:</span> <span class="hljs-number">#f7f8fa</span>;\n<span class="hljs-variable">@background-color-light:</span> <span class="hljs-number">#fafafa</span>;\n</code></pre>\n</div>\n</div><h2>定制方法</h2>\n<div class="card"><h3 id="%E6%AD%A5%E9%AA%A4%E4%B8%80%20%E5%BC%95%E5%85%A5%E6%A0%B7%E5%BC%8F%E6%BA%90%E6%96%87%E4%BB%B6"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>步骤一 引入样式源文件</h3>\n<p>定制主题时，需要引入组件对应的 Less 样式文件，支持按需引入和手动引入两种方式。</p>\n<h4>按需引入样式（推荐）</h4>\n<p>在 babel.config.js 中配置按需引入样式源文件，注意 babel 6 不支持按需引入样式，请手动引入样式。</p>\n<div class="code-box-max">\n<pre><code class="language-js"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-attr">plugins</span>: [\n    [\n      <span class="hljs-string">&#x27;import&#x27;</span>,\n      {\n        <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>,\n        <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&#x27;es&#x27;</span>,\n        <span class="hljs-comment">// 指定样式路径，建议这里样式按需引入不开启，直接在app.less引入全局样式</span>\n        <span class="hljs-attr">style</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> <span class="hljs-string">::::_QA<span class="hljs-subst">::::_ABname}</span>/style/less::::_QA</span>,\n      },\n      <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>,\n    ],\n  ],\n}\n</code></pre>\n</div>\n<h4>手动引入样式</h4>\n<div class="code-box-max">\n<pre><code class="language-js"><span class="hljs-comment">// 引入全部样式</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@antmjs/vantui/lib/index.less&#x27;</span>\n\n<span class="hljs-comment">// 引入单个组件样式</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#x27;@antmjs/vantui/lib/button/style/less&#x27;</span>\n</code></pre>\n</div>\n</div><div class="card"><h3 id="%E6%AD%A5%E9%AA%A4%E4%BA%8C%20%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>步骤二 修改样式变量</h3>\n<h4>通过覆盖 less 主题方式修改</h4>\n<p>使用 Less 提供的 <a href="http://lesscss.org/usage/#using-less-in-the-browser-modify-variables">modifyVars</a> 即可对变量进行修改，下面是参考的 webpack 配置。</p>\n<div class="code-box-max">\n<pre><code class="language-js"><span class="hljs-comment">// webpack.config.js</span>\n<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {\n  <span class="hljs-attr">rules</span>: [\n    {\n      <span class="hljs-attr">test</span>: <span class="hljs-regexp">/.less$/</span>,\n      <span class="hljs-attr">use</span>: [\n        <span class="hljs-comment">// ...其他 loader 配置</span>\n        {\n          <span class="hljs-attr">loader</span>: <span class="hljs-string">&#x27;less-loader&#x27;</span>,\n          <span class="hljs-attr">options</span>: {\n            <span class="hljs-comment">// 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。</span>\n            <span class="hljs-attr">lessOptions</span>: {\n              <span class="hljs-attr">modifyVars</span>: {\n                <span class="hljs-comment">// 直接覆盖变量</span>\n                <span class="hljs-string">&#x27;text-color&#x27;</span>: <span class="hljs-string">&#x27;#111&#x27;</span>,\n                <span class="hljs-string">&#x27;border-color&#x27;</span>: <span class="hljs-string">&#x27;#eee&#x27;</span>,\n                <span class="hljs-comment">// 或者可以通过 less 文件覆盖（文件路径为绝对路径）</span>\n                <span class="hljs-attr">hack</span>: <span class="hljs-string">::::_QAtrue; @import &quot;your-less-file-path.less&quot;;::::_QA</span>,\n              },\n            },\n          },\n        },\n      ],\n    },\n  ],\n}\n</code></pre>\n</div>\n<h4>通过 css 变量形式修改</h4>\n<h5>定制单个组件的主题样式</h5>\n<blockquote>\n<p>在 less 中为组件设置 CSS 变量</p>\n</blockquote>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Index</span> () {\n  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-button&quot;</span>&gt;</span>\n    默认按钮\n  <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>\n}\n</code></pre>\n</div>\n<div class="code-box-max">\n<pre><code class="language-less"><span class="hljs-selector-class">.my-button</span> {\n  <span class="hljs-attr">--button-border-radius</span>: 10px;\n  <span class="hljs-attr">--button-default-color</span>: #f2f3f5;\n}\n</code></pre>\n</div>\n<blockquote>\n<p>或通过 style 属性来设置 CSS 变量，这使你能够轻松实现主题的动态切换</p>\n</blockquote>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Index</span> () {\n  <span class="hljs-keyword">const</span> [buttonStyle, setButtonStyle] = <span class="hljs-title function_">useState</span>({<span class="hljs-attr">buttonStyle</span>: <span class="hljs-string">&quot;--button-border-radius: 10px;--button-default-color: green;&quot;</span>})\n  <span class="hljs-title function_">useEffect</span>(functon () {\n    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {\n      <span class="hljs-title function_">setButtonStyle</span>({<span class="hljs-attr">buttonStyle</span>: <span class="hljs-string">&quot;--button-border-radius: 2px;--button-default-color: pink;&quot;</span>})\n    }, <span class="hljs-number">2000</span>)\n  }, [])\n  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{buttonStyle}</span>&gt;</span>\n    默认按钮\n  <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>\n}\n</code></pre>\n</div>\n<h5>定制多个组件的主题样式</h5>\n<blockquote>\n<p>与单个组件的定制方式类似，只需用一个 container 节点包裹住需要定制的组件，并将 CSS 变量 设置在 container 节点上</p>\n</blockquote>\n<div class="code-box-max">\n<pre><code class="language-jsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">Index</span> () {\n  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">classsName</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;my-button&quot;</span>&gt;</span>\n      默认按钮\n    <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">Toast</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;van-toast&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>\n}\n</code></pre>\n</div>\n<div class="code-box-max">\n<pre><code class="language-less"><span class="hljs-selector-class">.container</span> {\n  <span class="hljs-attr">--button-border-radius</span>: 10px;\n  <span class="hljs-attr">--button-default-color</span>: #f2f3f5;\n  <span class="hljs-attr">--toast-max-width</span>: 100px;\n  <span class="hljs-attr">--toast-background-color</span>: pink;\n}\n</code></pre>\n</div>\n<h5>定制全局主题样式</h5>\n<blockquote>\n<p>在 app.less 中，写入 CSS 变量，即可对全局生效</p>\n</blockquote>\n<div class="code-box-max">\n<pre><code class="language-less"><span class="hljs-selector-tag">page</span> {\n  <span class="hljs-attr">--button-border-radius</span>: 10px;\n  <span class="hljs-attr">--button-default-color</span>: #f2f3f5;\n  <span class="hljs-attr">--toast-max-width</span>: 100px;\n  <span class="hljs-attr">--toast-background-color</span>: pink;\n}\n</code></pre>\n</div>\n</div>',
            h3Ids:
              '背景知识:::样式变量:::步骤一 引入样式源文件:::步骤二 修改样式变量',
            codePath: [],
          })
      },
    },
  ],
)

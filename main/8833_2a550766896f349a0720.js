'use strict'
;(self.webpackChunk_antmjs_vantui = self.webpackChunk_antmjs_vantui || []).push(
  [
    [8833, 1257],
    {
      8833: function (s, a, n) {
        n.r(a),
          (a.default = {
            tile: 'VirtualList 虚拟列表',
            docs: '<h1>VirtualList 虚拟列表</h1>\n<div class="card"><h3 id="%E4%BB%8B%E7%BB%8D"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>介绍</h3>\n<p>指渲染可视区域的元素，支持等高单列、不等高单列、瀑布流</p>\n</div><div class="card"><h3 id="%E5%BC%95%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>引用</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">VirtualList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@antmjs/vantui&#x27;</span>\n</code></pre>\n</div><div class="card"><h3 id="%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>基本使用</h3>\n<ul>\n<li><code>showCount</code>必须大于可视区域可展示的最大数量</li>\n<li>半虚拟：是否区域最多渲染<code>N</code>个元素，组件内永远只渲染<code>2N</code>个元素</li>\n<li>支持等高和不等高的单列列表</li>\n<li>支持多列等高的列表：<code>dataSource</code>传入二维数组，请通过<code>ItemRender</code>去渲染多列</li>\n<li>高度的设置尽量通过 className 去设置</li>\n<li>虚拟列表里面的图片请使用<code>Taro</code>自带的</li>\n</ul>\n<pre><code class="language-jsx"><span class="hljs-keyword">const</span> data = <span class="hljs-variable constant_">COMMON</span>.<span class="hljs-title function_">mockGoods</span>()\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {\n  <span class="hljs-keyword">return</span> (\n    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">VirtualList</span>\n      <span class="hljs-attr">style</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">padding:</span> <span class="hljs-attr">10</span>, <span class="hljs-attr">boxSizing:</span> &#x27;<span class="hljs-attr">border-box</span>&#x27; }}\n      <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;calc(100vh - 125px)&quot;</span>\n      <span class="hljs-attr">dataSource</span>=<span class="hljs-string">{data}</span>\n      <span class="hljs-attr">showCount</span>=<span class="hljs-string">{3}</span>\n      <span class="hljs-attr">ItemRender</span>=<span class="hljs-string">{react.memo(({</span> <span class="hljs-attr">index</span>, <span class="hljs-attr">item</span>, <span class="hljs-attr">className</span>, <span class="hljs-attr">...props</span> }) =&gt;</span> {\n        return (\n          <span class="hljs-tag">&lt;<span class="hljs-name">View</span>\n            <span class="hljs-attr">className</span>=<span class="hljs-string">{</span>::::<span class="hljs-attr">van-demo-goods-item-wrapper</span> ::_::<span class="hljs-attr">className</span>}::::}\n            {<span class="hljs-attr">...props</span>}\n          &gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;van-demo-goods-item&quot;</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">TaroImage</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{item.image}</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>{item.title}<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n              {item.isCutPrice &amp;&amp; <span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;cutPrice&quot;</span>&gt;</span>最近大降价<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>}\n              <span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;price&quot;</span>&gt;</span>{item.price}<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span>\n        )\n      })}\n    /&gt;</span>\n  )\n}\n</code></pre>\n<p>模拟商品数据</p>\n<pre><code class="language-js"><span class="hljs-keyword">const</span> <span class="hljs-title function_">mockGoods</span> = (<span class="hljs-params"></span>) =&gt; {\n  <span class="hljs-keyword">const</span> initData = [\n    {\n      <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/cat.jpeg&#x27;</span>,\n      <span class="hljs-attr">title</span>:\n        <span class="hljs-string">&#x27;中老年羽绒服男冬季爸爸装薄短款白鸭绒中年人男士保暖外套男装 夜空黑 L【建议115斤以内】&#x27;</span>,\n      <span class="hljs-attr">price</span>: <span class="hljs-string">&#x27;¥165.00&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/cat.jpeg&#x27;</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;HLA海澜之家马丁靴男士高帮男靴复古工装鞋&#x27;</span>,\n      <span class="hljs-attr">price</span>: <span class="hljs-string">&#x27;¥361.00&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/cat.jpeg&#x27;</span>,\n      <span class="hljs-attr">title</span>:\n        <span class="hljs-string">&#x27;洁丽雅拖鞋男夏浴室洗澡防滑家居室内EVA大码男士凉拖鞋居家用夏季防臭 灰色 41-42【标准码】&#x27;</span>,\n      <span class="hljs-attr">price</span>: <span class="hljs-string">&#x27;¥22.50&#x27;</span>,\n    },\n    {\n      <span class="hljs-attr">image</span>: <span class="hljs-string">&#x27;https://img.yzcdn.cn/vant/cat.jpeg&#x27;</span>,\n      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;夏季新款男士T恤宽松气质高端百搭时尚短袖体恤潮牌&#x27;</span>,\n      <span class="hljs-attr">price</span>: <span class="hljs-string">&#x27;¥212.00&#x27;</span>,\n    },\n  ]\n  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Array</span>(<span class="hljs-number">33</span>).<span class="hljs-title function_">fill</span>(<span class="hljs-string">&#x27;&#x27;</span>).<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">item, index</span>) =&gt;</span> {\n    <span class="hljs-keyword">return</span> {\n      index,\n      ...initData[index % <span class="hljs-number">4</span>],\n      <span class="hljs-attr">isCutPrice</span>: index % <span class="hljs-number">2</span> === <span class="hljs-number">0</span> ? <span class="hljs-literal">true</span> : <span class="hljs-literal">false</span>,\n    }\n  })\n}\n</code></pre>\n</div><div class="card"><h3 id="IVirtualListProps%3CT%3E"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>IVirtualListProps<T> <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/virtual-list.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>必填</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>listStyle</td>\n<td>列容器的样式</td>\n<td><em>  CSSProperties<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>listClssName</td>\n<td>列容器的样式名</td>\n<td><em>  string<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>height</td>\n<td>滚动外层容器高度</td>\n<td><em>  number ¦ string<br/></em></td>\n<td>-</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>footer</td>\n<td>底部额外渲染</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>showCount</td>\n<td>可视区域展示的最大数量, 高度不一的时候按全部最小高度展示去计算</td>\n<td><em>  number<br/></em></td>\n<td>-</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>dataSource</td>\n<td>数据源，数组</td>\n<td><em>  Array<T><br/></em></td>\n<td>-</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>ItemRender</td>\n<td>自定义渲染每一项</td>\n<td><em>  FunctionComponent&lt;<br/>    {<br/>      item: T<br/>      index?: number<br/>    } &amp; ViewProps<br/>  &gt;<br/></em></td>\n<td>-</td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>renderBackToTop</td>\n<td>自定义回到顶部按钮渲染</td>\n<td><em>  ReactNode<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>backToTopSuccess</td>\n<td>成功返回顶部后执行</td>\n<td><em>  () =&gt; void<br/></em></td>\n<td>-</td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>backToTopCritical</td>\n<td>展示返回顶端按钮的临界值，上方隐藏了多少个 ItemRender</td>\n<td><em>  number<br/></em></td>\n<td><code>showCount</code></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="card"><h3 id="%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%20%3Ca%20href%3D%22https%3A"><svg viewBox="0 0 1024 1024"  width="14" height="14"><path d="M491.054545 779.636364l-125.672727 125.672727c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-67.490909-67.490909-67.490909-179.2 0-246.690909l223.418182-223.418182c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c13.963636 13.963636 34.909091 13.963636 46.545455 0 13.963636-13.963636 13.963636-34.909091 0-46.545455-93.090909-93.090909-246.690909-93.090909-342.109091 0L69.818182 612.072727c-46.545455 46.545455-69.818182 107.054545-69.818182 169.890909C0 847.127273 25.6 907.636364 69.818182 954.181818c46.545455 46.545455 109.381818 69.818182 169.890909 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l125.672727-125.672727c13.963636-13.963636 13.963636-34.909091 0-46.545455-9.309091-16.290909-30.254545-16.290909-44.218182-2.327272z" p-id="2808"></path><path d="M954.181818 69.818182c-93.090909-93.090909-246.690909-93.090909-342.109091 0l-125.672727 125.672727c-13.963636 13.963636-13.963636 34.909091 0 46.545455 13.963636 13.963636 34.909091 13.963636 46.545455 0L658.618182 116.363636c32.581818-32.581818 76.8-51.2 123.345454-51.2s90.763636 18.618182 123.345455 51.2c67.490909 67.490909 67.490909 179.2 0 246.690909l-223.418182 223.418182c-32.581818 32.581818-76.8 51.2-123.345454 51.2s-90.763636-18.618182-123.345455-51.2c-13.963636-13.963636-34.909091-13.963636-46.545455 0-13.963636 13.963636-13.963636 34.909091 0 46.545455 46.545455 46.545455 109.381818 69.818182 169.89091 69.818182 62.836364 0 123.345455-23.272727 169.890909-69.818182l223.418181-223.418182c46.545455-46.545455 69.818182-107.054545 69.818182-169.890909C1024 176.872727 998.4 116.363636 954.181818 69.818182z" p-id="2809"></path></svg>组件实例 <a href="https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/virtual-list.d.ts">[详情]</a></h3>\n<table>\n<thead>\n<tr>\n<th>方法</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>reset</td>\n<td>重置状态</td>\n<td><em>  () =&gt; void<br/></em></td>\n</tr>\n<tr>\n<td>backToTop</td>\n<td>返回顶部</td>\n<td><em>  () =&gt; void<br/></em></td>\n</tr>\n</tbody>\n</table>\n</div>',
            h3Ids:
              '介绍:::引用:::基本使用:::IVirtualListProps<T>:::组件实例 <a href="https:',
          })
      },
    },
  ],
)

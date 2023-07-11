import{_ as n,o as s,c as a,a as t}from"./app-ec29cce2.js";const p={},e=t(`<p>惰性函数实在函数执行的时候如果有分支判断,那么先根据分支来判断符合条件的情况,在之后再调用这个函数的时候返回的是第一次调用的结果,这样就不会再走分支去判断了,直接执行函数,简单来说就是把原函数碱性重写</p><ul><li>当函数第 1 次被调用的时候，执行一次检测条件。</li><li>在第 1 次调用的过程中，使用另外一个根据条件检测，按合适方式执行的函数，覆盖掉第 1 次调用的函数。</li><li>当再次调用该函数时，不再是原来的函数，而是直接调用被覆盖后的函数，这样就不用再次执行条件检测了。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> date
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样调用就只返回第一次调用时的时间</p><h2 id="用例" tabindex="-1"><a class="header-anchor" href="#用例" aria-hidden="true">#</a> 用例:</h2><p>在添加 DOM 事件兼容 IE 与 Chrome 的时候我们就会用到</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addEvent</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> el<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断是否是时其他环境</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先执行一遍,要不在函数重写的时候不会执行事件</span>
    el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token comment">// 函数重写</span>
    <span class="token function-variable function">addEvent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> el<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 判断是否是IE环境</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>attachEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;on&#39;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
    <span class="token function-variable function">addEvent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> el<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span><span class="token function">attachEvent</span><span class="token punctuation">(</span><span class="token string">&#39;on&#39;</span> <span class="token operator">+</span> type<span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","duoxinghanshu.html.vue"]]);export{k as default};
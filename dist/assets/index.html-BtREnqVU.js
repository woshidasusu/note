import{_ as n,o as s,c as a,e}from"./app-_6xfh7q_.js";const t={},i=e(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><h2 id="nginx-conf" tabindex="-1"><a class="header-anchor" href="#nginx-conf" aria-hidden="true">#</a> nginx.conf</h2><h3 id="client-max-body-size" tabindex="-1"><a class="header-anchor" href="#client-max-body-size" aria-hidden="true">#</a> client_max_body_size</h3><p>nginx 默认请求体不能超过 1M，超过就返回 413（Request Entity Too Large）错误，可通过该配置进行修改</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">1024M</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二级域名转发" tabindex="-1"><a class="header-anchor" href="#二级域名转发" aria-hidden="true">#</a> 二级域名转发</h3><p>不同站点可通过资源根目录不同进行转发，也可通过二级域名进行转发，前者需要配置多个 location，后者则是在单个 location 内，获取二级域名，进行相应的转发：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token comment"># 正则获取二级域名</span>
        <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_host</span> ~* <span class="token string">&quot;^(.*?)\\.dasu\\.fun$&quot;</span>)</span> <span class="token punctuation">{</span>
			<span class="token directive"><span class="token keyword">set</span> <span class="token variable">$domain</span> <span class="token variable">$1</span></span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
        <span class="token comment"># 根据不同二级域名进行转发</span>
	    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$domain</span> ~* <span class="token string">&quot;blog&quot;</span>)</span> <span class="token punctuation">{</span>
			<span class="token directive"><span class="token keyword">proxy_pass</span> http://192.168.5.105</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	    <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$domain</span> ~* <span class="token string">&quot;gitbook&quot;</span>)</span> <span class="token punctuation">{</span>
			<span class="token directive"><span class="token keyword">proxy_pass</span> http://192.168.5.106</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
   		
        <span class="token comment"># 保持原请求一些信息</span>
	    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host	<span class="token variable">$host</span></span><span class="token punctuation">;</span>
	    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP	<span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
	    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
	   	
        <span class="token comment"># 默认的转发</span>
	    <span class="token directive"><span class="token keyword">proxy_pass</span> http://192.168.5.106</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[i];function c(o,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};

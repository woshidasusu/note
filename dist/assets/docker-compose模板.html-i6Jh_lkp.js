import{_ as t,r as i,o as l,c,a as n,b as s,d as e,e as o}from"./app-_6xfh7q_.js";const p={},u=n("h1",{id:"docker-compose-yml-模板",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose-yml-模板","aria-hidden":"true"},"#"),s(" docker-compose.yml 模板")],-1),r=n("p",null,"参考资料：",-1),d={href:"https://docs.docker.com/compose/compose-file/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://yeasy.gitbooks.io/docker_practice/content/compose/compose_file.html",target:"_blank",rel:"noopener noreferrer"},v=o(`<p>docker-compose.yml 是用来管理配置多容器，每一项指令都可以在 docker 命令中找到同样的用途，更多的是与 docker run 命令的参数进行对应</p><p>简单说，docker-compose 其实就是将 docker 命令的操作进行了一层封装，然后以更简洁的命令提供给我们使用，让我们可以不用再自行去执行各种 docker 命令操作</p><p>.yml 是一种配置文件，以缩进来决定配置项，所以缩进不能随便搞，同层缩进属于同层配置，内层缩进属于子配置项</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>下面是我服务器上的配置，用到的指令不多，官网有份示例，里面用到的比较多，后续等有接触，再扩展</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">blog</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ./blog/
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9000:80&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /usr/local/etc/github/woshidasusu.github.io/<span class="token punctuation">:</span>/usr/share/nginx/html/<span class="token punctuation">:</span>ro
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">n_nginx</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 192.168.5.105
  <span class="token key atrule">gitbook</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ./gitbook/
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9002:80&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /usr/local/etc/github/Doc/gitbook/_book/<span class="token punctuation">:</span>/usr/share/nginx/html/<span class="token punctuation">:</span>ro
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">n_nginx</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 192.168.5.106
  <span class="token key atrule">jenkins</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ./jenkins/
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9001:8080&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;50000:50000&quot;</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> root
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /usr/local/etc/github/woshidasusu.github.io/<span class="token punctuation">:</span>/var/jenkins_home/blog/codes/
      <span class="token punctuation">-</span> /usr/local/etc/github/Doc/<span class="token punctuation">:</span>/var/jenkins_home/gitbook/codes/
      <span class="token punctuation">-</span> /root/.ssh/<span class="token punctuation">:</span>/root/.ssh/<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">n_nginx</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 192.168.5.104
  <span class="token key atrule">nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> ./nginx/
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">n_nginx</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 192.168.5.103
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> POSTGRES_PASSWORD=xxx
      <span class="token punctuation">-</span> POSTGRES_USER=xxx
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /usr/local/etc/postgres/data<span class="token punctuation">:</span>/var/lib/postgresql/data
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5432&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">n_nginx</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 192.168.5.107
  <span class="token key atrule">nextcloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nextcloud
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9003<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nextcloud<span class="token punctuation">:</span>/var/www/html
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">n_nginx</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 192.168.5.108  

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">n_nginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 192.168.5.0/24  <span class="token comment">## 宿主机一般会是该网段的 .1，所以不要设置网段为1 i</span>

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">nextcloud</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板指令" tabindex="-1"><a class="header-anchor" href="#模板指令" aria-hidden="true">#</a> 模板指令</h2><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><p>docker-compose.yml 配置文件的首行，表示该使用哪个版本的 docker-compose，不同版本都有对 docker 版本的最低支持要求，可在官网查看</p><p>目前（2019）通常使用 3.0 版本就够了</p><h3 id="services" tabindex="-1"><a class="header-anchor" href="#services" aria-hidden="true">#</a> services</h3><p>docker-compose 里面是服务的概念，管理的每个容器对应着一个服务，都配置在 services 内，服务名自己随意取</p><p>每一个容器的配置项，基本包括设置容器基于的镜像，端口映射，数据卷使用，磁盘映射，网络设置，这就是我目前所接触的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>services
  <span class="token comment"># 服务名</span>
  jenkins:
    build: ./jenkins/ <span class="token comment"># 使用 jenkins 目录下的 Dockerfile 进行构建镜像</span>
    ports:  <span class="token comment"># 端口映射，宿主机:容器</span>
      - <span class="token string">&quot;9001:8080&quot;</span>
      - <span class="token string">&quot;50000:50000&quot;</span>
    user: root  <span class="token comment"># 以 root 用户连接容器</span>
    restart: always  <span class="token comment"># 重启模式，always 挂断就重启</span>
    volumes: <span class="token comment"># 与宿主机的映射</span>
      - /usr/local/etc/github/woshidasusu.github.io/:/var/jenkins_home/blog/codes/
      - /usr/local/etc/github/Doc/:/var/jenkins_home/gitbook/codes/
      - /root/.ssh/:/root/.ssh/:ro
      - /etc/localtime:/etc/localtime:ro
    networks: <span class="token comment"># 网络设置</span>
      n_nginx: <span class="token comment"># 加入 n_nginx 局域网</span>
        ipv4_address: <span class="token number">192.168</span>.5.104 <span class="token comment"># 设置固定 ip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="networks" tabindex="-1"><a class="header-anchor" href="#networks" aria-hidden="true">#</a> networks</h3><p>创建网络</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>networks: <span class="token comment"># 相当于 docker network create</span>
  n_nginx: <span class="token comment"># 网络名</span>
    driver: bridge <span class="token comment"># 使用的网络类型</span>
    ipam:
      config: 
        - subnet: <span class="token number">192.168</span>.5.0/24  <span class="token comment"># 配置子网</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> volumes</h3><p>创建数据卷</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>volumes: <span class="token comment"># 相当于 docker volume create</span>
  nextcloud:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(b,h){const a=i("ExternalLinkIcon");return l(),c("div",null,[u,r,n("ul",null,[n("li",null,[n("a",d,[s("官方文档"),e(a)])]),n("li",null,[n("a",k,[s("Docker Compose 模板文件"),e(a)])])]),v])}const g=t(p,[["render",m],["__file","docker-compose模板.html.vue"]]);export{g as default};

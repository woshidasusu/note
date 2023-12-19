import{_ as i,r as c,o as l,c as t,a as n,b as s,d as e,e as o}from"./app-_6xfh7q_.js";const p={},d=n("h1",{id:"docker-命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-命令","aria-hidden":"true"},"#"),s(" docker 命令")],-1),r=n("p",null,"参考资料：",-1),u={href:"https://docs.docker.com/engine/reference/run/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://yeasy.gitbooks.io/docker_practice/content/container/",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="命令-镜像相关" tabindex="-1"><a class="header-anchor" href="#命令-镜像相关" aria-hidden="true">#</a> 命令-镜像相关</h2><h3 id="pull" tabindex="-1"><a class="header-anchor" href="#pull" aria-hidden="true">#</a> pull</h3><p>从仓库拉取镜像，命令格式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>Docker Registry 地址<span class="token punctuation">[</span>:端口号<span class="token punctuation">]</span>/<span class="token punctuation">]</span>仓库名<span class="token punctuation">[</span>:标签<span class="token punctuation">]</span>

<span class="token comment"># 简单例子</span>
<span class="token function">docker</span> pull alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> images</h3><p>列出已经下载下来的镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
<span class="token comment"># 输出</span>
REPOSITORY       TAG             IMAGE ID         CREATED             SIZE
alpine           latest        965ea09ff2eb      <span class="token number">7</span> weeks ago         <span class="token number">5</span>.55MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><p>对镜像的操作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 相当于 docker images</span>
<span class="token function">docker</span> image <span class="token function">ls</span> 

<span class="token comment"># 查看镜像的摘要</span>
<span class="token function">docker</span> image <span class="token function">ls</span> <span class="token parameter variable">--digests</span>

<span class="token comment"># 通过摘要删除镜像</span>
<span class="token function">docker</span> image <span class="token function">rm</span> <span class="token punctuation">[</span>镜像摘要<span class="token punctuation">]</span>

<span class="token comment"># 删除虚悬镜像，也就是镜像名称、标签都为 none 的镜像</span>
<span class="token function">docker</span> image prune

<span class="token comment"># 查看镜像的历史记录</span>
<span class="token function">docker</span> image <span class="token function">history</span> <span class="token punctuation">[</span>镜像名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h3><p>通过 Dockerfile 构建镜像，build 命令会默认去寻找当前目录下的 Dockerfile 文件，也可以手动指定</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># build 后面还有一个 . 这是因为 build 的工作原理需要一个上下文以方便一些如 COPY 指令的执行，这个 . 表示将当前工作区间作为 build 的上下文</span>
<span class="token function">docker</span> build <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令-容器相关" tabindex="-1"><a class="header-anchor" href="#命令-容器相关" aria-hidden="true">#</a> 命令-容器相关</h2><h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> run</h3><p>基于镜像，启动一个容器</p><p>每次 run 都会创建一个新容器，不手动删除，即使容器停止运行，仍旧存在，所以建议临时操作，带上 --rm 参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 简单例子，-it 将容器的输入输出重定向到终端， --rm，终端退出容器即销毁</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--rm</span> alpine <span class="token function">sh</span>

<span class="token comment"># 参数帮助，启动容器时，可以进行各种配置，如端口映射，网络设置，数据卷设置等等</span>
<span class="token function">docker</span> run <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="container" tabindex="-1"><a class="header-anchor" href="#container" aria-hidden="true">#</a> container</h3><p>对容器的各种操作，比如：停止、暂停、启动、重启、枚举、删除等</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看正在运行中的容器列表</span>
<span class="token function">docker</span> container <span class="token function">ls</span>

<span class="token comment"># 查看所有容器列表</span>
<span class="token function">docker</span> container <span class="token function">ls</span> <span class="token parameter variable">-a</span>

<span class="token comment"># 启动处于停止状态的容器</span>
<span class="token function">docker</span> container start <span class="token parameter variable">-ai</span> <span class="token punctuation">[</span>容器ID<span class="token punctuation">]</span> <span class="token function">sh</span>

<span class="token comment"># 连接上处于运行中的容器</span>
<span class="token function">docker</span> container <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span> <span class="token function">sh</span>

<span class="token comment"># 查看后台运行中的容器产生的日志</span>
<span class="token function">docker</span> container logs <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span>

<span class="token comment"># 删除容器</span>
<span class="token function">docker</span> container <span class="token function">rm</span> <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span>

<span class="token comment"># 删除所有处于终止状态的容器</span>
<span class="token function">docker</span> container prune

<span class="token comment"># 查看进程，容器其实就是进程</span>
<span class="token function">docker</span> container <span class="token function">ps</span>

<span class="token comment"># 在宿主机和容器之间拷贝文件</span>
<span class="token function">docker</span> container <span class="token function">cp</span> <span class="token punctuation">[</span>原文件地址<span class="token punctuation">]</span> <span class="token punctuation">[</span>目标文件地址<span class="token punctuation">]</span>
<span class="token function">docker</span> container <span class="token function">cp</span> ./test <span class="token punctuation">[</span>容器id:/root/<span class="token punctuation">]</span>   <span class="token comment"># 将本地文件拷贝到容器内</span>

<span class="token comment"># 查看容器的详细信息</span>
<span class="token function">docker</span> container inspect <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面一些命令，其实可以省略 container，比如 docker ps 等等，用途一致，下面稍微罗列下操作容器的命令：</p><p><strong>exec</strong>： 连接上正在运行中的容器，通常可携带 -it 参数以及 sh 命令来登录容器，以便操作容器</p><p><strong>logs</strong>： 查看后台运行的容器所产生的日志，因为后台运行，日志不会输出到终端</p><p><strong>stop</strong>： 停止指定容器，通常是为了删除，先停后删</p><p><strong>prune</strong>：删除所有处于终止状态的容器，删通常是为了重建，不新建容器，一些配置的修改不会生效</p><p><strong>inspect</strong>： 查看容器的详细信息，比如端口映射、网络配置、数据卷配置等</p><h2 id="命令-数据卷相关" tabindex="-1"><a class="header-anchor" href="#命令-数据卷相关" aria-hidden="true">#</a> 命令-数据卷相关</h2><p>docker 容器的数据主要有两种方式，一种是数据卷，另一种是跟宿主机的磁盘映射（挂载主机目录）</p><p>docker run 启动的容器，默认都使用匿名数据卷，也就是这些数据只有本容器能够使用，其他容器用不了，容器一删，数据就没了</p><p>当在多容器间需要数据共享时，就可以先创建数据卷，然后这些容器共同使用</p><p>当容器需要和宿主机数据交互，可以跟宿舍机的磁盘做映射，多容器的共享也可以通过宿舍机做中转</p><h3 id="volume" tabindex="-1"><a class="header-anchor" href="#volume" aria-hidden="true">#</a> volume</h3><p>通过该命令对数据卷进行各种操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有数据卷</span>
<span class="token function">docker</span> volume <span class="token function">ls</span>

<span class="token comment"># 查看指定数据卷的详细信息：名称、在宿主机的挂载点等</span>
<span class="token function">docker</span> volume inspect <span class="token punctuation">[</span>数据卷名<span class="token punctuation">]</span>

<span class="token comment"># 创建数据卷</span>
<span class="token function">docker</span> volume create <span class="token punctuation">[</span>数据卷名<span class="token punctuation">]</span>

<span class="token comment"># 删除数据卷</span>
<span class="token function">docker</span> volume <span class="token function">rm</span> <span class="token punctuation">[</span>数据卷名<span class="token punctuation">]</span>

<span class="token comment"># 删除无主的数据卷</span>
<span class="token function">docker</span> volume prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令-网络相关" tabindex="-1"><a class="header-anchor" href="#命令-网络相关" aria-hidden="true">#</a> 命令-网络相关</h2><p>网络的配置支持很多高级的配置：</p><ul><li>可以创建一个局域网，让多个容器间可以互相通信</li><li>可以做端口与宿主机映射，让外部环境可以与容器通信</li><li>等等</li></ul><h3 id="network" tabindex="-1"><a class="header-anchor" href="#network" aria-hidden="true">#</a> network</h3><p>用该命令来进行网络的各种操作：创建网络等</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建网络, -d 指定网络类型，有 bridge，overlay</span>
<span class="token function">docker</span> network create <span class="token parameter variable">-d</span> bridge my-net

<span class="token comment"># 查看网络列表</span>
<span class="token function">docker</span> network <span class="token function">ls</span>

<span class="token comment"># 删除 </span>
<span class="token function">docker</span> network rm/prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将容器与网络的绑定，通常是在 run 启动容器时，以参数形式来进行配置，比如 -p 参数指定端口映射，--network 参数指定连接的网络</p><p>但更建议通过 docker-compose 来进行配置</p><h2 id="命令-其他" tabindex="-1"><a class="header-anchor" href="#命令-其他" aria-hidden="true">#</a> 命令-其他</h2><h3 id="system-df" tabindex="-1"><a class="header-anchor" href="#system-df" aria-hidden="true">#</a> system df</h3><p>查看镜像、容器、数据卷占用的空间</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> system <span class="token function">df</span>
<span class="token comment"># 输出</span>
TYPE                TOTAL               ACTIVE              SIZE                RECLAIMABLE
Images              <span class="token number">17</span>                  <span class="token number">5</span>                   <span class="token number">1</span>.861GB             925MB <span class="token punctuation">(</span><span class="token number">49</span>%<span class="token punctuation">)</span>
Containers          <span class="token number">6</span>                   <span class="token number">6</span>                   <span class="token number">2</span>.124MB             0B <span class="token punctuation">(</span><span class="token number">0</span>%<span class="token punctuation">)</span>
Local Volumes       <span class="token number">4</span>                   <span class="token number">2</span>                   <span class="token number">652</span>.3MB             <span class="token number">334</span>.6MB <span class="token punctuation">(</span><span class="token number">51</span>%<span class="token punctuation">)</span>
Build Cache         <span class="token number">0</span>                   <span class="token number">0</span>                   0B                  0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function k(b,h){const a=c("ExternalLinkIcon");return l(),t("div",null,[d,r,n("ul",null,[n("li",null,[n("a",u,[s("官方文档"),e(a)])]),n("li",null,[n("a",m,[s("操作容器|数据管理|使用网络|等等"),e(a)])])]),v])}const g=i(p,[["render",k],["__file","docker命令.html.vue"]]);export{g as default};

import{_ as e,r as p,o,c,a as s,b as n,d as l,e as r}from"./app-TdxX9aIL.js";const D={},i=s("h1",{id:"docker-compose-yml-模板",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker-compose-yml-模板","aria-hidden":"true"},"#"),n(" docker-compose.yml 模板")],-1),t=s("p",null,"参考资料：",-1),d={href:"https://docs.docker.com/compose/compose-file/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://yeasy.gitbooks.io/docker_practice/content/compose/compose_file.html",target:"_blank",rel:"noopener noreferrer"},v=r(`<p>docker-compose.yml 是用来管理配置多容器，每一项指令都可以在 docker 命令中找到同样的用途，更多的是与 docker run 命令的参数进行对应</p><p>简单说，docker-compose 其实就是将 docker 命令的操作进行了一层封装，然后以更简洁的命令提供给我们使用，让我们可以不用再自行去执行各种 docker 命令操作</p><p>.yml 是一种配置文件，以缩进来决定配置项，所以缩进不能随便搞，同层缩进属于同层配置，内层缩进属于子配置项</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>下面是我服务器上的配置，用到的指令不多，官网有份示例，里面用到的比较多，后续等有接触，再扩展</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">version</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">services</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">blog</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">build</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">./blog/</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">ports</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">&quot;9000:80&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">restart</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">always</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">volumes</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">/usr/local/etc/github/woshidasusu.github.io/:/usr/share/nginx/html/:ro</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">networks</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">n_nginx</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">ipv4_address</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">192.168.5.105</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">gitbook</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">build</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">./gitbook/</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">ports</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">&quot;9002:80&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">restart</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">always</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">volumes</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">/usr/local/etc/github/Doc/gitbook/_book/:/usr/share/nginx/html/:ro</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">networks</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">n_nginx</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">ipv4_address</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">192.168.5.106</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">jenkins</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">build</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">./jenkins/</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">ports</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">&quot;9001:8080&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">&quot;50000:50000&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">user</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">root</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">restart</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">always</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">volumes</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">/usr/local/etc/github/woshidasusu.github.io/:/var/jenkins_home/blog/codes/</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">/usr/local/etc/github/Doc/:/var/jenkins_home/gitbook/codes/</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">/root/.ssh/:/root/.ssh/:ro</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">/etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">networks</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">n_nginx</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">ipv4_address</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">192.168.5.104</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">nginx</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">build</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">./nginx/</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">ports</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">&quot;80:80&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">restart</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">always</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">networks</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">n_nginx</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">ipv4_address</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">192.168.5.103</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">db</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">image</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">postgres</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">environment</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">POSTGRES_PASSWORD=xxx</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">POSTGRES_USER=xxx</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">volumes</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">/usr/local/etc/postgres/data:/var/lib/postgresql/data</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">expose</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">&quot;5432&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">networks</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">n_nginx</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">ipv4_address</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">192.168.5.107</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">nextcloud</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">image</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">nextcloud</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">ports</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">9003:80</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">volumes</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">nextcloud:/var/www/html</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">networks</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">n_nginx</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">ipv4_address</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">192.168.5.108</span><span style="color:#D4D4D4;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">networks</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">n_nginx</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">driver</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">bridge</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">ipam</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">config</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">        - </span><span style="color:#569CD6;">subnet</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">192.168.5.0/24</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">## 宿主机一般会是该网段的 .1，所以不要设置网段为1 i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">volumes</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">nextcloud</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板指令" tabindex="-1"><a class="header-anchor" href="#模板指令" aria-hidden="true">#</a> 模板指令</h2><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><p>docker-compose.yml 配置文件的首行，表示该使用哪个版本的 docker-compose，不同版本都有对 docker 版本的最低支持要求，可在官网查看</p><p>目前（2019）通常使用 3.0 版本就够了</p><h3 id="services" tabindex="-1"><a class="header-anchor" href="#services" aria-hidden="true">#</a> services</h3><p>docker-compose 里面是服务的概念，管理的每个容器对应着一个服务，都配置在 services 内，服务名自己随意取</p><p>每一个容器的配置项，基本包括设置容器基于的镜像，端口映射，数据卷使用，磁盘映射，网络设置，这就是我目前所接触的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">services</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 服务名</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">jenkins:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">build:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">./jenkins/</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 使用 jenkins 目录下的 Dockerfile 进行构建镜像</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">ports:</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 端口映射，宿主机:容器</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">-</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;9001:8080&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">-</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&quot;50000:50000&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">user:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">root</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 以 root 用户连接容器</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">restart:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">always</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 重启模式，always 挂断就重启</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">volumes:</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 与宿主机的映射</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">-</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/usr/local/etc/github/woshidasusu.github.io/:/var/jenkins_home/blog/codes/</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">-</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/usr/local/etc/github/Doc/:/var/jenkins_home/gitbook/codes/</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">-</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/root/.ssh/:/root/.ssh/:ro</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">-</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">/etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">networks:</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 网络设置</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">n_nginx:</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 加入 n_nginx 局域网</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">ipv4_address:</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">192.168</span><span style="color:#CE9178;">.5.104</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 设置固定 ip</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="networks" tabindex="-1"><a class="header-anchor" href="#networks" aria-hidden="true">#</a> networks</h3><p>创建网络</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">networks:</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 相当于 docker network create</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">n_nginx:</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 网络名</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">driver:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">bridge</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 使用的网络类型</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">ipam:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">config:</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">-</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">subnet:</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">192.168</span><span style="color:#CE9178;">.5.0/24</span><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># 配置子网</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> volumes</h3><p>创建数据卷</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">volumes:</span><span style="color:#D4D4D4;"> </span><span style="color:#6A9955;"># 相当于 docker volume create</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">nextcloud:</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function u(m,b){const a=p("ExternalLinkIcon");return o(),c("div",null,[i,t,s("ul",null,[s("li",null,[s("a",d,[n("官方文档"),l(a)])]),s("li",null,[s("a",y,[n("Docker Compose 模板文件"),l(a)])])]),v])}const h=e(D,[["render",u],["__file","docker-compose模板.html.vue"]]);export{h as default};

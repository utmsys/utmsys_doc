"use strict";(self.webpackChunkutm_doc=self.webpackChunkutm_doc||[]).push([[8884],{2406:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"System_Config/RDK X5 Module/config_txt","title":"5.2.3 config.txt \u6587\u4ef6\u914d\u7f6e","description":"RDK \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6config.txt\u6765\u8bbe\u7f6e\u4e00\u4e9b\u542f\u52a8\u65f6\u5019\u7684\u7cfb\u7edf\u914d\u7f6e\u3002config.txt \u4f1a\u5728uboot\u9636\u6bb5\u88ab\u8bfb\u53d6\uff0c\u652f\u6301\u4fee\u6539\u8bbe\u5907\u6811\u7684\u914d\u7f6e\uff0cIO\u7ba1\u811a\u72b6\u6001\uff0cION\u5185\u5b58\uff0cCPU\u9891\u7387\u7b49\u3002\u8be5\u6587\u4ef6\u901a\u5e38\u53ef\u4ee5\u4ece Linux \u8bbf\u95ee/boot/config.txt\uff0c\u5e76\u4e14\u5fc5\u987b\u4ee5root\u7528\u6237\u8eab\u4efd\u8fdb\u884c\u7f16\u8f91\u3002\u5982\u679c\u5728config.txt\u914d\u7f6e\u8bbe\u7f6e\uff0c\u4f46\u662f\u8be5\u6587\u4ef6\u8fd8\u4e0d\u5b58\u5728\uff0c\u53ea\u9700\u5c06\u5176\u521b\u5efa\u4e3a\u65b0\u7684\u6587\u672c\u6587\u4ef6\u5373\u53ef\u3002","source":"@site/docs/05_System_Config/02_RDK X5 Module/03_config_txt.md","sourceDirName":"05_System_Config/02_RDK X5 Module","slug":"/System_Config/RDK X5 Module/config_txt","permalink":"/en/System_Config/RDK X5 Module/config_txt","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"5.2.2 srpi-config \u5de5\u5177\u914d\u7f6e","permalink":"/en/System_Config/RDK X5 Module/srpi-config"},"next":{"title":"5.2.4 Thermal\u548cCPU\u9891\u7387\u7ba1\u7406","permalink":"/en/System_Config/RDK X5 Module/frequency_management"}}');var r=d(4848),s=d(8453);const c={sidebar_position:3},l="5.2.3 config.txt \u6587\u4ef6\u914d\u7f6e",o={},t=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u8bbe\u5907\u6811\u914d\u7f6e",id:"\u8bbe\u5907\u6811\u914d\u7f6e",level:2},{value:"dtdebug",id:"dtdebug",level:3},{value:"dtoverlay",id:"dtoverlay",level:3},{value:"RDK X5 \u914d\u7f6e ION",id:"rdk-x5-\u914d\u7f6e-ion",level:3},{value:"dtparam",id:"dtparam",level:3},{value:"X5 CPU\u9891\u7387",id:"x5-cpu\u9891\u7387",level:2},{value:"arm_boost",id:"arm_boost",level:3},{value:"governor",id:"governor",level:3},{value:"frequency",id:"frequency",level:3},{value:"IO\u521d\u59cb\u5316",id:"io\u521d\u59cb\u5316",level:2},{value:"gpio",id:"gpio",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u6e29\u5ea6\u63a7\u5236",id:"\u6e29\u5ea6\u63a7\u5236",level:2},{value:"throttling_temp",id:"throttling_temp",level:3},{value:"shutdown_temp",id:"shutdown_temp",level:3},{value:"\u9009\u9879\u8fc7\u6ee4",id:"\u9009\u9879\u8fc7\u6ee4",level:2},{value:"\u7535\u538b\u57df",id:"\u7535\u538b\u57df",level:2},{value:"voltage_domain",id:"voltage_domain",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"523-configtxt-\u6587\u4ef6\u914d\u7f6e",children:"5.2.3 config.txt \u6587\u4ef6\u914d\u7f6e"})}),"\n",(0,r.jsxs)(n.p,{children:["RDK \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6",(0,r.jsx)(n.code,{children:"config.txt"}),"\u6765\u8bbe\u7f6e\u4e00\u4e9b\u542f\u52a8\u65f6\u5019\u7684\u7cfb\u7edf\u914d\u7f6e\u3002",(0,r.jsx)(n.code,{children:"config.txt"})," \u4f1a\u5728",(0,r.jsx)(n.code,{children:"uboot"}),"\u9636\u6bb5\u88ab\u8bfb\u53d6\uff0c\u652f\u6301\u4fee\u6539\u8bbe\u5907\u6811\u7684\u914d\u7f6e\uff0cIO\u7ba1\u811a\u72b6\u6001\uff0cION\u5185\u5b58\uff0cCPU\u9891\u7387\u7b49\u3002\u8be5\u6587\u4ef6\u901a\u5e38\u53ef\u4ee5\u4ece Linux \u8bbf\u95ee",(0,r.jsx)(n.code,{children:"/boot/config.txt"}),"\uff0c\u5e76\u4e14\u5fc5\u987b\u4ee5",(0,r.jsx)(n.code,{children:"root"}),"\u7528\u6237\u8eab\u4efd\u8fdb\u884c\u7f16\u8f91\u3002\u5982\u679c\u5728",(0,r.jsx)(n.code,{children:"config.txt"}),"\u914d\u7f6e\u8bbe\u7f6e\uff0c\u4f46\u662f\u8be5\u6587\u4ef6\u8fd8\u4e0d\u5b58\u5728\uff0c\u53ea\u9700\u5c06\u5176\u521b\u5efa\u4e3a\u65b0\u7684\u6587\u672c\u6587\u4ef6\u5373\u53ef\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"config.txt"}),"\u914d\u7f6e\u6587\u4ef6\u4ec5\u9002\u7528\u4e8e",(0,r.jsx)(n.code,{children:"RDK X3"}),"\u3001",(0,r.jsx)(n.code,{children:"RDK X5"}),"\u548c",(0,r.jsx)(n.code,{children:"RDK X3 Module"}),"\u5f00\u53d1\u677f\uff0c\u4e0d\u9002\u7528\u4e8e",(0,r.jsx)(n.code,{children:"RDK Ultra"}),"\u5f00\u53d1\u677f\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7cfb\u7edf\u7248\u672c\u4e0d\u4f4e\u4e8e ",(0,r.jsx)(n.code,{children:"2.1.0"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"miniboot"}),"\u7248\u672c\u4e0d\u80fd\u4f4e\u4e8e ",(0,r.jsx)(n.code,{children:"20231126"}),"\u65e5\u671f\u7684\u7248\u672c\u3002\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"rdk_doc/docs_dr/09_Appendix/rdk-command-manual/cmd_rdk-miniboot-update.md",children:"rdk-miniboot-update"})," \u5728\u677f\u66f4\u65b0 miniboot\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5728\u672c\u914d\u7f6e\u6587\u4ef6\u6dfb\u52a0\u4e86\u8fc7\u6ee4\u9879\uff0c\u90a3\u4e48\u4f7f\u7528",(0,r.jsx)(n.code,{children:"srpi-config"}),"\u5de5\u5177\u65f6\u8bf7\u6ce8\u610f\u914d\u7f6e\u9879\u662f\u5426\u4f1a\u88ab\u8fc7\u6ee4\u6389\u3002"]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u5907\u6811\u914d\u7f6e",children:"\u8bbe\u5907\u6811\u914d\u7f6e"}),"\n",(0,r.jsx)(n.h3,{id:"dtdebug",children:"dtdebug"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"dtdebug"})," \u5982\u679c\u975e\u96f6\uff0c\u5728",(0,r.jsx)(n.code,{children:"uboot"}),"\u9636\u6bb5\u7684\u8bbe\u5907\u6811\u914d\u7f6e\u8fc7\u7a0b\u4e2d\u4f1a\u5728\u4e32\u53e3\u8f93\u51fa\u914d\u7f6e\u65e5\u5fd7\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"dtdebug=1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"dtoverlay",children:"dtoverlay"}),"\n",(0,r.jsx)(n.p,{children:"\u652f\u6301\u8bbe\u5907\u6811\u8986\u76d6\uff0c\u63d0\u4f9b\u66f4\u52a0\u7075\u6d3b\u7684\u8bbe\u5907\u6811\u8c03\u6574\u65b9\u5f0f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u3010RDK X3\u3011\u4f8b\u5982\u901a\u8fc7",(0,r.jsx)(n.code,{children:"ion_resize"}),"\u8c03\u6574",(0,r.jsx)(n.code,{children:"ION"}),"\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u4ee5\u4e0b\u914d\u7f6e\u4f1a\u4fee\u6539",(0,r.jsx)(n.code,{children:"ION"}),"\u5185\u5b58\u5927\u5c0f\u4e3a ",(0,r.jsx)(n.code,{children:"1GB"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"dtoverlay=ion_resize,size=0x40000000\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3010RDK X5\u3011\u901a\u8fc7dtoverlay_spi5_spidev\u589e\u52a0/dev/spidev5.0\uff08\u6ce8\u610f\uff1acan\u8bbe\u5907\u4e5f\u63a5\u5230\u4e86spi5\uff0cspidev\u548ccan\u53ea\u80fd\u4e8c\u9009\u4e00\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"dtoverlay=dtoverlay_spi5_spidev\n"})}),"\n",(0,r.jsx)(n.h3,{id:"rdk-x5-\u914d\u7f6e-ion",children:"RDK X5 \u914d\u7f6e ION"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7 ion_reserved_size\uff0cion_carveout_size\uff0c ion_cma_size \u4fee\u6539 boot \u73af\u5883\u53d8\u91cf\uff0c\u8fdb\u800c\u4fee\u6539 ION \u5206\u533a\u5927\u5c0f\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"boot\u73af\u5883\u53d8\u91cf\u540d"}),(0,r.jsx)(n.th,{children:"dts\u6807\u7b7e"}),(0,r.jsx)(n.th,{children:"dts compatible\u5b57\u7b26\u4e32"}),(0,r.jsx)(n.th,{children:"\u9ed8\u8ba4\u5927\u5c0f"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ion_reserved_size"}),(0,r.jsx)(n.td,{children:"ion_reserved"}),(0,r.jsx)(n.td,{children:"ion-pool"}),(0,r.jsx)(n.td,{children:"320M"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ion_carveout_size"}),(0,r.jsx)(n.td,{children:"ion_carveout"}),(0,r.jsx)(n.td,{children:"ion-carveout"}),(0,r.jsx)(n.td,{children:"320M"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ion_cma_size"}),(0,r.jsx)(n.td,{children:"ion_cma"}),(0,r.jsx)(n.td,{children:"ion-cma"}),(0,r.jsx)(n.td,{children:"128M"})]})]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"ion=ion_reserved_size=0x14000000\nion=ion_carveout_size=0x14000000\nion=ion_cma_size=0x08000000\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u542f\u52a8\u4fe1\u606f\u67e5\u770b\u5404\u4e2aION\u533a\u57df\u7684\u5927\u5c0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:'root@ubuntu:~# dmesg | grep "Reserverd ion"\n[    0.207939] Reserverd ion-pool MEM start 0xa4100000, size 0x14000000\n[    0.207964] Reserverd ion-carveout MEM start 0xb8100000, size 0x14000000\n[    0.208068] Reserverd ion-cma MEM start 0xcc100000, size 0x8000000\n'})}),"\n",(0,r.jsx)(n.h3,{id:"dtparam",children:"dtparam"}),"\n",(0,r.jsx)(n.p,{children:"\u652f\u6301\u8bbe\u7f6e uart\u3001i2c\u3001spi\u3001i2s \u7b49\u603b\u7ebf\u7684\u4f7f\u80fd\u4e0e\u5173\u95ed\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u524d\u652f\u6301\u7684\u9009\u9879\u53c2\u6570\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"RDK X3 \u652f\u6301\uff1a uart3, spi0, spi1, spi2, i2c0, i2c1, i2c2, i2c3, i2c4, i2c5, i2s0, i2s1"}),"\n",(0,r.jsx)(n.p,{children:"RDK X5 \u652f\u6301\uff1a uart1, uart2, uart3, uart6\uff0cspi1, spi2, i2c0, i2c1, i2c5, i2c4, i2c5, dw_i2s1"}),"\n",(0,r.jsxs)(n.admonition,{title:"\u6ce8\u610f",type:"info",children:[(0,r.jsx)(n.p,{children:"RDK X5\u9700\u8981\u6ce8\u610f\u7ba1\u811a\u7684\u590d\u7528\u5173\u7cfb\uff0c\u5f53\u4e00\u884c\u7684\u6240\u6709\u63a5\u53e3\u90fd\u4e3adsiable\u65f6\uff0c\u5f15\u811a\u4e3agpio\u529f\u80fd\u811a"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u529f\u80fd1"}),(0,r.jsx)(n.th,{children:"\u529f\u80fd2"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uart3"}),(0,r.jsx)(n.td,{children:"i2c5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"i2c0"}),(0,r.jsx)(n.td,{children:"pwm2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spi2"}),(0,r.jsx)(n.td,{children:"pwm0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"spi2"}),(0,r.jsx)(n.td,{children:"pwm1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"i2c1"}),(0,r.jsx)(n.td,{children:"pwm3"})]})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\u5173\u95ed\u4e32\u53e33\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"dtparam=uart3=off\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\u6253\u5f00",(0,r.jsx)(n.code,{children:"i2c5"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"dtparam=i2c5=on\n"})}),"\n",(0,r.jsx)(n.h2,{id:"x5-cpu\u9891\u7387",children:"X5 CPU\u9891\u7387"}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u5173",(0,r.jsx)(n.code,{children:"CPU"}),"\u8c03\u5ea6\u65b9\u5f0f\u7684\u8bf4\u660e\u8bf7\u67e5\u9605 ",(0,r.jsx)(n.a,{href:"frequency_management#cpu%E9%A2%91%E7%8E%87%E7%AE%A1%E7%90%86-1",children:"X5 CPU\u9891\u7387\u7ba1\u7406"}),"\uff0c\u8fd9\u91cc\u4ec5\u4ecb\u7ecdconfig.txt\u7684\u914d\u7f6e\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"arm_boost",children:"arm_boost"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u8bbe\u7f6e\u4e3a1\u65f6\uff0c\u5f00\u542f\u8d85\u9891\uff0cRDK RDK X5 \u6700\u9ad8\u9891\u7387\u63d0\u9ad8\u52301.8GHz\uff0c\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"cat /sys/devices/system/cpu/cpufreq/policy0/scaling_boost_frequencies"})," \u83b7\u53d6\u4f7f\u80fd boost \u540e\u4f1a\u5f00\u653e\u54ea\u4e9b\u66f4\u9ad8 CPU \u9891\u7387\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u4e0d\u5f00\u542f\u8d85\u9891\uff0c\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"arm_boost"})," \u4e3a ",(0,r.jsx)(n.code,{children:"1"}),"\u65f6\u5f00\u542f\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"arm_boost=1\n"})}),"\n",(0,r.jsx)(n.h3,{id:"governor",children:"governor"}),"\n",(0,r.jsxs)(n.p,{children:["CPU \u9891\u7387\u7684\u8c03\u5ea6\u65b9\u5f0f\uff0c\u6709 ",(0,r.jsx)(n.code,{children:"conservative ondemand userspace powersave performance schedutil "})," \u65b9\u5f0f\u53ef\u4ee5\u9009\u62e9\uff0c \u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"cat /sys/devices/system/cpu/cpufreq/policy0/scaling_available_governors"})," \u83b7\u53d6\u53ef\u4ee5\u8bbe\u7f6e\u7684\u6a21\u5f0f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"CPU"}),"\u8fd0\u884c\u5728\u6027\u80fd\u6a21\u5f0f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"governor=performance\n"})}),"\n",(0,r.jsx)(n.h3,{id:"frequency",children:"frequency"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"governor"}),"\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"userspace"})," \u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u672c\u9009\u578b\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"CPU"}),"\u8fd0\u884c\u5728\u4e00\u4e2a\u56fa\u5b9a\u7684\u9891\u7387\u4e0a\uff0c\u76ee\u524d\u4e00\u822c\u53ef\u4ee5\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"300000 600000 1200000 1500000"}),"\u8fd9\u4e9b\u9891\u7387\uff0c\u5177\u4f53\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.code,{children:"cat /sys/devices/system/cpu/cpufreq/policy0/scaling_available_frequencies"})," \u83b7\u53d6\u53ef\u4ee5\u8bbe\u7f6e\u7684\u9891\u7387\u5217\u8868\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"CPU"}),"\u964d\u9891\u8fd0\u884c\u5728 ",(0,r.jsx)(n.code,{children:"1.2GHz"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"governor=userspace\nfrequency=1200000\n"})}),"\n",(0,r.jsx)(n.h2,{id:"io\u521d\u59cb\u5316",children:"IO\u521d\u59cb\u5316"}),"\n",(0,r.jsx)(n.h3,{id:"gpio",children:"gpio"}),"\n",(0,r.jsx)(n.p,{children:"\u652f\u6301\u8bbe\u7f6eIO\u7684\u529f\u80fd\u590d\u7528\uff0c\u8f93\u51fa\u3001\u8f93\u51fa\u6a21\u5f0f\uff0c\u8f93\u51fa\u9ad8\u3001\u4f4e\u7535\u5e73\uff0c\u4e0a\u4e0b\u62c9\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"gpio:\nip - Input                             \u8bbe\u7f6e\u4e3a\u8f93\u5165\u6a21\u5f0f\nop - Output                            \u8bbe\u7f6e\u4e3a\u8f93\u51fa\u6a21\u5f0f\nf0-f3 - Func0-Func3                    \u8bbe\u7f6e\u529f\u80fd\u590d\u7528\uff0cX3 f3\u529f\u80fd\u90fd\u662f\u8bbe\u7f6e\u4e3aio\u6a21\u5f0f\uff0cX3\u7684\u5176\u4ed6\u529f\u80fd\u548cX5\u7684\u6240\u6709\u529f\u80fd\u8bf7\u67e5\u770b40PIN \u7ba1\u811a\u5b9a\u4e49,\u6216\u67e5\u9605\u76f8\u5173\u5bc4\u5b58\u5668\u6587\u6863\ndh - Driving high (for outputs)        \u8f93\u51fa\u9ad8\u7535\u5e73\ndl - Driving low (for outputs)         \u8f93\u51fa\u4f4e\u7535\u5e73\npu - Pull up                           \u63a8\u633d\u4e0a\u62c9\npd - Pull down                         \u63a8\u633d\u4e0b\u62c9\npn/np - No pull                        \u65e0\u4e0a\u4e0b\u62c9\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e",(0,r.jsx)(n.code,{children:"40Pin"}),"\u7ba1\u811a\u4e0a\u7684 ",(0,r.jsx)(n.code,{children:"GPIO5"})," \u548c ",(0,r.jsx)(n.code,{children:"GPIO6"}),"\u4e3aIO\u6a21\u5f0f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"gpio=5=f3\ngpio=6=f3\n# \u5bf9\u4e8e\u8fde\u7eed\u7684\u7ba1\u811a\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u914d\u7f6e\ngpio=5-6=f3\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e",(0,r.jsx)(n.code,{children:"40Pin"}),"\u7ba1\u811a\u4e0a\u7684 ",(0,r.jsx)(n.code,{children:"GPIO5"})," \u4e3a\u8f93\u5165\u6a21\u5f0f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"gpio=5=f3\ngpio=5=ip\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e",(0,r.jsx)(n.code,{children:"40Pin"}),"\u7ba1\u811a\u4e0a\u7684 ",(0,r.jsx)(n.code,{children:"GPIO6"})," \u4e3a\u8f93\u51fa\u6a21\u5f0f\uff0c\u5e76\u4e14\u8f93\u51fa\u4f4e\u7535\u5e73\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"gpio=6=f3\ngpio=6=op,dl\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e",(0,r.jsx)(n.code,{children:"40Pin"}),"\u7ba1\u811a\u4e0a\u7684 ",(0,r.jsx)(n.code,{children:"GPIO6"})," \u4e3a\u8f93\u51fa\u6a21\u5f0f\uff0c\u5e76\u4e14\u8f93\u51fa\u9ad8\u7535\u5e73\uff0c\u5e76\u4e14\u8bbe\u7f6e\u4e0a\u62c9\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"gpio=6=f3\ngpio=6=op,dh,pu\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6e29\u5ea6\u63a7\u5236",children:"\u6e29\u5ea6\u63a7\u5236"}),"\n",(0,r.jsx)(n.h3,{id:"throttling_temp",children:"throttling_temp"}),"\n",(0,r.jsx)(n.p,{children:"\u7cfb\u7edf CPU\u3001BPU \u964d\u9891\u6e29\u5ea6\u70b9\uff0c\u6e29\u5ea6\u8d85\u8fc7\u8be5\u6e29\u5ea6\u70b9\u65f6\uff0cCPU \u548c BPU \u4f1a\u964d\u4f4e\u8fd0\u884c\u9891\u7387\u6765\u51cf\u4f4e\u529f\u8017\uff0cCPU\u6700\u4f4e\u964d\u5230 240MHz\uff0cBPU \u6700\u4f4e\u964d\u5230 400MHz\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"shutdown_temp",children:"shutdown_temp"}),"\n",(0,r.jsx)(n.p,{children:"\u7cfb\u7edf\u5b95\u673a\u6e29\u5ea6\u70b9\uff0c\u5982\u679c\u6e29\u5ea6\u8d85\u8fc7\u8be5\u6e29\u5ea6\uff0c\u4e3a\u4e86\u4fdd\u62a4\u82af\u7247\u548c\u786c\u4ef6\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5173\u673a\uff0c\u5efa\u8bae\u5bf9\u8bbe\u5907\u505a\u597d\u6563\u70ed\u5904\u7406\uff0c\u907f\u514d\u8bbe\u5907\u5b95\u673a\uff0c\u56e0\u4e3a\u5b95\u673a\u540e\u8bbe\u5907\u4e0d\u4f1a\u81ea\u52a8\u91cd\u542f\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u9009\u9879\u8fc7\u6ee4",children:"\u9009\u9879\u8fc7\u6ee4"}),"\n",(0,r.jsxs)(n.p,{children:["\u652f\u6301\u4f7f\u7528 [] \u8bbe\u7f6e\u8fc7\u6ee4\u9879\uff0c\u8fc7\u6ee4\u9879\u7684\u8bbe\u7f6e\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u7684\u5c3e\u90e8\u6dfb\u52a0\uff0c\u56e0\u4e3a\u6587\u4ef6\u524d\u9762\u672a\u6dfb\u52a0\u8fc7\u6ee4\u9879\u7684\u90e8\u5206\u5c5e\u4e8e ",(0,r.jsx)(n.code,{children:"all"}),"\uff0c\u4e00\u65e6\u6dfb\u52a0\u8fc7\u6ee4\u8bbe\u7f6e\uff0c\u5219\u4e4b\u540e\u7684\u914d\u7f6e\u53ea\u5c5e\u4e8e\u8be5\u8fc7\u6ee4\u5c5e\u6027\uff0c\u76f4\u5230\u914d\u7f6e\u6587\u4ef6\u7ed3\u5c3e\u6216\u8005\u8bbe\u7f6e\u4e86\u53e6\u4e00\u4e2a\u8fc7\u6ee4\u9879\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u524d\u652f\u6301\u7684\u8fc7\u6ee4\u9879\u4ee5\u786c\u4ef6\u578b\u53f7\u4e3a\u533a\u5206\uff0c\u652f\u6301\u4ee5\u4e0b\u8fc7\u6ee4\u9879\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fc7\u6ee4\u9879"}),(0,r.jsx)(n.th,{children:"\u9002\u914d\u7684\u578b\u53f7"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[all]"}),(0,r.jsx)(n.td,{children:"\u6240\u6709\u786c\u4ef6\uff0c\u9ed8\u8ba4\u5c5e\u6027"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[rdkv1]"}),(0,r.jsx)(n.td,{children:"RDK x3 v1.0\uff0cRDK x3 v1.1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[rdkv1.2]"}),(0,r.jsx)(n.td,{children:"RDK x3 v1.2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[rdkv2]"}),(0,r.jsx)(n.td,{children:"RDK x3 v2.1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[rdkmd]"}),(0,r.jsx)(n.td,{children:"RDK x3 Module"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"[x5-rdk]"}),(0,r.jsx)(n.td,{children:"RDK X5 V0.1"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u7535\u538b\u57df",children:"\u7535\u538b\u57df"}),"\n",(0,r.jsx)(n.h3,{id:"voltage_domain",children:"voltage_domain"}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e40pin\u7ba1\u811a\u7684\u7535\u538b\u57df\uff0c\u652f\u6301\u914d\u7f6e\u4e3a 3.3V \u548c 1.8V\uff0c\u4e0d\u914d\u7f6e\u65f6\u9ed8\u8ba43.3V\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u914d\u7f6e\u9879\u9700\u8981\u914d\u5408\u786c\u4ef6\u4e0a\u7684\u7535\u538b\u57df\u5207\u6362\u7684\u8df3\u7ebf\u5e3d\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,r.jsx)(n.p,{children:"\u4ec5RDK Modelu\u652f\u6301\u672c\u9879\u914d\u7f6e\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\u914d\u7f6e",(0,r.jsx)(n.code,{children:"RDK Module"}),"\u7684",(0,r.jsx)(n.code,{children:"40Pin"}),"\u5de5\u4f5c\u5728",(0,r.jsx)(n.code,{children:"3v3"}),"\u7535\u538b\u6a21\u5f0f\uff0c\u6b64\u5904\u793a\u4f8b\u4f7f\u7528\u4e86",(0,r.jsx)(n.code,{children:"[rdkmd]"}),"\u4f5c\u4e3a\u8fc7\u6ee4\u9879\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# Voltage domain configuration for 40 Pin, 3.3V or 1.8V, defualt 3.3V\n# Only RDK Module supported\n[rdkmd]\nvoltage_domain=3.3V\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>c,x:()=>l});var i=d(6540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
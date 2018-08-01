var data = [
    {
        path: "/home",
        name: "常用看板",
        icon: "el-icon-goods",
        btns:[]
    },
    {
        path: "/survey",
        name: "概况",
        icon: "el-icon-goods",
        btns:[]
    },
    {
    	path: "",
        name: "行为分析",
        icon: "el-icon-goods",
        child: [
            {
            	path: "/eventAnalysis",
                name: "事件分析",
                icon: "",
        		btns:[]
            },
            {
            	path: "/retentionAnalysis",
                name: "留存分析",
                icon: "",
        		btns:[]
            },
            {
                path: "/funnelAnalysis",
                name: "漏斗分析",
                icon: "",
        		btns:[]
            }
        ]
    },
    {
        path: "/userAnalysis",
        name: "用户分析",
        icon: "el-icon-goods",
        btns:[]
    },
    {
        path: "/dataConfig",
        name: "数据配置",
        icon: "el-icon-goods",
        btns:[]
    }
]

export default {
    data: data
}
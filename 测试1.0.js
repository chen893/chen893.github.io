var app = new Vue({
    el: '#app',
    data: {

        ShowPage: [false, true, false],
        ShowPage1: false,
        ShowPage2: true,
        ShowPage3: false,
        schools: [
            {
                name: '广东海洋大学',
                address: [
                    {
                        area: '东区',
                        houses: ['海霞', '海宇', '海天', '海安', '海宁']
                    },
                    {
                        area: '中区',
                        houses: ['海念', '海风', '海云', '海轩', '海虹']
                    },
                    {
                        area: '西区',
                        houses: ['海花', '海乐', '海欢', '海乐', '海思']
                    },

                ],
            }
        ],
        goods: [{ name: '毛巾', type: '日常用品' }, { name: '手机', type: '电子产品' }],
        display: true,
        showA: true,
        showB: false,
        schoolN: '选择学校',
        addressN: '选择区域',
        housesN: '选择宿舍',
        good: '选择商品',
        D1: '',
        D2: '',
        D3: '',
        adr: '',
        newID: '',
        newID2: '',
        LocalNumber: 0,
        LocalNumber2: 0,
        updateAdress: {
            Position: 0,
            ChangdeId: 0,
            ChangdeIndex: 0,
        },
        updataSender: {
            Position: 0,
            ChangdeId: 0,
            ChangdeIndex: 0,
            ChangdeAid: 0,
            Post: 0
        },

        HLSA: [],
        HLSB: [],
        SearchArray: [],
        ThisId: '',
        // HLSB:[{name:'che',phone:'aa',index:0},{name:'che',phone:'aa',index:1}],
        sender: {
            name: "",
            phone: '',
            goods_type: '',
            goods_name: '',
            id: '',
        },
        MainAdrID: '',
        ShowHistory: true,
        Search: {
            SenderAdr: {
                adr: '',
                phone: '',
                recipient: ''
            },
            SenderId: '',
        },
        SeeAdr: {
            see: false,
            id: '',
            Change: false,
            Value: true,
        },
        DisplaySearch: false,
        ThisAdr: {},
        ChangeMsg: {
            adr: "",
            id: "",
            phone: "",
            recipient: "",
            display: false,
        },
        AData: []
        // HLSA:[{adr1:'广东海洋大学',adr2:'B',phone:'158136',recipient:'dd'},{adr1:'广东海洋大学',adr2:'B',phone:'158136',recipient:'dd'}],
    },
    // CHANGEDATA

    methods: {

        Display: function (N) {
            if (N == 1) {
                this.showA = true;
                this.showB = false;
            } else {
                this.showA = false;
                this.showB = true;
            }
        },
        SaveAddress: function () {
            if (this.updateAdress.Position == 0) {
                if (this.schoolN != '选择学校' && this.addressN != '选择区域' && (this.housesN) != '选择宿舍') {
                    if (this.D1 != '' && this.D2 != "" && this.D3 != "") {
                        this.post();

                        // this.get();
                    } else {
                        alert('请输入完整信息')
                    }
                }
                else {
                    alert('请输入完整信息');
                }
            } else {

                this.$http.post('http://118.178.125.139:8080/updateAdress', { adr: this.schoolN.name + this.addressN.area + this.housesN + this.D1, phone: this.D3, recipient: this.D2, id: this.updateAdress.ChangdeId }, { emulateJSON: true }).then(function (res) {
                    // alert('修改成功' ' ')

                }, function (res) {
                    console.log(res.status);
                });
                Vue.set(this.HLSA, this.updateAdress.ChangdeIndex, { adr1: this.schoolN.name + this.addressN.area + this.housesN, adr2: this.D1, phone: this.D3, recipient: this.D2, id: this.updateAdress.ChangdeId, index: this.updateAdress.ChangdeIndex, SN: this.schoolN, AN: this.addressN, HN: this.housesN })

                var myJSON = JSON.stringify(this.HLSA);
                localStorage.LOCAL = myJSON;
                this.updateAdress.Position = 0;
                this.D1 = this.D2 = this.D3 = "";
                this.schoolN = '选择学校';
                this.addressN = '选择区域';
                this.housesN = '选择宿舍';

            }


        },
        SaveAddress2: function () {

            if (this.updataSender.Position == 0) {
                if (this.sender.name != '' && this.sender.phone != '') {
                    if (this.MainAdrID != '') {
                        this.postM();
                    } else {
                        alert('请先设置默认地址')
                    }


                }
                else {
                    alert('请输入完整信息');
                }
            } else {
                // CHANGEDATA2
                // alert(this.updataSender.ChangdeAid+' '+this.sender.goods_name+' ' this.sender.goods_type+' 'this.updataSender.id+' 'this.sender.name+' '+this.sender.phone);
                // alert(this.updataSender.ChangdeAid+' '+this.sender.goods_name+' '+this.sender.goods_type+' '+this.updataSender.ChangdeId+' '+this.sender.name+' '+this.sender.phone);
                // alert(this.updataSender.ChangdeAid+' '+this.sender.goods_name+' '+this.sender.goods_type);
                this.$http.post('http://118.178.125.139:8080/updateExpressOrder', { aid: this.updataSender.ChangdeAid, goods_name: this.sender.goods_name, goods_type: this.sender.goods_type, id: this.updataSender.ChangdeId, sender: this.sender.name, sender_phone: this.sender.phone }, { emulateJSON: true }).then(function (res) {
                    // alert('修改成功')


                }, function (res) {
                    console.log(res.status);
                });
                // alert('d');
                if (this.updataSender.Post == 1) {



                    alert('修改完成');

                    for (var io = 0; io < this.HLSB.length; io++) {
                        if (this.updataSender.ChangdeId == this.HLSB[io].id) {
                            // sender:this.sender.name,sender_phone:this.sender.phone,index:this.LocalNumber2,goods_name:this.sender.goods_name,goods_type:this.sender.goods_type,id:this.newID2,aid:this.MainAdrID}
                            this.HLSB[io].goods_name = this.sender.goods_name;
                            this.HLSB[io].sender = this.sender.name;
                            this.HLSB[io].sender_phone = this.sender.phone;
                            this.HLSB[io].goods_type = this.sender.goods_type;
                            var myJSON2 = JSON.stringify(this.HLSB);
                            localStorage.LOCALSENDER = myJSON2;

                        }
                    }
                    this.updataSender.Post = 0;
                    this.updataSender.Position = 0;
                    this.sender.goods_name = this.sender.goods_type = this.sender.name = this.sender.phone = "";

                    return;
                }

                Vue.set(this.HLSB, this.updataSender.ChangdeIndex, {
                    sender: this.sender.name, sender_phone: this.sender.phone, index: this.updataSender.ChangdeIndex, id: this.updataSender.ChangdeId, aid: this.updataSender.ChangdeAid,
                    goods_name: this.sender.goods_name, goods_type: this.sender.goods_type
                })

                var myJSON2 = JSON.stringify(this.HLSB);
                localStorage.LOCALSENDER = myJSON2;
                this.updataSender.Position = 0;
                this.sender.goods_name = this.sender.goods_type = this.sender.name = this.sender.phone = "";
                // this.D1=this.D2=this.D3="";
                // this.sender.name=this.sender.phone=' ';
            }


        },



        post: function () {
            //发送 post 请求
            this.$http.post('http://118.178.125.139:8080/addAdress', { adr: this.schoolN.name + this.addressN.area + this.housesN + this.D1, phone: this.D3, recipient: this.D2 }, { emulateJSON: true }).then(function (res) {
                alert('保存成功')
                this.get();
            }, function (res) {
                console.log(res.status);
            });
        },
        postM: function () {
            //发送 post 请求
            this.$http.post('http://118.178.125.139:8080/addExpressOrder', { aid: this.MainAdrID, goods_name: this.sender.goods_name, goods_type: this.sender.goods_type, sender: this.sender.name, sender_phone: this.sender.phone }, { emulateJSON: true }).then(function (res) {
                alert('保存成功')
                this.getM();
            }, function (res) {
                console.log(res.status);
            });
        },

        get: function () {
            //发送get请求
            this.$http.get('http://121.4.183.85:3088/todo-list').then(function (res) {
                // document.write(res.body.extended.List.pop().id);  
                console.log(res);
                this.newID = res.body.extended.List.pop().id;



                this.adr = this.schoolN.name + this.addressN.area + this.housesN + this.D1;

                this.HLSA.push({ adr1: this.schoolN.name + this.addressN.area + this.housesN, adr2: this.D1, phone: this.D3, recipient: this.D2, id: this.newID, index: this.LocalNumber, SN: this.schoolN, AN: this.addressN, HN: this.housesN });


                if (localStorage.LOCAL) {
                    var myJSON = JSON.stringify(this.HLSA);
                    localStorage.LOCAL = myJSON;

                    localStorage.LNumber = this.HLSA.length;
                    this.LocalNumber = this.HLSA.length;
                } else {
                    var myJSON = JSON.stringify(this.HLSA);
                    localStorage.LOCAL = myJSON;

                    localStorage.LNumber = this.HLSA.length;
                    this.LocalNumber = this.HLSA.length;
                }
                if (this.HLSA.length == 1) {
                    this.MainAdrID = this.newID;
                }
                this.D1 = this.D2 = this.D3 = "";
                this.schoolN = '选择学校';
                this.addressN = '选择区域';
                this.housesN = '选择宿舍';

                // this.post();
            }, function () {
                console.log('请求失败处理');
            });
        },
        getM: function () {

            this.$http.get('http://121.4.183.85:3055/todolist').then(function (res) {
                console.log(res);
                this.newID2 = res.body.extended.List.pop().id;


                this.HLSB.push({ sender: this.sender.name, sender_phone: this.sender.phone, index: this.LocalNumber2, goods_name: this.sender.goods_name, goods_type: this.sender.goods_type, id: this.newID2, aid: this.MainAdrID });


                if (localStorage.LOCALSENDER) {
                    var myJSON2 = JSON.stringify(this.HLSB);
                    localStorage.LOCALSENDER = myJSON2;
                    localStorage.LNumber2 = this.HLSB.length;
                    this.LocalNumber2 = this.HLSB.length;
                } else {
                    var myJSON2 = JSON.stringify(this.HLSB);
                    localStorage.LOCALSENDER = myJSON2;

                    localStorage.LNumber2 = this.HLSB.length;
                    this.LocalNumber2 = this.HLSB.length;
                }
                this.sender.goods_name = this.sender.goods_type = this.sender.name = this.sender.phone = "";
                // this.post();
            }, function () {
                console.log('请求失败处理');
            });


        },

        ShowA: function (PO) {
            if (PO == 1) {
                alert('正在建设中');
                // this.ShowPage1=true;
                // this.ShowPage2=false;
                // this.ShowPage3=false;Display
            } else if (PO == 2) {
                this.ShowPage1 = false;
                this.ShowPage2 = true;
                this.ShowPage3 = false;
            } else if (PO == 3) {
                this.ShowPage1 = false;
                this.ShowPage2 = false;
                this.ShowPage3 = true;
                this.UpdataCharts();
            }
        }
        ,


        checkA: function (s) {
            if (s == '选择学校') {
                this.schoolN = '选择学校',
                    this.addressN = '选择区域',
                    this.housesN = '选择宿舍'
            }
        },
        checkB: function (s) {
            if (s == '选择区域') {
                this.addressN = '选择区域',
                    this.housesN = '选择宿舍'
            }
        },

        DELETE: function (OJ, Control) {
            if (Control == 1) {
                if (OJ.id == this.MainAdrID) {
                    alert('请先更改默认地址');
                    return;
                }
                this.$http.get('http://118.178.125.139:8080/deteleAdress', { params: { id: OJ.id } }).then(function (res) {
                    alert('删除成功');

                    if (localStorage.LOCAL) {
                        this.HLSA.splice(OJ.index, 1);
                        var myJSON = JSON.stringify(this.HLSA);
                        localStorage.LOCAL = myJSON;
                        this.LocalNumber = this.LocalNumber - 1;
                        localStorage.LNumber = this.LocalNumber;

                        for (var i = OJ.index; i < this.HLSA.length; i++) {
                            this.HLSA[i].index = this.HLSA[i].index - 1;
                        }
                        if (this.HLSA.length == 0) {
                            this.MainAdrID = '';
                            localStorage.MAI = '';
                        }
                    }
                    //   """"
                    if (OJ.id == this.MainAdrID) {
                        localStorage.MAI = '';
                        this.MainAdrID = '';
                    }

                }, function () {
                    console.log('请求失败处理');
                });


            } else if (Control == 2) {


                this.$http.get('http://118.178.125.139:8080/deteleExpressOrder', { params: { id: OJ.id } }).then(function (res) {
                    alert('删除成功');
                    console.log('333');
                    if (localStorage.LOCALSENDER) {
                        this.HLSB.splice(OJ.index, 1);
                        var myJSON2 = JSON.stringify(this.HLSB);
                        localStorage.LOCALSENDER = myJSON2;
                        this.LocalNumber2 = this.LocalNumber2 - 1;
                        localStorage.LNumber2 = this.LocalNumber2;

                        for (var i = OJ.index; i < this.HLSB.length; i++) {
                            this.HLSB[i].index = this.HLSB[i].index - 1;
                        }

                    }

                }, function () {
                    console.log('请求失败处理');
                });

            }
            else {

                for (var io = 0; io < this.HLSB.length; io++) {
                    if (OJ.id == this.HLSB[io].id) {
                        this.HLSB.splice(io, 1);
                        var myJSON2 = JSON.stringify(this.HLSB);
                        localStorage.LOCALSENDER = myJSON2;
                        this.LocalNumber2 = this.LocalNumber2 - 1;
                        localStorage.LNumber2 = this.LocalNumber2;

                        for (var i = OJ.index; i < this.HLSB.length; i++) {
                            this.HLSB[i].index = this.HLSB[i].index - 1;
                        }
                    }
                }


                this.$http.get('http://118.178.125.139:8080/deteleExpressOrder', { params: { id: OJ.id } }).then(function (res) {
                    alert('删除成功');
                    console.log(this.SearchArray[0]);

                    this.SearchArray.splice(OJ.index, 1);

                    for (var i = OJ.index; i < this.SearchArray.length; i++) {
                        this.SearchArray[i].index = this.SearchArray[i].index - 1;
                    }
                    console.log(this.SearchArray);

                    //DisplaySearch

                }, function () {
                    console.log('请求失败处理');
                });

            }



        },


        CHANGEDATA: function (OJ) {
            this.schoolN = OJ.SN;
            this.addressN = OJ.AN;
            this.housesN = OJ.HN;
            this.D1 = OJ.adr2;
            this.D3 = OJ.phone;
            this.D2 = OJ.recipient;
            this.updateAdress.ChangdeId = OJ.id;
            this.updateAdress.Position = 1;
            this.updateAdress.ChangdeIndex = OJ.index;

        },
        CHANGEDATA2: function (OJ) {
            this.sender.phone = OJ.sender_phone;
            this.sender.name = OJ.sender;
            this.updataSender.ChangdeIndex = OJ.index;
            this.sender.goods_name = OJ.goods_name;
            this.sender.goods_type = OJ.goods_type;
            this.updataSender.ChangdeId = OJ.id;
            this.updataSender.ChangdeAid = OJ.aid;
            this.updataSender.Position = 1;
            this.updataSender.Post = 1;
            // alert('d1');
        },


        SetMain: function (M) {
            this.MainAdrID = M;
            localStorage.MAI = M;

        },
        SearchAdr: function () {
            if ((this.Search.SenderAdr.recipient != '') || (this.Search.SenderAdr.phone != '') || (this.Search.SenderAdr.adr != "")) {

                this.$http.get('http://118.178.125.139:8080/findOrder', { params: { adr: this.Search.SenderAdr.adr, phone: this.Search.SenderAdr.phone, recipient: this.Search.SenderAdr.recipient } }).then(function (res) {
                    // document.write(res.body.extended.List.pop().id);  
                    console.log('adr' + this.Search.SenderAdr.adr + '++');
                    console.log(res.body.extended.List);
                    this.SearchArray = [];
                    var DP = res.body.extended.List;
                    for (var i = 0; i < DP.length; i++) {
                        // alert('test');
                        if (DP[i].expressOrders.length != 0) {
                            // alert('dd');
                            for (var q = 0; q < DP[i].expressOrders.length; q++) {
                                console.log(q);
                                DP[i].expressOrders[q].aid = DP[i].id;
                                this.SearchArray.push(DP[i].expressOrders[q]);
                                console.log(DP[i].expressOrders[q])
                            }
                        }
                    }
                    console.log('HHHH' + this.SearchArray)
                    this.DisplaySearch = true;
                    // alert()  [65].expressOrders[""0""].id   ' '
                    // this.post();
                    // this.HLSA.push({adr1:this.schoolN.name+this.addressN.area+this.housesN,adr2:this.D1,phone:this.D3,recipient:this.D2,id:this.newID,index:this.LocalNumber,SN:this.schoolN,AN:this.addressN,HN:this.housesN});
                }, function () {
                    console.log('请求失败处理');
                });


            } else {
                alert('至少要求输入一个信息');
            }
        },

        SeeAdrO: function (aid) {
            // alert('dd');
            this.SeeAdr.see = true;
            // alert(this.SeeAdr.see)
            this.SeeAdr.id = aid;

            this.$http.get('http://118.178.125.139:8080/findByAdressID', { params: { id: aid } }).then(function (res) {

                this.ThisAdr = res.body.extended.Adress;

                console.log(this.ThisAdr.id);

            }, function () {
                console.log('请求失败处理');
            });



        },


        ChangeAdrPP: function (OJ) {
            // alert(this.SeeAdr.Change); Save
            this.SeeAdr.Change = true;
            this.ChangeMsg.recipient = OJ.recipient;
            this.ChangeMsg.adr = OJ.adr;
            this.ChangeMsg.phone = OJ.phone;
            this.ChangeMsg.id = OJ.id;
            this.updateAdress.Position = 1;
            // alert(this.updateAdress.ChangdeId);

        },


        SaveChangeT: function () {

            this.SeeAdr.Change = false;
            console.log("dd" + this.SeeAdr.Change);
            // alert('dd');
            this.ThisAdr = this.ChangeMsg;
            for (var io = 0; io < this.HLSA.length; io++) {
                if (this.ChangeMsg.id == this.HLSA[io].id) {

                    this.HLSA[io].recipient = this.ChangeMsg.recipient;
                    // this.HLSA[io].adr=this.ChangeMsg.adr;
                    this.HLSA[io].phone = this.ChangeMsg.phone;
                    this.HLSA[io].adr2 = this.ChangeMsg.adr.slice(10, this.ChangeMsg.adr.length);

                    var myJSON2 = JSON.stringify(this.HLSA);
                    localStorage.LOCAL = myJSON2;

                }
            }

            this.$http.post('http://118.178.125.139:8080/updateAdress', { adr: this.ChangeMsg.adr, phone: this.ChangeMsg.phone, recipient: this.ChangeMsg.recipient, id: this.ChangeMsg.id }, { emulateJSON: true }).then(function (res) {
                // alert('修改成功')

            }, function (res) {
                console.log(res.status);
            });

        },

        Break: function () {
            this.SeeAdr.see = false;
        },
        CancelArray: function () {
            this.DisplaySearch = false;
            this.Search.SenderAdr.recipient = "";
            this.Search.SenderAdr.adr = "";
            //   alert(this.Search.SenderAdr.adr);
            this.Search.SenderAdr.phone = '';
            this.ThisId = '';
        },


        SearchId: function () {
            if (this.ThisId != '') {
                this.$http.get('http://118.178.125.139:8080/findByExpressOrderID', { params: { id: this.ThisId } }).then(function (res) {

                    if (res.body.extended.ExpressOrder == null) {
                        alert('单号不存在');
                        return;
                    }
                    this.SearchArray = [];
                    var DP = res.body.extended.ExpressOrder;
                    DP.aid = res.body.extended.ExpressOrder.adress.id;
                    DP.index = 0;
                    this.SearchArray[0] = DP;
                    console.log('HHHH' + this.SearchArray)
                    this.DisplaySearch = true;


                }, function () {
                    console.log('请求失败处理');
                });


            } else {
                alert('输入一个快递单号');
            }

        },
        UpdataCharts: function () {

            // alert('d');
            //CancelArray 
            var ChartData = [
                {
                    name: '广东海洋大学', value: 0,
                    children: [
                        {
                            name: '东区', value: 0, children: [{ name: '海霞', value: 0 }, { name: '海宇', value: 0 }, { name: '海天', value: 0 }, { name: '海安', value: 0 }, { name: '海宁', value: 0 }],
                            itemStyle: { color: 'cadetblue' }
                        },
                        {
                            name: '中区', value: 0, children: [{ name: '海念', value: 0 }, { name: '海风', value: 0 }, { name: '海云', value: 0 }, { name: '海轩', value: 0 }, { name: '海虹', value: 0 }],
                            itemStyle: { color: 'lightseagreen' }
                        },
                        {
                            name: '西区', value: 0, children: [{ name: '海花', value: 0 }, { name: '海乐', value: 0 }, { name: '海欢', value: 0 }, { name: '海乐', value: 0 }, { name: '海思', value: 0 }],
                            itemStyle: { color: 'deeppink' }
                        }
                    ]

                },

            ]		   	 // cadetblue brown lightseagreen deeppink             

            //  Vue.set(this.HLSA,this.updateAdress.ChangdeIndex,{adr1:this.schoolN.name+this.addressN.area+this.housesN,adr2:this.D1,phone:this.D3,recipient:this.D2,id:this.updateAdress.ChangdeId,index:this.updateAdress.ChangdeIndex,SN:this.schoolN,AN:this.addressN,HN:this.housesN})

            for (var i0 = 0; i0 < app.HLSA.length; i0++) {
                if (ChartData[0].name == app.HLSA[i0].SN.name) {
                    ChartData[0].value++;
                    for (var i1 = 0; i1 < ChartData[0].children.length; i1++) {
                        if (ChartData[0].children[i1].name == app.HLSA[i0].AN.area) {
                            ChartData[0].children[i1].value++;
                            console.log(ChartData[0].children[i1].name)
                            for (var i2 = 0; i2 < ChartData[0].children[i1].children.length; i2++) {

                                if (ChartData[0].children[i1].children[i2].name == app.HLSA[i0].HN) {
                                    console.log(ChartData[0].children[i1].children[i2].name);
                                    ChartData[0].children[i1].children[i2].value++;
                                }
                            }

                        }
                    }
                }
            }
            var myChart = echarts.init(document.getElementById('main'));
            console.log(ChartData);
            // cadetblue brown lightseagreen deeppink ShowPage3
            var option = {
                series: {
                    type: 'sunburst',
                    data: ChartData,
                    itemStyle: {
                        color: 'brown'
                    },
                    levels: [{
                        // 留给数据下钻的节点属性
                    }, {
                        itemStyle: {
                            color: 'cadetblue'
                        }
                    }, {
                        itemStyle: {
                            color: 'pink'
                        }
                    },
                    {
                        itemStyle: {
                            color: 'dimgray'
                        }
                    }]
                }
            };

            myChart.setOption(option);

            var GoodsData = [];
            for (var i0 = 0; i0 < app.HLSB.length; i0++) {
                var out1 = 0;
                for (var i1 = 0; i1 < GoodsData.length; i1++) {
                    // var out1=0;
                    if (app.HLSB[i0].goods_type == GoodsData[i1].name) {
                        GoodsData[i1].value++;
                        out1 = 1;
                        for (var p1 = 0; p1 < GoodsData[i1].children.length; p1++) {
                            var out2 = 0
                            if (app.HLSB[i0].goods_name == GoodsData[i1].children[p1].name) {
                                out2 = 1
                                GoodsData[i1].children[p1].value++;
                            }
                        }
                        if (out2 == 0) {
                            GoodsData[i1].children.push({ name: app.HLSB[i0].goods_name, value: 1 });
                            console.log("哈哈哈" + GoodsData[i1].children);
                        }
                    }

                }
                if (out1 == 0) {
                    GoodsData.push({ name: app.HLSB[i0].goods_type, value: 1, children: [{ name: app.HLSB[i0].goods_name, value: 1 }] });
                    var L1 = GoodsData.length;
                    console.log('break');

                }
            }
            var o2 = {
                series: {
                    type: 'sunburst',
                    data: GoodsData,
                    itemStyle: {
                        color: 'brown'
                    },
                    levels: [{
                        // 留给数据下钻的节点属性
                    }, {
                        itemStyle: {
                            color: 'cadetblue'
                        }
                    }, {
                        itemStyle: {
                            color: 'dimgray'
                        }
                    }
                    ]
                }
            };
            var myChart2 = echarts.init(document.getElementById('main2'));
            myChart2.setOption(o2);
            console.log(GoodsData);


            source = [['amount', 'name'],];
            var UU = [];

            this.$http.get('http://118.178.125.139:8080/findAllAdress').then(function (res) {
                // document.write(res.body.extended.List.pop().id);  
                // console.log('adr'+this.Search.SenderAdr.adr+'++');
                console.log(res.body.extended.List);
                // this.SearchArray=[];
                var ValueM = [];
                var Num;
                var DP = res.body.extended.List;
                for (var i = 0; i < DP.length; i++) {
                    // alert('test');
                    ValueM = [];
                    var out = 0, TheIndex = 0;
                    if (DP[i].expressOrders.length != 0) {

                        for (var z = 0; z < source.length; z++) {
                            if (DP[i].recipient == source[z][1]) {
                                var II = -DP[i].expressOrders.length;
                                source[z][0] = source[z][0] - II;
                                out = 1;
                            }
                        }
                        if (out == 1) {
                            continue;
                        }

                        console.log('   ');
                        Num = 0;
                        Num = DP[i].expressOrders.length;
                        ValueM = [DP[i].expressOrders.length, DP[i].recipient];
                        source.push(ValueM);
                        ValueM = [];
                        console.log(ValueM);
                        console.log("length " + source.length + "  " + Num + "  ValueM: " + ValueM + "  source:" + source[source.length - 1])
                        console.log('dd' + source[source.length - 1]);
                        console.log(JSON.parse(JSON.stringify(source)))
                        source = JSON.parse(JSON.stringify(source));
                    }
                    ValueM = [];
                    UU = JSON.parse(JSON.stringify(source));
                    source = JSON.parse(JSON.stringify(source));

                }
                console.log('数据:');
                // console.log(source);
                console.log(UU);
                source = UU;
                console
                var V = 0;
                console.log('这个猜数');

                for (var i = 1; i < source.length; i++) {
                    for (var i1 = i + 1; i1 < source.length; i1++) {
                        if (source[i][0] < source[i1][0]) {
                            V = source[i1];
                            source[i1] = source[i];
                            source[i] = V;
                        }
                    }
                }
                var ABData = [];
                this.AData = [];
                for (i = 0; i <= 9; i++) {
                    ABData[i] = source[i]
                }
                // console.log(ABData);
                this.AData = ABData;

                optionC = {
                    dataset: {
                        source: this.AData,

                    },
                    grid: { containLabel: true },
                    xAxis: { name: 'amount' },
                    yAxis: { type: 'category' },
                    visualMap: {
                        orient: 'horizontal',
                        left: 'center',
                        min: 1,
                        max: 35,
                        text: ['High Amount', 'Low Amount'],
                        // Map the score column to color
                        dimension: 0,
                        inRange: {
                            color: ['#D7DA8B', '#E15457']
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            encode: {
                                // Map the "amount" column to X axis.
                                x: 'amount',
                                // Map the "product" column to Y axis
                                y: 'name'
                            }
                        }
                    ]
                };
                var myChartC = echarts.init(document.getElementById('mainP'));
                myChartC.setOption(optionC);
                console.log(GoodsData);

            }, function () {
                console.log('请求失败处理');
            });






        },

        // ShowPa

    },


    computed: {
        UPDATA1: function () {
            if (localStorage.LOCAL) {

                // localStorage.LOCAL="";
                // localStorage.LNumber=0;
                // localStorage.MAI="";
                // 请先设置
                var MYJSON = localStorage.getItem('LOCAL');
                this.HLSA = JSON.parse(MYJSON);

                var MyNumber = localStorage.getItem('LNumber');
                this.LocalNumber = MyNumber;



            }

            if (localStorage.MAI) {

                if (this.HLSA.length == 0) {
                    // this.MainAdrID='';	
                    localStorage.MAI = "";
                }
                this.MainAdrID = localStorage.MAI;
            }






        },
        UPDATA2: function () {
            if (localStorage.LOCALSENDER) {
                // localStorage.LOCALSENDER=""; 	
                var MYJSON = localStorage.getItem('LOCALSENDER');
                this.HLSB = JSON.parse(MYJSON);
                var MyNumber = localStorage.getItem('LNumber2');
                this.LocalNumber2 = MyNumber;
            }
            if (localStorage.MAI) {
                this.MainAdrID = localStorage.MAI;
            }
        },

    }

})

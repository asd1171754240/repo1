/*品牌服务*/
app.service('brandService', function ($http) {
    //读取列表数据绑定到表单中
    this.findAll1 = function () {
        return $http.get('../brand/findAll.do');
    }
    //其它方法省略.......

    this.findPage1 = function (page, size) {
        return $http.get('../brand/findPage.do?page=' + page + '&size=' + size);
    }

    this.findOne1 = function (id) {
        return $http.get('../brand/findOne.do?id=' + id);
    }

    this.add1 = function (entity) {
        return $http.post('../brand/add.do', entity);
    }

    this.update1 = function (entity) {
        return $http.post('../brand/update.do', entity);
    }

    this.dele1 = function (ids) {
        return $http.get('../brand/delete.do?ids=' + ids)
    }

    this.search1 = function (page, rows, searchEntity) {
        return $http.post('../brand/search.do?page=' + page + "&rows=" + rows, searchEntity)
    }

//下拉列表数据
    this.selectOptionList=function(){
        return $http.get('../brand/selectOptionList.do');
    }

});


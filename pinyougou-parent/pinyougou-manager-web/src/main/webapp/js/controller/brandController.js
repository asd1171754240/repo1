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
});



app.controller('brandController', function ($scope, $http, brandService) {
    //读取列表数据绑定到表单中
    $scope.findAll = function () {
        brandService.findAll1().success(
            function (response) {
                $scope.list = response;
            }
        );
    };

    // 分页控件配置currentPage:当前页
    // totalItems:总记录数
    // itemsPerPage:每页记录数
    // perPageOptions:分页选项
    // onChange :当页码变更后自动触发的方法
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.reloadList();
        }
    };

    $scope.reloadList = function () {
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage)
    }
    //分页
    $scope.findPage = function (page, size) {
        brandService.findPage1().success(
            function (response) {
                $scope.list = response.rows;//显示当前页数据
                $scope.paginationConf.totalItems = response.total;//更新总记录数
            }
        );
    }

    $scope.save = function () {
        var object = null;
        if ($scope.entity.id != null) {
            object = brandService.update1($scope.entity);
        } else {
            object = brandService.add1($scope.entity);
        }
        object.success(
            function (response) {
                if (response.success) {
                    $scope.reloadList();//刷新方法
                } else {
                    alert(response.message);
                }
            }
        );
    };


    $scope.findOne = function (id) {
        brandService.findOne1(id).success(
            function (response) {
                $scope.entity = response;
            });
    };

    $scope.selectIds = [];

    $scope.updateSelection = function ($event, id) {
        if ($event.target.checked) {

            $scope.selectIds.push(id);//push向集合添加元素

        } else {
            var index = $scope.selectIds.indexOf(id)
            $scope.selectIds.splice(index, 1);
        }
    }


    $scope.dele = function () {
        //获取选中的复选框
        brandService.dele1($scope.selectIds).success(
            function (response) {
                if (response.success) {
                    $scope.reloadList();//刷新列表
                }
            }
        );
    }

    /*定义搜素对象*/
    $scope.searchEntity = {};

    $scope.search = function (page, rows) {
        brandService.search1(page, rows, $scope.searchEntity).success(function (response) {
                $scope.paginationConf.totalItems = response.total;
                /*总记录数*/
                $scope.list = response.rows;
            }
        );
    }


});

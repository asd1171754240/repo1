app.controller('brandController', function ($scope, $controller, brandService) {

    $controller('baseController',{$scope:$scope});//继承

    //读取列表数据绑定到表单中
    $scope.findAll = function () {
        brandService.findAll1().success(
            function (response) {
                $scope.list = response;
            }
        );
    };


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

    /*搜索*/
    $scope.search = function (page, rows) {
        brandService.search1(page, rows, $scope.searchEntity).success(function (response) {
                $scope.paginationConf.totalItems = response.total;
                /*总记录数*/
                $scope.list = response.rows;
            }
        );
    }


});

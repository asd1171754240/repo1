package com.pinyougou.manager.controller;

import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;
import jdk.nashorn.internal.ir.annotations.Reference;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 这个注解相当于Controller加上ResponseBody注解
 */
@RestController
@RequestMapping("/brand")
public class BrandController {
    /**
     *
     */
    @Reference
    private BrandService brandService;

    @RequestMapping("/findAll")
    public List<TbBrand> findAll() {
        return brandService.findAll();
    }

}

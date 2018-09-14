package com.pinyougou.sellergoods.service;

import java.util.List;
import java.util.Map;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

/**
 * 品牌接口
 * @author Administrator
 *
 */
public interface BrandService {

	public List<TbBrand> findAll();

	public PageResult findPage(int pageNum,int pageSize);

    /**
     * 增加方法
     * @param brand，输入一个要增加的类
     */
	public void add(TbBrand brand);

    /**
     * 根据id查询实体
     * @param id
     * @return
     */
	public TbBrand findOne(Long id);

    /**
     * 修改
     * @param brand
     */
	public void update(TbBrand brand);

	/**
	 * 删除
	 * @param ids 选中的那堆id数组
	 */
	public void delete(Long[] ids);

	/**
	 * 分页
	 * @param brand  当前页 吗
	 * @param pageNum  每页记录数
	 * @param pageSize
	 * @return
	 */
	public PageResult findPage(TbBrand brand, int pageNum,int pageSize);

	/**
	 * 品牌下拉框数据
	 * @return
	 */
	List<Map> selectOptionList();

}

<?php

abstract class EloquentWPModel extends \WeDevs\ORM\Eloquent\Model
{
	/**
	 * Set primary key as ID, because WordPress
	 *
	 * @var string
	 */
	protected $primaryKey = 'ID';

	/**
	 * Make ID guarded -- without this ID doesn't save.
	 *
	 * @var string
	 */
	protected $guarded = [ 'ID' ];

	/**
	 * Overide parent method to make sure prefixing is correct.
	 *
	 * @return string
	 */
	public function getTable()
	{
		if( isset( $this->table ) ){
			$prefix =  $this->getConnection()->db->prefix;
			return $prefix . $this->table;

		}

		return parent::getTable();
	}
}
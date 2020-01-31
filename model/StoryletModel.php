<?php

require_once ('EloquentWPModel.php');

class StoryletModel extends EloquentWPModel {

	protected $table = "story_storylet";

	protected $fillable = [
		'ownerId',
		'templateId',
        'story',
        'metadata',
        'status'
	];

    public function getTable()
    {
        return $this->getConnection()->db->prefix . 'story_storylet';
    }

	public $timestamps = false;
}
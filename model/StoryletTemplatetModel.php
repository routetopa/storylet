<?php

require_once ('EloquentWPModel.php');

class StoryletTemplateModel extends EloquentWPModel {

	protected $table = 'story_storylet_template';

	protected $fillable = [
		'name',
		'description',
		'type',
		'tag',
		'settings',
		'slideTemplateList'
	];

	public $timestamps = false;
}
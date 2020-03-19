<?php

require_once ('EloquentWPModel.php');

class ImageModel extends EloquentWPModel {

    protected $table = "story_image";

    protected $fillable = [
        'classId',
        'teacherId',
        'name',
        'description',
        'path'
    ];

    public function getTable()
    {
        return $this->getConnection()->db->prefix . 'story_image';
    }

    public $timestamps = false;
}
<?php

require_once ('EloquentWPModel.php');

class StudentImageModel extends EloquentWPModel {

    protected $table = "student_image";

    protected $fillable = [
        'userId',
        'name',
        'description',
        'path'
    ];

    public function getTable()
    {
        return $this->getConnection()->db->prefix . 'story_student_image';
    }

    public $timestamps = false;
}
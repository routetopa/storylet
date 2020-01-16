<?php

require_once ('EloquentWPModel.php');

class StudentModel extends EloquentWPModel {

    protected $table = 'story_student';

    protected $fillable = [
        'userId',
        'teacherId',
        'classId',
        'username',
        'password',
        'name',
        'surname',
        'status'
    ];

    public function getTable()
    {
        return $this->getConnection()->db->prefix . 'story_student';
    }

    protected  $primaryKey = 'id';

    public $timestamps = false;
}
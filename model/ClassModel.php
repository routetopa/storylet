<?php

require_once ('EloquentWPModel.php');

class ClassModel extends EloquentWPModel {

    protected $table = 'story_class';
    protected $appends = array('students', 'stories', 'images');

    public $students = null;
    public $stories  = null;
    public $images   = null;

    protected $fillable = [
        'teacherId',
        'class',
        'section',
        'description'
    ];

    public function setStudents($data)
    {
        $this->students = $data;
    }

    public function setStories($data)
    {
        $this->stories = $data;
    }

    public function setImages($data)
    {
        $this->images = $data;
    }

    public function getStudentsAttribute()
    {
        return $this->students;
    }

    public function getStoriesAttribute()
    {
        return $this->stories;
    }

    public function getImagesAttribute()
    {
        return $this->images;
    }

    public function getTable()
    {
        return $this->getConnection()->db->prefix . 'story_class';
    }

    protected  $primaryKey = 'id';

    public $timestamps = false;
}
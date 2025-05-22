package com.StudentManagementSystem.controller;

import com.StudentManagementSystem.entity.Student;
import com.StudentManagementSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController

public class studentController {
    @Autowired
    StudentRepository repo;
    //get all students
    //localhost:8080/students
    @GetMapping("/students")
    public List<Student> getAllStudents(){
       List<Student> students = repo.findAll();
        return students;
    }
    //loclhost:8080/students/1
    @GetMapping("/students/{id}")
        public Student getStudent(@PathVariable int id){
       Student student = repo.findById(id).get();

        return student;
    }
    @PostMapping("/student/add")
    @ResponseStatus(code = HttpStatus.CREATED)
    public void createStudent(@RequestBody Student student){
 repo.save(student);
    }
    @PutMapping("/student/update/{id}")
    public Student updateStudents(@PathVariable int id){
     Student student = repo.findById(id).get();
     student.setName("me");
     student.setPercentage(89F);
     repo.save(student);
     return student;
    }
    @DeleteMapping("?student/delete{id}")
    public void removeStudent(@PathVariable int id){
        Student  student = repo.findById(id).get();
        repo.delete(student);
    }
}


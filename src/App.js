import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { Card } from './components';


function App() {
  const [students, setStudents] = useState([])
  useEffect(() => {
    /*fetch('https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/morris/roster.json')
    .then(resp => resp.json())
    .then(data => {
      const newStudents = data.students;
      console.log(students);
      setStudents(newStudents);
    })*/
    const fetchStudents = async() => {
      try {
        const { data } = await axios.get('https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/morris/roster.json');
        const students = data.students;
        setStudents(students);
      } catch (error) {
        console.log(error);
      }
    }
    fetchStudents();
  }, [])
const renderStudents = students.map((student, idx) => {
    return (
      <Card key={idx} name={student.name} github={student.github} />
    )
})
  return (
    <div className="App">
      {renderStudents}
    </div>
  );
}

export default App;

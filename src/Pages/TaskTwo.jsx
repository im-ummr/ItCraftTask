import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap';

const TaskTwo = () => {
  const [timeInterval, setTimeInterval] = useState(null);
  const [totalTimeHours, setTotalTimeHours] = useState(null);
  const [totalTimeMinutes, setTotalTimeMinutes] = useState(null);
  const [rows, setRows] = useState([]);

  const handleTimeIntervalChange = (event) => {
    setTimeInterval(Number(event.target.value));
  };

  const handleTotalTimeHoursChange = (event) => {
    const hours = Number(event.target.value);
    setTotalTimeHours(hours);
    setTotalTimeMinutes(hours * 60);
  };

  const handleTotalTimeMinutesChange = (event) => {
    const minutes = Number(event.target.value);
    setTotalTimeMinutes(minutes);
    setTotalTimeHours(minutes / 60);
  };

  const generateTableRows = () => {
    const rowCount = totalTimeMinutes / timeInterval;
    const generatedRows = [];
    for (let i = 0; i < rowCount; i++) {
      const startTime = i * timeInterval;
      generatedRows.push(
        <tr key={i}>
          <td>{startTime} - {startTime + timeInterval} mins</td>
        </tr>
      );
    }
    setRows(generatedRows);
  };

  return (
    <div className='min-h-screen max-h-full w-full bg-[#D9D9D9] flex justify-center items-center'>
      <div className='min-h-[60%] max-h-fit w-[90%] bg-[#2196F3] flex flex-col items-center p-[30px] gap-y-[20px]'>

        <Form className='w-full text-center text-white flex flex-row justify-center items-end gap-[20px]'>
          <FormGroup>
            <Label for="timeinterval" >Time Interval</Label>
            <Input type="number" value={timeInterval} onChange={handleTimeIntervalChange} id="timeinterval" placeholder="Time Interval" />
          </FormGroup>
          <FormGroup>
            <Label for="totaltimehours">Total Time(Hours)</Label>
            <Input type="number" value={totalTimeHours} onChange={handleTotalTimeHoursChange} id="totaltimehours" placeholder="Total Time (Hours)" />
          </FormGroup>
          <FormGroup>
            <Label for="totaltimeminutes">Total Time (Minutes)</Label>
            <Input type="number" value={totalTimeMinutes} onChange={handleTotalTimeMinutesChange} id="totaltimeminutes" placeholder="Total Time (Minutes)" />
          </FormGroup>
        </Form >
        <Button color="btn btn-success" onClick={generateTableRows}>
            Generate Time
          </Button>

        <Table>
          <thead>
            <tr>
              <th>Time Slot</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>



      </div></div>

  );
};

export default TaskTwo;

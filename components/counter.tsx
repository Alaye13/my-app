"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import PocketBase, { RecordModel } from "pocketbase";

/* prettier-ignore*/
'use server';
async function getCounter() {
  const pb = new PocketBase(`http://127.0.0.1:8090/`);

  const records = await pb.collection("Name").getFullList({
    sort: "-created",
  });
  console.log(records);
  return records;
}

/* prettier-ignore*/
'use server';
async function addCounter(recordobj: RecordModel) {
  const pb = new PocketBase(`http://127.0.0.1:8090/`);

  try{
  return await pb.collection("Name").update(recordobj.id, recordobj);
  } catch (error){
	
	return await pb.collection('Name').create(recordobj);

  }
}
const Counter = () => {
  const [count, setCount] = useState(0);
  const [record, setRecord] = useState({}as RecordModel);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const counterData = await getCounter();
        setRecord(counterData[0]);
        // Use counterData as needed
      } catch (error) {
        console.error("Error fetching counter data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount


  useEffect(() => {
    const fetchData = async () => {
      try {
		const newrecord = {... record, Name: count}

		console.log (newrecord);
		addCounter(newrecord)
        // Use counterData as needed
      } catch (error) {
        console.error("Error fetching counter data:", error);
      }
    };
	fetchData();
  }, [count, record]); // Empty dependency array ensures useEffect runs only once on mount


  
  return (
    <Button radius="full" onPress={() => setCount(count + 10)}>
      Count is {count}
    </Button>
  );
};

export default Counter;

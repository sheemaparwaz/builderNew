import React from 'react';
import { Builder } from '@builder.io/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const AccordionList = ({items}) => (
  <div className="bg-white">
  {items && items.length > 0 ? (
  <Accordion type="single" collapsible className="w-full p-5">
    {items?.map((item, index) => (
      <AccordionItem key={index} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
        hello
      </AccordionItem>
    ))}
  </Accordion>
  ) : <h2>Add Items</h2> }
  </div> 
);

export default AccordionList;


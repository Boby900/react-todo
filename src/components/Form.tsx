"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import React, { useState, FormEvent } from 'react'
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
  user_id: z.string().optional()
 
});
export type MyFormFields = z.infer<typeof formSchema>;
export default function ProfileForm() {



  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     
      title: "",
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
     

   console.log(values)


  };
  console.log(form.formState.errors);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data))}
        className="space-y-4 w-[60%]"


      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input autoFocus={true} placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>Please provide your title.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input autoFocus={true} placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>Please provide your title.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" >Submit</Button>
      </form>
    </Form>
  );
}
"use client"
import React, { FormEvent, startTransition, useActionState, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import dynamic from 'next/dynamic'
import { Button } from '../ui/button'
const ReactQuill = dynamic(()=>import('react-quill-new'),{ssr:false});
import 'react-quill-new/dist/quill.snow.css';

import { Articles } from "@prisma/client";
import Image from 'next/image'
import { updateArticles } from '../../../action/updatearticle'
type EditPropsPage = {
  article: Articles;
};
const EditArticlePage: React.FC<EditPropsPage> = ({ article }) => {
   const [content, setContent] = useState(article.content);
  const [formState, action, isPending] = useActionState(
    updateArticles.bind(null, article.id),
    { errors: {} }
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("content", content);

    // Wrap the action call in startTransition
    startTransition(() => {
      action(formData);
    });
  };
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <Card>

        <CardHeader>
          <CardTitle>Create New Article</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-2'>
              <Input
              type='text'
              name='title'
                defaultValue={article.title}
               placeholder='Enter a article title'/>
            </div>
             {formState.errors.title && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.title}
                </span>
              )}
            <div className='space-y-2'>
              <Label>Category</Label>
              <select    defaultValue={article.category} name='category' id='category' className='flex bg-background h-10 w-full rounded-md'>
                <option value=''>Select Category</option>
                <option value='technology'>Technology</option>
                <option value='programming'>Programming</option>
                <option value='web-developent'>Web Development</option>
              </select>
               {formState.errors.category && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.category}
                </span>
              )}
            </div>
            <div className='space-y-2'>
              <Label htmlFor='featuredImage'>Featured Image</Label>
                {article.featuredImage && (
                <div className="mb-4">
                  <Image
                    src={article.featuredImage}
                    alt="Current featured"
                    width={192}
                    height={128}  
                    className="object-cover rounded-md"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Current featured image
                  </p>
                </div>
              )}
             <Input
             type='file'
             id='featuredImage'
             name='featuredImage'
             accept='image/*'
             />
               {formState.errors.featuredImage && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.featuredImage}
                </span>
              )}
            </div>
             <div className="space-y-2">
              <Label>Content</Label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent} 
              />
              {formState.errors.content && (
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.content}
                </span>
              )}
            </div>
            {formState.errors.formErrors && (
              <div className="dark:bg-transparent bg-red-100 p-2 border border-red-600">
                <span className="font-medium text-sm text-red-500">
                  {formState.errors.formErrors}
                </span>
              </div>
            )}
            <div className='flex justify-end gap-4'>
              <Button variant={'outline'}>Cancel</Button>
              <Button disabled={isPending} type="submit">
                {isPending ? "Loading..." : "Update Article"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default EditArticlePage
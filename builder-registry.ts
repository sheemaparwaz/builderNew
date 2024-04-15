import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);




Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
    
  }
);


Builder.registerComponent(
  dynamic(() => import("./components/Button/Button")),
  {
  name: 'MyButton',
  inputs: [
    // 'name' is the name of your prop
    { name: 'content', type: 'text' },
    { name: 'link', type: 'url' },
  ],
}
)


Builder.registerComponent(
  dynamic(() => import("./components/ArticleContent")),
   {
  name: "Article Content",
  inputs: [
  {name: "content",type: "richText",required: true},
  ],
  })
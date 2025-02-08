import React from "react";
import { Edit, SimpleForm, TextInput, SelectInput, DateInput, ReferenceInput } from "react-admin";

const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" label="Title" fullWidth />
      <ReferenceInput source="authorId" reference="users" label="Author">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <DateInput source="publishedAt" label="Published Date" />
      <SelectInput
        source="status"
        label="Status"
        choices={[
          { id: "Draft", name: "Draft" },
          { id: "Published", name: "Published" },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export default PostEdit;

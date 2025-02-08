import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ReferenceField,
  EditButton,
  TextInput,
  SelectInput,
  useRecordContext
} from "react-admin";
import { Typography } from "@mui/material";

// Custom Status Formatting Component
const StatusField = () => {
  const record = useRecordContext();
  if (!record) return null;
  const color = record.status === "Published" ? "green" : "gray";
  return (
    <Typography sx={{ color, fontWeight: "bold" }}>{record.status}</Typography>
  );
};

// Filters for Author & Status
const postFilters = [
  <TextInput label="Search by Title" source="title" alwaysOn />,
  <ReferenceField label="Author" source="authorId" reference="users">
    <TextField source="name" />
  </ReferenceField>,
  <SelectInput
    label="Status"
    source="status"
    choices={[
      { id: "Draft", name: "Draft" },
      { id: "Published", name: "Published" },
    ]}
  />,
];

// Custom PostList Component
const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="title" label="Title" />
      <ReferenceField source="authorId" reference="users" label="Author">
        <TextField source="name" />
      </ReferenceField>
      <DateField source="publishedAt" label="Published Date" />
      <StatusField label="Status" />
      <EditButton />
    </Datagrid>
  </List>
);

export default PostList;

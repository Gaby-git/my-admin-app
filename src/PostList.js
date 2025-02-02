import React from "react";
import { List, Datagrid, TextField, DateField, ReferenceField, SelectInput, TextInput } from "react-admin";

const postFilters = [
    <TextInput label="Search by Title" source="title" alwaysOn />,
    <SelectInput label="Status" source="status" choices={[
        { id: "published", name: "Published" },
        { id: "draft", name: "Draft" }
    ]} />
];

const PostList = (props) => (
    <List filters={postFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="title" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="publishedAt" label="Published Date" />
            <TextField source="status" />
        </Datagrid>
    </List>
);

export default PostList;

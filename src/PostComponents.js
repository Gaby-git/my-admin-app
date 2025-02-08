import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, ShowButton } from "react-admin";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "react-admin";
import { Create } from "react-admin";
import { Show, SimpleShowLayout } from "react-admin";

export const PostList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" multiline />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput source="body" multiline />
        </SimpleForm>
    </Create>
);

export const PostShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);

import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton, ShowButton } from "react-admin";
import { Edit, SimpleForm, TextInput } from "react-admin";
import { Create } from "react-admin";
import { Show, SimpleShowLayout } from "react-admin";

export const UserList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" type="email" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" type="email" />
        </SimpleForm>
    </Create>
);

export const UserShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </SimpleShowLayout>
    </Show>
);

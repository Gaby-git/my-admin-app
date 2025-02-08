import React from "react";
import { List, Datagrid, TextField, EmailField, BooleanField, BulkDeleteButton } from "react-admin";
import BulkDeactivateButton from "./BulkDeactivateButton";

const UserList = () => (
    <List>
        <Datagrid bulkActionButtons={<CustomBulkActions />}>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <BooleanField source="isActive" label="Active Status" />
        </Datagrid>
    </List>
);

const CustomBulkActions = () => (
    <>
        <BulkDeactivateButton />
        <BulkDeleteButton />
    </>
);

export default UserList;

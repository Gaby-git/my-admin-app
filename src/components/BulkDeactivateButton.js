import React from "react";
import { useNotify, useRefresh, useUnselectAll, useDataProvider, BulkButton } from "react-admin";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

const BulkDeactivateButton = ({ selectedIds }) => {
    const [open, setOpen] = useState(false);
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();
    const unselectAll = useUnselectAll();

    const handleConfirm = async () => {
        setOpen(false);
        try {
            await Promise.all(
                selectedIds.map(id =>
                    dataProvider.update("users", { id, data: { isActive: false } })
                )
            );
            notify("Users deactivated successfully", { type: "success" });
            refresh();
            unselectAll("users");
        } catch (error) {
            notify("Error deactivating users", { type: "error" });
        }
    };

    return (
        <>
            <BulkButton
                label="Deactivate Users"
                onClick={() => setOpen(true)}
            />
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Confirm Deactivation</DialogTitle>
                <DialogContent>Are you sure you want to deactivate the selected users?</DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
                    <Button onClick={handleConfirm} color="secondary">Deactivate</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default BulkDeactivateButton;

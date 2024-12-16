import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function CreateButton() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-slate-500 hover:bg-white hover:text-black">
            + Create New Video
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Lets Create a new video</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateButton;

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
import Image from "next/image";
import Link from "next/link";

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
            <DialogTitle className="text-center text-2xl">
              Lets Create a new video
            </DialogTitle>
            <DialogDescription>
              <div className="flex gap-5 items-center justify-center mt-5">
                <Link href={"/create-ai-video"}>
                  <div className="border rounded-lg p-4 w-full flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100">
                    <Image
                      src="/magic-wand.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    <h2 className="text-md">Generate with AI</h2>
                  </div>
                </Link>
                <Link href="/editor">
                  <div className="border rounded-lg p-4 w-full flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100">
                    <Image
                      src="/video-editor.png"
                      alt=""
                      width={40}
                      height={40}
                    />
                    <h2 className="text-md">Create from scratch</h2>
                  </div>
                </Link>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateButton;

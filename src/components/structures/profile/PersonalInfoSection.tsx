import { Loader2 } from "lucide-react";

import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@shadcn/button";
import { Input } from "@shadcn/input";
import { Label } from "@shadcn/label";

import { usePersonalInfoUpdate } from "./usePersonalInfoUpdate";

const PersonalInfoSection = () => {
  const { user } = useAuth();
  const { hasUnsaved, isSaving, onFieldChange, update, errorMap } =
    usePersonalInfoUpdate();
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Personal Information</h2>
      <div className="w-full flex flex-col justify-between items-center gap-6">
        <div className="w-[48%] flex flex-col items-start gap-2 p-2">
          <Label
            htmlFor="name"
            className="p-2"
          >
            Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            defaultValue={user?.name}
            onChange={e => onFieldChange("name")(e)}
          />
          {errorMap.name && (
            <div className="text-sm text-destructive">{errorMap.name}</div>
          )}
        </div>
        <div className="w-[48%] flex flex-col items-start gap-2 p-2">
          <Label
            htmlFor="email"
            className="p-2"
          >
            Email
          </Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            defaultValue={user?.email}
            onChange={e => onFieldChange("email")(e)}
          />
          {errorMap.email && (
            <div className="text-sm text-destructive">{errorMap.email}</div>
          )}
        </div>
        <div className="w-[48%] flex flex-col items-start gap-2 p-2">
          <Label
            htmlFor="country"
            className="p-2"
          >
            Country
          </Label>
          <Input
            id="country"
            placeholder="Country"
            defaultValue={user?.country}
            onChange={e => onFieldChange("country")(e)}
          />
          {errorMap.country && (
            <div className="text-sm text-destructive">{errorMap.country}</div>
          )}
        </div>
        <div className="w-[48%] flex flex-col items-start gap-2 p-2">
          <Label
            htmlFor="phone"
            className="p-2"
          >
            Phone
          </Label>
          <Input
            id="phone"
            placeholder="Phone"
            defaultValue={user?.phone}
            onChange={e => onFieldChange("phone")(e)}
          />
          {errorMap.phone && (
            <div className="text-sm text-destructive">{errorMap.phone}</div>
          )}
        </div>
      </div>

      <div className="pt-8 flex justify-center">
        <Button
          onClick={async () => {
            try {
              await update();
            } catch (error) {
              console.error("Error updating personal info", error);
            }
          }}
          disabled={!hasUnsaved}
        >
          {isSaving ? <Loader2 className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfoSection;

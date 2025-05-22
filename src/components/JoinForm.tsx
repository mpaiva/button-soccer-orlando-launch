
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { JoinFormData } from "@/types/form";

interface JoinFormProps {
  formData: JoinFormData;
  isSubmitting: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (value: string) => void;
  handleCheckboxChange: (checked: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const JoinForm: React.FC<JoinFormProps> = ({
  formData,
  isSubmitting,
  handleInputChange,
  handleSelectChange,
  handleCheckboxChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white text-gray-800 rounded-lg p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            name="name"
            placeholder="John Doe" 
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email"
            type="email" 
            placeholder="john@example.com" 
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (Optional)</Label>
          <Input 
            id="phone" 
            name="phone"
            placeholder="(123) 456-7890" 
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="referral">How did you hear about us?</Label>
          <Select 
            value={formData.referral} 
            onValueChange={handleSelectChange}
          >
            <SelectTrigger id="referral">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="friend">Friend or Family</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="event">Community Event</SelectItem>
              <SelectItem value="search">Web Search</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message (Optional)</Label>
        <Textarea 
          id="message" 
          name="message"
          placeholder="Share any questions or comments..." 
          value={formData.message}
          onChange={handleInputChange}
          rows={3}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="whatsapp" 
          checked={formData.joinWhatsapp}
          onCheckedChange={handleCheckboxChange}
        />
        <Label htmlFor="whatsapp" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Add me to the WhatsApp group for updates
        </Label>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-bso-red hover:bg-red-700 text-white" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Join Button Soccer Orlando"}
      </Button>
    </form>
  );
};

export default JoinForm;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const JoinSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referral: '',
    message: '',
    joinWhatsapp: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      referral: value
    });
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      joinWhatsapp: checked
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // First attempt to create a user account with email
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: generateRandomPassword(), // Generate a secure random password
      });
      
      if (authError) {
        throw new Error(authError.message);
      }
      
      // If user creation is successful, store the additional data in a members table
      if (authData.user) {
        const { error: profileError } = await supabase
          .from('members')
          .insert({
            user_id: authData.user.id,
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            referral_source: formData.referral || null,
            message: formData.message || null,
            join_whatsapp: formData.joinWhatsapp
          });
          
        if (profileError) {
          throw new Error(profileError.message);
        }
      }
      
      toast({
        title: "Sign up successful!",
        description: "We've received your information. Welcome to Button Soccer Orlando!",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        referral: '',
        message: '',
        joinWhatsapp: false
      });
    } catch (error: any) {
      console.error("Error during signup:", error);
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Generate a secure random password for the user
  const generateRandomPassword = () => {
    const length = 16;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };

  return (
    <section id="join" className="py-20 bg-bso-blue text-white clip-slant">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading mb-6"
          >
            Join Our Club
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-200"
          >
            Sign up to receive updates about upcoming meetups, tournaments, and Button Soccer news in Orlando.
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;


import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { JoinFormData } from '@/types/form';
import { generateRandomPassword } from '@/utils/passwordUtils';

export const useJoinForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<JoinFormData>({
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
  
  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSelectChange,
    handleCheckboxChange,
    handleSubmit
  };
};

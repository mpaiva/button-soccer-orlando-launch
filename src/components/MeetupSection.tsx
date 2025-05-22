
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from 'lucide-react';

const MeetupSection = () => {
  // Example next meetup date - in a real app this would be dynamic
  const nextMeetup = {
    date: "June 15, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Community Recreation Center",
    address: "123 Main Street, Orlando, FL 32801"
  };

  return (
    <section id="meetups" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading mb-6 text-bso-blue"
          >
            Upcoming Meetup
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700"
          >
            Join us for our next monthly gathering! All skill levels are welcome - we have extra sets for newcomers to try.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="overflow-hidden border-2 border-bso-blue">
              <CardContent className="p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-3xl font-heading text-bso-red border border-bso-red border-dashed p-2 inline-block">
                        {nextMeetup.date}
                      </h3>
                      <p className="text-xl text-gray-700 mt-2 flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-gray-600" />
                        {nextMeetup.time}
                      </p>
                    </div>
                    <div className="bg-bso-blue text-white p-4 rounded-full">
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-bso-blue">{nextMeetup.location}</h4>
                    <p className="text-gray-700 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-gray-600" />
                      {nextMeetup.address}
                    </p>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">What to Expect:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Button soccer sets available for newcomers</li>
                      <li>Friendly matches for all skill levels</li>
                      <li>Mini-tournament with prizes</li>
                      <li>Brazilian snacks and refreshments</li>
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-bso-red hover:bg-red-700 text-white"
                    onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    RSVP Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="rounded-lg overflow-hidden h-96 shadow-lg">
              <iframe 
                title="Event Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112063.79245581046!2d-81.42956604179685!3d28.53837820000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1653309120796!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetupSection;

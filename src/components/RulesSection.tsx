import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dices, Flag, Play, Square, LayoutGrid } from 'lucide-react';
const RulesSection = () => {
  const rules = [{
    title: "Setup the Field",
    description: "Each player arranges 10 buttons on their half of the field, plus one goalkeeper.",
    icon: LayoutGrid
  }, {
    title: "Flick to Move",
    description: "Players take turns flicking their buttons to move them across the field.",
    icon: Play
  }, {
    title: "Control the Ball",
    description: "When a button touches the ball, the player can flick it to pass or shoot.",
    icon: Square
  }, {
    title: "Score Goals",
    description: "Get the ball past the opponent's goalkeeper to score a point.",
    icon: Flag
  }, {
    title: "Win the Match",
    description: "Games are typically played to 3 goals, with matches being best of 3 games.",
    icon: Dices
  }];
  return <section id="rules" className="py-20 bg-bso-beige">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-4xl md:text-5xl font-heading mb-6 text-bso-blue">
            How to Play (Dadinho Style)
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-lg text-gray-700">
            Button Soccer is easy to learn but offers endless strategy. Here are the basic rules to get you started.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 mb-12">
          {rules.map((rule, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1 * index
        }} className="w-full">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-bso-blue flex items-center justify-center mb-4">
                    <rule.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-bso-blue">{rule.title}</h3>
                  <p className="text-gray-600">{rule.description}</p>
                  <div className="text-3xl font-heading text-bso-red mt-4">{index + 1}</div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-bso-blue text-bso-blue hover:bg-bso-blue hover:text-white" onClick={() => window.open("https://docs.google.com/document/d/1XYZ123/edit", "_blank")}>Read the Rulebook</Button>
        </div>
      </div>
    </section>;
};
export default RulesSection;
"use client";

import { motion } from "framer-motion";
import { BarChart, Code, Globe, Rocket, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    id: "digital-marketing",
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions that drive growth and engagement.",
    features: [
      "Social Media Marketing",
      "Search Engine Optimization (SEO)",
      "Content Marketing Strategy",
      "Email Marketing Campaigns",
      "PPC Advertising Management"
    ]
  },
  {
    id: "lead-generation",
    icon: BarChart,
    title: "Lead Generation",
    description: "Convert your website visitors into qualified leads and customers.",
    features: [
      "Landing Page Optimization",
      "Lead Nurturing Campaigns",
      "Marketing Automation",
      "CRM Integration",
      "Analytics & Reporting"
    ]
  },
  {
    id: "website-development",
    icon: Code,
    title: "Website Development",
    description: "Custom website development that delivers results.",
    features: [
      "Responsive Web Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Website Maintenance",
      "Performance Optimization"
    ]
  },
  {
    id: "software-development",
    icon: Rocket,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    features: [
      "Custom Application Development",
      "Mobile App Development",
      "API Integration",
      "Cloud Solutions",
      "Legacy System Modernization"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>
      </motion.section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              id={service.id}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <service.icon className="h-16 w-16 text-primary mb-6" />
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="aspect-square rounded-2xl bg-muted/50 flex items-center justify-center">
                  <service.icon className="h-32 w-32 text-primary/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
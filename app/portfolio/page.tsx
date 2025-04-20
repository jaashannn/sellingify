"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "E-commerce Platform Redesign",
    category: "Website Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500",
    description: "Complete redesign and development of an e-commerce platform, resulting in a 45% increase in conversions."
  },
  {
    title: "Marketing Analytics Dashboard",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
    description: "Custom analytics dashboard for tracking marketing KPIs and campaign performance in real-time."
  },
  {
    title: "Social Media Growth Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&w=800&h=500",
    description: "Comprehensive social media strategy that increased engagement by 150% across all platforms."
  },
  {
    title: "B2B Lead Generation System",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500",
    description: "Automated lead generation system that doubled qualified leads for a B2B software company."
  },
  {
    title: "Healthcare Provider Platform",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&h=500",
    description: "Custom healthcare management platform streamlining patient care and administrative tasks."
  },
  {
    title: "Retail Brand Digital Presence",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&h=500",
    description: "Complete digital marketing strategy that increased online sales by 80% year-over-year."
  }
];

export default function Portfolio() {
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
          <h1 className="text-4xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            Explore our successful projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <span className="text-sm text-primary font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
                <p className="text-muted-foreground mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
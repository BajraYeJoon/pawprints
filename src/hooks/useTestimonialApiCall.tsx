"use client";
import React, { useEffect, useState } from "react";

interface Testimonial {
  imagePath: string;
  content: string;
  fullName: string;
}

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonials = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json",
        );
        const data = await response.json();
        setTestimonials(data.testimonial);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError("Failed to fetch testimonials");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, isLoading, setIsLoading, error };
};

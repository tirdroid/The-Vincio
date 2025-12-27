-- Create client_ratings table for star ratings
CREATE TABLE public.client_ratings (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    company_name TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.client_ratings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view ratings (public feature)
CREATE POLICY "Anyone can view ratings" 
ON public.client_ratings 
FOR SELECT 
USING (true);

-- Allow anyone to insert ratings (public rating system)
CREATE POLICY "Anyone can submit ratings" 
ON public.client_ratings 
FOR INSERT 
WITH CHECK (true);

-- Create project_inquiries table for form submissions
CREATE TABLE public.project_inquiries (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    company_name TEXT NOT NULL,
    contact_name TEXT NOT NULL,
    position TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    target_market TEXT NOT NULL,
    service TEXT NOT NULL,
    budget_range TEXT NOT NULL,
    custom_budget TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert inquiries (public form)
CREATE POLICY "Anyone can submit inquiries" 
ON public.project_inquiries 
FOR INSERT 
WITH CHECK (true);
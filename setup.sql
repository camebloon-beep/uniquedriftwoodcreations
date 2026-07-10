-- ============================================
-- Unique Driftwood Creations - Database Setup
-- Run this SQL in the Vercel Postgres dashboard
-- ============================================

-- Table: inquiries (stores all contact form submissions)
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table: sculptures (tracks availability status)
CREATE TABLE IF NOT EXISTS sculptures (
  id TEXT PRIMARY KEY,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'sold')),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed all 45 sculptures as available
INSERT INTO sculptures (id, status) VALUES
  -- Mammals (18)
  ('mammal-1', 'available'),
  ('mammal-2', 'available'),
  ('mammal-3', 'available'),
  ('mammal-4', 'available'),
  ('mammal-5', 'available'),
  ('mammal-6', 'available'),
  ('mammal-7', 'available'),
  ('mammal-8', 'available'),
  ('mammal-9', 'available'),
  ('mammal-10', 'available'),
  ('mammal-11', 'available'),
  ('mammal-12', 'available'),
  ('mammal-13', 'available'),
  ('mammal-14', 'available'),
  ('mammal-15', 'available'),
  ('mammal-16', 'available'),
  ('mammal-17', 'available'),
  ('mammal-18', 'available'),
  -- Marine & Aquatic (9)
  ('marine-1', 'available'),
  ('marine-2', 'available'),
  ('marine-3', 'available'),
  ('marine-4', 'available'),
  ('marine-5', 'available'),
  ('marine-6', 'available'),
  ('marine-7', 'available'),
  ('marine-8', 'available'),
  ('marine-9', 'available'),
  -- Birds (10)
  ('bird-1', 'available'),
  ('bird-2', 'available'),
  ('bird-3', 'available'),
  ('bird-4', 'available'),
  ('bird-5', 'available'),
  ('bird-6', 'available'),
  ('bird-7', 'available'),
  ('bird-8', 'available'),
  ('bird-9', 'available'),
  ('bird-10', 'available'),
  -- Human Figure (8)
  ('human-1', 'available'),
  ('human-2', 'available'),
  ('human-3', 'available'),
  ('human-4', 'available'),
  ('human-5', 'available'),
  ('human-6', 'available'),
  ('human-7', 'available'),
  ('human-8', 'available')
ON CONFLICT (id) DO NOTHING;

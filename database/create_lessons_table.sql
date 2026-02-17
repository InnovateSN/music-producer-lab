-- Create lessons table
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  subtitle TEXT,
  category VARCHAR(50) NOT NULL, -- 'drums', 'melody', 'mixing', etc.
  difficulty VARCHAR(20) DEFAULT 'beginner',
  order_index INTEGER DEFAULT 0,
  
  -- The core content
  content JSONB NOT NULL DEFAULT '{}', -- Holds hero text, exercise steps, theory sections
  
  -- The sequencer configuration
  config JSONB NOT NULL DEFAULT '{}', -- Holds BPM, instruments, pattern targets
  
  -- Media assets (for the future)
  media JSONB DEFAULT '{}', -- { "video_url": "...", "audio_url": "..." }
  
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_lessons_slug ON lessons(slug);
CREATE INDEX IF NOT EXISTS idx_lessons_category ON lessons(category);
